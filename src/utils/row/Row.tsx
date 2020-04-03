import React from  'react'

const Row = (props:any) => {
    return (
        <div
        className = {'row ' + props.style}
        id = {props.id}
        >
            {props.children}
        </div>
    )
}

export default Row;