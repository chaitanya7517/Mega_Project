

const mongoose= require('mongoose');
const mailSender = require('../utils/mailSender');

const OTPschema= new mongoose.Schema({
    email: {
        type:String,
        required:true,
    },
    otp: {
        type:String,
        required:true,
    },
    createAt: {
        type: Date,
        default:Date.now(),
        expires: 5*60,
    },
   
    
});

//a function -> to send mail
async function sendVerificationEmail(email,otp) {
    try{
        const mailResponse= await mailSender(email,"Verification mail from StudyNotion",otp);
        console.log("Email send Successfully: ",mailResponse)
    }catch(error) {
        console.log("Error occured while sending mail")
        console.log(error);
    }
}

OTPschema.pre('save',async function(next) {
    await sendVerificationEmail(this.email,this.otp);
    next();
})

module.exports = mongoose.model('OTP',OTPschema);