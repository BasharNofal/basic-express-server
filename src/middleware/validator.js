'use strict';

module.exports = {
    checkName: () => {
        return (req, res, next) => {
            if (req.query.name) {
                next();
            } else {
                next('No Name Was Entered');
            }
        };
    }
}
