// npm init: package.json-- This is a node project.
// npm i express: expressJs package install hogya.-- Project came to know that we are using express.
//We finally use express

const express= require("express");
const mongoose=require("mongoose");
const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
const passport= require("passport");
const User= require("./models/User");
const authRoutes= require("./routes/auth");
const songRoutes= require("./routes/song");
const playlistRoutes= require("./routes/playlist");
require("dotenv").config();
const cors= require("cors");
const app= express();
const port=8000;


app.use(cors());
app.use(express.json());

console.log(process.env);
//Connect MongoDB to our Node app.
//mongoose.connect()-> takes two arguments: 1.Which db to connect to (db url) 2.Connections options

console.log("MongoDB Password:", process.env.MONGO_PASSWORD);
mongoose.connect("mongodb+srv://arpitaaa0211:"+
        process.env.MONGO_PASSWORD+
        "@cluster0.10we2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
        // {
        //     useNewURLParser: true,
        //     useUnifiedTopology: true,
        // }
    )
    .then((x)=>{
        console.log("Connected to Mongo!");
    })
    .catch((err)=>{
        console.log("Error While Connecting.")
    });

//SETUP passport-jwt
let opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.SECRET_KEY;

passport.use(
    new JwtStrategy(opts, async (jwt_payload, done) => {
        try {
            const user = await User.findOne({ _id: jwt_payload.identifier });

            if (user) {
                return done(null, user); // ✅ User exists
            } else {
                return done(null, false); // ❌ No user found
            }
        } catch (err) {
            return done(err, false); // 🔥 Error during lookup
        }
    })
);



// API: GET type: /: return text "Hello World"
app.get("/",(req,res)=>{
    //req contains all data for request
    //res contains all data for response
    res.send("Hello World");
});

app.use("/auth",authRoutes);
app.use("/song",songRoutes);
app.use("/playlist",playlistRoutes);
//Now we want to tell express that our server will run on localhost:8000
app.listen(port,()=>{
    console.log("App is running on port "+ port);
});