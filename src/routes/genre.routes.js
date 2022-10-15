const { Router } = require('express');
const { getGenres, postGenres, updateGenre, deleteGenre, getGenreById } = require('../controllers');
const auth = require('../middlewares/auth');

const router = Router();

router.get('/', auth, async (req, res) => {
	try{
		return res.status(201).json(await getGenres())
		}
	catch (error){
		return res.status(404).json(error.message)
	}
})

router.post('/', auth, async (req, res) => {
	const {name, image} = req.body
	try{
		if(!name && !image){
		return res.status(402).send('Completar los campos obligatorios')
		}
		let movieCreated = await postGenres(req.body)
		
		return res.status(202).json(movieCreated)  
	}catch (err){
		return res.status(404).json(err.message)
	}
})

router.put("/:id", auth, async (req, res) => {
	try {
		const { id } = req.params;
		const { name, image, movies } = req.body;
		return res.status(202).json(await updateGenre(id, name, image, movies))  
		
	  } catch (err) {
		return res.status(404).json(err.message)
	  }
})

router.delete("/:id", auth, async (req, res) => {
	try {
		const { id } = req.params;
		return res.status(202).json(await deleteGenre(id))  
	  
	} catch (err) {
	  res.status(404).json(err.message);
	}
});

router.get('/:id', auth, async (req, res) => {
	let {id} = req.params
	try{
		if(id){
			return res.status(201).json(await getGenreById(id))
		}
	} catch (error){
		return res.status(404).json(error.message)
	}
})


module.exports = router;