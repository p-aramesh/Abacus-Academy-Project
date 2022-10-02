import { TextField } from "@material-ui/core";
import Adminheader from "../Adminheader";
import "../styles/Adminacademy.css"

export default function Addcourse(){
    return(
        <div>
            <div><Adminheader></Adminheader></div>
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column', marginTop:'50px'}}>
        <div style={{width:'80%', backgroundColor:'whitesmoke', padding:'20px 10px'}}>
            <div style={{fontSize:'22px', fontWeight:'bold', padding:'20px'}}>Add Course</div>
            <div style={{display:'flex', justifyContent:'center', flexWrap:'wrap'}}>
                <div className="fields">
                    <TextField style={{width:300}} size="small" id="courseName" label="Enter Course Name" name="acadname" variant="outlined" />
                </div>
                <div className="fields">
                    <TextField style={{width:300}} size="small" id="courseEnrolled" label="Enter Number of course enrolled" name="acadcontact" variant="outlined" />
                </div>
                <div className="fields">
                    <TextField style={{width:300}} size="small" id="courseDuration" label="Enter Course duration" name="acadimg" variant="outlined" />
                </div>
                <div className="fields">
                    <TextField style={{width:300}} size="small" id="courseDescription" label="Enter Course Description" name="acadimg" variant="outlined" />
                </div>
                <div className="fields">
                    <TextField style={{width:300}} size="small" id="courseTiming" label="Enter Course Timing" name="acadlocation" variant="outlined" />
                </div>
            </div>
        </div>
        <div style={{width:'100%'}}>
            <button className="btn" style={{border:'none', borderRadius:'20px', padding:'10px 25px', backgroundColor:'green', color:'white', cursor:'pointer', margin:'20px', fontSize:'20px'}}>Add Course</button>
        </div>
        </div>
        </div>
    )
}