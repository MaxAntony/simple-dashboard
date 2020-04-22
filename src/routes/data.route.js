const router = require('express').Router();
const { getData } = require('../controllers/data.controller');

router.get('/data', getData);

module.exports = router;
