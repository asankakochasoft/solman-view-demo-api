// Import packages
const express = require("express");
const home = require("./routes/home");
const { createProxyMiddleware } = require('http-proxy-middleware');

// Middlewares
const app = express();
app.use(express.json());

// Routes
app.use("/home", home);

app.use('/solman-view', createProxyMiddleware({ target: 'https://solman.kochasoft.com/tac_alias_bsp/index.html?configId=1&DF_ALIAS=tac_alias_odata&FI_C_ALIAS=alias_dfl&RefreshTimer=30', changeOrigin: true }));


// connection
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));
