import axios from "axios"

const instanse = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

const apiKey = '1f1938aeaaee824cd6b3b9cd897c12b1'

export const getMovies = {
    getTopMovies() {
        return instanse.get(`movie/top_rated?api_key=${apiKey}&language=ru&page=1`)
    },
    getPopularMovies() {
        return instanse.get(`/movie/popular?api_key=${apiKey}&language=ru&page=1`)
    },
    getSoonMovies() {
        return instanse.get(`/movie/upcoming?api_key=${apiKey}&language=ru&page=1`)
    },
    getInfoAboutMovie(id) {
        return instanse.get(`/movie/${id}?api_key=${apiKey}&language=ru&page=1`)
    },
    getMovieRecomendations(id) {
        return instanse.get(`/movie/${id}/recommendations?api_key=${apiKey}&language=ru&page=1`)
    },
    getMovieByName(movie) {
        return instanse.get(`/search/movie?api_key=${apiKey}&language=ru&query=${movie}&page=1&include_adult=ture`)
    }
}