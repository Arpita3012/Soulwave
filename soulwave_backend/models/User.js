const mongoose= require("mongoose");

//How to create a model
//Step 1: Require mongoose
//Step 2: Create a mongoose schema (structure of a user)
//Step 3: Create a model

const User = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
    },
    password:{
        type: String,
        required: true,
        private: true,
    },
    lastName:{
        type:String,
        required: false,
    },
    email: {
        type: String,
        required: true,
    },
    username:{
        type: String,
        required: true,
    },
    LikedSongs:{
        type: String,
        default: "",
    },
    likedPlayLists:{
        type:String,
        default: "",
    },
    subscribedArtists:{
        type: String,
        default: "",
    },
});

const UserModel= mongoose.model("User", User);

module.exports= UserModel;