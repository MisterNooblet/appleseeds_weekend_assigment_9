import React, { useEffect, useState } from 'react'
import GameTop from './components/GameTop'
import data from '../data/data'

const Game = () => {
    const gameData = data
    const [game] = useState(gameData)
    const [gameOver, setGameOver] = useState(false)
    const [currentGuess, setCurrentGuess] = useState({})
    const [wrongGuesses, setWrongGuesses] = useState(0)
    const [rightGuesses, setRightGuesses] = useState(0)

    const pickRandomImage = () => {
        const image = game.splice(Math.floor(Math.random() * gameData.length), 1)
        setCurrentGuess((prevImage) => prevImage = image[0])
    }

    const handleGuess = (boolean) => {
        if (boolean === false && currentGuess.answer === boolean) {
            setRightGuesses((prevGuess) => prevGuess = prevGuess + 1)
        } else if (boolean === false && currentGuess.answer !== boolean) {
            setWrongGuesses((prevGuess) => prevGuess = prevGuess + 1)
        } else if (boolean === true && currentGuess.answer === boolean) {
            setRightGuesses((prevGuess) => prevGuess = prevGuess + 1)
        } else {
            setWrongGuesses((prevGuess) => prevGuess = prevGuess + 1)
        }
        if (game.length > 0) {
            pickRandomImage()
        }
    }

    useEffect(() => {
        pickRandomImage()
        //eslint-disable-next-line
    }, [])
    return (
        <section>
            {!gameOver ? <GameTop wrongGuesses={wrongGuesses} rightGuesses={rightGuesses} /> : null}
            <div className='game_main'>
                <img src={currentGuess.image} alt={currentGuess.name} />
                <h3>{currentGuess.name}</h3>
            </div>
            <div className='game_bottom'>
                <button onClick={() => { handleGuess(false) }}>X</button>
                <button onClick={() => { handleGuess(true) }}>V</button>
            </div>
        </section>
    )
}

export default Game