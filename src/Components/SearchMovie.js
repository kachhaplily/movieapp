import React, { useState, useContext } from 'react'
import CardData from './CardData';
import { MoviedataContext } from './Moviecontext';

const SearchMovie = () => {
    const [srch, setsrc] = useState('')
    const [sel, setsel] = useState('')
    const [data, setdata] = useContext(MoviedataContext);

    const handler = (e) => {
        setsrc(e.target.value)
    }
    const selecthandler = (e) => {
        setsel(e.target.value)
    }
    return (
        <>
            <div className='srchinput'>
                <input onChange={handler} placeholder="Movie Name"/>

                <select onChange={selecthandler}>
                    <option value="" selected="selected" disabled="disabled">Sorting</option>
                    <option value="Year">Year</option>
                    <option value="alphabetic">Alphabetic Order</option>
                </select>

            </div>

            <CardData srchtext={srch.toLowerCase()} sel={sel}></CardData>


        </>
    )
}

export default SearchMovie