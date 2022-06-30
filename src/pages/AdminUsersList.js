import react, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import AdminHeader from '../components/AdminHeader';
import AdminSidebar from '../components/AdminSidebar';
import AdminFooter from '../components/AdminFooter';


const AdminUsersList = () =>{

	const [user, setUser] = useState([]);
    useEffect(()=>{
        fetch("https://dummyjson.com/users")
        .then(res => res.json())
        .then((res) => {
        	const data = res.users;
            setUser(data);
            console.log(data);
        })
        .catch((error)=>console.log(error))
    },[])


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
			            			<th>Users</th>
			            		</tr>
			            	</thead>
			            	<tbody>
			            	{user && user.map((item)=>{
			            		return (
								<tr>
									<td>{item.firstName}</td>
								</tr>
			            	)})}		
			            	</tbody>
			            </table>
			        </div>
			    </div>
			        <AdminFooter/>
			</div>
		</>
		)
}
export default AdminUsersList;