import mongoose from "mongoose";
const jwt = require("jsonwebtoken");


const userSchema = new mongoose.Schema({
    // username: {
    //     type: String,
    //     required: [true, "Please provide a username"],
    //     unique: true,
    // },
    email: {
        type: String,
        required: [true, "Please provide a email"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
    },
    isVerfied: {
        type: Boolean,
        default: false,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    token:String,
    
    planToken:String,
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
})

userSchema.methods.generateAuthToken = async function () {
    try {
      let token = jwt.sign({ _id: this._id, },'ADHFGJLGLFDGJDHFYGD',{ expiresIn: '2d'});
      // this.tokens = this.tokens.concat({token:token});
      this.token = token;
      await this.save();
      return token;
    } catch (error) {
      console.log(error);
      
    }
  };
  
  userSchema.methods.generatePlanToken = async function (planName) {
    try {
      let planToken = jwt.sign({ email: this.email,planName: planName},'ADHFGJLGLFDGJDHFYGDQWR',{ expiresIn: '1m'});
      // // this.tokens = this.tokens.concat({token:token});
      this.plan.planName = planName;
      this.planToken = planToken;


      await this.save();
      return planToken;
    } catch (error) {
      console.log(error);
      
    }
  };
  

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;