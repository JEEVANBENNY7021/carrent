const mongoose = require ('mongoose');

const bookingSchema = mongoose.Schema ({

    car: {
        type: String,
        required: true
    },
    carid : {
        type: String,
        required: true
    },
    userid : {
        type: String,
        required: true
    },
    startDate :{
        type: String,
        required: true
    },
    endDate :{
        type: String,
        required: true
    },
    totalAmount :{
        type : Number ,
        required: true
    },
    totalDays :{
        type : Number ,
        required: true
    },
    transactionId : {
        type : String ,
        required: true
    
    },
    status:{
        type:String ,
        required:true ,
        default: 'Pending',
        
    }

},{
    timestamps: true,
})


const bookingmodel = mongoose.model('booking', bookingSchema);
module.exports = bookingmodel; 