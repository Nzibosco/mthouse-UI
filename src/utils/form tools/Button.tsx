import React from 'react';

const Button = (props:any) => {
    return (
    <button 
    type = {props.btnType} 
    id = {props.id} 
    className = {props.cName? props.cName + ' ' + props.size: 'btn btn-primary'}
    onClick = {props.handleClick}
    >
    {props.btnName}
    </button>
    )
}

export default Button;