import React from 'react'
import { Typography } from '@material-ui/core';


const Wrapper = (props:any) => {
    
    // this is to render a div with padding necessary to avoid side bar from overshadowing div contents.
        return (
            <div className = 'container'>
                <div id = 'wrapper'>
                {props.children}
                </div>
            </div>

        )
}
export default Wrapper;