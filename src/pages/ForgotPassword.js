import React from "react";

const ForgotPassword = () => {
	return(
		<>
				-- reset password box --
				<div class="auth-modal auth-modal-forgot-password">
				    <button class="auth-modal-close">
				        <span class="fa fa-times"></span>
				    </button>

				    <div class="auth-modal-title">
				        <div>
				            Forgot Password
				        </div>
				        <div>
				            Reset your account password with ease
				        </div>
				    </div>


				    <form action="" method="POST" class="auth-modal-form">
				        
				        <div class="page-alert p-0 m-0">
				          <span class="fa fa-user-lock icon-50"></span>
				          <div></div>
				          <div>
				            Please enter the email address used in registering your account.
				            -- A password reset link will be sent to your registered email address. --
				          </div>
				        </div>

				        <div class="form-group mt-20">
				            <label for="email" class="control-label">
				                Email Address:
				            </label>
				            <input type="email" name="email" value="" id="email" class="form-control"/>
				        </div>
				        <div class="mt-20">
				            <button type="submit" class="btn btn-blue btn-block">
				                Reset Paasword
				            </button>
				        </div>
				        <div class="mt-20 text-center" style={{marginTop:"20px"}}>
				            <a class="btn-login-switch text-fade hover-underline cursor-pointer">
				                Remember your password? Login
				            </a>
				        </div>
				    </form>

				</div>


				-- if error occurs, add class "auth-show" to the div below --
				<div class="bg-fade bg-fade-auth-backend"></div>
		</>
		)
}
export default ForgotPassword;