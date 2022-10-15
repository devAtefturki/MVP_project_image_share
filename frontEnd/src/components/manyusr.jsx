import React from 'react';
const Users=(props)=>{



   return (
    <div>
    {props.users.map((e,i)=>{
    return (<div>
      <img src={props.users[i]["respectivePosts"][0]}/>
      <h3>{e.username}</h3>
    </div>)
    })}
    </div>
   )

}
export default Users
