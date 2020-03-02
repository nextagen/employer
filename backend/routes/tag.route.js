const express = require('express');
const tagRoute = express.Router();
const Tag = require('../models/Tag');

const generalCallback = (next, res) => (error, data) => {
  if (error && next) {
    return next(error);
  } else {
    res.json(data);
  }
};

tagRoute.route('/').post((req, res, next) => {
  Tag.find({name: req.body["name"]}).then(result => {
    if(result.length > 0) {
      res.json(null);
    } else {
      Tag.create(req.body, generalCallback(next, res));
    }
  });

});

tagRoute.route('/').get((req, res) => {
  Tag.find(generalCallback(() => {}, res));
});

tagRoute.route('/:id').get((req, res, next) => {
  Tag.findById(req.params.id, generalCallback(next, res));
});

tagRoute.route('/:id').put((req, res, next) => {
  Tag.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, generalCallback(next, res));
});

tagRoute.route('/:id').delete((req, res, next) => {
  Tag.remove({_id: req.params.id}, generalCallback(next, res));
});

module.exports = tagRoute;
