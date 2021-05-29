import React from 'react'
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HeaderOptions from './HeaderOptions';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinesscenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';

function Header() {
    return (
        <div className='header'>
            <div className="header__Left">
                <img src='https://tse2.mm.bing.net/th?id=OIP.MMRTt_X72wnqDLQqXcem5QHaHa&pid=Api&P=0&w=300&h=300' alt=''></img>

                <div className='header__search'>
                    <SearchIcon></SearchIcon>
                    <input type='text'></input>
                </div>
            </div>

            <div className="header__right">
                <HeaderOptions Icon={HomeIcon} title='Home'></HeaderOptions>
                <HeaderOptions Icon={SupervisorAccountIcon} title='My Network'></HeaderOptions>
                <HeaderOptions Icon={BusinesscenterIcon} title='Jobs'></HeaderOptions>
                <HeaderOptions Icon={ChatIcon} title='Messaging'></HeaderOptions>
                <HeaderOptions Icon={NotificationsIcon} title='Notifications'></HeaderOptions>
                <HeaderOptions avatar='https://media-exp1.licdn.com/dms/image/C4D03AQEPSU1Emp8NsQ/profile-displayphoto-shrink_200_200/0/1619204982693?e=1627516800&v=beta&t=DpqfCpG3yBykX3mjkcSVua18xVq61GVZua0Rm-DHVQ0' title="me"></HeaderOptions>
            </div>
        </div>
    )
}

export default Header
