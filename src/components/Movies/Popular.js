import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { getMovies } from '../../API/api'
import classes from './Popular.module.scss'


export default function Popular(props) {
    const [popular, setPopular] = useState('')

    useEffect(() => {
        getMovies.getPopularMovies()
            .then(res => {
                setPopular(res.data.results)
            })
    }, [])

    return (
        <div className={classes.cardWrapper}>
            {popular && popular.map(movie => 
                <div key={movie.id} className={classes.card}>
                    <NavLink to={`/about/${movie.id}`} className={classes.card__poster}>
                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt='poster'/>
                    </NavLink>
                    <div className={classes.card_title}>{movie.title}</div>
                    <div>{movie.vote_average}</div>
                </div>
            )} 
        </div> 
    )
}
