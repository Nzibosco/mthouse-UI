import React from  'react';

const Label = (props:any) => {
    return (
    <label htmlFor={props.inputId}>{props.name + props.children}</label>
    )
}

export default Label;