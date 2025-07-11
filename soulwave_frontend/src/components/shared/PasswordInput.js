const PasswordInput= ({label, placeholder,value, setValue})=>{
    return(
    <div className="textInputDiv flex flex-col space-y-2 w-full">
        <label htmlFor={label} className=" text-black font-semibold">
            {label}
        </label>
            
        <input 
            type= "password"   
            placeholder={placeholder }
            className="p-3 border border-pink-300 border-solid rounded placeholder-gray-500"
            id={label}
            value={value}
            onChange={(e)=>{setValue(e.target.value)}}
        />
    </div>
)};


export default PasswordInput;