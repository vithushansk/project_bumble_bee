const {Sequelize} = require('sequelize');
const Path = require('path');
const Dotenv = require('dotenv');
Dotenv.config({path:Path.join(__dirname,'config.env')});

const db = new Sequelize(process.env.DB_DATABASE,process.env.DB_USERNAME,process.env.DB_PASSWORD,{
    host:process.env.DB_HOST,
    dialect:"mysql"
});

db.authenticate().then(()=>{
    console.log("Database Connected :)");
}).catch(error =>{
    console.log(error);
})

module.exports = db;
