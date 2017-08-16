var express = require('express');
var router = express.Router();

/* GET cities page. */
router.get('/', (req, res) => {
    const cities = [
      {name: 'New York City', population: 8175133},
      {name: 'Los Angeles',   population: 3792621},
      {name: 'Chicago',       population: 2695598},
      {name: 'New York City', population: 8175133},
      {name: 'Los Angeles',   population: 3792621},
      {name: 'Chicago',       population: 2695598},
      {name: 'HoChiMinh',       population: 70000},
      {name: 'New York City', population: 8175133},
      {name: 'Los Angeles',   population: 3792621},
      {name: 'Chicago',       population: 2695598},
      {name: 'New York City', population: 8175133},
      {name: 'Los Angeles',   population: 3792621},
      {name: 'Chicago',       population: 2695598},
      {name: 'HoChiMinh',       population: 70000}
    ]
    res.json(cities)
  })
module.exports = router;
