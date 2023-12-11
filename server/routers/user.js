const router = require('express').Router();
const user = require('../models/User')

router.route('/getUser')
    .get(async (req, res) => {
        const result = await user.find()
        if (result) {
            res.json({ status: 200, message: result })
        } else {
            res.json({ status: 401, message: "No users found" })
        }
    })

module.exports = router
