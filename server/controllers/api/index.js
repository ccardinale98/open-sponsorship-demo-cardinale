const router = require('express').Router();
const athleteRoutes = require('./athleteRoutes');

router.use('/athlete', athleteRoutes)

module.exports = router;