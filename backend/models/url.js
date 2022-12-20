const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema(
  {
    full: { type: String, require: true },
    short: { type: String, require: true },
    id: mongoose.Schema.Types.ObjectId,
  },
  {
    timestamps: true,
  },
);

// Create new url document
urlSchema.statics.create = function (payload) {
  const url = new this(payload);
  return url.save();
};

// Find All
urlSchema.statics.findAll = function () {
  return this.find({});
};

// Find One by url id
urlSchema.statics.findOneByUrlId = function (urlId) {
  return this.findOne({ urlId });
};

// Update by url id
urlSchema.statics.updateByUrlId = function (urlId, payload) {
  return this.findOneAndUpdate({ urlId }, payload, { new: true });
};

// Delete by url id
urlSchema.statics.deleteByUrlId = function (urlId) {
  return this.remove({ urlId });
};

module.exports = mongoose.model('Url', urlSchema);
