const router = require('express').Router();

router.use('/patients', require('./patient.route'));

module.exports = router;