const { checkPermissions, verifyToken, checkIfAdmin } = require('./authMiddleware');
const router = require('express').Router();
const Order = require('../models/Order')


//Create
router.post("/", verifyToken, checkPermissions, async (req, res) => {
    const order = new Order(req.body)

    try {
        const savedOrder = await order.save()
        res.status(200).json(savedOrder)
    }
    catch (err) {
        res.status(500).json(err)
    }
})



//update
router.put("/:id", verifyToken, checkIfAdmin, async (req, res) => {

    try {
        const updatedOrder = await Order.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true })

        res.status(200).json(updatedOrder)
    }
    catch (err) {
        res.status(500).json(err)
    }
})


//delete 
router.delete = ('/:id', verifyToken, checkIfAdmin, async (req, res) => {
    try {
        await Order.findByIdAndDelete(req.params.id)
        res.status(200).json("Product has been deleted")
    }
    catch (err) {
        res.status(500).json(err)
    }
})


//get user's orders
router.get('/find/:id', verifyToken, checkPermissions, async (req, res) => {
    try {
        const orders = await Order.find({ userId: request.params.id })
        res.status(200).json(orders)
    }
    catch (err) {
        res.status(500).json(err)
    }
})


//get all carts

router.get("/", verifyToken, checkIfAdmin, async (req, res) => {
    try {
        const orders = await Cart.find();
        res.status(200).json(orders)
    } catch (err) {
        res.status(500).json(err)
    }
})



//get monthly income 
router.get("/income", verifyToken, checkIfAdmin, async (req, res) => {
    const date = new Date()

    const lastMonth = new Date(date.setMonth(date.getMonth - 1))
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth - 1))
    try {
        const income = Order.aggregate([
            { $match: { createdAt: { $gte: previousMonth } } },
            {
                $project:
                {
                    month: { $month: "$createdAt" },
                    sales: '$amount',
                },
            },
            {
                $group: {
                    _id: '$month',
                    total: { $sum: '$sales' }
                }
            }
        ])

        res.status(200).json(income)
    }
    catch (err) {
        res.status(500).json(err)
    }
})
module.exports = router