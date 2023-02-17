const User = require('../models/User');

exports.getUser = (req,res,next) =>{
    res.status(200).json({
        success : true,
        message: "User Controller function workded :)"
    });
}

exports.addUser = async (req,res,next)=>{
    const new_user = await User.create(req.body);
    res.status(201).json({
        success : true,
        new_user
    });
}