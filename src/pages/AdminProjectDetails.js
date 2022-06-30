import React, {useState, useEffect} from 'react';
import AdminHeader from '../components/AdminHeader';
import AdminSidebar from '../components/AdminSidebar';
import AdminFooter from "../components/AdminFooter";
import {Link} from "react-router-dom";

const AdminProjectDetails = () => {
	const [result, setResult] = useState("");
	const [token, setToken] = useState("");
	const [Id, setId] = useState("");



    {/*Token*/}
    useEffect(() => {
    const access = localStorage.getItem("token");
    if (access) {
      setToken(access);
      console.log(access);
        }
      }, []);

   {/* Admin Single Project List */}
	useEffect(()=>{
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch(`https://posla-api.herokuapp.com/api/front/projects/${Id}`, requestOptions)
      .then(response => response.json())
      .then((res) => {
        const deals = res.data;
        setResult(deals);
        console.log(deals);
      })
      .catch(error => console.log('error', error));

    },[token]);



    {/*Admin Project Status*/}
	const handleSubmit = (e) => {
		e.preventDefault()
		var myHeaders = new Headers();
		myHeaders.append("Authorization", `Bearer ${token}`);
		myHeaders.append("Content-Type", "application/json");

		var requestOptions = {
		  method: 'PUT',
		  headers: myHeaders,
		  redirect: 'follow'
		};

		fetch(`https://posla-api.herokuapp.com/api/admin/projects/${Id}`, requestOptions)
		  .then(response => response.json())
		  .then((result) => {
		  	const res=result.data;
		  	console.log(res)
		  })
		  .catch(error => console.log('error', error));
	}
	return(
		<>
	<div class="wrapper">
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
	       		 <div class="content-wrapper">
			        <div class="body-wrapper">
			            <table>
			            	<thead>
			            		<tr>
			            			<th>Project Name</th>
			            			<th>Seller</th>
			            			<th>Details</th>
			            			<th>Date</th>
			            			<th>Action</th>
			            		</tr>
			            	</thead>
			            	<tbody>
			            		<td></td>
			            		<td></td>
			            		<td></td>
			            		<td></td>
			            		<td>
	            					<div class="dropdown1">
	                                    <button type="button" class="btn btn-dark btn-sm dropdown-toggle dropdown-btn1"  style={{marginLeft:"0.5rem"}}>
	                                        Action
	                                    </button>
	                                    <div class="dropdown-menu dropdown-menu-right dropdown-content1">
	                                        <Link to="" class="dropdown-item">
	                                            Enable
	                                        </Link>
	                                        <Link to="" class="dropdown-item">
	                                            Disable
	                                        </Link>
	                                    </div>
	                                </div>
			            		</td>
			            	</tbody>
			            </table>
			        </div>
			    </div>
	        <AdminFooter/>
		</div>
		</>
		)
} 
export default AdminProjectDetails;