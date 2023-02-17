const {DataTypes} = require('sequelize');
const sequelize = require('../configuration/db');
const user = require('../models/User');

const Customer = sequelize.define('customer',{
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

module.exports = Customer;
user.hasOne(Customer);

sequelize.sync().then(()=>{
    console.log("Customer table created...!");
}).catch((error)=>{
    console.log(error);
})
