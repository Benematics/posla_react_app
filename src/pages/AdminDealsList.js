import react, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import AdminHeader from '../components/AdminHeader';
import AdminSidebar from '../components/AdminSidebar';
import AdminFooter from '../components/AdminFooter';



const AdminDealsList = () =>{


	const [deal, setDeal] = useState([]);
    useEffect(()=>{
        fetch("https://dummyjson.com/posts")
        .then(res => res.json())
        .then((res) => {
        	const data = res.posts;
            setDeal(data);
            console.log(data);
        })
        .catch((error)=>console.log(error))
    },[])


	return(
		<>
			<div class="wrapper">
				<AdminSidebar />
			        <header class="main-header" style={{zIndex:"1"}}>
			            <Link to="" class="logo">
			              <span class="logo-mini"><b>Posla</b></span>
			              <span class="logo-lg"><b>Posla</b></span>
			            </Link>
			            <nav class="navbar navbar-static-top">
			              <Link to="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
			                <span class="sr-only">Toggle navigation</span>
			              </Link>

			              <div class="layout-mobile-title d-block d-md-none">
			                Admin Panel
			              </div>
			              
			              <div class="navbar-custom-menu">
			                <ul class="nav navbar-nav">
			                  <li class="dropdown user user-menu" style={{minHeight: "50px"}}>
			                    <Link to="#" class="dropdown-toggle" data-toggle="dropdown" style={{height: "50px"}}>
			                      <img src='/images/user.png' class="user-image" alt="User Image"/>
			                      
			                      <span class="hidden-xs" style={{position: "relative", top: "2px"}}>Fname Lname</span>
			                      <span class="fa fa-angle-down" style={{position:"relative", top: "3px", marginLeft: "5px"}}></span>
			                    </Link>
			                    <ul class="dropdown-menu">
			                      
			                      <li class="user-header" style={{textAlign: "center !important", paddingTop: "15px !important"}}>
			                        
			                        <img src='/images/user.jpg' class="img-circle" alt="fname"/>

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
			            			<th>Deals</th>
			            		</tr>
			            	</thead>
			            	<tbody>
			            	{deal && deal.map((item)=>{
			            		return (
								<tr>
									<td>{item.body}</td>
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
export default AdminDealsList;