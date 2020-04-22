const router = require('express').Router();
const { getIndex } = require('../controllers/index.controller');

router.get('/', getIndex);

module.exports = router;
