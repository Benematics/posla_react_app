import React,{useState} from "react";
import {useNavigate} from "react-router-dom";


const PasswordReset = () =>{
	const [Reset, setReset] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirm, setConfirm] = useState("");
	const navigate = useNavigate();
	const handleSubmit = (e) =>{
		e.preventDefault();
		var myHeaders = new Headers();
		myHeaders.append("Accept", "application/json");
		myHeaders.append("Authorization", "Bearer 41|1rEpfWLienwJOQmLxPuDmRUP5DgtMt5GzThDTKpb");

		var formdata = new FormData();
		formdata.append("email", email);
		formdata.append("password", password);
		formdata.append("password_confirmation", confirm);

		var requestOptions = {
		  method: 'POST',
		  headers: myHeaders,
		  body: formdata,
		  redirect: 'follow'
		};

		fetch("https://posla-api.herokuapp.com/api/auth/reset-password?token=1cc3c1ce641fa9bf65137f7", requestOptions)
		  .then((response) => response.json())
		  .then((result) =>{
		  		if (result.status == true) {
		  			navigate("/account/password-reset/successful");
		  		} else {
		  			alert("not submitted")
		  		}
		  })
  			.catch(error => console.log('error', error));
	}
	return(
		<>
			<div class="container">
		        <div class="mw-600 pb-50 mx-auto bg-fff" style={{marginTop:"50px", height:"auto", paddingBottom:"50px"}}>
		            
		            <div class="auth-modal-title mt-0 pt-30">
		                <div>
		                    <div class="mb-5">
		                        <span class="fa fa-lock icon-50 icon-orange"></span>
		                    </div>
		                    Password Reset
		                </div>
		                <div>
		                    Login to manage your projects & deals
		                </div>
		            </div>
		        
		            
		            <form ction="" class="mw-400 mt-30 mx-auto p-30 b-1-ddd" method="POST" style={{height:"50vh", marginBottom:"100px", padding:"20px"}} onSubmit={handleSubmit}>
		              
		                <div class="form-group" style={{marginTop:"30px"}}>
		                    <label for="email" class="control-label">
		                        Email Address:
		                    </label>
		                    <input type="email" id="email" name="email" class="form-control" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
		                </div>
		                <div class="input-group mb-10" style={{marginTop:"30px"}}>
		                    <label for="password" class="control-label">
		                        Password:
		                    </label>
		                    <div class="input-group input-group-password">
		                        <input type="password" name="password" id="password" class="form-control"value={password} onChange={(e)=>{setPassword(e.target.value)}} />
		                        <button type="button" class="input-group-btn password-toggle">
		                            <span class="fa fa-eye icon-17"></span>
		                        </button>
		                    </div>
		                </div>
		                <div class="input-group" style={{marginTop:"30px"}}>
		                    <label for="rpassword" class="control-label">
		                        Retype Password:
		                    </label>
		                    <div class="input-group input-group-password">
		                        <input type="password" name="password_confirmation" id="rpassword" class="form-control" value={confirm} onChange={(e)=>{setConfirm(e.target.value)}} />
		                        <button type="button" class="input-group-btn password-toggle">
		                            <span class="fa fa-eye icon-17"></span>
		                        </button>
		                    </div>
		                </div>
		                <div class="mt-20" style={{marginTop:"30px"}}>
		                    <button type="submit" class="btn btn-blue btn-block">
		                        Reset Password
		                    </button>
		                </div>
		                <div class="mt-15 text-center" style={{marginTop:"20px"}}>
		                    <a class="btn-register-switch text-fade hover-underline cursor-pointer" href="/">
		                        Go to Homepage
		                    </a>
		                </div>
		            </form>
		            
		        </div>


		    </div>
		</>
		)
}
export default PasswordReset;