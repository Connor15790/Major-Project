const router = require('express').Router();
const casuality = require('../models/Casualities')

router.route('/patientDetails')
    .get(async (req, res) => {

    })
    .post(async (req, res) => {
        console.log(req.body, "hit")
        try {
            const {
                primarySynopsis,
                patientName,
                gender,
                age,
                bloodGroup,
                timeOfAccident,
                siteOfInjury,
                symptoms,
                allergies,
                previousMedications,
            } = req.body;

            const newCasuality = new casuality({
                primarySynopsis,
                patientName,
                gender,
                age,
                bloodGroup,
                injuryDetails: {
                    timeOfAccident,
                    // siteOfInjury,
                    symptoms,
                    allergies,
                    previousMedications,
                },
            });

            // Save the document to the database
            await newCasuality.save();

            res.status(201).json({ message: 'Data inserted successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    })

module.exports = router