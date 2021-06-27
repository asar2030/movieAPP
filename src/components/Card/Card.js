import React from 'react'
import classes from './Card.module.scss'
import { Swiper, SwiperSlide } from "swiper/react";
import { NavLink } from 'react-router-dom';
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import './card.css'
import SwiperCore, {
    Pagination,Navigation
  } from 'swiper/core';


SwiperCore.use([Pagination,Navigation]);


export default function Card({movies}) {
    return (
        <div className={classes.cardWrapper}>
            <Swiper slidesPerView={4} spaceBetween={30} slidesPerGroup={4} loop={true} loopFillGroupWithBlank={true} 
            pagination={{"clickable": true}} 
            className="mySwiper">
            {movies && movies.map(movie => 
                <SwiperSlide key={movie.id} className={classes.card}>
                    <NavLink to={`/about/${movie.id}`} className={classes.card__poster}>
                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt='poster'/>
                    </NavLink>
                    <div className={classes.card_title}>{movie.title}</div>
                    <div>{movie.vote_average}</div>
                </SwiperSlide>
            )} 
            </Swiper> 
        </div> 
    )
}