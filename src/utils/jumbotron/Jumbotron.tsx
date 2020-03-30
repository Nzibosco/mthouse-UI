import React from  'react'

const Jumbotron = (props:any) => {
    return (
        <div
        className = {'jumbotron ' + props.style}
        id = {props.id}
        >
            {props.children}
        </div>
    )
}

export default Jumbotron;