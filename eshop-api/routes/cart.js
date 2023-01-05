const router = require('express').Router();
const { verifyToken, checkPermissions, checkIfAdmin } = require("./authMiddleware")
const Cryptojs = require("crypto-js");
const Cart = require('../models/Cart');
const { request } = require('express');



//Create
router.post("/", verifyToken, async (req, res) => {
    const cart = new Cart(req.body)

    try {
        const savedCart = await cart.save()
        res.status(200).json(savedCart)
    }
    catch (err) {
        res.status(500).json(err)
    }
})



//update
router.put("/:id", verifyToken, async (req, res) => {

    try {
        const updatedCart = await Cart.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true })

        res.status(200).json(updatedCart)
    }
    catch (err) {
        res.status(500).json(err)
    }
})


//delete 
router.delete = ('/:id', verifyToken, async (req, res) => {
    try {
        await Cart.findByIdAndDelete(req.params.id)
        res.status(200).json("Product has been deleted")
    }
    catch (err) {
        res.status(500).json(err)
    }
})


//get user's cart
router.get('/find/:id', async (req, res) => {
    try {
        const cart = await Cart.findOne({ userId: request.params.id })
        res.status(200).json(cart)
    }
    catch (err) {
        res.status(500).json(err)
    }
})


//get all carts

router.get("/", verifyToken, checkIfAdmin, async (req, res) => {
    try {
        const carts = await Cart.find();
        res.status(200).json(carts)
    } catch (err) {
        res.status(500).json(err)
    }
})


module.exports = router