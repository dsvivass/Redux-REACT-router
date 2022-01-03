import React from 'react'
import getData from '../services/getData'
import {
    useDispatch
} from 'react-redux'

async function useGetData(id) {

    const dispatch = useDispatch()

    const data = await getData(id)

    dispatch({
            type: 'ADD_NAME',
            payload: data
        })

}

export default useGetData