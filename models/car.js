const mongoose = require('mongoose');


const carSchema = mongoose.Schema({

    name :{
        type :String,
        required : true
    },
    maxcount : {
        type : Number,
        required : true
    },
    phonenumber : {
        type : Number,
        required : true
    },
    rentperday : {
        type : Number,
        required : true
    },
    imageurls : [],
    currentbookings : [],
    type:{
       type:String,
        required : true
    },
    description:{
        type : String,
        required : true
    }
},{
    timestamps : true,
})

const carModel = mongoose.model('car', carSchema);

module.exports = carModel;