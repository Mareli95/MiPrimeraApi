const express = require('express');
const router = express.Router();
const genresControllerApi = require('../../controllers/api/genresControllersApi');

router.get('/genres', genresControllerApi.list);
router.get('/genres/:id', genresControllerApi.show);

module.exports = router;
