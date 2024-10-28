const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  gameName: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ['Completed', 'Playing', 'Paused']
},
owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
},
  note: {
    type: String,
  },
  likedByUsers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
});

module.exports = mongoose.model('Game', gameSchema);