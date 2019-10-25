const express = require('express');
const router = express.Router();

// declare axios for making http requests
const axios = require('axios');
//const API = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=42.6905929,-73.8039541&radius=5000&type=restaurant&keyword=restaurant&key=AIzaSyDVQgKy2v09Yce_891pEigZOOpfgC6kra0';

const api='https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants+in+';
const keyString='&key=AIzaSyDVQgKy2v09Yce_891pEigZOOpfgC6kra0'
/* GET api listing. */
// router.get('/', (req, res) => {
//   res.send('api works');
// });

// Get all posts
router.get('/data', (req, res) => {
  let a=api+req.query.+keyString;
  // Get posts from the mock api
  // This should ideally be replaced with a service that connects to MongoDB
  axios.get(a)
    .then(posts => {
      console.log(posts.data);
      res.status(200).json(posts.data);
    })
    .catch(error => {
      res.status(500).send(error)
    });
});

module.exports = router;