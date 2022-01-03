import React from 'react'
import {useNavigate, Outlet} from 'react-router-dom'


function Invoices() {

    const navigate = useNavigate()

    const handleGetAllInvoices = () => {
        navigate('/invoices/all')
    }

    return (
        <div>
            <button onClick={() => handleGetAllInvoices()}>Update inbox</button>
            <Outlet />
        </div>
    )
}

export default Invoices
