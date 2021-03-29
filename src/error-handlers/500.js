'use strict';

module.exports = (error,req,res,next) => {
    res.status(500);
    res.json({
        message: error.message,
        route: req.path
    });
};