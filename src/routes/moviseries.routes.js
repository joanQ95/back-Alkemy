const { Router } = require('express');
const { getMovieSeries, postMovieSeries, updateMovie } = require('../controllers');

const router = Router();

router.get('/', async (req, res) => {
	const {name, genre, order} = req.query;
	try{
		let allmovies = await getMovieSeries()
		if(name||genre||order) {
			return res.status(201).json(await getMovieSeries(name, genre, order, allmovies))
		}
		return res.status(201).json(allmovies)
		}
	catch (error){
		return res.status(404).json(error.message)
	}
})

router.post('/', async (req, res) => {
	const {title, image, creationAge, rated, characters} = req.body
	try{
		if(!title && !image && !creationAge && !rated && !characters){
		return res.status(402).send('Completar los campos obligatorios')
		}
		let movieCreated = await postMovieSeries(req.body)
		
		return res.status(202).json(movieCreated)  
	}catch (err){
		return res.status(404).json(err.message)
	}
})

router.put("/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const { title, image, creationAge, rated, characters } = req.body;
		return res.status(202).json(await updateMovie(id, title, image, creationAge, rated, characters))  
		
	  } catch (err) {
		console.log(err);
	  }

})

router.delete("/:id", async (req, res) => {
	try {
		const { id } = req.params;
		return res.status(202).json(await deleteCharacter(id))  
	  
	} catch (err) {
	  res.status(404).json(err.message);
	}
  });


module.exports = router;