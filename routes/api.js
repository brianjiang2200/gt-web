const express = require('express');
const router = express.Router();
const Course = require('../models/course');

router.get('/courses', (req, res, next) => {
    //this will return all course data
    Course.find({}, 'title')
        .then(data => res.json(data))
        .catch(next)
});

router.post('/courses', (req, res, next) => {
    if (req.body.title){
        Course.create(req.body)
          .then(data => res.json(data))
          .catch(next)
      } else {
        res.json({
          error: "Some required fields are missing"
        })
    }
});

router.delete('/courses/:id', (req, res, next) => {
    Course.findOneAndDelete({"_id": req.params.id})
        .then(data => res.json(data))
        .catch(next)
});

module.exports = router;