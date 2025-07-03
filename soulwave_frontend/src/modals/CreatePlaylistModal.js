import { useState } from "react";
import TextInput from "../components/shared/TextInput";
import {makeAuthenticatedPOSTRequest} from "../utils/serverHelpers";
import { thumbnail } from "@cloudinary/url-gen/actions/resize";

const CreatePlaylistModal=({closeModal})=>{

    const [playlistName, setplaylistName]= useState("");
    const [playlistThumbnail, setplaylistThumbnail]= useState("");

    const createPlaylist= async()=>{
        const response =await makeAuthenticatedPOSTRequest("/playlist/create", 
            {name:playlistName, thumbnail:playlistThumbnail, songs:[]}
        );
        if(response._id){
            closeModal();
        }
        
    }
    

    return (
        <div className="absolute bg-pink-300 bg-opacity-60 w-screen h-screen flex justify-center items-center"
            onClick={closeModal}
        >
            
            <div className="bg-pink-200 w-1/3 rounded-md p-8"
                onClick={(e)=>{e.stopPropagation()}}
            >
                <div className="mb-5 font-semibold text-lg">Create Playlist</div>
                <div className="space-y-4 flex flex-col justify-center items-center">
                <TextInput 
                     label="Name" 
                     placeholder="Playlist Name"
                     value={playlistName}
                     setValue={setplaylistName}
                />
                <TextInput 
                     label="Thumbnail" 
                     placeholder="Thumbnail"
                     value={playlistThumbnail}
                     setValue={setplaylistThumbnail}
                />
                <div className="bg-white w-1/3 rounded flex justify-center items-center py-3 mt-4 cursor-pointer"
                    onClick={createPlaylist}
                >
                    Create
                </div>
                </div>
            </div>
        </div>
    );
};

export default CreatePlaylistModal;