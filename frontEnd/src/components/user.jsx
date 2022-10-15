
import React from 'react';

const User=(props)=>{




    return (

        <div>
            {props.users[props.index].respectivePosts.map((e)=>{return (
            <div>
             <img src={props.handleImage(e)}/> 
            </div>)})}
        </div>
    )
}
export default User