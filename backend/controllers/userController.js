let User = require("../models/userModel.js")
let registerController = async (req, res) => {
    try {
        let newuser = await User({ ...req.body });
        await newuser.save();
        res.status(200).send({ success: true, message: "registraiton succesfully" })
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}

let loginController = async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}
module.exports = { registerController, loginController }