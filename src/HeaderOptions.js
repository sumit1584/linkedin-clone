import { Avatar } from '@material-ui/core'
import React from 'react'
import './HeaderOptions.css'
function HeaderOptions({avatar,Icon,title}) {
    return (
        <div className='headerOptions'>
            {Icon && <Icon className="headerOptions___icon"></Icon>}
            {avatar && 
                    <Avatar className="headerOptions___icon" src={avatar}/>
            
            }
            <h3 className="headerOptions__title">{title}</h3>
        </div>
    )
}

export default HeaderOptions 
