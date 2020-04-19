import React from  'react'

const Jumbotron = (props:any) => {
    return (
        <div
        className = {'jumbotron ' + props.style + ' ' + props.className}
        id = {props.id}
        >
            {props.children}
        </div>
    )
}

export default Jumbotron;