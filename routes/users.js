const express = require('express');
const User = require('..//models/User');
const router = express.Router();
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');

// @route   POST    api/users
//@desc     register a new user
//@access   Public
router.post(
  '/',
  [
    check('name', 'please a name is required').not().isEmpty(),
    check('email', 'please include valid email').isEmail(),
    check(
      'password',
      'please enter  password with 6 or more characters',
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (user) {
        return res.status(400).json({ msg: 'User already exist' });
      }

      user = new User({
        name,
        email,
        password,
      });

      //salt to encrpyt password using method from bcrypty
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      await user.save();

      res.send('User saved');
    } catch (err) {
      console.error(error.message);
      res.status(500).send('server error');
    }
  },
);

module.exports = router;
