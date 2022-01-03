import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

function GetSpecificInvoice() {

    const { id } = useParams()
    const invoice = useSelector(state => state.invoices.filter(invoice => String(invoice.id) === id)[0])


    try {
        return (
            <div>
                <h3>{invoice.title}</h3>
                <p>{invoice.body}</p>
            </div>)

    } catch {
        return <>Error, no encontrado</>
    }

}

export default GetSpecificInvoice
