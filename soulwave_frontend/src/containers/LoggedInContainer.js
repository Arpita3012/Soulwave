import { Icon } from "@iconify/react";
import IconText from "../components/IconText";
import { useContext, useEffect, useState, useLayoutEffect, useRef } from "react";
import { Howl, Howler } from "howler";
import TextWithHover from "../components/shared/TextWithHover";
import songContext from "../contexts/songContext";
import CreatePlaylistModal from "../modals/CreatePlaylistModal";
import AddToPlaylistModal from "../modals/AddToPlaylistModal";
import { makeAuthenticatedGETRequest, makeAuthenticatedPOSTRequest } from "../utils/serverHelpers";
import { Link } from "react-router-dom";
import { logout } from "../utils/serverHelpers";
import { useNavigate } from "react-router-dom";

const LoggedInContainer = ({ children, curActiveScreen }) => {
  const [createPlaylistModalOpen, setCreatePlaylistModalOpen] = useState(false);
  const [addToPlaylistModalOpen, setAddToPlaylistModalOpen] = useState(false);
  const navigate = useNavigate();

  const {
    currentSong,
    setCurrentSong,
    soundPlayed,
    setSoundPlayed,
    isPaused,
    setIsPaused,
  } = useContext(songContext);

  const firstUpdate = useRef(true);

  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    if (!currentSong) {
      return;
    }
    changeSound(currentSong.track);
  }, [currentSong?.track]);

  const addSongToPlaylist= async (playlistId)=>{
    const songId= currentSong._id
    const payload= {playlistId, songId}
    const response= await makeAuthenticatedPOSTRequest("/playlist/add/song",payload)
    if(response._id){
      setAddToPlaylistModalOpen(false);
    }
  };

  const playSound = () => {
    if (!soundPlayed) {
      return;
    }
    soundPlayed.play();
  };

  const changeSound = (Songsrc) => {
    if (soundPlayed) {
      soundPlayed.stop();
    }
    let sound = new Howl({
      src: [Songsrc],
      html5: true,
    });
    setSoundPlayed(sound);
    sound.play();
    setIsPaused(false);
  };

  const pauseSound = () => {
    soundPlayed.pause();
  };

  const togglePlayPause = () => {
    if (isPaused) {
      playSound();
      setIsPaused(false);
    } else {
      pauseSound();
      setIsPaused(true);
    }
  };

  return (
    <div className="h-screen w-full">
      {createPlaylistModalOpen && (
        <CreatePlaylistModal closeModal={() => setCreatePlaylistModalOpen(false)} />
      )}
      {addToPlaylistModalOpen && (
                <AddToPlaylistModal
                    closeModal={() => {
                        setAddToPlaylistModalOpen(false);
                    }}
                    addSongToPlaylist={addSongToPlaylist}
                />
        )}
      <div className={`${currentSong ? "h-9/10" : "h-full"} w-full flex`}>
        {/* Left Panel */}
        <div className="w-1/5 h-[90vh] bg-pink-200 flex flex-col justify-between pb-10">
          {/* Logo */}
          <div>
            <div className="logoDiv flex items-center p-5 px-3 logo w-full flex justify-start">
              <Icon
                icon="game-icons:love-song"
                width="100"
                height="100"
                style={{ color: "rgb(238, 60, 155)" }}
              />
              <span
                style={{
                  display: "inline-block",
                  marginLeft: "2px",
                  verticalAlign: "middle",
                  fontSize: "24px",
                  fontWeight: "bold",
                  marginTop: "12px",
                }}
              >
                SoulWave
              </span>
            </div>

            <div className="py-4">
              <IconText
                iconName={"material-symbols:family-home-rounded"}
                displayText={"Home"}
                active={curActiveScreen === "home"}
                targetLink={"/home"}
              />
              <IconText
                iconName={"icon-park-twotone:search"}
                active={curActiveScreen === "search"}
                displayText={"Search"}
                targetLink={"/search"}
              />
              <IconText
                iconName={"proicons:library"}
                active={curActiveScreen === "library"}
                displayText={"Library"}
                targetLink={"/library"}
              />
              <IconText
                iconName={"solar:upload-track-outline"}
                active={curActiveScreen === "myMusic"}
                displayText={"My Music"}
                targetLink={"/myMusic"}
              />
            </div>

            <div className="pt-5">
              <IconText
                iconName={"tabler:text-plus"}
                displayText={"Create Playlist"}
                onClick={() => {
                  setCreatePlaylistModalOpen(true);
                }}
              />
              <IconText iconName={"fluent-color:heart-48"} displayText={"Liked Songs"} />
            </div>
          </div>

          <div className="px-5">
            <div className="border border-black w-2/5 flex px-2 py-1 rounded-full items-center justify-center hover:border-gray cursor-pointer">
              <Icon icon="hugeicons:globe-02" />
              <div className="ml-2 text-base">English</div>
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="h-full w-4/5 overflow-auto">
          {/* NavBar */}
          <div className="navbar w-full h-1/10 bg-pink-200 flex items-center justify-end">
            <div className="w-1/2 flex h-full">
              <div className="w-3/5 flex justify-around items-center">
                <TextWithHover displayText={"Premium"} />
                <TextWithHover displayText={"Support"} />
                <TextWithHover displayText={"Download"} />
                <div className="h-1/2 border-r-2 border-pink-300" />
              </div>

              <div className="w-2/5 flex justify-around h-full items-center">
                     <Link to="/uploadSong"><TextWithHover displayText={"Upload Song"} /></Link>
                <div className="border border-black w-20 h-10 flex rounded-full items-center justify-center hover:border-gray cursor-pointer font-semibold"
                      onClick={()=>{
                        logout();
                        setCurrentSong(null);
                        navigate("/login");
                      }}
                >
                  Log Out
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="content p-8 pt-0">{children}</div>
        </div>
      </div>

      {/* Current Playing Song */}
      {currentSong && (
        <div className="h-1/10 w-full bg-pink-300 flex items-center px-4">
          <div className="w-1/4 flex items-center">
            <img
              src={currentSong.thumbnail}
              alt="currentSongThumbnail"
              className="h-14 w-14 rounded"
            />
            <div className="pl-4">
              <div className="text-sm hover:underline cursor-pointer">{currentSong.name}</div>
              <div className="text-xs text-gray-500 hover:underline cursor-pointer">
                {currentSong.artist.firstName + " " + currentSong.artist.lastName}
              </div>
            </div>
          </div>
          <div className="w-1/2 flex justify-center h-full flex-col items-center">
            <div className="flex w-1/3 justify-between items-center">
              <Icon
                icon="qlementine-icons:shuffle-16"
                width="35"
                height="35"
                className="cursor-pointer text-pink-600 hover:text-pink-800"
              />
              <Icon
                icon="wpf:previous"
                width="30"
                height="30"
                className="cursor-pointer text-pink-600 hover:text-pink-800"
              />
              <Icon
                icon={isPaused ? "gridicons:play" : "gridicons:pause"}
                width="50"
                height="50"
                className="cursor-pointer text-pink-600 hover:text-pink-800"
                onClick={togglePlayPause}
              />
              <Icon
                icon="wpf:next"
                width="30"
                height="30"
                className="cursor-pointer text-pink-600 hover:text-pink-800"
              />
              <Icon
                icon="fluent:arrow-repeat-all-48-filled"
                width="35"
                height="35"
                className="cursor-pointer text-pink-600 hover:text-pink-800"
              />
            </div>
          </div>
          <div className="w-1/4 flex justify-end pr-4 space-x-4 items-center">
            <Icon
              icon="material-symbols-light:playlist-add-circle-outline-rounded"
              width="38"
              height="38"
              className="cursor-pointer text-pink-600 hover:text-pink-800"
              onClick={() => {
                setAddToPlaylistModalOpen(true);
              }}
            />
            <Icon
              icon="mage:heart-fill"
              width="35"
              height="35"
              className="cursor-pointer text-pink-600 hover:text-pink-800"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default LoggedInContainer;
