
const TextWithHover=({displayText,active}) =>{
    return(
        <div className="flex items-center justify-start cursor-pointer">
            

            <div className={`text-base font-semibold 
                hover:text-black ${active ? "text-black" : "text-gray-700"}`}>
            {displayText}
            </div>
        </div>
    )
};

export default TextWithHover;