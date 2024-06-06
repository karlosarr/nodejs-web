const express = require('express');
const router = express.Router();

const { config } = require('dotenv');
config();

/* GET home page. */
router.get('/', (req, res, next) => {
  const data = {
    title: 'Express',
    variable: process.env.VARIABLE,
    secreto: process.env.SECRETO
  }
  res.render('index', data);
});

module.exports = router;
