import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AccountSidebar from '../components/AccountSidebar';
import {Link} from "react-router-dom";



const Settings = () =>{
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
                                        <li class="breadcrumb-item active" aria-current="page">Settings</li>
                                    </ol>
                                </div>

                                <div class="section">
                                    <div class="section-title section-title-sm">
                                        Account Settings
                                    </div>
                                    <div>

                                        <div class="row">
                                            <div class="col-sm-6 col-md-12 col-lg-6">

                                                
                                                <div class="b-1-ddd mt-10">
                                                    <div class="bb-1-ddd font-bold pr-20 pl-10 pt-2 pb-2 bg-eee" style={{paddingLeft:"20px"}}>
                                                        Edit Profile
                                                    </div>
                                                    <div class="p-20" style={{padding:"20px"}}>
                                                        Update your account information such as profile picture, name, description, and others.
                                                        <div class="mt-10" style={{marginTop:"20px"}}>
                                                            <Link to="/account/profile/edit" class="btn btn-blue btn-sm icon-right">
                                                                Continue
                                                                <span class="fa fa-angle-right"></span>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div class="b-1-ddd mt-30 p-20" style={{marginTop:"30px"}}>
                                                    <div class="bb-1-ddd font-bold pr-20 pl-20 pt-2 pb-2 bg-eee" style={{paddingLeft:"20px"}}>
                                                        Change Password
                                                    </div>
                                                    <div class="p-20" style={{padding:"20px"}}>
                                                        Change your account login password
                                                        with a few clicks
                                                        <div class="mt-10" style={{marginTop:"20px"}}>
                                                            <Link to="/account/settings/change-password" class="btn btn-blue btn-sm icon-right">
                                                                Continue
                                                                <span class="fa fa-angle-right"></span>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                            <div class="col-sm-6 col-md-12 col-lg-6" >
                                                
                                                <div class="mt-30 d-block d-sm-none d-md-block d-lg-none"></div>

                                                <div class="b-1-ddd mt-10">
                                                    <div class="bb-1-ddd font-bold pr-20 pl-20 pt-2 pb-2 bg-eee" style={{paddingLeft:"20px"}}>
                                                        Withdrawal Information
                                                    </div>
                                                    <div class="p-20" style={{padding:"20px"}}>
                                                        View & Manage your withdrawal information.
                                                        This withdrawal information will be used as the payment method & recipient information for all your withdrawals.
                                                        <div class="mt-10" style={{marginTop:"20px"}}>
                                                            <Link to="/account/settings/withdrawal-settings" class="btn btn-blue btn-sm icon-right">
                                                                Continue
                                                                <span class="fa fa-angle-right"></span>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                        <hr/>

                                        <div class="row">
                                            <div class="col-sm-6 col-md-12 col-lg-6">

                                                <div class="b-1-ddd">
                                                    <div class="bb-1-ddd font-bold pr-20 pl-20 pt-2 pb-2 bg-eee" style={{paddingLeft:"20px"}}>
                                                        Vacation Mode
                                                    </div>
                                                    <div class="p-20" style={{padding:"20px"}}>
                                                        Want to put your account on hold? It’s easy. This will temporarily hide your deals, projects, and freelancer account from the entire public; until you reactivate your account, with just a click.
                                                        <div class="mt-10" style={{marginTop:"20px"}}>
                                                            <Link to="/account/settings/vacation-mode" class="btn btn-danger btn-sm icon-right">
                                                                Continue
                                                                <span class="fa fa-angle-right"></span>
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
                    </div>
			<Footer/>
		</>
		)
}
export default Settings;