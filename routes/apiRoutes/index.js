const router = require('express').Router();

const note = require('../apiRoutes/note');
router.use(note);

module.exports = router;