import mongoose from "mongoose";


const mylistSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "user",
        required: true,
      },
    listarray:{type:Array}
});

  

const MyList = mongoose.models.mylist || mongoose.model("mylist", mylistSchema);

export default MyList;