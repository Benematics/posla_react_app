import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {Link, useNavigate} from "react-router-dom";
import AccountSidebar from '../components/AccountSidebar';

const VacationModeSuccess = () =>{
	return(
		<>
            <Header/>
            	<div class="container" style={{marginTop:"20px", marginBottom:"20px"}}>
                    <div class="row">
                        <div class="d-none d-md-block col-md-4 col-lg-3">

                            <AccountSidebar/>

                        </div>

                        <div class="col-12 col-md-8 col-lg-9">

                            <div aria-label="breadcrumb" class="details-page-breadcrumb mb-10">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><Link to="/account">Account</Link></li>
                                    <li class="breadcrumb-item"><Link to="/account/settings">Settings</Link></li>
                                    <li class="breadcrumb-item active" aria-current="page">Vacation Mode</li>
                                </ol>
                            </div>

                            <div class="section">
                                <div class="section-title section-title-sm">
                                    Vacation Mode
                                </div>
                                <div>

                                    <div class="page-alert page-alert-success">
                                        <span class="fa fa-check-circle"></span>
                                        <div class="pt-15">
                                            Vacation Mode Activated
                                        </div>
                                        <div>
                                            Your account is now on vacation mode. You can turn this off whenever you deem fit.
                                            Thank you.
                                        </div>
                                        <div class="mt-10">
                                            <div class="mw-300 mx-auto text-center">
                                                <div>
                                                    <Link to="/account/dashboard" class="btn btn-blue">
                                                        My Account
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>


                        </div>
                    </div>
                </div>
    <Footer/>
		</>
		)
}
export default VacationModeSuccess;