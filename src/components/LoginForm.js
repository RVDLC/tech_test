import { useState,useEffect } from 'react';
import { getData } from "./commonFunctions";

const LoginForm = (props) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [usersData, setUsersData] = useState();

    const doLogin = e => {
        usersData && usersData.users && usersData.users.map(
            (user) => (user.email == email && user.password == password) && props.setLoginToken(true)
        )
    }

    useEffect(()=>{
        !usersData && getData('https://dummyjson.com/users', setUsersData)
    },[])


    return (
        <div className='loginForm'>
            <div className='emailContainer'>
                Email:
                <input type='text' className='email' onChange={e => setEmail(e.target.value)}/>
            </div>
            <div className='passwordContainer'>
                Password:
                <input type="password" className='password' onChange={e => setPassword(e.target.value)}/>
            </div>
            <div className='submitContainer'>
                <button type="submit" className='loginButton' onClick={doLogin}>Log in</button>
            </div>
        </div>
      );
    
}

export default LoginForm