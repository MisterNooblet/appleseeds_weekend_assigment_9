import React, { useEffect, useState } from 'react'

import GameTop from './components/GameTop'
import data from '../data/data'
import GameBottom from './components/GameBottom'
import GameMain from './components/GameMain'
import GameOver from './components/GameOver'

const Game = () => {
    const gameData = [...data]

    const [game, setGame] = useState(gameData)
    const [gameOver, setGameOver] = useState(false)
    const [currentGuess, setCurrentGuess] = useState({})
    const [wrongGuesses, setWrongGuesses] = useState(0)
    const [rightGuesses, setRightGuesses] = useState(0)

    const pickRandomImage = () => {
        const image = game.splice(Math.floor(Math.random() * game.length), 1)
        setCurrentGuess((prevImage) => prevImage = image[0])
    }

    const resetGame = () => {
        setGame(gameData)
        pickRandomImage()

    }

    useEffect(() => {
        resetGame()
        // eslint-disable-next-line
    }, [])
    useEffect(() => {
        setGame(gameData)
        // eslint-disable-next-line
    }, [gameOver])

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
        } else {
            setGameOver(true)
        }
    }

    return (
        <section>
            <div className='game_top'>
                {!gameOver ? <GameTop wrongGuesses={wrongGuesses} rightGuesses={rightGuesses} /> : null}
            </div>
            <div className='game_main'>
                {!gameOver ? <GameMain image={currentGuess.image} /> : <GameOver wrongGuesses={wrongGuesses} setGameOver={setGameOver} setWrongGuesses={setWrongGuesses} setRightGuesses={setRightGuesses} />}
            </div>
            <div className='game_bottom'>
                {!gameOver ? <GameBottom handleGuess={handleGuess} name={currentGuess.name} /> : null}
            </div>
        </section>
    )
}

export default Game