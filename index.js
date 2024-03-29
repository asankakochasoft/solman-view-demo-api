// Import packages
const express = require("express");
const home = require("./routes/home");
const { createProxyMiddleware } = require('http-proxy-middleware');
var cors = require('cors')

// Middlewares
const app = express();


app.use(cors());



// Routes
app.use("/home", home);

app.use('/solman-view', createProxyMiddleware({ target: 'https://kqdtiwxo.kochasoft.com/tac_alias_bsp/index.html?configId=1&DF_ALIAS=tac_alias_odata&FI_C_ALIAS=alias_dfl&RefreshTimer=30', changeOrigin: true }));

app.use('/test-demo', createProxyMiddleware({ target: 'https://currentmillis.com/', changeOrigin: true }));


// connection
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));
