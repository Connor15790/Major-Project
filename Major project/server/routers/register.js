const router = require('express').Router();
const user = require('../models/User')
require('cookie-parser');



router.route('/')
    .post(async (req, res) => {
        const userExist = await user.findOne({ email: req.body.email })
        if (userExist) {
            return res.json({ status: "error", "message": "Sorry user already exists" })
        }
        const newUser = new user(req.body)
        //generating token
        const token = await newUser.generateAuthToken();

        const result = await newUser.save()
        console.log(result, "result")
        if (result) {

            // req.session.message = {
            //     message: 'user inserted succesfully',
            //     type: 'success'
            // }
            res.status(200).json({
                message: 'User created succesfully'
            })
        }
        else {
            res.json({ message: err.message, type: 'danger' })
        }
    })

module.exports = router