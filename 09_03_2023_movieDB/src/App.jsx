import React from 'react'
import MovieCard from './MovieCard'
import JSON from './movieDB.json'
import './global.css'
const App = () => {
  return (
    <>
    <h2 style={{textDecoration:"underline",margin:"30px auto 50px",textAlign:"center",fontSize:"40px"}}>THE MOVIE DATABASE</h2>
    <div className='moviesContainer'>
        <MovieCard payload={JSON} />
    </div>
    </>
  )
}

export default App