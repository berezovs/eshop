const router = require('express').Router();
const Cryptojs = require('crypto-js')
const User = require("../models/User")
const jwt = require("jsonwebtoken")

//Register
router.post("/register", async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: Cryptojs.AES.encrypt(req.body.password, process.env.SECRET).toString(),
    })
    try {
        const savedUser = await newUser.save()
        res.status(201).json(savedUser)
    }
    catch (err) {
        res.status(500).json(err)
    }
})


//Login
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username })
        if (!user) {
            res.status(401).json('Wrong username')
            return;
        }

        const decryptedPassword = Cryptojs.AES.decrypt(user.password, process.env.SECRET).toString(Cryptojs.enc.Utf8)

        if (decryptedPassword !== req.body.password) {
            res.status(401).json('Wrong password')
            return;
        }
        const accessToken = jwt.sign({
            id: user._id,
            isAdmin: user.isAdmin
        },
            process.env.JWT_SECRET,
            { expiresIn: "3d" })

        const { password, ...other } = user._doc
        res.status(200).json({ ...other, accessToken })
    } catch (err) {
        res.status(500).json(err)
    }
})


module.exports = router