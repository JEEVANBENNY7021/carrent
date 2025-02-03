 const express = require('express');
 const router = express.Router();


 const  Car =require('../models/car')

 router.get("/getallcars",async (req,res)=>{
        try{
            const cars = await Car.find({})
            return res.send({cars});
            }
            catch(error){
            return res.status(400).json({message:error});
        }
 });


 
 router.post("/getcarbyid",async (req,res)=>{
    const {carid} = req.body;

    try{
        const car = await Car.findOne({ _id: carid }); 
        return res.send({car});
        }
        catch(error){
            return res.status(400).json({message:error});
    }
});



router.post("/addcars", async (req, res) => {
    try {
        const newcar = new Car(req.body);
        await newcar.save(); // Add parentheses to properly execute the save method
        return res.send("New car added successfully");
    } catch (error) {
        console.error(error); // Log the error for debugging
        return res.status(400).json({ message: "Car not added", error: error.message });
    }
});


module.exports =router;