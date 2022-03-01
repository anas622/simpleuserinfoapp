import React, {useState} from "react";
import "./FormField.css"

function FormField(props){
    let [userInput, setUserInput] = useState("");
    
    return(
        <div className="form-control">
            <label htmlFor={props.id} className="label">{props.label}</label>
            <input type={props.type} className={props.belongsTo} id={props.id}/>
        </div>
    )
}

export default FormField;
