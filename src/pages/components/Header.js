import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Footer from './Footer'

const Header = () => {
    return (
        <>
            <main>
                <header>
                    <nav>
                        <ul>
                            <li>
                                <NavLink to={'/'}>RULES</NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
            </main>
            <Outlet />
            <Footer />
        </>
    )
}

export default Header