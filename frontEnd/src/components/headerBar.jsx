import React,{useState} from 'react';
const Headerbar=(props)=>{
const [target,setTarget]=useState()

    return (
        
            <div>
            <input type="text" placeholder="query" onChange={(e)=>{setTarget(e)}}></input>
            <button onClick={()=>{props.handleSearch(target)}}></button>
            </div>

    )
}
export default Headerbar