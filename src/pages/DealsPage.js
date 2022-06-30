import React,{useState, useEffect} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {Link} from "react-router-dom";
import AccountSidebar from '../components/AccountSidebar';
import NavTabDeals from '../components/NavTabDeals';
import CreateDealRules from '../components/CreateDealRules';


const DealsPage = ()=>{
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
				                        <li class="breadcrumb-item"><Link to="/account/deals">Deals</Link></li>
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

				                                    <div class="b-1-ddd">

				                                        <div class="p-20" style={{padding:"20px"}}>
				                                            <CreateDealRules/>
				                                        </div>

				                                        <div class="p-15 mt-15 bt-1-ddd" style={{padding:"15px", marginTop:"15px"}}>
				                                            <div class="row">
				                                                <div class="col-sm-8 col-md-12 col-lg-8">
				                                                    <label class="checkbox-inline">
				                                                        <div class="pull-left">
				                                                            <input type="checkbox" required checked/>
				                                                        </div>
				                                                        <div class="overflow-hidden">
				                                                            I agree that violating any of the rules above may lead to
				                                                            my deal being canceled at any time.
				                                                        </div>
				                                                    </label>
				                                                </div>
				                                                <div class="col-sm-4 col-md-12 col-lg-4">
				                                                    <div class="d-block d-sm-none d-md-block d-lg-none" style={{height: '10px'}}></div>
				                                                    <Link to="/account/deals/create/1234/info" class="btn btn-blue btn-sm icon-right pull-right">
				                                                        Proceed
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
				    </div>
			<Footer/>
		</>
		)
}

export default DealsPage;