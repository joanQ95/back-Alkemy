const { characterData, genres, movies } = require('./data')
const { Character, Genre, Movieserie } = require('../db');

function postJsonMovieSeries(movies){
    if(!movies.length>0) throw new Error('No movies')
    movies.map(async movie=>{
        let movieDbName = await Movieserie.findAll({ 
            where: { title: movie.title } 
        })
        if(movieDbName.length) throw new Error('El titutlo ya existe, ingresar otro')
        const newMovie = await Movieserie.create({
            title: movie.title,
            image: movie.image,
            creationAge: movie.creationAge,
            rated: movie.rated 
        })
        let nameCharacter = movie.characters.map(e=> e.name)
        await Character.bulkCreate(movie.characters, {ignoreDuplicates: true})
        let characterDb = await Character.findAll({
            where: { name: nameCharacter }
        })
        newMovie.addCharacter(characterDb)
        let nameGenre = movie.genre.map(e=> e.name)
        await Genre.bulkCreate(movie.genre, {ignoreDuplicates: true})
        let genreDb = await Genre.findAll({
            where: { name: nameGenre }
        })
        newMovie.addGenre(genreDb)
        return 'Movie/Serie created succesfully'

    })
}

async function loadDB(){
	await Character.bulkCreate(characterData.characters, {ignoreDuplicates: true})
	await Genre.bulkCreate(genres, {ignoreDuplicates: true})
    postJsonMovieSeries(movies)
}
module.exports = {
  loadDB
}