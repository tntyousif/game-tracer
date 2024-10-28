const express = require('express');
const router = express.Router();
const Game = require('../models/game.js');
const User = require ('../models/user.js');


router.get('/profile', async (req, res) => {
    try {
      const myGames = await Game.find({
        owner: req.session.user._id,
      }).populate('owner');
  
     console.log('myGames:', myGames);
     res.render('users/show.ejs', {
        myGames,
    });
    } catch (error) {
      console.log(error);
      res.redirect('/');
    }
});

module.exports = router;