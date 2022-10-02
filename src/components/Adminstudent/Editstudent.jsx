import { TextField } from "@material-ui/core"
import { useState } from "react"
import Adminheader from "../Adminheader";
import Enrolledcourse from "../EnrolledCourse/Enrolledcourse";

export default function Editstudent() {

    return (
        <div>
            <div><Adminheader></Adminheader></div>
            <div style={{ marginTop: '60px', display:'flex', justifyContent:'center' }}>
                    <div style={{width:'70%', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', margin: '30px 40px' }}>
                        <div className="fields">
                            <TextField style={{ width: 300 }} size="small" id="firstName" label="Enter your first name" name="firstname" variant="outlined" />
                        </div>
                        <div className="fields">
                            <TextField style={{ width: 300 }} size="small" id="lastName" label="Enter your last name" name="lastname" variant="outlined" />
                        </div>
                        <div className="fields">
                            <TextField style={{ width: 300 }} size="small" id="male/female" label="Enter your gender" name="gender" variant="outlined" />
                        </div>
                        <div className="fields">
                            <TextField style={{ width: 300 }} size="small" id="fatherName" label="Enter your father name" name="fathername" variant="outlined" />
                        </div>
                        <div className="fields">
                            <TextField style={{ width: 300 }} size="small" id="phoneNumber1" label="Enter your phone no." name="phoneno1" variant="outlined" />
                        </div>
                        <div className="fields">
                            <TextField style={{ width: 300 }} size="small" id="phoneNumber2" label="Enter alternate phone no." name="phoneno2" variant="outlined" />
                        </div>
                        <div className="fields">
                            <TextField style={{ width: 300 }} size="small" id="motherName" label="Enter your mother name" name="mothername" variant="outlined" />
                        </div>
                        <div className="fields">
                            <TextField style={{ width: 300 }} size="small" id="email" label="Enter your email id" name="email" variant="outlined" />
                        </div>
                        <div className="fields">
                            <TextField style={{ width: 300 }} size="small" id="age" label="Enter your age" name="age" variant="outlined" />
                        </div>
                        <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
                            <div style={{ width: '79%', backgroundColor: 'whitesmoke', padding: '20px 15px' }}>
                                <div style={{ textAlign: 'left', fontSize: '18px' }}>Address Information:</div>
                                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                                    <div className="field">
                                        <TextField style={{ width: 270 }} size="small" id="houseNo" label="House no." name="houseno" variant="outlined" />
                                    </div>
                                    <div className="field">
                                        <TextField style={{ width: 270 }} size="small" id="streetName" label="Street name" name="streetname" variant="outlined" />
                                    </div>
                                    <div className="field">
                                        <TextField style={{ width: 270 }} size="small" id="areaName" label="Area name" name="areaname" variant="outlined" />
                                    </div>
                                    <div className="field">
                                        <TextField style={{ width: 270 }} size="small" id="pincode" label="Pincode" name="pincode" variant="outlined" />
                                    </div>
                                    <div className="field">
                                        <TextField style={{ width: 270 }} size="small" id="state" label="State" name="state" variant="outlined" />
                                    </div>
                                    <div className="field">
                                        <TextField style={{ width: 270 }} size="small" id="nationality" label="Nationality" name="nationality" variant="outlined" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{}}>
                            <button className="enrollBtn" id="enrollNowButton">Update Student</button>
                        </div>
                    </div>
            </div>
        </div>
    )
}