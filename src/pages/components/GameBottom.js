import React from 'react'

const GameBottom = ({ handleGuess }) => {
    return (
        <>
            <div className='game_bottom'>
                <button onClick={() => { handleGuess(false) }}>❌</button>
                <button onClick={() => { handleGuess(true) }}>✔</button>
            </div>
        </>
    )
}

export default GameBottom