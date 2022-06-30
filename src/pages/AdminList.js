import React,{useState, useEffect} from 'react';
import AdminHeader from '../components/AdminHeader';
import AdminFooter from "../components/AdminFooter";
import AdminSidebar from '../components/AdminSidebar';
import {Link} from "react-router-dom";

const AdminList = () =>{
	const [token, setToken] = useState("");
	const [cat, setCat] = useState("");
	const [catId, setCatId] = useState("");


    {/*Token*/}
    useEffect(() => {
    const access = localStorage.getItem("token");
    if (access) {
      setToken(access);
      console.log(access);
        }
      }, []);

	{/*CatId*/}
	useEffect(()=>{
    const id = localStorage.getItem("Admin Cat_Id");
    if (id) {
      setCatId(id);
      console.log(id);
        }
      }, []);

	{/*Delete List*/}
	const handleSubmit = (e) => {
		e.preventDefault()
		var myHeaders = new Headers();
		myHeaders.append("Authorization", `Bearer ${token}`);
		myHeaders.append("Content-Type", "application/json");

		var requestOptions = {
		  method: 'DEL',
		  headers: myHeaders,
		  redirect: 'follow'
		};

		fetch(`https://posla-api.herokuapp.com/api/admin/settings/categories/${catId}/delete`, requestOptions)
		  .then(response => response.json())
		  .then((result) => {
		  	const res=result.data;
		  	setCat(res)
		  	console.log(res)
		  })
		  .catch(error => console.log('error', error));

	}
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
		                List Page
		            </div>
		            <div class="box-tools pull-right">
		                <Link to="" class="btn btn-box-tool">
		                    <i class="fa fa-plus"></i>
		                    Link
		                </Link>
		            </div>
		        </div>
		        <div class="box-body">
		            
		            <div class="table-responsive">
		                <table class="table table-striped">
		                    <thead>
		                        <tr>
		                            <td>SN</td>
		                            <td>Column 1</td>
		                            <td>Column 2</td>
		                            <td>Column 3</td>
		                            <td>Column 4</td>
		                            <td>Action</td>
		                        </tr>
		                    </thead>
		                    <tbody>
		                        <tr>
		                            <td>1</td>
		                            <td>
		                                <div class="table-img-text">
		                                    <div>
		                                        <img src='/images/logo.png' class="dp-contain" alt=""/>
		                                    </div>
		                                    <div>
		                                        <div>
		                                            Text Main 1 Lorem Ipsum Something
		                                        </div>
		                                        <div class="text-fade">
		                                            Text Sub 1
		                                        </div>
		                                    </div>
		                                </div>
		                            </td>
		                            <td>
		                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
		                            </td>
		                            <td>
		                                At vero eos et accusam et justo duo dolores et ea rebum.
		                            </td>
		                            <td>
		                                Aug 04, 2020
		                            </td>
		                            <td>
		                                <div class="dropdown1">
		                                    <button type="button" class="btn btn-dark btn-sm dropdown-toggle dropdown-btn1"  >
		                                        Action
		                                    </button>
		                                    <div class="dropdown-menu dropdown-menu-right dropdown-content1">
		                                        <Link to="" class="dropdown-item">
		                                            Link 1
		                                        </Link>
		                                        <Link to="" class="dropdown-item">
		                                            Link 2
		                                        </Link>
		                                    </div>
		                                </div>
		                            </td>
		                        </tr>
		                        <tr>
		                            <td>2</td>
		                            <td>
		                                <div class="table-img-text">
		                                    <div>
		                                        <img src='/images/logo.png' class="dp-contain" alt=""/>
		                                    </div>
		                                    <div>
		                                        <div>
		                                            Text Main 1 Lorem Ipsum Something
		                                        </div>
		                                        <div class="text-fade">
		                                            Text Sub 1
		                                        </div>
		                                    </div>
		                                </div>
		                            </td>
		                            <td>
		                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
		                            </td>
		                            <td>
		                                At vero eos et accusam et justo duo dolores et ea rebum.
		                            </td>
		                            <td>
		                                Aug 04, 2020
		                            </td>
		                            <td>
		                                <form action="" class="form-horizontal" method="post">
		                                    
		                                    <input type="hidden" name="_method" value="delete"/>
		                                    <div class="btn-group">
		                                        <button type="submit" class="btn btn-danger btn-sm" onClick={handleSubmit}>
		                                            <i class="fa fa-trash"></i>
		                                            Delete
		                                        </button>
		                                    </div>
		                                </form>
		                            </td>
		                        </tr>
		                    </tbody>
		                </table>
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

export default AdminList;


    