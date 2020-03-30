import React from 'react';

const TextArea = (props:any) => {
    return (
        <textarea
        className= {props.cName? props.cName: "form-control"} 
        id={props.id} 
        rows = {props.rows} 
        
        >
        </textarea>
    )
}

export default TextArea;