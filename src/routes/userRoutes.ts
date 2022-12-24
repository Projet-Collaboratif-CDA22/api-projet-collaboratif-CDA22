const express = require('express');
const { getOneUser, getAllUsers, createUser, updateUser, deleteUser } = require('../controller/userController');
const router = express.Router();
const sUser = require('../models/postModel');


router.get('/', getAllUsers);

router.post('/', createUser);
router.get('/:id', getOneUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;
export {};
