const router = require('express').Router();
const casuality = require('../models/Casualities')
const InjuryDetails = require('../models/InjuryDetails')

router.route('/patientDetails')
    .post(async (req, res) => {
        // console.log(req.body, "hit")
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

            const newInjuryDetails = new InjuryDetails({
                timeOfAccident,
                siteOfInjury,
                symptoms,
                allergies,
                previousMedications,
                dateOfCreation: new Date(),
            });

            await newInjuryDetails.save();

            const newCasuality = new casuality({
                primarySynopsis,
                patientName,
                gender,
                age,
                bloodGroup,
                injuryDetails: newInjuryDetails._id,
                // injuryDetails: {
                //     timeOfAccident,
                //     // siteOfInjury,
                //     symptoms,
                //     allergies,
                //     previousMedications,
                // },
            });

            // Save the document to the database
            await newCasuality.save();

            res.status(201).json({ message: 'Data inserted successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    })

router.route('/getPatient')
    .get(async (req, res) => {
        const casualityData = await casuality.find().populate('injuryDetails');

        if (!casualityData) {
            res.json({ status: 404, message: 'No data found' });
        } else {
            res.json({ tatus: 200, message: 'Data fetched successfully', data: casualityData });
        }
    })

router.route('/deletePatient')
    .post((req, res) => {
        
    })

module.exports = router