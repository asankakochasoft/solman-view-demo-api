const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = require('express')();

app.get('/', (req, res) => {
    res.send('Hello, World!');
  });

app.use('/solman-view', createProxyMiddleware({ target: 'https://solman.kochasoft.com/tac_alias_bsp/index.html?configId=1&DF_ALIAS=tac_alias_odata&FI_C_ALIAS=alias_dfl&RefreshTimer=30:27:61', changeOrigin: true }));





module.exports = app;
