import React from 'react'
import Avatar from 'react-avatar'
const Client = ({username}) => {
    return (
        <div>
            <div className='d-flex align-items-center mb-3'>
                <Avatar 
                name={username.toString()} 
                size={55}
                round="14px"
                className='mr-3'
                />
                <span className='mx-2'>{username.toString()}</span>
            </div>
        </div>
    )
}

export default Client
