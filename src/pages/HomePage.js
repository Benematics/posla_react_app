import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectName from '../components/ProjectName';
import ModalDialog from '../components/ModalDialog';
import {useNavigate, Link} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {register,selectUser} from "../features/userSlice";
import LoadingSpinner from "../components/LoadingSpinner";
import { toast } from 'react-toastify';

const HomePage = () => {
	const [result, setResult] = useState("");
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
    const [ind, setInd] = useState("1");
    const [profile, setProfile] = useState("");
    const [token, setToken] = useState("");
    const [project, setProject] = useState("");
    const [displayNav, setDisplaynav] = useState("none");
    const [modal, setModal] = useState("none");
    const [q, setQ] = useState("");


    const user = useSelector(selectUser);
    const handleLogout = (e) => {
        e.preventDefault();
        setIsLoading(true);
        navigate("/");
    }

	useEffect(()=>{
	var myHeaders = new Headers();
	myHeaders.append("Accept", "application/json");
	myHeaders.append("Authorization", `Bearer ${token}`);

	var requestOptions = {
	  method: 'GET',
	  headers: myHeaders,
	  redirect: 'follow'
	};

	fetch("https://posla-api.herokuapp.com/api/account/dashboard", requestOptions)
	  .then(response => response.json())
	  .then((result) => {
	              const info = result.data[0];
	              localStorage.setItem('account detail', JSON.stringify(info))
	              console.log(info);
	          })
	  .catch(error => console.log('error', error));
	},[token])
	
	{/*fetch api*/}
	useEffect(()=>{
		        var myHeaders = new Headers();
				myHeaders.append("Accept", "application/json");
				myHeaders.append("Authorization", `Bearer ${token}`);

				var requestOptions = {
				  method: 'GET',
				  headers: myHeaders,
				  redirect: 'follow'
				};

				fetch("https://posla-api.herokuapp.com/api/category/main-categories", requestOptions)
				  .then(response => response.json())
				  .then(result => {
				  	const res = result.data;
				  	setCategory(res);
				  	console.log(res);
				  })
				  .catch(error => console.log('error', error));
	}, [token]);




	useEffect(()=>{
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch("https://posla-api.herokuapp.com/api/front/deals", requestOptions)
      .then(response => response.json())
      .then((res) => {
        const deals = res.data;
        setResult(deals);
        console.log(deals);
      })
      .catch(error => console.log('error', error));

    },[token]);
		





	{/*login api*/}
	const dispatch = useDispatch();
	const handleSubmit = (e) => {    
            e.preventDefault();    
            setIsLoading(true);

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
			  		toast("Wrong Password");
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
	const [me, setMe] = useState("");
	


	const handleSubmit1 = (e) =>{
		e.preventDefault()
		setIsLoading(true);
        dispatch(
            register({
                    name: name1,
                    username: username1,
                    phone: phone1,
                    email: email1,
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
		  		const data = result.message;
		  		const access = result.data.token;	
		  		if (data === "successful") {
		  			navigate("/account/registration-successful")
		  			setIsLoading(false)
		  			localStorage.setItem('profile', data)
		  			localStorage.setItem('token', access)
		  			console.log(data)
		  			console.log(access)
		  		} else {
		  			toast("User Not Found");
		  		}
		  })
		  .catch(error => console.log(error));
		}

	{/* LogIn LocalStorage*/}
	useEffect(() => {
    const loggedInUser = localStorage.getItem("profile");
    if (loggedInUser) {
      setProfile(loggedInUser);
      console.log(loggedInUser);
    }
  }, []);


	useEffect(() => {
    const me = localStorage.getItem("account detail");
    if (me) {
      setMe(me);
      console.log(me);
    }
  }, []);

	{/* Token LocalStorage*/}
	useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setToken(token);
      console.log(token);
    }
  }, []);


{/* Forgot Password api*/}
const [forgetMail, setForgetMail] = useState("");

const handleSubmit2 = (e) =>{
	e.preventDefault()
	var myHeaders = new Headers();
	myHeaders.append("Authorization", `Bearer ${token}`);
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
	  		toast("Invalid Data Entry");
	  	}

	  })
	  .catch(error => console.log('error', error));
}

{/* All Projects */}
useEffect(()=>{
	var myHeaders = new Headers();
	myHeaders.append("Authorization", `Bearer ${token}`);

	var requestOptions = {
	  method: 'GET',
	  headers: myHeaders,
	  redirect: 'follow'
	};

	fetch("https://posla-api.herokuapp.com/api/front/projects", requestOptions)
	  .then(response => response.json())
	  .then((result) => {
	  	const res = result.data;
	  	setProject(res);
	  	console.log(res);
	  })
	  .catch(error => console.log('error', error));
},[token])


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


{/*Header*/}
<div class="navbar navbar-expand-md navbar-dark shadow-sm" style={{zIndex:index}}>
    <div class="container" style={{zIndex:index}}>

        <a class="navbar-brand" href="/">
            <img src="/images/logo-full-fff.png" class="dp-contain" alt="Posla"/>
        </a>

       <div>
            <a href="/account" class="navbar-toggler" style={{marginLeft:"5px"}}>
                <span class="fa fa-user-circle icon-25"></span>
            </a>
        
            <a class="navbar-toggler header_link_sidebar" onClick={()=>{setDisplaynav("block")}}>
                <span class="fa fa-bars icon-25"></span>
            </a>
        </div>


        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            
            <div class="navbar-nav mr-auto ml-auto layout-search">
                <form action="/search" method="get" class="input-group" >
                    <input type="search" name="q" class="form-control" placeholder="Search projects, deals, and freelancers..." value={q} onChange={(e)=>{setQ(e.target.value)}}/>
                    <div class="input-group-btn">
                        <button type="submit" class="btn btn-default btn-md" onClick={()=>{localStorage.setItem("Search", `${q}`)}}>
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

            <ul class="navbar-nav navbar-nav-links-menu ml-auto d-md-flex d-none d-lg-none">
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

            <ul class="navbar-nav navbar-nav-links-auth ml-auto" onMouseOver={()=>{setInd("-1")}} onMouseOut={()=>{setInd("1")}}>
                { user ?
                <>
                    <li class="nav-item dropdown1" style={{zIndex:"1"}}>
                        <a id="navbarDropdown" class="nav-link dropdown-toggle no-after nowrap floated-content dropdown-btn1" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre style={{display:test}}>
                            <span class="fa fa-caret-down icon-16 pull-right ml-5"></span>
                            {me.name}
                        </a>
                        <div class="dropdown-menu dropdown-menu-right dropdown-content1" aria-labelledby="navbarDropdown">
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
                            <a class="dropdown-item" href="" onClick={handleLogout}>
                                Logout
                            </a>
                        </div>
                    </li>
                  </>
                :
                  <>
                    <li class="nav-item" onClick={()=>{setDisplay("flex"); setIndex("-1");}} onMouseOver={()=>{setInd("-1")}} onMouseOut={()=>{setInd("1")}}>
                        <a class="nav-link btn-login cursor-pointer" href="#">
                            Login
                        </a>
                    </li>
                    <li class="nav-item" onClick={()=>{setDisplay1("flex"); setIndex("-1");}} onMouseOver={()=>{setInd("-1")}} onMouseOut={()=>{setInd("1")}}>
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
{/*Mobile Header*/}
<div id="sidebar" style={{display: displayNav}}>
{/*-- <div id="sidebar" style="display: block; left: 0;"> --*/}
    <div>
        <a href="/account" id="sidebar_login">
            <div></div>
            <div>
                <div>
                    <img src='/images/logo.png' class="dp-contain" alt="Posla"/>
                </div>
                <div style={{marginTop: "10px"}}>
                   
                        <div class="text-fff font-20 font-bold mt-2 mb-2" style={{lineHeight: "20px"}}>
                            POSLA
                        </div>
                        <div class="text-fade">
                            Work Smart; Earn Smart
                        </div>
                    
                        <span class="fa fa-user-circle icon-fff"></span>
                        Walex996
                        <br/>
                        <div class="text-fade">
                            {/*-- Buyer --*/}
                            Seller
                        </div>
                  
                </div>
            </div>
        </a>
    </div>
    <div id="sidebar_links">
        <ul>

            {/*--
                <li class="sidebar-login nav-auth-out">
                    <a class="btn-login">
                        <span class="fa fa-user-circle" style={{fontSize: "17px"}}></span>
                        <span>Login</span>
                    </a>
                </li>
                <li class="sidebar-register nav-auth-out">
                    <a class="btn-register">
                        <span class="fa fa-user-plus"></span>
                        <span>Register</span>
                    </a>
                </li>
            --*/}


            <li class="dropdown">
                <a class="dropdown-toggle no-after" data-toggle="dropdown">
                    <span class="fa fa-user-circle" style={{fontSize: "17px"}}></span>
                    <span>My Account</span>
                    <span class="fa fa-caret-down pull-right"></span>
                </a>
                <ul class="dropdown-menu">
                    <li class="sidebar-account-dashboard">
                        <a href="/account/dashboard">
                            <span class="fa fa-th-large"></span>
                            <span>Dashboard</span>
                        </a>
                    </li>
                    <li class="sidebar-account-profile">
                        <a href="/account/profile">
                            <span class="fa fa-user"></span>
                            <span>Profile</span>
                        </a>
                    </li>
                    <li class="sidebar-account-orders">
                        <a href="/account/orders">
                            <span class="fa fa-shopping-cart"></span>
                            <span>My Orders</span>
                        </a>
                    </li>
                    <li class="sidebar-account-deals">
                        <a href="/account/deals">
                            <span class="fa fa-share-alt"></span>
                            <span>My Deals</span>
                        </a>
                    </li>
                    <li class="sidebar-account-projects">
                        <a href="/account/projects">
                            <span class="fa fa-star"></span>
                            <span>My Projects</span>
                        </a>
                    </li>
                    <li class="sidebar-account-project-bids">
                        <a href="/account/project-bids">
                            <span class="fa fa-star-half-alt"></span>
                            <span>My Projects Bids</span>
                        </a>
                    </li>
                    <li class="sidebar-account-favourites">
                        <a href="/account/favourites">
                            <span class="fa fa-heart"></span>
                            <span>Favourites</span>
                        </a>
                    </li>
                    <li class="sidebar-account-messages">
                        <a href="/messages">
                            <span class="fa fa-envelope"></span>
                            <span>Messages</span>
                        </a>
                    </li>
                    <li class="sidebar-account-earnings">
                        <a href="/account/earnings-withdrawals/">
                            <span class="fa fa-credit-card"></span>
                            <span>Earnings & Withdrawals</span>
                        </a>
                    </li>
                    <li class="sidebar-account-wallet">
                        <a href="/account/wallet">
                            <span class="fa fa-wallet"></span>
                            <span>My Wallet</span>
                        </a>
                    </li>
                    <li class="sidebar-account-reviews">
                        <a href="/account/reviews">
                            <span class="fa fa-star"></span>
                            <span>My Reviews</span>
                        </a>
                    </li>
                    <li class="sidebar-account-settings">
                        <a href="/account/settings" id="acc-sidebar-settings">
                            <span class="fa fa-user-cog"></span>
                            <span>Account Settings</span>
                        </a>
                    </li>
                </ul>
            </li>

            
            <hr class="hr-blue hr-2"/>

            <li class="sidebar-home">
                <a href="/">
                    <span class="fa fa-home"></span>
                    <span>Home</span>
                </a>
            </li>
            <li class="sidebar-post-deals dropdown">
                <a class="dropdown-toggle no-after" data-toggle="dropdown">
                    <span class="fa fa-list"></span>
                    <span>All Categories Deals</span>
                    <span class="fa fa-caret-down pull-right"></span>
                </a>
                <ul class="dropdown-menu sidebar-category-all">
                    <li class="sidebar-category-category-url">
                        <a href="/category/business/projects">
                            <span class="fa fa-list-alt"></span>
                            <span>Category 1</span>
                        </a>
                    </li>
                    <li class="sidebar-category-category-url">
                        <a href="/category/business/projects">
                            <span class="fa fa-list-alt"></span>
                            <span>Category 2</span>
                        </a>
                    </li>
                    <li class="sidebar-category-category-url">
                        <a href="/category/business/projects">
                            <span class="fa fa-list-alt"></span>
                            <span>Category 3</span>
                        </a>
                    </li>
                    <li class="sidebar-category-category-url">
                        <a href="/category/business/projects">
                            <span class="fa fa-list-alt"></span>
                            <span>Category 4</span>
                        </a>
                    </li>
                    <li class="sidebar-category-category-url">
                        <a href="/category/business/projects">
                            <span class="fa fa-list-alt"></span>
                            <span>Category 5</span>
                        </a>
                    </li>
                </ul>
            </li>
            <li class="sidebar-post-deals">
                <a href="/account/deals/create">
                    <span class="fa fa-star"></span>
                    <span>Post Deals</span>
                </a>
            </li>
            <li class="sidebar-find-deals">
                <a href="/deals">
                    <span class="fa fa-star"></span>
                    <span>Find Deals</span>
                </a>
            </li>
            <li class="sidebar-post-projects">
                <a href="/">
                    <span class="fa fa-star"></span>
                    <span>Post Projects</span>
                </a>
            </li>
            <li class="sidebar-find-projects">
                <a href="/">
                    <span class="fa fa-star"></span>
                    <span>Find Projects</span>
                </a>
            </li>
            <li class="sidebar-search">
                <a href="/search">
                    <span class="fa fa-search"></span>
                    <span>Search</span>
                </a>
            </li>

            <hr class="hr-blue hr-2"/>

            <li class="sidebar-about">
                <a href="/about">
                    <span class="fa fa-align-left"></span>
                    <span>About</span>
                </a>
            </li>
            <li class="sidebar-contact">
                <a href="/support">
                    <span class="fa fa-desktop"></span>
                    <span>Support Center</span>
                </a>
            </li>
            <li class="sidebar-terms">
                <a href="/terms">
                    <span class="fa fa-file"></span>
                    <span>Terms</span>
                </a>
            </li>
            <li class="sidebar-terms">
                <a href="/terms#payment">
                    <span class="fa fa-file"></span>
                    <span>Payment Policy</span>
                </a>
            </li>
            <li class="sidebar-terms">
                <a href="/terms#payment">
                    <span class="fa fa-file"></span>
                    <span>Refund Policy</span>
                </a>
            </li>

            <li class="sidebar-about">
                <a href="/about">
                    <span class="fa fa-align-left"></span>
                    <span>About</span>
                </a>
            </li>
            <li class="sidebar-contact">
                <a href="/support">
                    <span class="fa fa-desktop"></span>
                    <span>Support Center</span>
                </a>
            </li>
            <li class="sidebar-terms">
                <a href="/terms">
                    <span class="fa fa-file"></span>
                    <span>Terms</span>
                </a>
            </li>
            <li class="sidebar-terms">
                <a href="/terms#payment">
                    <span class="fa fa-file"></span>
                    <span>Payment Policy</span>
                </a>
            </li>
            <li class="sidebar-terms">
                <a href="/terms#payment">
                    <span class="fa fa-file"></span>
                    <span>Refund Policy</span>
                </a>
            </li>

            <li class="sidebar-about">
                <a href="/about">
                    <span class="fa fa-align-left"></span>
                    <span>About</span>
                </a>
            </li>
            <li class="sidebar-contact">
                <a href="/support">
                    <span class="fa fa-desktop"></span>
                    <span>Support Center</span>
                </a>
            </li>
            <li class="sidebar-terms">
                <a href="/terms">
                    <span class="fa fa-file"></span>
                    <span>Terms</span>
                </a>
            </li>
            <li class="sidebar-terms">
                <a href="/terms#payment">
                    <span class="fa fa-file"></span>
                    <span>Payment Policy</span>
                </a>
            </li>
            <li class="sidebar-terms">
                <a href="/terms#payment">
                    <span class="fa fa-file"></span>
                    <span>Refund Policy</span>
                </a>
            </li>

            <hr class="hr-blue hr-2"/>
            <li class="nav-auth-in">
                <a href="">
                    <span class="fa fa-sign-out-alt"></span>
                    <span>Logout</span>
                </a>
            </li>
            
        </ul>
    </div>
</div>


<div class="container" style={{zIndex:index, marginTop:"20px"}}>
    
    <div class="row">
        <div class="col-md-4 col-lg-3 d-none d-md-block">
            
            <div class="sticky-top" style={{zIndex:index}}>
                <div class="home-category-list">

    			{category && category.map((item)=>{ return(
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
		                <div class="section">
                            <form action="/account/projects/create" class="post-project">
                                <div class="section-title">
                                    <span class="fa fa-edit"></span>
                                    Create New Project
                                </div>
                                <div class="form-group">
                                    <textarea name="title" id="" class="form-control" placeholder="I need..." style={{height: "50px"}}></textarea>
                                </div>
                                <div class="floated-content">
                                    <div class="form-group pull-left d-none">
                                        <select name="privacy" id="privacy" class="form-control">
                                            <option value="">-- Select Privacy --</option>
                                        </select>
                                    </div>
                                    <button class="btn btn-blue btn-sm pull-right">
                                        Continue
                                        <span class="fa fa-angle-right"></span>
                                    </button>
                                </div>
                            </form>
                        </div>
				       <div class="section d-block d-sm-none">
				            <a data-toggle="modal" data-target="#modalCategories" class="d-block" onClick={()=>{setModal("block")}}>
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
							<a href="/project/c1d00230-a423-4b84-a121-7105239ff8d8" className="project" id="projectlist">
						            <div>
						                <div>
						                    <span className="fa fa-angle-right icon-50" style={{fontSize:"80px", fontWeight:"bolder"}}></span>
						                </div>
						                <div className="">
						                    <div className="font-bold">
						                   		njrnfjnrjfn
						                    </div>

						                    <div className="text-fade ellipsis-2-lines mt-2">
						                        nvnkfvkf
						                    </div>
						                </div>
						            </div>

						        <div className="mt-2 ellipsis">
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
						        </a>
				            </div>
				        </div>
				        

				        <div class="section">
			                <div class="section-title">
			                    Programming & Tech. 3
			                    <a href="/category/business/projects" class="btn btn-transparent-black btn-xs pull-right hover-bg-orange">View All</a>
			                </div>
			                {project && project.data.map((item)=>(
			                <div class="project-list project-list-wide">
								<a href={`/projects/${item.id}`} className="project" id="projectlist">
						            <div>
						                <div>
						                    <span className="fa fa-angle-right icon-50" style={{fontSize:"80px", fontWeight:"bolder"}}></span>
						                </div>
						                <div className="">
						                    <div className="font-bold">
						                       {item.title}
						                    </div>

						                    <div className="text-fade ellipsis-2-lines mt-2">
						                        {item.description}
						                    </div>
						                </div>
						            </div>

							        <div className="mt-2 ellipsis">
							            <div className="project-price">
							                ${item.budget}
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
							              {item.tags}
							            </div>
						            	
							        </div>
						        </a>
			                </div>
			                ))}
			                <a href="/category/business/projects" class="d-block text-center pt-10 pb-10 b-1-ddd bg-eee hover-bg-orange" style={{paddingTop:"10px", paddingBottom:"10px", textAlign:"center"}}>
			                    View All Programming & Tech. 3 Projects
			                    <span class="fa fa-angle-right"></span>
			                </a>
			            </div>
			            /pagination/	
			    </div>
			</div>
			</div>


				<div class="col-lg-3 d-none d-lg-block" style={{zIndex:ind}} onMouseOut={()=>{setInd("1")}}>
	                
	                <div class="home-section-user bg-fff shadow-sm mb-30 br-4">
	                    <div></div>
	                    <div class="home-section-user-info">
	                        <a href="/account">
	                            <span class="fa fa-user"></span>
	                        </a>
	                        <div>
	                            <a href="/account" class="font-bold d-block hover-underline">
	                                {me.name}
	                            </a>
	                            <div class="text-fade">
	                                {me.short_description}
	                            </div>
	                        </div>
	                    </div>
	                    <div>
	                        <a href="/deals" class="btn btn-orange btn-block">
	                            Switch to Buying
	                        </a>
	                    </div>
	                </div>

	               	<div class="section pl-10 pr-10 sticky-top" style={{marginTop:"20px"}}>
	                    <div class="section-title">
	                        Latest Projects
	                    </div>

	                    <div class="project-list project-list-mini">
		                    <a href="/project/c1d00230-a423-4b84-a121-7105239ff8d8" className="project" id="projectlist">
					            <div>
					                <div>
					                    <span className="fa fa-angle-right icon-50"></span>
					                </div>
					                <div className="">
					                    <div className="font-bold">
					                       jjj
					                    </div>

					                    <div className="text-fade ellipsis-2-lines mt-2">
					                        jvjnknkkkjjinkjcwuijejrgknmormkkmlml
					                    </div>
					                </div>
					            </div>


					        <div className="mt-2 ellipsis">
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
					            <div>UI</div>

					        </div>
					        </a>
	                    </div>
	                </div>
	            </div>


        </div> 

    </div>
<Footer/>
</>
	);

	return(
<>
	{isLoading ? <LoadingSpinner /> : renderUser}
</>
		)
}

export default HomePage;