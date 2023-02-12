import React, { useContext, useState } from 'react'
import { MoviedataContext } from './Moviecontext'

const MoviePoster = () => {
  const [data, setdata] = useContext(MoviedataContext);
  const [count, setcount] = useState(0)

  const slider = () => {

    if (count == data.length - 1) {
      setcount(0);
    } else {
      setcount(count + 1)
    }
  }

  setInterval(slider, 5000)




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