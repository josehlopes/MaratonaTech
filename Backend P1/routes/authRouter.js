const express = require("express");
const UserRepository = require("../access/userRepository");
const router = express.Router();

router.post("/signup", UserRepository.signup);
router.post("/login", UserRepository.login);

module.exports = router;