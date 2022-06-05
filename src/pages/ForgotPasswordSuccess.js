import React from "react";

const ForgorPasswordSuccess = () =>{
	return(
		<>
			<div class="container">
		        <div class="mw-600 pt-20 pb-50 mx-auto bg-fff" style={{marginTop:"100px"}}>
		            <form action="" method="POST">
		                <div class="page-alert">
		                    <div style={{marginTop:"20px"}}>
		                        <img src="/images/envelope.jpg" class="dp-contain" />
		                    </div>
		                    <div class="pt-15" style={{marginTop:"20px"}}>
		                        Password Reset Link Sent
		                    </div>
		                    <div>
		                        A password reset link has been sent to your submitted email address.
		                        Please click the link in the email to reset your password.
		                        <br/>
		                        Didn't receive the email? Please click the resend button below.
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
export default ForgorPasswordSuccess;