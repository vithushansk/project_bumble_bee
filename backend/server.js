const app = require('./app');
const dotenv = require('dotenv');
const path = require('path');
const db = require('./configuration/db');
const user = require('./models/User');
const customer  = require('./models/Customer');


dotenv.config({path:path.join(__dirname,'configuration/config.env')});

app.listen(process.env.PORT,()=>{
    db;
    console.log("Success");
});


