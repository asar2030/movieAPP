import React, { useEffect, useState } from 'react'
import { getMovies } from '../../API/api'
import { Swiper, SwiperSlide } from "swiper/react";
import classes from './About.module.scss'
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import './card.css'
import SwiperCore, {
    Pagination,Navigation
  } from 'swiper/core';
import { NavLink } from 'react-router-dom';
import Spinner from '../../assets/loading/Spinner';

SwiperCore.use([Pagination,Navigation]);


export default function About(props) {
    let id = props.match.params.id
    const [movie, setMovie] = useState('')
    const [recommendations, setRecomendations] = useState('')
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        getMovies.getInfoAboutMovie(id)
            .then(res => {
                setLoading(false)
                setMovie(res.data)
            })
    }, [])
    let min = movie.runtime


    useEffect(() => {
        setLoading(true)
        getMovies.getMovieRecomendations(id)
            .then(res => {
                setLoading(false)
                setRecomendations(res.data)
            })
    }, [])
    console.log(recommendations)

    return (
        <>
        {loading && <Spinner/>}
        <div className={classes.about}>
            <div className={classes.about__poster}>
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt='poster'/>
            </div>
            <div className={classes.about__info}>
                <h1 className={classes.about__info__title}>
                    {movie.title} 
                </h1>
                <div className={classes.about__info__additional}>
                    <span className={classes.about__info__additional__rate}>{movie.vote_average} </span>
                    <span>{movie && movie.release_date.slice(0,4)} </span>
                    <span>{movie ? movie.genres.map(genre => <span key={genre.id}>{genre.name} </span>) : ''}</span>
                    <span>{Math.floor(min / 60)} ч {min % 60} мин</span>
                </div>
                <div className={classes.about__info__overview}>
                    {movie.overview}
                </div>
            </div>
        </div>
        <div className={classes.recommendationsWrapper}>
            <div className={classes.recommendations__title}>
                Рекомендуемые фильмы:
            </div>
            <Swiper slidesPerView={5} spaceBetween={150} slidesPerGroup={5} loop={true} loopFillGroupWithBlank={false} 
                    pagination={{"clickable": true}} 
                    className="mySwiper">
                {recommendations && recommendations.results.map(recommendation =>
                <SwiperSlide key={recommendation.id}>
                    <NavLink target="_blank" to={`/about/${recommendation.id}`} className={classes.recommendations}>
                        <img src={`https://image.tmdb.org/t/p/w500/${recommendation.poster_path}`} alt='recomendationIMG'/>
                    </NavLink>
                    <div>{recommendation.title}</div>
                </SwiperSlide>   
                )}
            </Swiper>
        </div>
        </>
    )
}
