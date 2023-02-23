import React from 'react'
import data from '../data/data'

const Game = () => {
    return (
        <section>
            <div className='game_top'>
                <div>Score 1</div>
                <div>Score 2</div>
            </div>
            <div className='game_main'>Image</div>
            <div className='game_bottom'>
                <button>X</button>
                <button>V</button>
            </div>
        </section>
    )
}

export default Game