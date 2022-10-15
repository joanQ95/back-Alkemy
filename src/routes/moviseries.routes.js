const { Router } = require('express');
const { getMovieSeries, postMovieSeries, updateMovie, deleteMovie, getMoviesById } = require('../controllers');
const auth = require('../middlewares/auth');

const router = Router();

router.get('/', auth, async (req, res) => {
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

router.post('/', auth, async (req, res) => {
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

router.put("/:id", auth, async (req, res) => {
	try {
		const { id } = req.params;
		const { title, image, creationAge, rated, characters } = req.body;
		return res.status(202).json(await updateMovie(id, title, image, creationAge, rated, characters))  
		
	  } catch (err) {
		return res.status(404).json(err.message)
	  }

})

router.delete("/:id", auth, async (req, res) => {
	try {
		const { id } = req.params;
		return res.status(202).json(await deleteMovie(id))  
	  
	} catch (err) {
	  res.status(404).json(err.message);
	}
  });

router.get('/:id', auth, async (req, res) => {
	let {id} = req.params
	try{
		if(id){
			return res.status(201).json(await getMoviesById(id))
		}
	} catch (error){
		return res.status(404).json(error.message)
	}
})

module.exports = router;