const { postCharacter, getCharacters, getCharactersById, updateCharacter, deleteCharacter } = require('./characterController')
const { getGenres } = require('./genreController')
const { getMovieSeries, postMovieSeries, updateMovie } = require('./moviseriesController')

const { loadDB } = require('./loadDB.js')

module.exports = {
	postCharacter,
    getCharacters,
    getCharactersById,
    updateCharacter,
    deleteCharacter,
    getGenres,
    getMovieSeries,
    postMovieSeries,
    updateMovie,
    loadDB
}