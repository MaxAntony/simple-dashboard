const data = require('../config/fakeDB.config');
const dataCtrl = {};
dataCtrl.getDefault = (req, res) => {
  res.render('hello', { data });
};

module.exports = dataCtrl;
