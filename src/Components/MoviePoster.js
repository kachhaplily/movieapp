import React, { useContext, useState } from 'react'
import { MoviedataContext } from './Moviecontext'

const MoviePoster = () => {
  const [data, setdata] = useContext(MoviedataContext);
  const [count, setcount] = useState(0)

  const slider = () => {
    setcount(count + 1)
  }
  if(data.length>=count){
    setInterval(slider,10000)
  }
  else{
    setcount(0)
  }




  return (
    <>
      <section className='poster'>
        <div className='imgcontainer'>
         <a> <img src={data[count].Poster}></img></a>
        </div>
      </section>
    </>
  )
}

export default MoviePoster