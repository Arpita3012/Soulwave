import { Icon } from "@iconify/react";
import TextInput from "../components/shared/TextInput";
import PasswordInput from "../components/shared/PasswordInput";
import {useState} from "react";
import { makeUnauthenticatedPOSTRequest } from "../utils/serverHelpers";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";



const SignupComponent= ()=> {
    const [email, setEmail]= useState("");
    const [confirmEmail, SetConfirmEmail]= useState("");
    const [username, setUsername]= useState("");
    const [password, setPassword]= useState("");
    const [firstName, setFirstName]= useState("");
    const [lastName, setLastName]= useState("");
    const [cookie, setCookie]= useCookies(["token"]);
    const navigate= useNavigate();

    const signUp= async ()=>{
        if(email!=confirmEmail){
            alert("Email and Confirm Email must match.Please Check Again!");
            return;
        }
        const data= {email,password,username,firstName,lastName};
        const response= await makeUnauthenticatedPOSTRequest("/auth/register",data);
        if(response && !response.err){
            console.log(response);
            const token= response.token;
            const date= new Date();
            date.setDate(date.getDate()+30);
            setCookie("token",token, {path:"/",expires: date});
            alert("Sucess");
            navigate("/home");
        }
        else{
            alert("fAILURE");
        }
    };


    return <div className="w-full h-full flex flex-col items-center bg-gradient-to-b from-pink-100 to-pink-10">
        <div className="logo p-3 border-b-2 border-solid border-pink-200 w-full flex justify-center  mt-5" >
            <Icon
            icon="game-icons:love-song"
            width="100"
            height="100"
            style={{ color: "rgb(220, 87, 175)" }} 
            />
            <span style={{ display: "inline-block", marginLeft: "10px", verticalAlign: "middle", fontSize: "24px", fontWeight: "bold",marginTop: "40px" }}>
                SoulWave
            </span>
        </div>
      
        <div className="inputRegion w-1/3 py-7 flex items-center justify-center flex-col space-y-6">
                <div className="font-bold mb-8 text-2xl">Sign Up for free to start Listening</div>
                <TextInput 
                    label= "Enter Email address" 
                    placeholder= "Enter Your Email address"
                    value={email}
                    setValue={setEmail}
                    
                />
                <TextInput 
                    label= "Confirm Email Address" 
                    placeholder= "Confirm Email Address "
                    value={confirmEmail}
                    setValue={SetConfirmEmail}
                    
                />
                <TextInput 
                    label= "Username" 
                    placeholder= "Enter your Username "
                    value={username}
                    setValue={setUsername}
                    
                />

                <PasswordInput 
                    label= "Create Password" 
                    placeholder= "Enter a Strong Password"
                    value={password}
                    setValue={setPassword}
                  
                    
                />
                <div className="w-full flex justify-between items-center space-x-8">
                    <TextInput 
                        label= "First Name" 
                        placeholder= "Enter your First Name "
                        value={firstName}
                        setValue={setFirstName}
                    />
                    <TextInput 
                        label= "Last Name" 
                        placeholder= "Enter your Last Name "
                        value={lastName}
                        setValue={setLastName}
                    />
                </div>
                

                
                <div className="w-full flex items-center justify-end my-8">
                    <button className="bg-pink-300 font-semibold p-3 px-10 rounded-full transition-all duration-300 hover:bg-pink-100 active:bg-pink-200" 
                    onClick={(e)=>{
                        e.preventDefault();
                        signUp();
                    }}
                    >
                        SIGN UP
                    </button>
                </div>

                <div className="w-full border border-solid border-pink-200 ">

                </div>

                <div className="my-4 font-semibold text-m">Already have an account?</div>

                <div className="border border-pink-400 text-gray-700 w-full flex items-center justify-center py-4 rounded-full font-bold mt-3 transition-all duration-300 hover:bg-pink-100 active:bg-pink-200">
                    <Link to="/login">LOGIN INSTEAD</Link>
                </div>
                    
            
        </div>
    </div>;

};

export default SignupComponent;