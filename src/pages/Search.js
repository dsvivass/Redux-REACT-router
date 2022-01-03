import React, { useEffect, useState } from 'react'
import useGetData from '../hooks/useGetData';
import {useParams } from 'react-router-dom';
import {useSelector} from 'react-redux';

function Search() {

    const params = useParams();
    const {id} = params
    // const [data, setData] = useState({})
    useGetData(id)

    const lastNameSubmitted = useSelector(state => state.lastNameSubmitted);

    return (
        <div>
            <h1>{lastNameSubmitted.title}</h1>
        </div>
    )
}

export default Search
