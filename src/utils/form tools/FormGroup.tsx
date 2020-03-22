import React from 'react'

const FormGroup = (props:any) => {
    return (
        <div className = "form-group">
            {props.children}
        </div>
    )
}

export default FormGroup;