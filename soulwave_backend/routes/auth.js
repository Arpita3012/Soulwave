const express= require("express");
const router= express.Router();
const User= require("../models/User");
const bcrypt= require("bcrypt");
const {getToken}= require("../utils/helpers");

//This POST route will help to register a user
router.post("/register",async (req,res)=>{

    //This code is run when the /register api is called as a POST request
    //My req.body will be of the format {email, password, firtstname, lastname, username}
    const {email,password, firstName, lastName, username}= req.body;

    //step 2 : Does a user with this email already exist? If yes, we throw an error
    
    // const user= await User.findOne({email: email});
    // if(user){
    //     //status code by default is 200
    //     return res
    //     .status(403)
    //     .json({error: "A user with this username already exists"});
    // }

    const existingUser = await User.findOne({ 
        $or: [{ email: email }, { username: username }] 
    });
    
    if (existingUser) {
        return res.status(403).json({ 
            error: existingUser.email === email 
                ? "A user with this email already exists" 
                : "A user with this username already exists" 
        });
    }


    //This is a valid request
    //Step 3: create a new user in the DB
    //Step 3.1: We do not store passwords in plain text
    //xyz: we convert the plain text password to a hash.
    const hashedPassword= await bcrypt.hash(password,10);
    const newUserData= {email,
                    password: hashedPassword,
                    firstName,
                    lastName,
                    username,};
    const newUser= await User.create(newUserData);

    //Step 4: We want to create the token to return to the user
    const token = await getToken(newUser);

    //Step 5: return the result to the user
    const userToReturn= {...newUser.toJSON(),token};
    delete userToReturn.password;
    return res.status(200).json(userToReturn);
});

//LOGIN PAGE
router.post("/login", async (req,res)=>{
    //Step 1: Get email and password sent by user from req.body
    const {email,password}= req.body;
    //Step 2: Check if a user with the given email exists. If not, the credentials are invalid.
    const user= await User.findOne({email: email});
    if(!user){
        return res.status(403).json({err: "Invalid Credentials"});
    }
    //Step 3: If the user exists, check if the password is correct. If not, the credentials are invalid.
    //Bcrypt enabled us to compare password in plaintext(password from req.body) to a hashed password( the one in our db security).
    const isPasswordValid= await bcrypt.compare(password, user.password);
    if(!isPasswordValid){
        return res.status(403).json({err:"Invalid Credentials"});
    }
    //Step 4: If the credentials are correct, return a token to the user.
    const token = await getToken(user);
    const userToReturn= {...user.toJSON(),token};
    delete userToReturn.password;
    return res.status(200).json(userToReturn);

})
 module.exports= router;