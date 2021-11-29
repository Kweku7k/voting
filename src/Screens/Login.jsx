import axios from 'axios'
import React from 'react'

const Login = () => {


    const appid = '1056912951556417'
    // const redirectUrl = 'https://fir-learning-35a38.web.app'
    const redirectUrl = `https://socialsizzle.herokuapp.com/auth/`
    // https://socialsizzle.herokuapp.com/auth/

    const loginFunction = () => {
        window.location.href = `https://api.instagram.com/oauth/authorize?client_id=${appid}&redirect_uri=https://google.com/&scope=user_profile,user_media&response_type=code`;
        // axios.get(`https://api.instagram.com/oauth/authorize?client_id=${appid}&redirect_uri=${redirectUrl}&scope=user_profile,user_media&response_type=code`)
    }
    return (
        <div>
            <button onClick={() => loginFunction()}>Login</button>
        </div>
    )
}

export default Login
