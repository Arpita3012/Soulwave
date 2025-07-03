import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";

const IconText=({iconName, displayText,active,targetLink, onClick}) =>{
    return(

        <Link to={targetLink} className="block">

            <div className="flex items-center justify-start cursor-pointer"
                onClick={onClick}
            >
                <div className="px-5 py-2">
                    <Icon icon={iconName} 
                    fontSize={25}
                    color={active? "black":"gray"}
                    />
                </div>

                <div className={`text-base font-semibold
                    hover:text-black ${active ? "text-black" : "text-gray-700"}`}>
                {displayText}
                </div>
            </div>
        </Link>
    )
};

export default IconText;