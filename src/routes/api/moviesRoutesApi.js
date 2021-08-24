const express = require('express');
const router = express.Router();
const moviesControllerApi = require('../../controllers/api/moviesControllerApi');

router.post('/movies/', moviesControllerApi.guardar);
router.delete('/movies/:id', moviesControllerApi.delete);
module.exports = router;
