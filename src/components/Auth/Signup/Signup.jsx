import { TextField } from "@material-ui/core";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../../styles/Signup.css'

export default function Signup() {
    let navigate = useNavigate();
    const [input, setInput] = useState({})

    const handleChange = (event) => {
        let obj = input;        
        obj[event.target.name] = event.target.value;
        setInput(obj)
        console.log(input)
    }

    const handleSubmit = () => {
        // console.log(input)
        // fetch("http://localhost:8080/user",  {
        //     method: 'POST',
        //     body: input
        // })
        // .then((res) => 
        if(input.admin === "admin")
            navigate("/adminacademy")
        else
            navigate("/viewacademy")
        // )
    }

    const handleLogin = () => {
        navigate("/login")
    }

    return (
        <div>
            <div className="header">Register</div>
            <div style={{display:'flex', flexWrap:'wrap', justifyContent:'center', marginTop:'30px'}}>
                <div className="fields">
                    <TextField style={{width:300}} onChange={handleChange} value={input.admin} size="small" id="admin/user" label="Enter Admin/User" name="admin" variant="outlined" />
                </div>
                <div className="fields">
                    <TextField style={{width:300}} onChange={handleChange} value={input.email} size="small" id="email" label="Enter Email" name="email" variant="outlined" />
                </div>
                <div className="fields">
                    <TextField style={{width:300}} onChange={handleChange} value={input.username} size="small" id="username" label="Enter Username" name="username" variant="outlined" />
                </div>
                <div className="fields">
                    <TextField style={{width:300}} onChange={handleChange} value={input.mobile} size="small" id="mobileNumber" label="Enter Mobile Number" name="mobile" variant="outlined" />
                </div>
                <div className="fields">
                    <TextField style={{width:300}} onChange={handleChange} value={input.pass} size="small" id="password" label="Enter Password" name="pass" variant="outlined" />
                </div>
                <div className="fields">
                    <TextField style={{width:300}} onChange={handleChange} value={input.password} size="small" id="confirmPassword" label="Confirm Password" name="password" variant="outlined" />
                </div>
                <div style={{width:'100%', marginTop:'30px'}}>
                    <button onClick={handleSubmit} className="submitBtn">Submit</button>
                </div>
                <div style={{width:'100%', marginTop:'10px'}}>
                    <div style={{fontSize:'20px'}}>Already a user? <span onClick={handleLogin} style={{color:'blue', cursor:'pointer'}}>Login</span></div>
                </div>
            </div>
        </div>
    )
}