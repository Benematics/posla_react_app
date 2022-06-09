import React, {useState, useEffect} from 'react';
import {useNavigate, Link} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {login,logout,selectUser} from "../features/userSlice";
import ProjectList from './ProjectList';
import LoadingSpinner from "./LoadingSpinner";

const Container = () =>{
	const [category, setCategory] = useState([]);
	const [index, setIndex] = useState("1");
	const [display, setDisplay] = useState("none");
    const [display1, setDisplay1] = useState("none");
    const [display3, setDisplay3] = useState("none"); 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [test, setTest] = useState("hidden");
    const [show, setShow] = useState("visible");
    const [errMsg, setErrMsg] = useState("none");
    const navigate = useNavigate();


    const user = useSelector(selectUser);
    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logout());

    }
	
	{/*fetch api*/}
	useEffect(()=>{
		fetch("https://jsonplaceholder.typicode.com/users")
			.then(res => res.json())
			.then(res => {
				setCategory(res);
			})
			.catch((error) => {
				console.log(error);
			})
	}, []);

	{/*login api*/}
	const dispatch = useDispatch();
	const handleSubmit = (e) => {    
            e.preventDefault();    
            setIsLoading(true);
            dispatch(
            	login({
            		email: email,
            		password: password,
            		loggedIn: true,
            	}));

			var myHeaders = new Headers();
			myHeaders.append("Content-Type", "application/json");

			var raw = JSON.stringify({
			  "email": email,
			  "password": password
			});

			var requestOptions = {
			  method: 'POST',
			  headers: myHeaders,
			  body: raw,
			  redirect: 'follow'
			};

			fetch("https://posla-api.herokuapp.com/api/auth/login", requestOptions)
			  .then((response) => response.json())
			  .then((result) => {
			  	if( result.status == true){
			  		setTest("visible");
			  		setShow("hidden")
			  		navigate("/account/dashboard");
			  	}else{

			  	}
			  })
		};


    {/*Registration api*/}


    const [display2, setDisplay2] = useState("none")
	const [errors, setErrors] = useState("")
	const [name1, setName1] = useState("")
	const [username1, setUsername1] = useState("")
	const [email1, setEmail1] = useState("")
	const [phone1, setPhone1] = useState("")
	const [pwd1, setPwd1] = useState("")
	const [confirmPwd,setConfirmPwd] = useState("")
	const [test1, setTest1] = useState("");
	const [isLoading, setIsLoading] = useState(false);


	const handleSubmit1 = (e) =>{
		e.preventDefault()
		setIsLoading(true);
        dispatch(
            login({
                    name: name1,
                    username: username1,
                    phone: phone1,
                    email: email1,
                    password: password,
                    loggedIn: true,
                }));
		var myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");

		var raw = JSON.stringify({
		  "name":name1,
		  "username": username1,
		  "email": email1,
		  "password": pwd1,
		  "password_confirmation": confirmPwd,
		  "phone": phone1
		});

		var requestOptions = {
		  method: 'POST',
		  headers: myHeaders,
		  body: raw,
		  redirect: 'follow'
		};

		fetch("https://posla-api.herokuapp.com/api/auth/signup", requestOptions)
		  .then((response) => response.json())
		  .then((result) => {
		  		if (result.message === "successful") {
		  			navigate("/account/registration-successful")
		  			setIsLoading(false)
		  		} else {
		  			alert("invalid user")
		  		}
		  })
		  .catch(error => console.log(error));
		}


	
	{
		/**
	useEffect(()=>{
	fetch("https://posla-api.herokuapp.com/api/front/projects")
		.then(res => res.json())
		.then(res => {
			setCategory(res);
		})
		.catch((error) => {
			console.log(error);
		})
	});



			  	setTest(result);
		  	console.log(result);
		  	if(test[10] == "t"){
			  	navigate("/account/registation-successful")
			  	}
		  })
	**/
	}

{/* Forgot Password api*/}
const [forgetMail, setForgetMail] = useState("");

const handleSubmit2 = (e) =>{
	e.preventDefault()
	var myHeaders = new Headers();
	myHeaders.append("Authorization", "Bearer 41|1rEpfWLienwJOQmLxPuDmRUP5DgtMt5GzThDTKpb");
	myHeaders.append("Content-Type", "application/json");

	var raw = JSON.stringify({
	  "email": forgetMail
	});

	var requestOptions = {
	  method: 'POST',
	  headers: myHeaders,
	  body: raw,
	  redirect: 'follow'
	};

	fetch("https://posla-api.herokuapp.com/api/auth/forgot-password", requestOptions)
	  .then((response) => response.json())
	  .then((result) => {
	  	if (result.status == true) {
	  		navigate("/account/forgot-password/successful")
	  		setIsLoading(false)
	  	} else {
	  		alert("invalid data entry")
	  	}

	  })
	  .catch(error => console.log('error', error));
}


const renderUser = (
<>
<div class="login-cover" style={{display: display}}>
    <div class="just-there"></div>
    <div class="login-pos" style={{backgroundImage: `url(/images/auth-bg-1.png)`, backgroundRepeat:"no-repeat", backgroundPosition:"right bottom"}}>
        <button class="auth-modal-close" onClick={()=>{setDisplay("none");setIndex("1")}}>
            <span class="fa fa-times"></span>
        </button>

        <div class="auth-modal-title">
            <div>
                Account Login
            </div>
            <div>
                Login to manage your projects & deals
            </div>
        </div>

        

        <form method="POST" class="auth-modal-form" action="#" onSubmit={handleSubmit}>

            <div class="form-group">
                <label for="email" class="control-label">
                    Email Address:
                </label>
                <input type="email" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} class="form-control"/>
            </div>
            <div class="input-group">
                <label for="password" class="control-label">
                    Password:
                </label>
                <div class="input-group input-group-password">
                    <input type="password" name="password"  value={password} onChange={(e)=>{setPassword(e.target.value)}} class="form-control"/>
                    <button type="button" class="input-group-btn password-toggle">
                        <span class="fa fa-eye icon-17"></span>
                    </button>
                </div>
            </div>
            <div class="mt-20" style={{marginTop:"20px", marginBottom:"20px"}}>
                <a class="btn-forgot-password-switch text-fade hover-underline cursor-pointer" onClick={()=>{setDisplay3("flex");setDisplay("none");}}>
                    Forgot Password
                </a>
            </div>
            <div class="mt-20">
                <button type="submit" class="btn btn-blue btn-block" disabled={isLoading}>
                    Login
                </button>
            </div>
            <div class="mt-20 text-center" style={{marginTop:"20px", marginBottom:"20px"}}>
                <a class="btn-register-switch text-fade hover-underline cursor-pointer" onClick={()=>{setDisplay1("flex"); setDisplay("none"); }}>
                    Create New Account
                </a>
            </div>
        </form>
        
    </div>
</div>


{/*-- register box --*/}
<div class="login-cover" style={{display: display1}}>
    <div class="just-there"></div>
        <div class="login-pos" style={{backgroundImage: `url(/images/auth-bg-1.png)`, backgroundRepeat:"no-repeat", backgroundPosition:"right bottom"}}>
            <button class="auth-modal-close" onClick={()=>{setDisplay1("none");setIndex("1")}}>
                <span class="fa fa-times"></span>
            </button>

            <div class="auth-modal-title">
                <div>
                    Create New Account
                </div>
                <div>
                    Sign up to manage your projects & deals
                </div>
            </div>


            <form action="#" method="POST" class="auth-modal-form" onSubmit={handleSubmit1}>
                
              <div class="form-group">
                    <label for="name" class="control-label">
                        Fullname:
                    </label>
                    <input type="name" name="name" id="name" class="form-control" value={name1} onChange={(e)=>{setName1(e.target.value)}}/>
                </div>
                
                <div class="form-group">
                    <label for="username" class="control-label">
                        Username:
                    </label>
                    <input type="username" name="username" id="username" class="form-control"  value={username1} onChange={(e)=>{setUsername1(e.target.value)}}/>
                </div>

                <div class="form-group">
                    <label for="email" class="control-label">
                        Email Address:
                    </label>
                    <input type="email" name="email" id="email" class="form-control"  value={email1} onChange={(e)=>{setEmail1(e.target.value)}}/>
                </div>

                <div class="form-group">
                    <label for="tel" class="control-label">
                        Phone Number:
                    </label>
                    <input type="tel" name="phone" id="tel" class="form-control"  value={phone1} onChange={(e)=>{setPhone1(e.target.value)}}/>
                </div>

                <div class="input-group">
                    <label for="password" class="control-label">
                        Password:
                    </label>
                    <div class="input-group input-group-password">
                        <input type="password" name="password" id="password" class="form-control" value={pwd1} onChange={(e)=>{setPwd1(e.target.value)}}/>
                        <button type="button" class="input-group-btn password-toggle">
                            <span class="fa fa-eye icon-17"></span>
                        </button>
                    </div>
                </div>
                <div class="input-group mt-10" style={{marginTop:"10px"}}>
                    <label for="password" class="control-label">
                        Confirm Password:
                    </label>
                    <div class="input-group input-group-password">
                        <input type="password" name="password_confirmation" id="password" class="form-control" value={confirmPwd} onChange={(e)=>{setConfirmPwd(e.target.value)}}/>
                        <button type="button" class="input-group-btn password-toggle">
                            <span class="fa fa-eye icon-17"></span>
                        </button>
                    </div>
                </div>

                <div class="mt-20">
                    <button type="submit" class="btn btn-blue btn-block" style={{marginTop: "20px"}} disabled={isLoading}>
                      Create New Account
                    </button>
                </div>
                  
                <div class="mt-20 text-center" style={{marginTop: "20px"}}>
                    <a class="btn-login-switch text-fade hover-underline cursor-pointer" onClick={()=>{setDisplay1("none"); setDisplay("flex")}}>
                      Already have an account? Login
                    </a>
                </div>

            </form>

        </div>
</div>


{/*-- if error occurs, add class "auth-show" to the div below --*/}


{/*Forgot Password*/}

<div class="login-cover" style={{display: display3}}>
    <div class="just-there"></div>
		<div class="login-pos">
		    <button class="auth-modal-close" onClick={()=>{setDisplay3("none"); setIndex("1")}}>
		        <span class="fa fa-times"></span>
		    </button>

		    <div class="auth-modal-title">
		        <div>
		            Forgot Password
		        </div>
		        <div>
		            Reset your account password with ease
		        </div>
		    </div>


		    <form action="" method="POST" class="auth-modal-form" onSubmit={handleSubmit2}>
		        
		        <div class="page-alert p-0 m-0">
		          <i class="fa fa-user"></i>
		          <div></div>
		          <div>
		            Please enter the email address used in registering your account.
		            -- A password reset link will be sent to your registered email address. --
		          </div>
		        </div>

		        <div class="form-group mt-20" style={{marginTop:"10px"}}>
		            <label for="email" class="control-label">
		                Email Address:
		            </label>
		            <input type="email" name="email" value={forgetMail} id="email" class="form-control" onChange={(e)=>{setForgetMail(e.target.value)}}/>
		        </div>
		        <div class="mt-20">
		            <button type="submit" class="btn btn-blue btn-block">
		                Reset Password
		            </button>
		        </div>
		        <div class="mt-20 text-center" style={{marginTop:"10px"}}>
		            <a class="btn-login-switch text-fade hover-underline cursor-pointer" onClick={()=>{setDisplay3("none"); setDisplay("flex")}}>
		                Remember your password? Login
		            </a>
		        </div>
		    </form>

		</div>
</div>



<div class="navbar navbar-expand-md navbar-dark shadow-sm" style={{zIndex:index}}>
    <div class="container" style={{zIndex:index}}>

        <a class="navbar-brand" href="/">
            <img src="/images/logo-full-fff.png" class="dp-contain" alt="Posla"/>
        </a>

       <div>
       {/**
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> 
               <span class="fa fa-navicon icon-25"></span> 
            </button>
            <a href="/account" class="navbar-toggler mr-5">
                <span class="fa fa-user-circle icon-25"></span>
            </a>
        **/}
            <a class="navbar-toggler header_link_sidebar">
                <span class="fa fa-bars icon-25"></span>
            </a>
        </div>


        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            
            <div class="navbar-nav mr-auto ml-auto layout-search">
                <form action="/search" method="get" class="input-group">
                    <input type="search" name="q" class="form-control" placeholder="Search projects, deals, and freelancers..." />
                    <div class="input-group-btn">
                        <button type="submit" class="btn btn-default btn-md">
                            <span class="fa fa-search"></span>
                        </button>
                    </div>
                </form>
            </div>


            <ul class="navbar-nav navbar-nav-links-nav ml-auto d-none d-lg-flex">
                <li class="nav-item">
                    <a class="nav-link active" href="/account/deals/create">Post Deals</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/deals">Find Deals</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/">Find Projects</a>
                </li>
            </ul>

            <ul class="navbar-nav navbar-nav-links-menu ml-auto d-none d-md-flex d-lg-none">
                <li class="nav-item dropdown">
                    <a id="navbarDropdown" class="nav-link dropdown-toggle no-after nowrap floated-content" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                        <span class="fa fa-caret-down icon-16 pull-right ml-5"></span>
                        Menu
                    </a>
                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="/account/deals/create">
                            Post Deals
                        </a>
                        <a class="dropdown-item" href="/deals">
                            Find Deals
                        </a>
                        <a class="dropdown-item" href="/">
                            Find Projects
                        </a>
                    </div>
                </li>    
            </ul>

            <ul class="navbar-nav navbar-nav-links-auth ml-auto">
                      {user ? 
                    <>
                    <li class="nav-item dropdown" style={{visibility:test}}>
                        <a id="navbarDropdown" class="nav-link dropdown-toggle no-after nowrap floated-content" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                            <span class="fa fa-caret-down icon-16 pull-right ml-5"></span>
                            Username
                        </a>
                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="/account/dashboard">
                                Dashboard
                            </a>
                            <a class="dropdown-item" href="/account/profile">
                                Profile
                            </a>
                            <a class="dropdown-item" href="/account/orders">
                                My Orders
                            </a>
                            <a class="dropdown-item" href="/account/deals">
                                My Deals
                            </a>
                            <a class="dropdown-item" href="/account/projects">
                                My Projects
                            </a>
                            <a class="dropdown-item" href="/account/project-bids">
                                My Project Bids
                            </a>
                            <a class="dropdown-item" href="/account/favourites">
                                Favourites
                            </a>
                            <a class="dropdown-item" href="/messages">
                                Messages
                            </a>
                            <a class="dropdown-item" href="/account/earnings-withdrawals/">
                                Earnings & Withdrawals
                            </a>
                            <a class="dropdown-item" href="/account/wallet">
                                My Wallet
                            </a>
                            <a class="dropdown-item" href="/account/reviews">
                                My Reviews
                            </a>
                            <a class="dropdown-item" href="/account/settings">
                                Account Settings
                            </a>
                            <a class="dropdown-item" href="">
                                Logout
                            </a>
                        </div>
                    </li>    
                    </>
                      	: 
                    <>
                    <li class="nav-item" onClick={()=>{setDisplay("flex"); setIndex("-1");}} style={{visibility: show}}>
                        <a class="nav-link btn-login cursor-pointer" href="#">
                            Login
                        </a>
                    </li>
                    <li class="nav-item" onClick={()=>{setDisplay1("flex"); setIndex("-1");}} style={{visibility: show}}>
                        <a class="nav-link btn-register cursor-pointer" href="#">
                            Register
                        </a>
                    </li>
                    </>

                      }
            </ul>



        </div>

    </div>
</div>
{/*- login box --



- if error occurs, add class "auth-show" to the div below --



			- if error occurs, add class "auth-show" to the div below --
		*/}

			<div class="container" style={{zIndex:index, marginTop:"20px"}}>
		        
		        <div class="row">
		            <div class="col-md-4 col-lg-3 d-none d-md-block">
		                
		                <div class="sticky-top" style={{zIndex:index}}>
		                    <div class="home-category-list">

		        			{category.map((item)=>{ return(
		                    	<a href="/category/business/projects">
		                            <span class="fa fa-angle-right icon-000 icon-18 pull-right d-inline"></span>
		                            {item.name}
		                        </a>
		                    		)})}       
		                    </div>
		                    
		                    <div class="mt-10">
		                        <a href="/support" class="text-fade d-inline hover-underline">
		                            Suggest a category
		                            <span class="fa fa-angle-right icon-grey ml-2"></span>
		                        </a>
		                    </div>
		                </div>
		              </div>

		            <div class="col-md-8 col-lg-6">
		                
		                <div class="row">
		                    <div class="col-sm-6 col-lg-12">
							       <div class="section d-block d-sm-none">
							            <a data-toggle="modal" data-target="#modalCategories" class="d-block">
							                <span class="fa fa-angle-right pull-right icon-18"></span>
							                <span class="fa fa-list-alt pull-left icon-18 mr-10 icon-blue"></span>
							                View all project categories
							            </a>
							        </div>
							        
							        <div class="section">
							            <div class="section-title">
							                Featured Projects
							            </div>
							            <div class="project-list project-list-wide">
										<Link to="/project/c1d00230-a423-4b84-a121-7105239ff8d8" className="project" id="projectlist">
									            <div>
									                <div>
									                    <span className="fa fa-angle-right icon-50"></span>
									                </div>
									                <div className="">
									                    <div className="font-bold">
									                   		njrnfjnrjfn
									                    </div>

									                    <div className="text-fade ellipsis-2-lines mt-5">
									                        nvnkfvkf
									                    </div>
									                </div>
									            </div>

									        <div className="mt-5 ellipsis">
									            <div className="project-price">
									                $150
									            </div>
									            <div className="item-labels">
									                <div className="item-labels-new">
									                    New
									                </div>
									                <div className="item-labels-featured">
									                    Featured
									                </div>
									                <div className="item-labels-proposals">
									                    18 proposals
									                </div>
									            </div>
									        </div>

									        <div className="item-labels item-labels-tags-all ellipsis">
									            <div className="item-labels-prefix">
									                Tags & Skills:
									            </div>
									            <div className="item-labels-tags">
									                Tag name
									            </div>

									        </div>
									        </Link>
							            </div>
							        </div>
							        {category.map((item)=>(

							        <div class="section">
						                <div class="section-title">
						                    {item.name}
						                    <a href="/category/business/projects" class="btn btn-transparent-black btn-xs pull-right hover-bg-orange">View All</a>
						                </div>
						                <div class="project-list project-list-wide">
											<Link to="/project/c1d00230-a423-4b84-a121-7105239ff8d8" className="project" id="projectlist">
									            <div>
									                <div>
									                    <span className="fa fa-angle-right icon-50"></span>
									                </div>
									                <div className="">
									                    <div className="font-bold">
									                       {item.name}
									                    </div>

									                    <div className="text-fade ellipsis-2-lines mt-5">
									                        {item.email}
									                    </div>
									                </div>
									            </div>

									        <div className="mt-5 ellipsis">
									            <div className="project-price">
									                $150
									            </div>
									            <div className="item-labels">
									                <div className="item-labels-new">
									                    New
									                </div>
									                <div className="item-labels-featured">
									                    Featured
									                </div>
									                <div className="item-labels-proposals">
									                    18 proposals
									                </div>
									            </div>
									        </div>

									        <div className="item-labels item-labels-tags-all ellipsis">
									            <div className="item-labels-prefix">
									                Tags & Skills:
									            </div>
									            <div className="item-labels-tags">
									                {item.username}
									            </div>
									        </div>
									        </Link>
						                </div>
						                <a href="/category/business/projects" class="d-block text-center pt-10 pb-10 b-1-ddd bg-eee hover-bg-orange">
						                    View All {item.name} Projects
						                    <span class="fa fa-angle-right"></span>
						                </a>
						            </div>



							        	))}
						    </div>
						</div>
						</div>


							<div class="col-lg-3 d-none d-lg-block" style={{zIndex:index}}>
				                
				                <div class="home-section-user bg-fff shadow-sm mb-30 br-4">
				                    <div></div>
				                    <div class="home-section-user-info">
				                        <a href="/account">
				                            <span class="fa fa-user"></span>
				                        </a>
				                        <div>
				                            <a href="/account" class="font-bold d-block hover-underline">
				                                Olawale Lawal
				                            </a>
				                            <div class="text-fade">
				                                Frontend Developer, UIUX Designer, Graphics Designer
				                            </div>
				                        </div>
				                    </div>
				                    <div>
				                        <a href="/deals" class="btn btn-orange btn-block">
				                            Switch to Buying
				                        </a>
				                    </div>
				                </div>

				                <div class="section pl-10 pr-10 sticky-top">
				                    <div class="section-title">
				                        Latest Projects
				                    </div>
				                    <div class="project-list project-list-mini">
				           

				                    <Link to="/project/c1d00230-a423-4b84-a121-7105239ff8d8" className="project" id="projectlist">
							            <div>
							                <div>
							                    <span className="fa fa-angle-right icon-50"></span>
							                </div>
							                <div className="">
							                    <div className="font-bold">
							                       jjj
							                    </div>

							                    <div className="text-fade ellipsis-2-lines mt-5">
							                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
							                    </div>
							                </div>
							            </div>


							        <div className="mt-5 ellipsis">
							            <div className="project-price">
							                $150
							            </div>
							            <div className="item-labels">
							                <div className="item-labels-new">
							                    New
							                </div>
							                <div className="item-labels-featured">
							                    Featured
							                </div>
							                <div className="item-labels-proposals">
							                    18 proposals
							                </div>
							            </div>
							        </div>

							        <div className="item-labels item-labels-tags-all ellipsis">
							            <div className="item-labels-prefix">
							                Tags & Skills:
							            </div>
							            <div className="item-labels-tags">
							                Tag name
							            </div>
							        </div>
							        </Link>

				                    </div>
				                </div>

				            </div>


        </div> 

    </div>

</>
	);
	return(
<>

{isLoading ? <LoadingSpinner /> : renderUser}
{/*-- login box --*/}

    </>
		)
}
export default Container;