import React, { useEffect, useState } from 'react'

const GameOver = ({ wrongGuesses, setGameOver, setWrongGuesses, setRightGuesses }) => {

    const [message, setMessage] = useState('')

    const displayMessage = () => {
        if (wrongGuesses === 10) {
            setMessage((prevMessage) => prevMessage = `You scored a draw... Go read a tool magazine.. Mistakes : ${wrongGuesses}/20`)
        } else if (wrongGuesses > 10) {
            setMessage((prevMessage) => prevMessage = `Go take a guided tour in a hardware store and try again.. Mistakes : ${wrongGuesses}/20`)
        } else if (wrongGuesses < 10 && wrongGuesses > 5) {
            setMessage((prevMessage) => prevMessage = `You did your homework.. Well done.. Mistakes : ${wrongGuesses}/20`)
        } else {
            setMessage((prevMessage) => prevMessage = `You know your tools well , awesome! Mistakes : ${wrongGuesses}/20`)
        }
    }

    useEffect(() => {
        displayMessage()
        //eslint-disable-next-line
    },)

    return (
        <>
            <h1>GameOver friend..</h1>
            <h3>{message}</h3>
            <button onClick={() => {
                setGameOver(false)
                setWrongGuesses(0)
                setRightGuesses(0)
            }}>Replay</button>
        </>
    )
}

export default GameOver