const Data = require('../models/data.model');
const { processDataForBarGraph } = require('../helpers/data.helper');
const dataCtrl = {};

dataCtrl.getData = async (req, res) => {
  const count200 = await Data.countDocuments({ responseCode: 200 });
  const count201 = await Data.countDocuments({ responseCode: 201 });
  const count500 = await Data.countDocuments({ responseCode: 500 });
  const countAll = await Data.countDocuments();
  const others = countAll - (count200 + count201 + count500);
  // IMPORTANT: el campo responsecode tiene algunos valores que son arrays,  y al traerlos
  // seran removidos del documento al no ser numeros
  const responseCodes = await Data.distinct('responseCode');
  // TODO: hacer que sea dinamico el recojo de datos, por que pueden aumentar mas codigos de respuesta
  const response = {
    data: [count200, count201, count500, others],
    labels: [...responseCodes],
  };
  res.json(response);
};

module.exports = dataCtrl;
