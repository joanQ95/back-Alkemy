'use strict'
require('dotenv').config();
const { Character, Genre, Movieserie } = require('../db');

async function getMovieSeries( queryParameterName, queryParameterGenre, queryParameterOrder, allMovies ){
    let movieSerieDB = await Movieserie.findAll({
        include:[
            {
                model: Character,
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                },
                through:{ 
                    attributes: [], 
                },
            },
            {
                model: Genre,
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                },
                through:{ 
                    attributes: [], 
                },
            }
            
        ]
    })
    if (!allMovies) {
        console.log("AQUI NO DEBERIA ENTRAR")
        console.log(movieSerieDB)
        return movieSerieDB;
    }
    let jsonFiltered = allMovies;
    console.log("HOLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", jsonFiltered);
    if(queryParameterGenre&&queryParameterOrder){
        jsonFiltered = await Movieserie.findAll({
            include:[
                {
                    model: Character,
                    attributes: {
                        exclude: ['createdAt', 'updatedAt']
                    },
                    through:{ 
                        attributes: [], 
                    },
                },
                {
                    model: Genre,
                    attributes: {
                        exclude: ['createdAt', 'updatedAt']
                    },
                    through:{ 
                        attributes: [], 
                    },
                    where: { name: queryParameterGenre }
                }
            ]
            ,order: [['title', queryParameterOrder]]
        });
    }else{
        if (queryParameterGenre) {
            jsonFiltered = await Movieserie.findAll({
                include:[
                    {
                        model: Character,
                        attributes: {
                            exclude: ['createdAt', 'updatedAt']
                        },
                        through:{ 
                            attributes: [], 
                        },
                    },
                    {
                        model: Genre,
                        attributes: {
                            exclude: ['createdAt', 'updatedAt']
                        },
                        through:{ 
                            attributes: [], 
                        },
                        where: { name: queryParameterGenre }
                    }
                ]
            });
        }
        if (queryParameterOrder) {
            jsonFiltered = await Movieserie.findAll({
                include:[
                    {
                        model: Character,
                        attributes: {
                            exclude: ['createdAt', 'updatedAt']
                        },
                        through:{ 
                            attributes: [], 
                        },
                    },
                    {
                        model: Genre,
                        attributes: {
                            exclude: ['createdAt', 'updatedAt']
                        },
                        through:{ 
                            attributes: [], 
                        },
                    }
                    
                ]
                ,order: [['title', queryParameterOrder]]
            });
        }
    }
    
    if (queryParameterName) {
        // jsonFiltered = jsonFiltered.filter(e=>(e.name.toLowerCase().indexOf(queryParameterName.toLowerCase()))!=-1)
        jsonFiltered = jsonFiltered.filter(
          (e) => e.title.toLowerCase() == queryParameterName
        );
    }
    console.log("que paso", jsonFiltered);
    return jsonFiltered
}

async function postMovieSeries(body){
    const {title, image, creationAge, rated, characters, genre} = body
    if(!characters.length>0) throw new Error('Debe ingresar dietas')
    let movieDbName = await Movieserie.findAll({ 
        where: { title } 
    })
    if(movieDbName.length) throw new Error('El titutlo ya existe, ingresar otro')
    const newMovie = await Movieserie.create({
		title,
		image,
		creationAge,
		rated 
	})
    console.log(newMovie)

    let nameCharacter = characters.map(e=> e.name)
    await Character.bulkCreate(characters, {ignoreDuplicates: true})
    let characterDb = await Character.findAll({
        where: { name: nameCharacter }
    })
    newMovie.addCharacter(characterDb)

    let nameGenre = genre.map(e=> e.name)
    await Genre.bulkCreate(genre, {ignoreDuplicates: true})
    let genreDb = await Genre.findAll({
        where: { name: nameGenre }
    })
    newMovie.addGenre(genreDb)

    return 'Movie/Serie created succesfully'
}


async function updateMovie(id, title, image, creationAge, rated, characters){
    console.log(id);
  let errores = [];
	let searchId = await Movieserie.findAll({ where: { id } });
	if (!searchId.length) {
		return "Invalid ID";
	}
	if(!title && !image && !creationAge && !rated && !characters) {
		return "No fields to update";	
	}
  if (title) {
    if (!/^[a-zA-Z0-9\s_\-\.\'\!\&\@\$]+$/.test(title)) {
      errores.push("title");
    } else {
			console.log("no los entiendos")
      await Movieserie.update({ title }, { where: { id } });
    }
  }
  if (creationAge) {
    if (!/^^[a-zA-Z0-9\s_\-\.\'\!\&\@\/\:\$]+$/.test(creationAge)) {
      errores.push("creationAge");
    } else {
      await Movieserie.update({ creationAge }, { where: { id } });
    }
  }
  if (rated) {
    if (!/^[a-zA-Z0-9\s_\-\.\'\!\&\@\$]+$/.test(rated)) {
      errores.push("rated");
    } else {
      await Movieserie.update( { rated }, { where: { id } });
    }
  }
  if (characters) {
    if (!characters.length) {
      errores.push("characters");
    } else {
      await Movieserie.update( { characters }, { where: { id } });
    }
  }
  if (image) {
    if (!/^[a-zA-Z0-9\s_\-\.\'\!\&\@\/\:\$]+$/.test(image)) {
      errores.push("image");
    } else {
      Movieserie.findOne( { where: { id }, include: { model: Character } })
      .then(movieserie=>{
        console.log(movieserie)
        return movieserie.dataValues.Character.update({ image })
        .then(function (result) {
            return result;
        })
      })
    }
  }
  
//   include:[
//     {
//         model: Character,
//         attributes: {
//             exclude: ['createdAt', 'updatedAt']
//         },
//         through:{ 
//             attributes: [], 
//         },
//     },
//     {
//         model: Genre,
//         attributes: {
//             exclude: ['createdAt', 'updatedAt']
//         },
//         through:{ 
//             attributes: [], 
//         },
//         where: { name: queryParameterGenre }
//     }
// ]
// ,order: [['title', queryParameterOrder]]

  if (errores.length > 0) {
    const error = errores.join(", ");
    return `The following fields weren't updated: ${error}.`;
  }
  return 'Movie/serie updated successfully.';
}

module.exports = {
	getMovieSeries,
    postMovieSeries,
    updateMovie
}