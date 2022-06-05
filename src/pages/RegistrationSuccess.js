import React from "react";

const RegistrationSuccess = () =>{
	const handleSubmit = (e) => {
		e.preventDefault();
		var myHeaders = new Headers();
		myHeaders.append("Accept", "application/json");
		myHeaders.append("Authorization", "Bearer 41|1rEpfWLienwJOQmLxPuDmRUP5DgtMt5GzThDTKpb");

		var formdata = new FormData();

		var requestOptions = {
		  method: 'POST',
		  headers: myHeaders,
		  body: formdata,
		  redirect: 'follow'
		};

		fetch("https://posla-api.herokuapp.com/api/auth/resend-verification-email", requestOptions)
		  .then(response => response.text())
		  .then(result => console.log(result))
		  .catch(error => console.log('error', error));
	}
	return(
		<>
	<div class="container">
        <div class="mw-600 pt-20 pb-50 mx-auto bg-fff" style={{marginTop:"100px"}}>
	        <form action="" method="POST" onSubmit={handleSubmit}>
	            <div class="page-alert">
	                <div style={{marginTop:"20px"}}>
	                    <img src="/images/envelope.jpg" class="dp-contain" />
	                </div>
	                <div class="pt-15" style={{marginTop:"20px"}}>
	                    Welcome, Please Verify Your Email
	                </div>
	                <div>
	                    Your account has been registered successfully and a mail sent to you.
	                    To gain full access to your account, please validate your email address.
	                </div>
	                <div class="mt-10" style={{marginTop:"25px"}}>
	                    <div class="mw-300 mx-auto text-center">
	                        <div>
	                            <a href="/" class="btn btn-blue btn-block m-0">
	                                Goto Homepage
	                            </a>
	                        </div>
	                        
	                    </div>
	                </div>
	                <div class="mt-5" style={{marginBottom: "100px"}}>
	                    <div class="mw-300 mx-auto text-center">
	                        <div>
	                            <button type="submit" class="btn btn-orange btn-block m-0">
	                                    Resend Link
	                                </button>
	                        </div>
	                        
	                    </div>
	                </div>
	            </div>
	        </form>

        </div>
    </div>

		</>
		)
}
export default RegistrationSuccess;