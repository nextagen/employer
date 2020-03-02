const express = require('express');
const employeeRoute = express.Router();
const Employee = require('../models/Employee');

const generalCallback = (next, res) => (error, data) => {
  if (error && next) {
    return next(error);
  } else {
    res.json(data);
  }
};

employeeRoute.route('/').post((req, res, next) => {
  Employee.create(req.body, generalCallback(next, res, req.body));
});

employeeRoute.route('/').get((req, res) => {
  Employee.find().populate('tags').exec(generalCallback(() => {}, res));
});

employeeRoute.route('/:id').get((req, res, next) => {
  Employee.findById(req.params.id).populate('tags').exec(generalCallback(next, res));
});

employeeRoute.route('/:id').put((req, res, next) => {
  Employee.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, generalCallback(next, res, req.body));
});

employeeRoute.route('/:id').delete((req, res, next) => {
  Employee.remove({_id: req.params.id}, generalCallback(next, res));
});

module.exports = employeeRoute;
