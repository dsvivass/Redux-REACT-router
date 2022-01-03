import React from 'react'
import {Routes, Route, Link} from 'react-router-dom'

function SubComponents() {
    return (
        <div>
            <h1>This is a subcomponent</h1>

            {/* Writing: http://localhost:3000/subComponents/welcome */}
            <Link to='welcome'>Dar bienvenida</Link>

            {/* But!! it's better specify all routes in the parent component App.js */}
            <Routes>
                <Route path='welcome' element={<h3> Bienvenido a subcomponentes!!! </h3>}/>
            </Routes>
        </div>
    )
}

export default SubComponents
