import React from 'react'

const MovieCard = (props) => {
  return (
    <>
    {
        props.payload.map((x)=>{
            return <div className='movieCard'>
                        <img src={x.moviePoster} alt="movie poster" />
                        <h3>{x.movieName}</h3>
                        <p><i>{x.releaseDate}</i></p>
                        <p>{
                            x.category.map((cat)=>{
                                return <b> {cat} </b>
                            })
                        }</p>
                        <p>{x.duration}</p>
                        <button>
                            <a href={x.trailer}>Watch Trailer</a>
                        </button>
                    </div>
        })
    }
    
    <div className='movieCard'>
        <img src={props.payload[1].moviePoster} alt="movie poster" />
        <h3>{props.payload[1].movieName}</h3>
        <p><i>{props.payload[1].releaseDate}</i></p>
        <p>{props.payload[1].category}</p>
        <p>{props.payload[1].duration}</p>
        <button>
            <a href={props.payload[1].trailer}>Watch Trailer</a>
        </button>
    </div>
    </>
  )
}

export default MovieCard