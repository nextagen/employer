const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Tag = new Schema({
   name: {
      type: String
   },
}, {
   collection: 'tags'
});

module.exports = mongoose.model('Tag', Tag);
