import React from 'react'

const GameMain = ({ image, name }) => {
    return (
        <>
            <img src={image} alt={name} />
            <h3>{name}</h3>
        </>

    )
}

export default GameMain