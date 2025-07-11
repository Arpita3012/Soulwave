import { useContext } from "react";
import songContext from "../../contexts/songContext";


const SingleSongCard=({info,playSound})=>{
    //one line to get the context value
    const {currentSong, setCurrentSong} = useContext(songContext);

    return (
        <div className="flex hover:bg-pink-200 hover:bg-opacity-40 p-2 rounded-md" 
            onClick={()=>
                {
                    setCurrentSong(info);
                }}>
            <div
                className="w-12 h-12 bg-cover bg-center" 
                style={{
                   backgroundImage: `url("${info.thumbnail}")`
                }}></div>

                <div className="flex w-full">
                    <div className="flex justify-center flex-col pl-4 w-5/6">
                        <div className="text-gray-600 cursor-pointer hover:underline">{info.name}</div>
                        <div className="text-xs text-gray-400 cursor-pointer hover:underline">
                            {info.artist.firstName+" "+ info.artist.lastName}
                        </div>
                    </div>
                    <div className="w-1/6 flex items-center justify-center text-gray-400 text-sm">
                        <div>3:44</div>
                        {/* <div className="text-gray-400 text-lg flex items-center justify-center pl-3">...</div> */}
                    </div>
                </div>

            
        </div>
    )

}


export default SingleSongCard;