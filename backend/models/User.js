const {DataTypes} = require('sequelize');
const sequelize = require('../configuration/db');

const User = sequelize.define('user',{
    id:{
        type:DataTypes.BIGINT,
        autoIncrement:true,
        primaryKey:true
    },

    firstname:{
        type:DataTypes.TEXT,
        allowNull:false
    },

    lastname:{
        type:DataTypes.TEXT,
        allowNull:false
    },

    username:{
        type:DataTypes.TEXT,
        allowNull:false,
        unique:true
    },

    password:{
        type:DataTypes.TEXT,
        allowNull:false
    },

    dateOfBirth:{
        type:DataTypes.DATEONLY,
        allowNull:false 
    },
},{});

module.exports = User;


sequelize.sync().then(()=>{
    console.log("User table created...!");
}).catch((error)=>{
    console.log(error);
})
