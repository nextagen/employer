const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Employee = new Schema({
   name: {
      type: String
   },
   age: {
      type: Number
   },
   office: {
      type: String
   },
   phone: {
      type: Number
   },
   tags: [{ type: Schema.ObjectId, ref: 'Tag' }]
}, {
   collection: 'employees'
});

module.exports = mongoose.model('Employee', Employee);
