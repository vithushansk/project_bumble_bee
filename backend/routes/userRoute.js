const express = require('express');
const { getUser,addUser } = require('../controllers/userController');
const router = express.Router();

router.route('/user').get(getUser);
router.route('/user/new').post(addUser);

module.exports = router;