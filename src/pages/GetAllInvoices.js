import { useState, useEffect } from 'react'
import { Link, Outlet, useSearchParams } from 'react-router-dom'
import useGetInvoices from '../hooks/useGetInvoices'

function GetAllInvoices() {

    const [invoices, setInvoices] = useState([])

    const [searchParams, setSearchParams] = useSearchParams()

    const res = useGetInvoices({ all: true })

    useEffect(() => {
        Promise.resolve(res).then(data => {
            setInvoices(data)
        })

    }, [])

    return (
        <div>
            <input
                value={searchParams.get("filter") || ""}
                onChange={event => {
                    let filter = event.target.value;
                    if (filter) {
                        setSearchParams({ filter });
                    } else {
                        setSearchParams({});
                    }
                }}
            />
            {invoices.length > 0 ? invoices.filter(invoice => {
                let filter = searchParams.get("filter");
                if (!filter) return true;
                let name = invoice.title.toLowerCase();
                return name.startsWith(filter.toLowerCase());
            }).map(invoice => (
                <Link key={invoice.id} to={`/invoices/all/${invoice.id}`}>
                    <p>{invoice.title}</p>
                </Link>
            )) : <h3>Loading invoices</h3>}
            <Outlet />
        </div>
    )
}

export default GetAllInvoices
