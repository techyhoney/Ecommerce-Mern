var express = require('express');
var router = express.Router();
const { check } = require('express-validator');
const { signout, signup, signin } = require('../controllers/auth');

router.post(
  '/signup',
  [
    check('name', 'name should be of 3 char atleast').isLength({ min: 3 }),
    check('email', 'email is required').isEmail(),
    check('password', 'password should be of 3 char atleast').isLength({
      min: 3,
    }),
  ],
  signup
);

router.post(
  '/signin',
  [
    check('email', 'email is required').isEmail(),
    check('password', 'password is required').isLength({
      min: 1,
    }),
  ],
  signin
);

router.get('/signout', signout);

module.exports = router;
