import React, { useState } from "react";
import axios from "axios";
import { useHistory} from "react-router-dom"


export default function LoginUser() {

  let history = useHistory();
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [login,setLogin]=useState([]);


    function checkUser(e){//function checks  the availability of the admin within the system
        e.preventDefault();

        //pass the username and password and if exact user exsits will be directed to dashbord else it will display error for unavailable user
        axios.get(`http://localhost:8080/login/get/${username}/${password}`).then((response) => {
        console.log(response.data);
        setLogin(response.data.login);
        if(response.data.login === null){
          alert("User not available");
      }else{
          alert("User available");
          if(response.data.login.username =="PM001"){
          history.push("/allview");
          }else if(response.data.login.username =="CO001"){
            history.push("/dashboard");
          }
      }
      }).catch((err) => {
        alert(err.response.data.error)

      })
    }

    return (
        <div style={{position: "absolute", top: "10%", left: "20%", width: "80%", height: "100%" }}>

        <div style={{position: "absolute", top: "30%", left: "20%", width: "50%", height: "50%"}}>
                <form onSubmit={checkUser}>
                <div class="form-group row">
                    <div class="col-sm-10">
                    <input type="text" class="form-control" id="username" placeholder="UserName"
                     onChange={(event) => { setUserName(event.target.value); }}/>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-10">
                    <input type="password" class="form-control" id="password" placeholder="Password"
                     onChange={(event) => { setPassword(event.target.value); }}/>
                    </div>
                </div>
                
                <div class="form-group row">
                    <div class="col-sm-10">
                    <button type="submit" value="submit" class="btn btn-primary">Login</button>
                    </div>
                </div>
                </form>
                </div>
        </div>
    )
}