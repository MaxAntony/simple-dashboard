const router = require('express').Router();
const { getDefault } = require('../controllers/data.controller');

router.get('/', getDefault);

module.exports = router;
