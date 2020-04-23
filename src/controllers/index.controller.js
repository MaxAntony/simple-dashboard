const Data = require('../models/data.model');
const indexCtrl = {};

indexCtrl.getIndex = async (req, res) => {
  res.render('chartist');
};

module.exports = indexCtrl;
