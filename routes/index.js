const express = require('express');
const router = express.Router();
const mainController = require ('../controllers/indexController')

/* GET home page. */
router.get('/', mainController.index);

module.exports = router;
