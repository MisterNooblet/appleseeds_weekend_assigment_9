import React from 'react'

const GameBottom = () => {
    return (
        <>
            <div className='game_bottom'>
                <button onClick={() => { handleGuess(false) }}>X</button>
                <button onClick={() => { handleGuess(true) }}>V</button>
            </div>
        </>
    )
}

export default GameBottom