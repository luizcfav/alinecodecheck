const path                = require('path');
const express             = require('express');
const favicon             = require('serve-favicon');
const helmet              = require('helmet');
const port                = process.env.PORT || 3000;
const app                   = express();

const publicPath          = path.join(__dirname,'./public');


const middlewares = [
    helmet({noCache:true}),
    express.static(publicPath)
    // favicon('favicon.ico')
];

app.use(middlewares);

app.get('/',(req,res)=>{
    res.sendFile(publicPath + '/index.html');
});


  //------------AppStart
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
});
