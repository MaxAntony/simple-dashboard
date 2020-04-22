const Data = require('../models/data.model');
const indexCtrl = {};

indexCtrl.getIndex = async (req, res) => {
  res.render('dashtest');
};

module.exports = indexCtrl;
