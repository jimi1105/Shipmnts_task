const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({
    companyName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: false, 
    },
    address: {
        type: String,
        required: false, 
    },
    establishedDate: {
        type: Date,
        required: true,
    },
});

const Company = mongoose.model('Company', CompanySchema);

module.exports = Company;
