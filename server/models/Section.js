


const mongoose= require('mongoose')

const section_schema= new mongoose.Schema({
    name: {
        type:String,
    },
    subSection: [
        {
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref: "SubSection",
        }
    ],

    
});

module.exports = mongoose.model('Section',section_schema);