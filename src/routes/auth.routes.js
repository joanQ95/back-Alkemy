const { Router } = require('express');
const { signIn, signUp } = require('../controllers');

const router = Router();

router.post('/signin', signIn);
router.post('/signup', signUp);

module.exports = router;