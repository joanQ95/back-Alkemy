'use strict'
require('dotenv').config();
const { Character, Genre, Movieserie } = require('../db');

async function getGenres(){
    let genresDB = await Genre.findAll({
        include:{
            model: Movieserie,
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            },
            through:{ 
                attributes: [], 
            },
						include:{
							model: Character,
						}
        }
    })
    return genresDB;
}

async function postGenres(body){
    const {name, image} = body
    let genreDbName = await Genre.findAll({ 
        where: { name } 
    })
    if(genreDbName.length) 
      'This title already exist, please insert another one.'
    const newGenre = await Genre.create({	name, image })
    console.log(newGenre)

    return 'Genre created succesfully'
}


async function updateGenre(id, name, image, movies){
	let errores = [];
	let searchId = await Genre.findAll({ where: { id } });
	if (!searchId.length) {
		return "Invalid ID"
	}
	if(!name && !image) {
		return "No fields to update";	
	}
	if (name) {
		if (!/^[a-zA-Z0-9\s_\-\.\'\!\&\@\$]+$/.test(name)) {
			errores.push("name");
		} else {
			await Genre.update({ name }, { where: { id } });
		}
	}
	if (image) {
		if (!/^[a-zA-Z0-9\s_\-\.\'\!\&\@\/\:\$]+$/.test(image)) {
			errores.push("image");
		} else {
			await Genre.update( { image }, { where: { id } });
		}
	}
	if (errores.length > 0) {
		const error = errores.join(", ");
		return `The following fields weren't updated: ${error}.`;
	}
	if (movies) {
    if (!movies.length) {
      errores.push("movies");
    } else {
      let movieUpdated = await Genre.findOne( { where: { id }, include:{ model: Movieserie } })
      let nameMovies = movies.map(movie=> movie.title)
			await Movieserie.bulkCreate(movies, {ignoreDuplicates: true})
			let moviesDb = await Movieserie.findAll({
					where: { title: nameMovies }
			})
			movieUpdated.addMovieserie(moviesDb)
    }
  }
	return 'Genre updated successfully.';
}

async function deleteGenre(id) {
	let searchId = await Genre.findAll({ where: { id } });
	if (searchId.length > 0) {
		await Genre.destroy({ where: { id } });
	}else{
		return "Invalid id"
	}
	return "Successfully deleted";
}

async function getGenreById(id) {
	const recipeFinded = await Genre.findByPk(id, {
		include:
			{
					model: Movieserie,
					attributes: {
							exclude: ['createdAt', 'updatedAt']
					},
					through:{ 
							attributes: [], 
					},
					include:{
						model: Character,
					}
			}		
	});
	if (!recipeFinded) {
		throw new Error("Invalid id");
	}
	console.log(recipeFinded);
	return recipeFinded;
}

module.exports = {
	getGenres,
  postGenres,
	updateGenre,
	deleteGenre,
	getGenreById
}