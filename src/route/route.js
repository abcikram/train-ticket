const express = require('express');
const userModel = require('../model/userModel');
const router = express.Router();


router.post("/createSeat",async(req,res) =>{
    try {
        data = req.body
        
        if(!data) return res.status(400).send({status: false, message: "Enter data"})
    
        let ticket = await userModel.create(data)
        
        res.status(201).send({ status: true, message: "Success", data: ticket })

    } catch (err) {
        res.status(500).send({ status: false, message: "Server Error", error: err.message })
    }

})


module.exports = router