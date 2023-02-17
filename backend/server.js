const app = require('./app');
const dotenv = require('dotenv');
const path = require('path');
const db = require('./configuration/db');
const Customer = require('./models/Customer');

dotenv.config({path:path.join(__dirname,'configuration/config.env')});

app.listen(process.env.PORT,()=>{
    db;
    console.log(`Success ${process.env.PORT}`);
});


