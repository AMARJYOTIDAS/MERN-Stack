const express = require("express");

const { handelGenerateNewShortURL } = require("../controlers/url");
const router = express.Router();

router.post("/", handelGenerateNewShortURL);

module.exports = router;
