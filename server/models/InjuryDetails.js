const mongoose = require('mongoose')

const injurySchema = new mongoose.Schema({
    timeOfAccident: { type: String },
    siteOfInjury: { type: String },
    symptoms: { type: String },
    allergies: { type: String },
    previousMedications: { type: String },
})

module.exports = mongoose.model('InjuryDetails', injurySchema);
