const router = require('express').Router();
const user = require('../models/User')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
require('dotenv').config()
require('cookie-parser');


router.route('/')
.get((req,res)=>{
    res.send("hello")

})
    .post(async (req, res) => {
        var email = req.body.email;
        var password = req.body.password;
        console.log(req.body, "hit route")

        const userFound = await user.findOne({ email })

        if (userFound == null) {
            return res.json({
                status: "error",
                message: "User does ont exist"
            });
        } else {
            const passMatch = await bcrypt.compare(password, userFound.password)

            if (passMatch) {
                var accessToken = jwt.sign({ email: email }, process.env.ACCESS_TOKEN_SECRET);

                const result = await user.findOneAndUpdate({ email }, {
                    $set: {
                        accessToken
                    }
                })
                console.log(result)
                if (result !== null) {
                    res.status(200).json({
                        message: "User validated"
                    });
                } else {
                    res.status(401).json({
                        status: "error",
                        message: "Invalid credentials"
                    });
                }
            } else {
                res.json({
                    "status": "error",
                    "message": "Invalid credentials"
                })
            }
        }
    })

module.exports = router