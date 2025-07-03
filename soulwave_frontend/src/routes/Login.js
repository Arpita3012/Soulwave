import { Icon } from "@iconify/react";
import TextInput from "../components/shared/TextInput";
import PasswordInput from "../components/shared/PasswordInput"; 
import {Link, useNavigate} from 'react-router-dom';
import {useState} from "react";
import {makeUnauthenticatedPOSTRequest} from '../utils/serverHelpers';
import {useCookies} from "react-cookie";



const LoginComponent= ()=> {
    const [email, setEmail]= useState("");
    const [password,setPassword]= useState("");
    const [cookie, setCookie]= useCookies(["token"]);
    const navigate= useNavigate();


    const login= async ()=>{
        const data= {email,password};
        const response= await makeUnauthenticatedPOSTRequest("/auth/login",data);
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
            alert("FAILURE");
        }
    };



    return <div className="w-full h-full flex flex-col items-center bg-gradient-to-b from-pink-100 to-pink-10">
        <div className="logo p-3 border-b-2 border-solid border-pink-200 w-full flex justify-center " >
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
      
        <div className="inputRegion w-1/3 py-7 flex items-center justify-center flex-col">
                <div className="font-bold mb-7">To continue, log in to SoulWave.</div>
                <TextInput 
                    label= "Email address or username" 
                    placeholder= "Email address or username"
                    className="my-8"
                    value={email}
                    setValue={setEmail}
                />

                <PasswordInput
                    label= "Password" 
                    placeholder= "Password"
                    value={password}
                    setValue={setPassword}
                />
                <div className="w-full flex items-center justify-end my-8">
                    <button
                        className="bg-pink-300 font-semibold p-3 px-10 rounded-full transition-all duration-300 hover:bg-pink-100 active:bg-pink-200"
                        onClick={(e) => {
                            e.preventDefault();
                            login();
                        }}
                    >
                        LOGIN
                    </button>
                </div>

                <div className="w-full border border-solid border-pink-200 ">

                </div>

                <div className="my-4 font-semibold text-m">Don't have an account?</div>

                <div className="border border-pink-400 text-gray-700 w-full flex items-center justify-center py-4 rounded-full font-bold mt-3 transition-all duration-300 hover:bg-pink-100 active:bg-pink-200">
                    
                   <Link to="/signup">SIGN UP FOR SoulWave</Link> 
                </div>
                    
            
        </div>
    </div>;

};

export default LoginComponent;