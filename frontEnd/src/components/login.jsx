import React,{ useState } from 'react';
const login=(props)=>{

const [user,setUser]= useState
const [pass,setPass]= useState

    return (
        <div>
            <h3>who are you?</h3>
            <input type="text" placeHolder="username" onChange={(e)=>{setUser(e)}}/>
            <input type="password" placeHolder="password" onChange={(e)=>{setPass(e)}}/>
            <button onClick={()=>{props.handleLogin(user,pass)}}>Submit</button>
        </div>
    )
}
export default login;