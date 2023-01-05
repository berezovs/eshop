const router = require('express').Router();
const { verifyToken, checkPermissions, checkIfAdmin } = require("./authMiddleware")
const Cryptojs = require("crypto-js");
const User = require('../models/User');



router.put("/:id", verifyToken, checkPermissions, async (req, res) => {
    if (req.body.password) {
        req.body.password = Cryptojs.AES.encrypt(req.body.password, process.env.SECRET).toString()
    }

    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true })

        res.status(200).json(updatedUser)
    }
    catch (err) {
        res.status(500).json(err)
    }
})


//delete user

router.delete = ('/:id', verifyToken, checkPermissions, async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("Account has been deleted")
    }
    catch (err) {
        res.status(500).json(err)
    }
})


//get user
router.get('/find/:id', verifyToken, checkIfAdmin, async (req, res) => {
    try {
        const user = await User.findById(req.params.id)

        const { password, ...other } = user._doc

        res.status(200).json(other)
    }
    catch (err) {
        res.status(500).json(err)
    }
})

//get all users
router.get('/find/', verifyToken, checkIfAdmin, async (req, res) => {
    const query = req.query.new

    try {
        const users = query ? await User.find().sort({ _id: -1 }).limit(5) : await User.find()

        res.status(200).json(users)
    }
    catch (err) {
        res.status(500).json(err)
    }
})

//get user stats

router.get("/stats", verifyToken, checkIfAdmin, async (req, res) => {
    const date = new Date()

    const lastYear = new Date(date.setFullYear(date.getFullYear - 1))

    try {
        const data = await User.aggregate([
            { $match: { createdAt: { $gte: lastYear } } },
            { $project: { $month: "$createdAt" } },
            { $group: { _id: "$month", total: { $sum: 1 } } }
        ])

        res.status(200).json(data)
    }
    catch (err) {
        res.status(500).json(err)
    }
})




module.exports = router