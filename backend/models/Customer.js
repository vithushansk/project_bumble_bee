const {DataTypes} = require('sequelize');
const sequelize = require('../configuration/db');
const user = require('../models/User');

const Customer = sequelize.define('Customer',{
    id:{
        type:DataTypes.BIGINT,
        autoIncrement:true,
        primaryKey:true
    },

    loanBalance:{
        type:DataTypes.DOUBLE,
        allowNull:false,
    },

    usedAmount:{
        type:DataTypes.DOUBLE,
        allowNull:false,
    },

    installmentPlan:{
        type:DataTypes.TEXT,
        allowNull:false,
        unique:true
    },
   
},{});


user.hasOne(Customer);
sequelize.sync({alter:true});
module.exports = Customer;