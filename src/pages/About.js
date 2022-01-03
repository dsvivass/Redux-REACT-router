import React, { useRef } from 'react';
import { Link, useNavigate, Outlet } from 'react-router-dom';
import {useSelector, } from 'react-redux';
// import useGetData from '../hooks/useGetData';

function About({isLoggedIn=false}) {

    const refInput = useRef();
    const navigate = useNavigate();
    const lastNameSubmitted = useSelector(state => state.lastNameSubmitted);

    const handleSubmit = () => {
        navigate(`/about/search/${refInput.current.value}`, {replace: true})
    }

    const handleDelete = () => {
        navigate('/');
    }

    return (
        <div>
            <h2>Hola desde about usuario: {lastNameSubmitted.title}</h2>
            <label>
                Inserte el nombre de usuario de contacto:
                <input type="text" ref={refInput} />
            </label>
            <button onClick={() => handleSubmit()}>Enviar</button>
            <button onClick={() => handleDelete()}>Borrar datos del Context</button>
            <nav>
                <Link to="/">Home</Link>
            </nav>
            <Outlet />
        </div>
    )
}

export default About
