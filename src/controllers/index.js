const { postCharacter, getCharacters, getCharactersById, updateCharacter, deleteCharacter } = require('./characterController')
const { getGenres, postGenres, updateGenre, deleteGenre, getGenreById } = require('./genreController')
const { getMovieSeries, postMovieSeries, updateMovie, deleteMovie, getMoviesById } = require('./moviseriesController')
const { signIn, signUp } = require('./authController')

const { loadDB } = require('./loadDB.js')

module.exports = {
	postCharacter,
    getCharacters,
    getCharactersById,
    updateCharacter,
    deleteCharacter,
    getGenres,
    postGenres,
    updateGenre,
    deleteGenre,
    getGenreById,
    getMovieSeries,
    postMovieSeries,
    updateMovie,
    deleteMovie,
    getMoviesById,
    loadDB,
    signIn,
    signUp
}