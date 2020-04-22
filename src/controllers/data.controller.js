const Data = require('../models/data.model');
const dataCtrl = {};

dataCtrl.getDefault = async (req, res) => {
  const data = await Data.find();
  console.log(data);
  res.render('hello', { data });
};

module.exports = dataCtrl;
