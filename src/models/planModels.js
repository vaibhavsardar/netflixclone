import mongoose from "mongoose";
const jwt = require("jsonwebtoken");

const planSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "user",
    required: true,
  },
email: {
    type: String,
    required: [true, "Please provide a email"],
    unique: true,
},
  planName: String,
  startDate: {
    type: Date,
    default: Date.now,
  },
  endDate: {
    type: Date,
    default: Date.now,
  },
  

  planToken: String,
});

planSchema.methods.generatePlanToken = async function () {
  try {
    let planToken = jwt.sign({ _id: this._id }, "ADHFGJLGLFDGJDHFYGDQWR", {
      expiresIn: "1m",
    });

    this.planToken = planToken;

    await this.save();
    return planToken;
  } catch (error) {
    console.log(error);
  }
};

const PlanModel = mongoose.models.plan || mongoose.model("plan", planSchema);

export default PlanModel;
