const router = require('express').Router();
const {
  countResponseCodes,
  success,
} = require('../controllers/data.controller');

router.get('/data/count-response-codes', countResponseCodes);
router.get('/data/avg-elapsed', success);
module.exports = router;
