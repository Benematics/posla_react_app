import React,{useState, useEffect} from 'react';
import AdminHeader from '../components/AdminHeader';
import AdminSidebar from '../components/AdminSidebar';
import AdminFooter from '../components/AdminFooter';
import {Link} from "react-router-dom";



const AdminCatList = () =>{
	const [list, setList] = useState("");
	const [token, setToken] = useState("");


    {/*Token*/}
    useEffect(() => {
    const access = localStorage.getItem("token");
    if (access) {
      setToken(access);
      console.log(access);
        }
      }, []);


	{/*Admin Category List*/}
    useEffect(()=>{
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);

        var requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow'
        };

        fetch("https://posla-api.herokuapp.com/api/admin/settings/categories/list", requestOptions)
          .then(response => response.json())
          .then((result) => {
          	const res = result.data;
            setList(res);
            console.log(res)
          })
          .catch(error => console.log('error', error));
    }, [token])
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
		              Categories
		            </div>
		            <div class="box-tools pull-right">
		                <a href="/admin/categories/create" class="btn btn-box-tool">
		                    <i class="fa fa-plus"></i>
		                    Create Category
		                </a>
		            </div>
		        </div>
		        <div class="box-body">
		            
		            <div class="table-responsive">
		                <table class="table table-striped">
		                    <thead>
		                        <tr>
		                            <td>SN</td>
		                            <td>Name</td>
		                            <td>Parent</td>
		                            <td>Position</td>
		                            <td>Status</td>
		                            <td>Action</td>
		                        </tr>
		                    </thead>
		                    <tbody>
		                        {list && list.map((item)=>(
		                        	<tr>
		                        		<td>
		                        			{item.id}
		                        		</td>
		                                <td>
		                                    {item.category_name}
		                                </td>
		                                <td>
		                                    {item.parent}
		                                </td>
		                                <td>
		                                    {item.position}
		                                </td>
		                                <td>
		                                   {item.status}
		                                </td>
		                                <td>
		                                    <a href="/admin/categories/edit" class="btn btn-dark btn-sm">
		                                        <span class="fa fa-edit"></span>
		                                        Edit
		                                    </a>                                   
		                                </td>
		                            </tr> 
		                        	))}
		                        
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
export default AdminCatList;