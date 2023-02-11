import React, { useContext, useState } from 'react'
import { MoviedataContext } from './Moviecontext'
import CardSlider from './CardSlider'
import '../App.css'

const CardData = ({ srchtext ,sel}) => {
    const [data, setdata] = useContext(MoviedataContext);

    const sorted=[...data].sort((a,b)=>{
        if(sel==="alphabetic"){
            return(a.Title.localeCompare(b.Title))
        }
        else if(sel==="Year"){
            return a.Year-b.Year

        }
    })

    return (
        <>
            <section className='cards'>
                {data && sorted.filter((ele, index) => {
                    return (ele.Title.indexOf(srchtext) >= 0)
                }).map((element, index) => {
                    return (
                        <>
                            <div className='card' key={index}>
                                <CardSlider images={element.Images}></CardSlider>
                                <div>
                                    <h2>
                                        {element.Title}
                                    </h2>
                                    <h5>
                                        {element.Genre}
                                    </h5>
                                    <p>{element.Plot}</p>
                                    <h4>{element.Year}</h4>
                                </div>
                            </div>

                        </>
                    )
                })}
            </section>
        </>
    )
}

export default CardData;