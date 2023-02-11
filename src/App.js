import React, { useContext } from 'react'
import { MoviedataContext } from './Components/Moviecontext'
import CardData from './Components/CardData'
import SearchMovie from './Components/SearchMovie'
import MoviePoster from './Components/MoviePoster'
import Header from './Components/Header'

const App = () => {
  const [data, setdata] = useContext(MoviedataContext)
  return (
    <MoviedataContext.Provider value={[data, setdata]}>
      <Header />
      <MoviePoster />
      <SearchMovie />
      <CardData />
    </MoviedataContext.Provider>
  )
}

export default App