import React from 'react'

const GameMain = () => {
    return (
        <>
            <div className='game_main'>
                <img src={currentGuess.image} alt={currentGuess.name} />
                <h3>{currentGuess.name}</h3>
            </div>
        </>
    )
}

export default GameMain