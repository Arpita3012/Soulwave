
import SingleSongCard from "../components/shared/SingleSongCard";
import { makeAuthenticatedGETRequest } from "../utils/serverHelpers";
import { useState ,useEffect} from "react";
import LoggedInContainer from "../containers/LoggedInContainer";

const MyMusic=()=>{

    const [songData, setSongData]= useState([]);

        useEffect(()=>{
        const getData= async()=>{
            const response= await makeAuthenticatedGETRequest("/song/get/mysongs");
            setSongData(response.data);
            console.log(response);
        };
        getData();
        
    },[]);

    return(
        <LoggedInContainer curActiveScreen="myMusic">
            {/* {Content div} */}
               <div className="content p-8 overflow-auto ">
                    <div className="text-xl font-semibold pb-4 pl-2">My Songs</div>
                    <div className="space-y-2 overflow-auto">
                            {songData.map((item)=>{
                            return <SingleSongCard info={item} playSound={()=>{}}/>;
                    })}
                            
                    </div>
                 </div>
                   
        </LoggedInContainer>
    )
}

export default  MyMusic;
