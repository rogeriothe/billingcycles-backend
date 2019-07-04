module.exports = (req, res, next) => {
    res.header('Access-control-Allow-Origin', '*')
    res.header('Access-control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.header('Access-control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
}