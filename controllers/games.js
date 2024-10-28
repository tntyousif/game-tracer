const express = require('express');
const router = express.Router();
const Game = require('../models/game.js');

//index route
router.get('/', async (req, res) => {
    try {
      const currentUser = await User.findById(req.session.user._id);
      res.redirect('/games/index.ejs');
    } catch (error) {
      console.log(error)
      res.redirect('/')
    }
});

//new route
router.get('/new', async (req, res) => {
    res.render('/games/new.ejs');
});

module.exports = router;