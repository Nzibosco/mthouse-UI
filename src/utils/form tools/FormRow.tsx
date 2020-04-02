import React from 'react'

const FormRow = (props:any) => {
    return (
        <div className = "form-row">
            {props.children}
        </div>
    )
}

export default FormRow;