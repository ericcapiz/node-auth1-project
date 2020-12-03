module.exports = (req, res, next) => {
    if(req.sessions && req.sessions.user){
        next();
    } else {
        res.status(403).json({message: 'restricted access'})
    }
}