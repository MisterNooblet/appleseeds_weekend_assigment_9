import React from 'react'

const GameTop = ({ rightGuesses, wrongGuesses }) => {
    return (
        <>
            <div className='game_top'>
                <div>Score 1 {wrongGuesses}</div>
                <div>Score 2 {rightGuesses}</div>
            </div>
        </>
    )
}

export default GameTop