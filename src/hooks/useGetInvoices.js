import getInvoices from '../services/getInvoices'
import {useDispatch} from 'react-redux'

function useGetInvoices({all = false}){

    const dispatch = useDispatch()

    const invoices = getInvoices(all)
    
    Promise.resolve(invoices).then(data => dispatch({type: 'ADD_INVOICES', payload: data}))
    return invoices
    
}
    

export default useGetInvoices
