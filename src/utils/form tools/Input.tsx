import React from  'react';

const Input = (props:any) => {
    return(
        <input 
        required
        type = {props.type}
        id = {props.id}
        placeholder = {props.placeholder}
        name = {props.name}
        value = {props.value}
        onChange = {props.handleChange}
        className = {props.cName? props.cName + ' ' + props.size:'form-control ' + props.size}
        />
    )
}

export default Input;