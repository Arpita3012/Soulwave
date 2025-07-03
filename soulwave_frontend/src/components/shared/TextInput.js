const TextInput= ({label, placeholder, className, value, setValue})=>{
    return(
    <div className={`textInputDiv flex flex-col space-y-2 w-full ${className}`}>
        <label htmlFor={label} className=" text-black font-semibold">
            {label}
        </label>
            
        <input 
            type= "text"   
            placeholder={placeholder }
            className="p-3 border border-pink-300 border-solid rounded placeholder-gray-500"
            id={label}
            value={value}
            onChange={(e)=>{setValue(e.target.value)}}
        />
    </div>
)};


export default TextInput;