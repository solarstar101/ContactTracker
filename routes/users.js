const express = require('express');
const router = express.Router();

// @route   POST    api/users
//@desc     register a new user
//@access   Public
router.post('/users', (req, res) => {
  res.send('register a user');
});

module.exports = router;
