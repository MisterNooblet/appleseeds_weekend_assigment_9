import React from 'react'

const GameTop = ({ rightGuesses, wrongGuesses }) => {
    return (
        <>
            <div>🙁 {wrongGuesses}</div>
            <div>🤗 {rightGuesses}</div>
        </>
    )
}

export default GameTop