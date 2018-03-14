var mongoose = require('mongoose');

var AccountSchema = new mongoose.Schema({
  _id: String,
  name: String,
  email: String,
  avatar: String,
  phone: { type: Number, default: ''},
  nationalID: { type: Number, default: ''},
  role_id: { type: Number, default: '0'},
  create_date: { type: Date, default: Date.now },
  status: { type: Number, default: '0' },
});

module.exports = mongoose.model('account', AccountSchema);
