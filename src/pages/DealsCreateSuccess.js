import React,{useState,useEffect} from 'react';
import AccountSidebar from '../components/AccountSidebar';
import {Link} from "react-router-dom";
import NavTabDeals from '../components/NavTabDeals';
import Header from '../components/Header';
import Footer from '../components/Footer';



const DealsCreateSuccess = () =>{
	return(
		<>
			<div class="container"  style={{marginTop:"20px", marginBottom:"20px"}}>
		        <div class="row">
		            <div class="d-none d-md-block col-md-4 col-lg-3">

		                <AccountSidebar/>
		                
		            </div>
		            
		            <div class="col-12 col-md-8 col-lg-9">
		                
		                <div aria-label="breadcrumb" class="details-page-breadcrumb mb-10">
		                    <ol class="breadcrumb">
		                        <li class="breadcrumb-item"><a href="/account">Account</a></li>
		                        <li class="breadcrumb-item"><a href="/account/deals">Deals</a></li>
		                        <li class="breadcrumb-item active" aria-current="page">Create Deal</li>
		                    </ol>
		                </div>
		                
		                <div class="section">
		                    <div class="section-title">
		                        Create Deal
		                    </div>
		                    <div>
		                        
		                        <NavTabDeals/>
		                        
		                        <div class="tab-content">
		                            <div class="tab-pane active">

		                                <div class="page-alert page-alert-success">
		                                    <span class="fa fa-check-circle"></span>
		                                    <div class="pt-15">
		                                        Deal Created Successfully
		                                    </div>
		                                    <div>
		                                        Your deal has been successfully submitted to the admin for approval.
		                                        A notification will be sent to you once approved or rejected.
		                                        <br/>
		                                        Thank you.
		                                    </div>
		                                    <div class="mt-10">
		                                        <div class="mw-300 mx-auto text-center">
		                                            <div>
		                                                <a href="/account/deals" class="btn btn-blue">
		                                                    My Deals
		                                                </a>
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
		    </div>
		</>
		)
}
export default DealsCreateSuccess;