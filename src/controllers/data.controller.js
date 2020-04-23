const Data = require('../models/data.model');
const { process } = require('../helpers/data.helper');
const dataCtrl = {};

dataCtrl.countResponseCodes = async (req, res) => {
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

dataCtrl.success = async (req, res) => {
  try {
    // const logs = await Data.find().sort({ timeStamp: -1 }).select('timeStamp');
    // const threadNames = await Data.distinct('threadName');
    // const failureMessage = await Data.distinct('failureMessage');
    // const success = await Data.countDocuments({ success: false });

    // const last = await Data.findOne().sort({ timeStamp: 1 });
    // const first = await Data.findOne().sort({ timeStamp: -1 });
    const success = Data.countDocuments({ success: true }).exec();
    const fail = Data.countDocuments({ success: false }).exec();
    const resp = await Promise.all([success, fail]);

    res.json({ success: resp[0], fail: resp[1] });
  } catch (e) {
    console.log(e);
    res.status(500).json(e);
  }
};

module.exports = dataCtrl;
