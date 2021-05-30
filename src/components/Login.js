import React, { useState} from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";


export default function LoginUser() {

    let history = useHistory();
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [login,setLogin]=useState([]);

    function checkUser(e){//function checks the availbilty of the admin within the system
        e.preventDefault();
        //pass the username and password and if exact user exsits will be directed to dashbord else it will display error for unavailable user
        axios.get(`http://sigiri-furniture-app.herokuapp.com/login/get/${username}/${password}`).then((response) => {
        console.log(response.data);
        setLogin(response.data.login);
        if(response.data.login === null){
            alert("User not available");
        }else{
            alert("User available");
            if(response.data.login.username =="VM001"){
                    history.push("/allCustomer");
            }else if(response.data.login.username == "PM001"){
                history.push("/allview");
            }else if(response.data.login.username == "SM001"){
                history.push("/alltenders");
            }
            else if(response.data.login.username == "EM001"){
                history.push("/empList");
            }
            else if(response.data.login.username == "PM002"){
                history.push("/view");
            }
            else if(response.data.login.username == "TM001"){
                history.push("/DashboardT");
            }
            else if(response.data.login.username == "IM001"){
                    history.push("/inventories");
            }else if(response.data.login.username == "FM001"){
                history.push("/ViewFinancial");
            }else if(response.data.login.username == "CO001"){
                history.push("/dashboard");
            }
        }
      }).catch((err) => {
        alert(err.response.data.error)

      })
    }

    return (
        
<>
       
        <div className ="bgImg">

       
                <form className="login" onSubmit={checkUser}>
                <div style={{marginLeft:"120px"}}><h2>Welcome!</h2> <br></br></div>
                <div class="login-topic"><h2>Login</h2></div>
                <div class="form-group row">
                    <div class="col-sm-10">
                    <input type="text" class="form-control" 
                    id="username" placeholder="UserName" pattern="[A-Z]{2}[0-9]{3}" required 
                     onChange={(event) => { setUserName(event.target.value); }}/>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-10">
                    <input type="password" class="form-control" 
                    id="password" placeholder="Password" pattern="[a-z]{4-8}"  minLength="4"  maxLength="8" required 
                     onChange={(event) => { setPassword(event.target.value); }}/>
                    </div>
                </div>
                
                <div class="form-group row">
                    <div class="col-sm-10">
                        <center>
                    <button type="submit" value="submit" class="btn btn-primary">Login</button></center>
                    </div>
                </div>
                
                </form>
                </div>
              </>
  
    
     
    )
}