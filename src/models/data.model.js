const { Schema, model } = require('mongoose');

const DataSchema = new Schema(
  {
    timeStamp: { type: Number },
    elapsed: { type: Number },
    label: { type: String },
    responseCode: { type: Object },
    responseMessage: { type: String },
    threadName: { type: String },
    dataType: { type: String },
    success: { type: Boolean },
    failureMessage: { type: String },
    bytes: { type: Number },
    sentBytes: { type: Number },
    grpThreads: { type: Number },
    allThreads: { type: Number },
    Latency: { type: Number },
    IdleTime: { type: Number },
    Connect: { type: Number },
  },
  { collection: 'data', timestamps: true },
);

module.exports = model('Data', DataSchema);
