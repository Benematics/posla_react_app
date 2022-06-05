import React from 'react';

const VerifyEmail = () =>{
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
        <div class="mw-600 pt-20 pb-50 mx-auto bg-fff" style={{height:"60vh", marginTop:"120px"}}>
          
            <form action="#" method="POST" onSubmit={handleSubmit}>
            
                <div class="page-alert" style={{marginBottom:"100px"}}>
                    <div>
                        <img src="/images/envelope.jpg" class="dp-contain" />
                    </div>

                   
                   	<div class="pt-15">
                        Email Verification Successful
                    </div>

                    <div>
                                  Your email address has been verified successfully.
                    You can now login to your account with your registered  email address new password.
                    </div>
                    <div class="mt-10" style={{marginTop:"20px"}}>
                        <div class="mw-300 mx-auto text-center">
                            <div>
	                             <a href="/" class="btn btn-blue btn-block">
	                                Goto Homepage
	                            </a>
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
export default VerifyEmail;