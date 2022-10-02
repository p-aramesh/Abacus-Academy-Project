import { TextField } from "@material-ui/core";
import Adminheader from "../Adminheader";
import "../styles/Adminacademy.css"

export default function Addacademy(){
    return(
        <div>
            <div><Adminheader></Adminheader></div>
        <div style={{display:'flex', justifyContent:'center', marginTop:'50px'}}>
        <div style={{width:'80%', backgroundColor:'whitesmoke', padding:'20px 10px'}}>
            <div style={{fontSize:'22px', fontWeight:'bold', padding:'20px'}}>Add Academy</div>
            <div style={{display:'flex', justifyContent:'center', flexWrap:'wrap'}}>
                <div className="fields">
                    <TextField style={{width:300}} size="small" id="academyName" label="Enter Academy Name" name="acadname" variant="outlined" />
                </div>
                <div className="fields">
                    <TextField style={{width:300}} size="small" id="contactNumber" label="Enter Academy Contact Number" name="acadcontact" variant="outlined" />
                </div>
                <div className="fields">
                    <TextField style={{width:300}} size="small" id="imageUrl" label="Enter Acedemy Image URL" name="acadimg" variant="outlined" />
                </div>
                <div className="fields">
                    <TextField style={{width:300}} size="small" id="emailId" label="Enter Academy Email Id" name="acadimg" variant="outlined" />
                </div>
                <div className="fields">
                    <TextField style={{width:300}} size="small" id="academyLocation" label="Enter Academy Location" name="acadlocation" variant="outlined" />
                </div>
                <div className="fields">
                    <TextField style={{width:300}} size="small" id="academtDescription" label="Enter Academy Descriptionr" name="acadDesp" variant="outlined" />
                </div>
            </div>
            <div>
                <button className="btn" style={{border:'none', borderRadius:'20px', padding:'10px 25px', backgroundColor:'green', color:'white', cursor:'pointer', margin:'20px', fontSize:'20px'}}>Add Academy</button>
            </div>
        </div>
        </div>
        </div>
    )
}