import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { getMovies } from '../../API/api'
import classes from './Header.module.scss'

export default function Header() {
    const [movies, setMovies] = useState('')
    const [value, setValue] = useState('')

    const onHandleSubmit = (e) => {
        e.preventDefault()
        getMovies.getMovieByName(value)
        .then(res => {
            setMovies(res)
        })
    }
        console.log(movies)
        console.log(value)
    return (
        <div className={classes.headerWrapper}>
            <div className={classes.header}>
                <a href='/' className={classes.header__logo}>LOGO</a>
                <form onSubmit={onHandleSubmit}>
                    <input value={value} onChange={(e) => setValue(e.target.value)} placeholder='Поиск' className={classes.header__search}/>
                </form>
                <div className={classes.header__links}>
                    <NavLink to='/categories'>Категории</NavLink>
                </div>
            </div>
            
        </div>
    )
}
