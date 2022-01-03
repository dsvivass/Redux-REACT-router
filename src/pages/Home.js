import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Home() {

    const lastNameSubmitted = useSelector(state => state.lastNameSubmitted);

    return (
        <div>
            <h2>Hola desde Home usuario: {lastNameSubmitted.title}</h2>
            <nav style={{display: 'flex', flexDirection: 'column' }}>
                <Link to='/invoices'>Invoices</Link>
                <Link to="/about">About</Link>
                <Link to='/subComponents'>Sub componentes</Link>
            </nav>
        </div>
    )
}

export default Home
