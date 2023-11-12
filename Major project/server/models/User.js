const mongoose = require('mongoose')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    name:{type:String},
    username: { type: String },
    password: { type: String },
    email: { type: String },
    idnumber: { type: String },
    licenceno: { type: String },
    profession: { type: String },
    phoneno: { type: String },
    accessToken: {
        type: String
    }
});

userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
})

userSchema.methods.generateAuthToken = async function () {
    try {
        const token = await jwt.sign({ _id: this._id }, "himanmynameisanabilbaruahandimlearningmernstack")
        this.accessToken = token
        await this.save();
        return token;
    }
    catch (error) {
        console.log(error);
    }
}
module.exports = mongoose.model('User', userSchema);
