import React, {useState, useEffect} from 'react';
import AdminHeader from '../components/AdminHeader';
import AdminSidebar from '../components/AdminSidebar';
import {Link} from "react-router-dom";


const AdminDetails =()=>{
	return(
		<>
		<AdminSidebar style={{position: "fixed"}}/>
			<header class="main-header" style={{zIndex:"1", position: "relative", width:"100%"}}>
	            <Link to="" class="logo">
	              <span class="logo-mini"><b>Posla</b></span>
	              <span class="logo-lg"><b>Posla</b></span>
	            </Link>
	            <nav class="navbar navbar-static-top">
	              <Link to="#" class="" data-toggle="push-menu" role="button">
	                <i class="fa fa-bars"></i>
	              </Link>

	              <div class="layout-mobile-title d-block d-md-none">
	                Admin Panel
	              </div>
	              
	              <div class="navbar-custom-menu">
	                <ul class="nav navbar-nav">
	                  <li class="dropdown1 user user-menu" style={{minHeight: "50px",paddingTop:"0.5rem"}}>
	                    <Link to="#" class="dropdown-toggle dropdown-btn1" data-toggle="dropdown" style={{height: "50px"}}>
	                      <img src='/images/user.png' class="user-image" alt="User Image"/> 
	                      <span class="" style={{position: "relative", top: "2px", color:"black"}}>Fname Lname</span>    
	                    </Link>
	                    <ul class="dropdown-menu dropdown-content1">
	                      
	                      <li class="user-header" style={{textAlign: "center !important", paddingTop: "15px !important"}}>
	                        
	                        <img src='/images/user.png' class="img-circle" alt="fname"/>

	                        <p style={{textAlign: "center !important"}}>
	                          Fname Lname
	                          <small style={{textAlign: "center !important"}}>Account created on: Jan X, 20XX</small>
	                        </p>
	                      </li>
	                      
	                      <li class="user-footer">
	                        <div class="pull-left">
	                          <Link to="" class="btn btn-blue">Profile</Link>
	                        </div>
	                        <div class="pull-right">
	                          <Link to="" class="btn btn-danger">Logout</Link>
	                        </div>
	                      </li>
	                      
	                    </ul>
	                  </li>
	                </ul>
	              </div>
	            </nav>
	        </header>
			<div class="box" style={{width:"69vw", margin:"auto", marginLeft:"27rem", yOverflow:"scroll", marginTop:"5rem", marginBottom:"5rem"}}>
		        <div class="box-header">
		            <div class="box-title">
		                Details Page
		            </div>
		            <div class="box-tools pull-right">
		                <Link to="" class="btn btn-box-tool">
		                    <i class="fa fa-plus"></i>
		                    Link
		                </Link>
		            </div>
		        </div>
		        <div class="box-body">
		        
		            
		            <div class="mb-30" style={{marginBottom:"30px"}}>
		                <div class="mx-auto mw-800">
		                    <div class="order-details-information">

		                        <div>
		                            <div>
		                                Label
		                            </div>
		                            <div>
		                                Complete Value Set Here
		                            </div>
		                        </div>
		                        
		                        <div>
		                            <div>
		                                Label
		                            </div>
		                            <div>
		                                Complete Value Set Here
		                            </div>
		                        </div>

		                        <div>
		                            <div>
		                                Label
		                            </div>
		                            <div>
		                                Complete Value Set Here
		                            </div>
		                        </div>

		                        <div>
		                            <div>
		                                Label
		                            </div>
		                            <div>
		                                Complete Value Set Here
		                            </div>
		                        </div>

		                        <div>
		                            <div>
		                                Label
		                            </div>
		                            <div>
		                                Complete Value Set Here
		                            </div>
		                        </div>

		                    </div>
		                </div>
		            </div>
		            

		            <div class="mb-30" style={{marginBottom:"30px"}}>
		                <div class="mx-auto mw-800 b-1-eee">
		                    <div class="bg-eee pt-10 pb-10 pl-20 font-bold" style={{paddingTop:"10px", paddingBottom:"10px", paddingLeft:"20px"}}>
		                        Section Title
		                    </div>
		                    <div class="order-details-information">

		                        <div>
		                            <div>
		                                Label
		                            </div>
		                            <div>
		                                Complete Value Set Here
		                            </div>
		                        </div>
		                        
		                        <div>
		                            <div>
		                                Label
		                            </div>
		                            <div>
		                                Complete Value Set Here
		                            </div>
		                        </div>

		                        <div>
		                            <div>
		                                Label
		                            </div>
		                            <div>
		                                Complete Value Set Here
		                            </div>
		                        </div>

		                        <div>
		                            <div>
		                                Label
		                            </div>
		                            <div>
		                                Complete Value Set Here
		                            </div>
		                        </div>

		                        <div>
		                            <div>
		                                Label
		                            </div>
		                            <div>
		                                Complete Value Set Here
		                            </div>
		                        </div>

		                    </div>
		                </div>
		            </div>
		        </div>
		    </div>
		    <footer class="main-footer" style={{position:"absolute", bottom:"0", left:"0", width:"100%"}}>
			    <div class="pull-right hidden-xs">
			        {/*-- <b>Version</b> 0.1.0 */}
			    </div>
			    <strong>Copyright &copy; 2021 <Link to="/">Posla</Link>.</strong> All rights reserved.
			</footer>
		</>

		)
}
export default AdminDetails;