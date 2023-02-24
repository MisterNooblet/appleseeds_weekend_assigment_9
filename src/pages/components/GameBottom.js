import React from 'react'

const GameBottom = ({ handleGuess, name }) => {
    return (
        <>
            <div className='game_bottom'>
                <button onClick={() => { handleGuess(false) }}>❌</button>
                <h3>{name}</h3>
                <button onClick={() => { handleGuess(true) }}>✔</button>
            </div>
        </>
    )
}

export default GameBottom