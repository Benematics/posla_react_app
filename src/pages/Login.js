import React, {useState, useEffect, useRef} from 'react';
import {useNavigate} from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Login = () =>{
    const [login, setLogin] = useState({ Email: '', Password: ''});  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [test, setTest] = useState("");
    const [errMsg, setErrMsg] = useState("none");
    const navigate = useNavigate();
    const handleSubmit = (e) => {    
            e.preventDefault();    
            debugger; 

			var myHeaders = new Headers();
			myHeaders.append("Content-Type", "application/json");

			var raw = JSON.stringify({
			  "email": email,
			  "password": password
			});

			var requestOptions = {
			  method: 'POST',
			  headers: myHeaders,
			  body: raw,
			  redirect: 'follow'
			};

			fetch("https://posla-api.herokuapp.com/api/auth/login", requestOptions)
			  .then(response => response.text())
			  .then(result => {
			  	setTest(result);
			  	console.log(result);
			  	
				if(test[10] == '200'){
			  		navigate('/account/dashboard');
			  		}
			  })
			  .catch(error => console.log('error', error));    
          }; 
    const show = [Object.values(test[2])]; 

    const onChange = (e) => {    
                e.persist();      
                setLogin({...login, [e.target.name]: e.target.value});    
              } 
  

	return(
		<>
		<Header/>
		<div class="container" style={{marginTop: "10rem", marginBottom: "10rem"}}>
		    <div class="row justify-content-center">
		        <div class="col-md-8">
		            <div class="card">
		            {show}
		                <div class="card-header">Login</div>
		                <div class="card-body">
		                    <form method="POST" action="#" onSubmit={handleSubmit}>
								 <div class="form-group row" style={{padding:"10px"}}>
		                            <label for="email" class="col-md-4 col-form-label text-md-right">E-Mail Address</label>

		                            <div class="col-md-6">
		                                <input id="email" type="email" class="form-control" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} required autocomplete="email" autofocus/>

		                              
		                                    <span class="invalid-feedback" role="alert">
		                                        <strong>message </strong>
		                                    </span>
		                                
		                            </div>
		                        </div>

		                        <div class="form-group row" style={{padding:"10px"}}>
		                            <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

		                            <div class="col-md-6">
		                                <input id="password" type="password" class="form-control" name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} required autocomplete="current-password"/>
                                    		<span class="invalid-feedback" role="alert">
		                                        <strong>Message</strong>
		                                    </span>     
		                            </div>
		                        </div>

		                        <div class="form-group row">
		                            <div class="col-md-6 offset-md-4">
		                                <div class="form-check">
		                                    <input class="form-check-input" type="checkbox" name="remember" id="remember" />
		                                    <label class="form-check-label" for="remember">
		                                        Remember Me
		                                    </label>
		                                </div>
		                            </div>
		                        </div>

		                        <div class="form-group row mb-0">
		                            <div class="col-md-8 offset-md-4">
		                                <button type="submit" class="btn btn-primary">
		                                    Login
		                                </button>
	                                    <a class="btn btn-primary" href="#" style={{marginLeft:"10px"}}>
	                                        Forgot Your Password?
	                                    </a>
		                                
		                            </div>
		                        </div>
		                        
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
export default Login;
