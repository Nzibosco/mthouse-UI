import React from 'react'

const Card = (props: any) => {
    return (

        <div
            className={'card ' + props.cardProperties}
            id = {props.cardId}
        >
            <div className='card-body' id ={props.id}>
                <h5 className='card-title'>{props.cardTitle}</h5>
                {props.children}
            </div>
        </div>
    )
}

export default Card;