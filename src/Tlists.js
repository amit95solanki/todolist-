import React from 'react';
import "./App.css"


const Tlists=(props)=>{
    
    return(
        <>
        <div className='todo_style'>
        
            < i id='abc' className="fa-items"  aria-hidden='true'  onClick={()=>{
            
                props.onSelect(props.id);
                
            }}/>
        <li>{props.text}</li>
        </div>
        </>
    );
}
export default Tlists;