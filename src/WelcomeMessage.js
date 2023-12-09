import React from 'react'

const WelcomeMessage = (props) => {

    return (
        <div className='app-user'>
            <marquee behavior="" direction="">
                <h1>Hello dear ,{props.user.Name + " " + props.user.Surname}</h1>
            </marquee>
        </div>
    )
}

export default WelcomeMessage