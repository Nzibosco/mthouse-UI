import React from  'react'

const Row = (props:any) => {
    return (
        <div
        className = {'row ' + props.style + ' ' + props.className}
        id = {props.id}
        >
            {props.children}
        </div>
    )
}

export default Row;