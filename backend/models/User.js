const {DataTypes} = require('sequelize');
const sequelize = require('../configuration/db');

const User = sequelize.define('User',{
    id:{
        type:DataTypes.BIGINT,
        autoIncrement:true,
        primaryKey:true
    },

    firstname:{
        type:DataTypes.TEXT,
        allowNull:false,
    },

    lastname:{
        type:DataTypes.TEXT,
        allowNull:false,
    },

    username:{
        type:DataTypes.TEXT,
        allowNull:false,
        unique:true
    },

    password:{
        type:DataTypes.TEXT,
        allowNull:false,
    },

    dateOfBirth:{
        type:DataTypes.DATE,
        allowNull:false,
    },
},{});

module.exports = User;