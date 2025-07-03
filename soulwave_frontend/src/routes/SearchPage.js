import LoggedInContainer from "../containers/LoggedInContainer";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import { makeAuthenticatedGETRequest } from "../utils/serverHelpers";
import SingleSongCard from "../components/shared/SingleSongCard";

const SearchPage = () => {
    const [isInputFocused, setIsInputFocused] = useState(false);
    const [searchText, setSearchText] = useState("");
    const [songData, setSongData] = useState([]);

    const searchSong = async () => {
        // This function will call the search API
        const response = await makeAuthenticatedGETRequest("/song/get/songname/" + searchText);
        setSongData(response.data);
    };

    return (
        <LoggedInContainer curActiveScreen="search">
            <div className="w-full py-6">
                <div
                    className={`w-1/3 p-3 text-sm text-gray-900 rounded-full bg-pink-600 bg-opacity-25 px-5 flex space-x-3 items-center 
                    ${isInputFocused ? "border-2 border-pink-600 shadow-md" : " "}
                    hover:border-pink-600 hover:shadow-md`}
                >
                    <Icon
                        icon="icon-park-twotone:search"
                        width="48"
                        height="48"
                        style={{ color: "rgb(205, 78, 137)" }}
                    />
                    <input
                        type="text"
                        placeholder="What do you want to listen to?"
                        className="w-full bg-transparent focus:outline-none"
                        onFocus={() => {
                            setIsInputFocused(true);
                        }}
                        onBlur={() => {
                            setIsInputFocused(false);
                        }}
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                searchSong();
                            }
                        }}
                    />
                </div>

                {songData.length > 0 ? (
                    <div className="pt-10 space-y-3">
                        <div className="text-gray-400 text-sm">
                            Search results for <span className="font-bold">{searchText}</span> are
                        </div>
                        {songData.map((item) => (
                            <SingleSongCard
                                info={item}
                                key={JSON.stringify(item)}
                                playSound={() => {}}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="pt-10 text-gray-400">Nothing to show here.</div>
                )}
            </div>
        </LoggedInContainer>
    );
};

export default SearchPage;
