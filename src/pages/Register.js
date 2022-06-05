import React, {useState} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';
import {useNavigate} from "react-router-dom";


{/* Here */}




{/* Here */}
const Register = () =>{
	const [display, setDisplay] = useState("none")
	const [errors, setErrors] = useState("")
	const [name, setName] = useState("")
	const [username, setUsername] = useState("")
	const [email, setEmail] = useState("")
	const [phone, setPhone] = useState("")
	const [pwd, setPwd] = useState("")
	const [confirmPwd,setConfirmPwd] = useState("")
	const navigate = useNavigate();
	const [test, setTest] = useState("");


	const handleSubmit = (e) =>{
		e.preventDefault()
		var myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");

		var raw = JSON.stringify({
		  "name":name,
		  "username": username,
		  "email": email,
		  "password": pwd,
		  "password_confirmation": confirmPwd,
		  "phone": phone
		});

		var requestOptions = {
		  method: 'POST',
		  headers: myHeaders,
		  body: raw,
		  redirect: 'follow'
		};

		fetch("https://posla-api.herokuapp.com/api/auth/signup", requestOptions)
		  .then(response => response.text())
		  .then(result => {
		  	setTest(result);
		  	console.log(result);
		  	if(test[10] == 't'){
			  		navigate('/login')
			  	}
		  	})
		  .catch(error => console.log('error', error));
		}
	return(
		<>
			<Header/>
			{test}
			<div class="container" style={{marginTop: "10rem", marginBottom: "10rem"}}>
			    <div class="row justify-content-center">
			        <div class="col-md-8">
			            <div class="card">
			                <div class="card-header">Register</div>

			                <div class="card-body">
			                    <form method="POST" action="/login">
                 				    <div class="form-group row" style={{padding:"10px"}}>
			                            <label for="name" class="col-md-4 col-form-label text-md-right" style={{paddingLeft:"10px"}}>Name</label>

			                            <div class="col-md-6">
			                                <input id="name" type="text" class="form-control" name="name" value={name} onChange={(e)=>{setName(e.target.value)}} required autocomplete="name" autofocus/>            
			                            </div>
			                        </div>

			                        <div class="form-group row" style={{padding:"10px"}}>
			                            <label for="username" class="col-md-4 col-form-label text-md-right" style={{paddingLeft:"10px"}}>Username</label>

			                            <div class="col-md-6">
			                                <input id="username" type="text" class="form-control" name="username" value={username} onChange={(e)=>setUsername(e.target.value)} required autocomplete="username" autofocus/>
			                            </div>
			                        </div>


			                        <div class="form-group row" style={{padding:"10px"}}>
			                            <label for="email" class="col-md-4 col-form-label text-md-right">E-Mail Address</label>

			                            <div class="col-md-6">
			                                <input id="email" type="email" class="form-control" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} required autocomplete="email"/>
			                            </div>
			                        </div>


			                        <div class="form-group row" style={{padding:"10px"}}>
			                            <label for="phone" class="col-md-4 col-form-label text-md-right">Phone Number</label>

			                            <div class="col-md-6">
			                                <input id="phone" type="tel" class="form-control" name="phone" value={phone} onChange={(e)=>{setPhone(e.target.value)}} required autocomplete="email"/>
			                            </div>
			                        </div>

			                        <div class="form-group row" style={{padding:"10px"}}>
			                            <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

			                            <div class="col-md-6">
			                                <input id="password" type="password" class="form-control" name="password" value={pwd} onChange={(e)=>{setPwd(e.target.value)}} required autocomplete="new-password"/>
			                            </div>
			                        </div>

			                        <div class="form-group row" style={{padding:"10px"}}>
			                            <label for="password-confirm" class="col-md-4 col-form-label text-md-right">Confirm Password</label>

			                            <div class="col-md-6">
			                                <input id="password-confirm" type="password" class="form-control" name="password_confirmation" value={confirmPwd} onChange={(e)=>{setConfirmPwd(e.target.value)}} required autocomplete="new-password"/>
			                            </div>
			                        </div>

			                        <div class="form-group row mb-0">
			                            <div class="col-md-6 offset-md-4">
			                                <button type="submit" class="btn btn-primary" onClick={handleSubmit}>
			                                    Register
			                                </button>
			                            </div>
			                        </div>
			                        <p style={{display:display}}>Sent successfully</p>
			                    </form>
			                </div>
			            </div>
			        </div>
			    </div>
			</div>
			<Footer/>
		</>
		)
}
export default Register;