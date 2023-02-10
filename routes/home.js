const express = require("express");
const router = express.Router();
const { createProxyMiddleware } = require('http-proxy-middleware');




router.get("/", async (req, res, next) => {
  return res.status(200).json({
    title: "Express Testing",
    message: "The app is working properly!",
  });
});

router.get("/", async (req, res, next) => {
  return res.status(200).json({
    title: "Express Testing",
    message: "The app is working properly!",
  });
});

router.get("/solman", async (req, res, next) => {
  return createProxyMiddleware({ target: 'https://solman.kochasoft.com/tac_alias_bsp/index.html?configId=1&DF_ALIAS=tac_alias_odata&FI_C_ALIAS=alias_dfl&RefreshTimer=30', changeOrigin: true });
});

module.exports = router;
