const express = require('express');
const router = express.Router();
const Game = require('../models/game.js');
const User =require ('../models/user.js');

//index route
router.get('/', async (req, res) => {
    try {
      const populatedGame = await User.find({});
      console.log('Populated Games:', populatedGame);
      res.render('games/index.ejs', {
        games: populatedGame,
      });
    } catch (error) {
      console.log(error)
      res.redirect('/')
    }
});

//new route
router.get('/new', async (req, res) => {
    res.render('games/new.ejs');
});

router.post('/',async (req, res) => {
  req.body.owner = req.session.user._id;
  await Game.create(req.body);
  res.redirect('/games');
});

module.exports = router;