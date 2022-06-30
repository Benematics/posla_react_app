import React, {useState, useEffect} from 'react';
import AdminHeader from '../components/AdminHeader';
import AdminSidebar from '../components/AdminSidebar';
import {Link} from "react-router-dom";

const AdminForm =()=>{
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
		                Form Page
		            </div>
		            <div class="box-tools pull-right">
		                <Link to="" class="btn btn-box-tool">
		                    <i class="fa fa-plus"></i>
		                    Link
		                </Link>
		            </div>
		        </div>
		        <div class="box-body">
		            

		            <form action="" method="post" enctype="multipart/form-data" class="mx-auto mw-600">

		                <div class="row">
		                    <div class="col-md-6">
		                        <div class="form-group">
		                            <label>Label:</label>
		                            <input type="text" class="form-control" name="" value="" />
		                        </div>
		                    </div>
		                    <div class="col-md-6">
		                        <div class="form-group">
		                            <label>Label:</label>
		                            <input type="text" class="form-control" name="" value="" />
		                        </div>
		                    </div>
		                </div>

		                <div class="row">
		                    <div class="col-md-6">
		                        <div class="form-group">
		                            <label>Label:</label>
		                            <select name="" class="form-control" required>
		                                <option value="0">-- Select --</option>
		                                <option value="">Option 1</option>
		                                <option value="">Option 2</option>
		                                <option value="">Option 3</option>
		                            </select>
		                        </div>
		                    </div>
		                    <div class="col-md-6">
		                        <div class="form-group">
		                            <label>Label:</label>
		                            <select name="" class="form-control" required>
		                                <option value="0">-- Select --</option>
		                                <option value="">Option 1</option>
		                                <option value="">Option 2</option>
		                                <option value="">Option 3</option>
		                            </select>
		                        </div>
		                    </div>
		                </div>


		                <div class="row">
		                    <div class="col-md-12">
		                        <div class="form-group">
		                            <label>Label:</label>
		                            <textarea class="form-control" name="" style={{height: "100px"}}></textarea>
		                        </div>
		                    </div>
		                </div>

		                <div class="row">
		                    <div class="col-md-6">
		                        <div class="form-group">
		                            <label class="checkbox-inline">
		                                <input type="checkbox" name=""/>
		                                Checkbox Label
		                            </label>
		                        </div>
		                    </div>
		                    <div class="col-md-6">
		                        <div class="form-group">
		                            <label class="radio-inline">
		                                <input type="radio" name=""/>
		                                Radio Label
		                            </label>
		                        </div>
		                    </div>
		                </div>

		                <div class="row">
		                    <div class="col-md-6">
		                        <div class="form-group">
		                            <label>Label:</label>
		                            <input type="text" class="form-control" name="" value="" />
		                        </div>
		                    </div>
		                    <div class="col-md-6">
		                        <div class="form-group">
		                            <label>Label:</label>
		                            <input type="text" class="form-control" name="" value="" />
		                        </div>
		                    </div>
		                </div>

		                <div class="form-footer">
		                    <input type="submit" name="" value="Submit 1" class="btn btn-primary" />
		                    <input type="submit" name="" value="Submit 2" class="btn btn-orange" />
		                    <Link to="" class="btn btn-transparent-black">Cancel</Link>
		                </div>

		            </form>
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
export default AdminForm;







    