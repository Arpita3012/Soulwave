import { useState, useEffect } from "react";
import { makeAuthenticatedGETRequest } from "../utils/serverHelpers";


const AddToPlaylistModal= ({closeModal, addSongToPlaylist})=>{

     const [myPlalists, setMyPlaylists]= useState([]);
    
        useEffect(()=>{
            const getData= async ()=>{
                const response= await makeAuthenticatedGETRequest("/playlist/get/me");
                setMyPlaylists(response.data);
                console.log(response.data);
            };
            getData();
            
        }, [])

    return (
        <div className="absolute bg-pink-300 bg-opacity-60 w-screen h-screen flex justify-center items-center"
            onClick={closeModal}
        >
            
            <div className="bg-pink-200 w-1/3 rounded-md p-8"
                onClick={(e)=>{e.stopPropagation()}}
            >
                <div className="mb-5 font-semibold text-lg">Select Playlist</div>
                <div className="space-y-4 flex flex-col justify-center items-center">
                    {myPlalists.map(item=>{
                        return <PlaylistListComponent 
                                    info={item}
                                    addSongToPlaylist={addSongToPlaylist}
                        />
                    })}
                </div>
            </div>
        </div>
    );
};

const PlaylistListComponent=({info, addSongToPlaylist})=>{
    return <div className="bg-app-pink-200 flex w-full items-center space-x-4 hover:bg-pink-300 hover:bg-opacity-40 cursor-pointer p-3"
                onClick={()=>{
                    addSongToPlaylist(info._id)
                }}>
                
            <div>
                <img    
                    src={info.thumbnail} 
                    className="w-10 h-10 rounded"
                    alt="thumbnail"
                />
            </div>
            <div className="font-semibold text-sm">
                {info.name}
            </div>

    </div>
}

export default AddToPlaylistModal;