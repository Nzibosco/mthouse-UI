import React from 'react'

// this function exports a form wrapper. 
// it can be repurposed and reused throughout the entire application. 
// the form inherit component-specific styles/ layout and data through props.

const Form = (props:any) => {
    return (
        <form id= {props.id}>          
            {props.children}
        </form>
    )
}

export default Form;