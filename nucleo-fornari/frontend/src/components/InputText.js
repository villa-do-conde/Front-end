import React from "react";

function InputText(props) {
    return(
       <div className="my-6">
       <label className="block mb-0 text-sm">{props.label} </label>
       <input className="rounded w-full border-none p-4 box-border" placeholder={props.placeholder}/>
       </div> 
    )
}
export default InputText;