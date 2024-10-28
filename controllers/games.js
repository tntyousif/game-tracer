const express = require('express');
const router = express.Router();
const Game = require('../models/game.js');
const User =require ('../models/user.js');
const game = require('../models/game.js');

//index route
router.get('/', async (req, res) => {
    try {
      const games = await Game.find({}).populate('owner');
      res.render('games/index.ejs', {
        games: games,
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

// show route
router.get('/:gameId', async (req, res) =>{
  try {
    const game = await Game.findById(req.params.gameId).populate('owner');
     res.render('games/show.ejs', {game});
  } catch (error) {
    console.log(error);
    res.redirect('/');
  }
});


//delete router
router.delete('/:gameId', async (req, res) => {
  try {
    const game = await Game.findById(req.params.gameId);
    console.log(game);
    if (game.owner.equals(req.session.user._id)) {
    await game.deleteOne();
    res.redirect('/games');
  } else {
    res.send("You don't have permission to do that.");
  }
  } catch (error) {
  console.log(error);
  res.redirect('/')
  }
});

module.exports = router;