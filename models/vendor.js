const mongoose = require('mongoose');

const vendorSchema = new mongoose.Schema({
  vendorName: {
    type: String,
    required: true
  },
  bankAccountNo: {
    type: String,
    required: true
  },
  bankName: {
    type: String,
    required: true
  },
  addressLine1: {
    type: String,
    required: false
  },
  addressLine2: {
    type: String,
    required: false
  },
  city: {
    type: String,
    required: false
  },
  country: {
    type: String,
    required: false
  },
  zipCode: {
    type: String,
    required: false
  }
});

const Vendor = mongoose.model('Vendor', vendorSchema);
module.exports = Vendor;
