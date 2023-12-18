import React from "react";
import './register-form.css'
import Logo from './logo.jpg';
import Logo1 from './logo1.jpg';
import Logo2 from './logo2.jpg'

function Register() {

    


    return (
        <>
            <img class="myimage1" src={Logo}/>
            <img id="myimg2" src={Logo1}/>
            <img id="myimg3" src={Logo2}/>
            <div id="fixed">
                <h1 id="reg">Student Register ID</h1>
            </div>
            <div class="container">
                <form action="#" method="post" id="form">
                    <div class="input-group">
                        <label>NAME:</label>
                        <input type="text" id="name" name="names" />

                    </div>
                    <div class="input-group">
                        <label>DATE OF BIRTH:</label>
                        <input style={{ width: "300px" }} type="date" id="dateofbirth" name="dateofbirth" />

                    </div>
                    <div class="input-group">
                        <label>PHONE NO:</label>
                        <input type="number" id="phoneno" name="phoneno" />

                    </div>
                    <div class="input-group">
                        <label>E-MAIL ID:</label>
                        <input type="email" id="emailid" name="emailid" />

                    </div>

                    <button class="btn1">Clear</button>
                    <button class="btn1">Submit</button>
                </form >
            </div >

            <div class="table">
                <table class="tablecolor">
                    <thead>
                        <tr>
                            <th class="lab">NAME</th>
                            <th class="lab">DATE OF BIRTH</th>
                            <th class="lab">PHONE NO</th>
                            <th class="lab">E-MAIL ID</th>
                        </tr>
                    </thead>
                    <tbody id="mytable"></tbody>

                </table>
                <button id="btn2">Clear Register</button>
            </div>
        </>
    )
}

export default Register;