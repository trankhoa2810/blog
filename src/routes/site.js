const express = require('express');
const router = express.Router();

const SiteController = require("../app/controllers/SiteController")

router.get('/infoAuthor', SiteController.infoAuthor);
router.get('/search', SiteController.search);
router.get('/', SiteController.home);

module.exports = router;