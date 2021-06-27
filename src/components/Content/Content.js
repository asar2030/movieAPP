import React, { useEffect, useState } from 'react'
import { getMovies } from '../../API/api'
import classes from './Content.module.scss'
import { NavLink } from 'react-router-dom'
import Card from '../Card/Card'


export default function Content() {
    const [top, setTop] = useState('')
    const [popular, setPopular] = useState('')
    const [soon, setSoon] = useState('')

    useEffect(() => {
        getMovies.getTopMovies()
            .then(res => {
                setTop(res.data.results)
            })
    }, [])
    
    useEffect(() => {
        getMovies.getPopularMovies()
            .then(res => {
                setPopular(res.data.results)
            })
    }, [])

    useEffect(() => {
        getMovies.getSoonMovies()
            .then(res => {
                setSoon(res.data.results)
            })
    }, [])
    console.log(soon)


    return (
        <div className={classes.contentWrapper}>
            <div>
                <NavLink to={`/ratings`} className={classes.content__ratings}>Рейтенговые фильмы</NavLink>
                <div>
                    <Card movies={top}/>
                </div>
            </div>
            <div>
                <NavLink to={'/popular'} className={classes.content__ratings}>Сейчас смотрят</NavLink>
                <div>
                    <Card movies={popular}/>
                </div>
            </div>
            <div>
                <NavLink to={'/soon'} className={classes.content__ratings}>Скоро</NavLink>
                <div>
                    <Card movies={soon}/>
                </div>
            </div>
        </div>
    )
}
