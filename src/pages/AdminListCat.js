import React,{useState, useEffect} from 'react';
import AdminHeader from '../components/AdminHeader';
import AdminSidebar from '../components/AdminSidebar';
import {Link} from "react-router-dom";
import {toast} from "react-toastify";

const AdminListCat = () => {

	const [name, setName] = useState("");
	const [parent, setParent] = useState("");
	const [position, setPosition] = useState("");
	const [status, setStatus] = useState("");
	const [description, setDescription] = useState("");
	const [token, setToken] = useState("");


    {/*Token*/}
    useEffect(() => {
    const access = localStorage.getItem("token");
    if (access) {
      setToken(access);
      console.log(access);
        }
      }, []);

	{/*Create Category*/}
	const handleSubmit = (e) => {
		e.preventDefault();
		var myHeaders = new Headers();
		myHeaders.append("Authorization", `Bearer ${token}`);
		myHeaders.append("Content-Type", "application/json");

		var raw = JSON.stringify({
		  "name": name,
		  "parent": parent,
		  "position": position,
		  "status": status,
		  "description": description
		});

		var requestOptions = {
		  method: 'POST',
		  headers: myHeaders,
		  body: raw,
		  redirect: 'follow'
		};

		fetch("https://posla-api.herokuapp.com/api/admin/settings/categories/create", requestOptions)
		  .then(response => response.json())
		  .then((result) => {
		  	console.log(result)
		  	const res = result.data;
		  	if (res.message="successful") {
		  		toast("created successfully")
		  	}
		  	const cat = res.data.category_id;
		  	localStorage.setItem("Admin Cat_Id", JSON.stringify(cat))

		  })
		  .catch(error => console.log('error', error));
	}

	{/*Input storage*/}
	const data = {name,parent,position,status, description}
	localStorage.setItem("admin_create_cat", JSON.stringify(data))

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
			<div class="box" style={{width:"67vw", margin:"auto", marginLeft:"27rem", yOverflow:"scroll", marginTop:"5rem", marginBottom:"5rem"}}>
		        <div class="box-header" >
		            <div class="box-title">
		                Create Category
		            </div>
		            <div class="box-tools pull-right">
		                <Link to="" class="btn btn-box-tool">
		                    <i class="fa fa-plus"></i>
		                    Link
		                </Link>
		            </div>
		        </div>
		        <div class="box-body">
		            <form action='admin/categories/store' method="post" enctype="multipart/form-data" class="mx-auto mw-600">
		             
		                <div class="row">
		                    <div class="col-md-6">
		                        <div class="form-group">
		                            <label>Name:</label>
		                            <input type="text" class="form-control" name="name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
		                        </div>
		                    </div>
		                  
		                        <div class="col-md-6">
		                            <div class="form-group">
		                                <label>Parent Category:</label>
		                                <select name="parent_id" class="form-control" value={parent} onChange={(e)=>{setParent(e.target.value)}}>
		                                    <option value="" selected>-- None --</option>
		                                        <option >Web development</option> 
		                                        <option >Mobile App development</option>  
		                                </select>
		                            </div>
		                        </div>
		                  
		                </div>
		                <div class="row">
		                    <div class="col-md-6">
		                        <div class="form-group">
		                            <label>Position:</label>
		                            <input type="number" class="form-control" name="position" max="100" min="1" value={position} onChange={(e)=>{setPosition(e.target.value)}}/>
		                        </div>
		                    </div>
		                    
		                    <div class="col-md-6">
		                        <div class="form-group">
		                            <label>Status:</label>
		                            <select name="status" class="form-control" value={status} onChange={(e)=>{setStatus(e.target.value)}} required>
		                                <option disabled selected>-- Select --</option>
		                                <option value="1">Active</option>
		                                <option value="0">Disable</option>
		                            </select>
		                        </div>
		                    </div>
		                </div>


		                <div class="row">
		                    <div class="col-md-12">
		                        <div class="form-group">
		                            <label>Description:</label>
		                            <textarea class="form-control" name="description" style={{height: "100px"}} value={description} onChange={(e)=>{setDescription(e.target.value)}}></textarea>
		                        </div>
		                    </div>
		                </div>

		                <div class="form-footer">
		                    <input type="submit" name="" value="Create" class="btn btn-primary" onClick={handleSubmit}/>
		                    <Link to="#" class="btn btn-transparent-black">Cancel</Link>
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

export default AdminListCat;