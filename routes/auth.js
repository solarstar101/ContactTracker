const express = require('express');
const router = express.Router();

// @route   GET    api/auth
//@desc     get loged in user
//@access   Private
router.get('/', (req, res) => res.send('get loged in user'));

// @route   POST    api/users
//@desc     Auth user & get token
//@access   Public
router.post('/', (req, res) => res.send('log user in'));

module.exports = router;
