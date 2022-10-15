
import React from 'react';
import Users from './manyusr.jsx'
import Headerbar from './headerBar.jsx'
const Home=(props)=>{


    return(
        <div>
            <Headerbar profilePic={props.profilePic}/>
            <Users data={props.data}/>

        </div>
    )
}
export default Home