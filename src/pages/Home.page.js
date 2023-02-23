import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <section>
            <h1>Welcome to my guessing game</h1>
            <h3>You will be presented with Images of tools and a corresponding name</h3>
            <h3>You will than have to guess if the name fits the tool on the Image or not</h3>
            <h3>On top of the image you will find two counters the left one for the wrong guesses and the right one for the right ones</h3>
            <Link to={'/game'}><button>Continue to game...</button></Link>
        </section>
    )
}

export default Home