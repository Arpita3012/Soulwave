import LoggedInContainer from "../containers/LoggedInContainer";
import { useState, useEffect } from "react";
import { makeAuthenticatedGETRequest } from "../utils/serverHelpers";
import { useNavigate } from "react-router-dom"; 


const Library= ()=>{

    const [myPlalists, setMyPlaylists]= useState([]);

    useEffect(()=>{
        const getData= async ()=>{
            const response= await makeAuthenticatedGETRequest("/playlist/get/me");
            setMyPlaylists(response.data);
        };
        getData();
    }, [])

    return <LoggedInContainer curActiveScreen={"library"}>

        <div className="text-xl pt-8 font-bold">My Playlists</div>
        <div className="py-5 grid gap-4 grid-cols-5 ">
            {myPlalists.map(item=>{
                return <Card key ={JSON.stringify(item)} title={item.name} description="" imgUrl={item.thumbnail} playlisId={item._id}/>
            })}
        </div>

    </LoggedInContainer>
};

const Card =({title,description, imgUrl, playlisId}) =>{
    const navigate = useNavigate();
    return (
        <div className="bg-pink-400 bg-opacity-30 w-full p-4 rounded-lg cursor-pointer"
            onClick={()=>{navigate("/playlist/"+playlisId)}}
        >
            <div className="pb-4 pt-2">
                <img
                    className="w-full h-40 object-cover rounded-lg"
                    src={imgUrl}
                    alt="label"
                />
            </div>
            <div className="text-md font-semibold py-3">{title}</div>
            <div className="text-gray-500 text-sm">{description}</div>
        </div>
    )
};

export default Library;
