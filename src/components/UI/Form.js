import React, {useState} from "react";
import "./Form.css"

function Form(props){
    let [userName, setUserName] = useState("");
    let [age, setAge] = useState("");

    const OnSubmitHandler = (event) => {
        event.preventDefault();
      }

      const OnChangeUsernameHandler = (event) => {
        event.preventDefault();
      }

      const onChangeAgenameHandler = (event) => {
        event.preventDefault();
      }

    
    
    return(
        <form onSubmit={OnSubmitHandler}>
            <div className="form-control">
                <label htmlFor="username" className="label">Username</label>
                <input type="text" className="username" id="username" onChangeUserName={OnChangeUsernameHandler}/>
            </div>
            <div className="form-control">
                <label htmlFor="age" className="label">Age</label>
                <input type="age" className="age" id="age" onChangeAge={onChangeAgenameHandler}/>
            </div>
        </form>
    )
}

export default Form;
