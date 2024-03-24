"use strict";

const express = require("express");
const router = express.Router();

const controller = require("./controller");

router.get('/login', controller.output.login);
router.post('/login', controller.process.login); // Front-end가 전달한 로그인 데이터를 받아서 로그인 기능을 처리

module.exports = router;
