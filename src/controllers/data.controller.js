const Data = require('../models/data.model');
const dataCtrl = {};

dataCtrl.getData = async (req, res) => {
  const data = await Data.find();
  res.status(200).json(data);
};

module.exports = dataCtrl;
