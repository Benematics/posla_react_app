import React from 'react';
import {Link} from "react-router-dom";
import AdminHeader from '../components/AdminHeader';
import AdminSidebar from '../components/AdminSidebar';
import AdminFooter from '../components/AdminFooter';

const AdminPage = () =>{
	return(
		<>
<div class="wrapper">
	<AdminSidebar/>
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
        
            <div class="content-wrapper">
                <div class="body-wrapper">
                    <div class="dashboard pt-30 pb-30 pr-30 pl-30" style={{paddingTop:"30px", paddingBottom:"30px", paddingRight:"30px", paddingLeft:"20px"}}>
                        <div class="dashboard-title">
                            <div>
                                <img src='/images/logo.png' class="dp-contain" alt="Posla" style={{marginTop: "5px"}}/>
                            </div>
                            <div>
                                Admin Panel
                            </div>
                        </div>
                        
                        <div class="dashboard-search mt-30" style={{marginTop:"30px"}}>
                            <form action="" method="get">
                                <div class="input-group">
                                    <input type="search" placeholder="Search deals, projects, users" required="required" class="form-control" name="s" value="" />
                                    <div class="input-group-btn" style={{marginLeft:"0.5rem"}}>
                                        <button class="btn btn-orange" type="submit" style={{borderTopLeftRadius: "0"}}>
                                            Search
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        
                        <div class="dashboard-boxes container mt-10 pb-40" style={{marginTop:"10px", paddingBottom:"40px"}}>
                            <div class="row">

                                <div class="col-6 col-md-3">
                                    <Link to="/admin/users-list" class="inner_border slow_speed">
                                        <div>
                                            <div style={{fontSize:"30px"}}>
                                                45
                                            </div>
                                            <div>
                                                Registered Users
                                            </div>
                                        </div>
                                        <div class="fa fa-users"></div>
                                    </Link>
                                </div>
                                
                                <div class="col-6 col-md-3">
                                    <Link to="/admin/deals-list" class="inner_border slow_speed">
                                        <div>
                                            <div style={{fontSize:"30px"}}>
                                                213
                                            </div>
                                            <div>
                                                All Deals
                                            </div>
                                        </div>
                                        <div class="fa fa-user-tie"></div>
                                    </Link>
                                </div>
                                
                                <div class="col-6 col-md-3">
                                    <Link to="/admin/project-list" class="inner_border slow_speed">
                                        <div>
                                            <div style={{fontSize:"30px"}}>
                                                67
                                            </div>
                                            <div>
                                                All Projects
                                            </div>
                                        </div>
                                        <div class="fa fa-user-alt-slash"></div>
                                    </Link>
                                </div>
                                
                                <div class="col-6 col-md-3">
                                    <Link to="" class="inner_border slow_speed">
                                        <div>
                                            <div class="" style={{fontSize:"30px"}}>
                                                32
                                            </div>
                                            <div class="">
                                                All Contact Us Messages
                                            </div>
                                        </div>
                                        <div class="fa fa-clock"></div>
                                    </Link>
                                </div>
                                
                                <div class="col-6 col-md-3">
                                    <Link to="" class="inner_border slow_speed">
                                        <div>
                                            <div style={{fontSize:"30px"}}>
                                                $45,235
                                            </div>
                                            <div>
                                                Total Payments
                                            </div>
                                        </div>
                                        <div class="fa fa-check-circle"></div>
                                    </Link>
                                </div>

                                <div class="col-6 col-md-3">
                                    <Link to="" class="inner_border slow_speed">
                                        <div>
                                            <div style={{fontSize:"30px"}}>
                                                $31,235
                                            </div>
                                            <div>
                                                Amount Paid
                                            </div>
                                        </div>
                                        <div class="fa fa-exclamation-circle"></div>
                                    </Link>
                                </div>
                                
                                <div class="col-6 col-md-3">
                                    <Link to="" class="inner_border slow_speed">
                                        <div>
                                            <div style={{fontSize:"30px"}}>
                                                $3,000
                                            </div>
                                            <div>
                                                Dispensable User Revenue
                                            </div>
                                        </div>
                                        <div class="fa fa-envelope"></div>
                                    </Link>
                                </div>
                                
                                <div class="col-6 col-md-3">
                                    <Link to="" class="inner_border slow_speed">
                                        <div>
                                            <div style={{fontSize:"30px"}}>
                                                $11,000
                                            </div>
                                            <div>
                                                Posla Revenue
                                            </div>
                                        </div>
                                        <div class="fa fa-credit-card"></div>
                                    </Link>
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
export default AdminPage;