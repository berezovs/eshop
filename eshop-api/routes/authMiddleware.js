const jwt = require("jsonwebtoken")

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.token

    if (authHeader) {
        const authToken = req.headers.token.split(" ")[1]

        jwt.verify(authToken, process.env.JWT_SECRET, (err, user) => {
            if (err) return res.status(401).json("Invalid access token")
            else req.user = user;
            next()
        })
    } else {
        return res.status(401).json("You are not authenticated")
    }
}

const checkIfAdmin = (req, res, next) => {
    if (req.user.isAdmin) {
        next()
    }
    else {
        res.status(403).json("Action forbidden")
    }
}

const checkPermissions = (req, res, next) => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
        next()
    }
    else {
        res.status(403).json("Action forbidden")
    }
}

module.exports = { verifyToken, checkPermissions, checkIfAdmin }