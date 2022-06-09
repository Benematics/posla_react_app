import React, {useState, useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {register,selectUser} from "../features/userSlice";


const Header = () => {
    
    const [category, setCategory] = useState([]);
    const [index, setIndex] = useState("1");
    const [display, setDisplay] = useState("none");
    const [display1, setDisplay1] = useState("none");
    const [display3, setDisplay3] = useState("none"); 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [test, setTest] = useState("visible");
    const [show, setShow] = useState("hidden");
    const [errMsg, setErrMsg] = useState("none");
    const navigate = useNavigate();
    const [profile, setProfile] = useState("");
    const [isLoading, setIsLoading] = useState(false);


    {/*handle logout*/}
    const dispatch = useDispatch();
    const user = useSelector(selectUser)
    const handleLogout = (e) => {
        e.preventDefault();
        navigate("/");
        localStorage.clear();

    }
    
     useEffect(() => {
    const loggedInUser = localStorage.getItem("profile");
    if (loggedInUser) {
      setProfile(loggedInUser);
      console.log(loggedInUser);
    }
  }, []);

    {/*fetch api*/}
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(res => {
                setCategory(res);
                setIsLoading(false)
            })
            .catch((error) => {
                console.log(error);
                setIsLoading(false)
            })
    }, []);

    {/*login api*/}
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
                    setIsLoading(false)
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


    const handleSubmit1 = (e) =>{
        e.preventDefault()

        setIsLoading(true);
        dispatch(
            register({
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
                    navigate("/account/registration-successful");
                    setIsLoading(false);
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


    return(
<>
{/*-- login box --*/}
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
                    <input type="password" name="password"  value={password} onChange={(e)=>{setPassword(e.target.value)}} class="form-control" style={{vsibility: "visible"}}/>
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
                        <button type="button" class="input-group-btn password-toggle" disabled={isLoading}>
                            <span class="fa fa-eye icon-17"></span>
                        </button>
                    </div>
                </div>

                <div class="mt-20">
                    <button type="submit" class="btn btn-blue btn-block" style={{marginTop: "20px"}}>
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


            <form action="" method="POST" class="auth-modal-form">
                
                <div class="page-alert p-0 m-0">
                  <span class="fa fa-user-lock icon-50"></span>
                  <div></div>
                  <div>
                    Please enter the email address used in registering your account.
                    -- A password reset link will be sent to your registered email address. --
                  </div>
                </div>

                <div class="form-group mt-20">
                    <label for="email" class="control-label">
                        Email Address:
                    </label>
                    <input type="email" name="email" value="" id="email" class="form-control"/>
                </div>
                <div class="mt-20">
                    <button type="submit" class="btn btn-blue btn-block">
                        Reset Password
                    </button>
                </div>
                <div class="mt-20 text-center">
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
                { user ?
                <>
                    <li class="nav-item dropdown1" style={{visibility:test}}>
                        <a id="navbarDropdown" class="nav-link dropdown-toggle no-after nowrap floated-content dropdown-btn1" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre style={{display:test}}>
                            <span class="fa fa-caret-down icon-16 pull-right ml-5"></span>
                            {user.name}
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
                    <li class="nav-item" onClick={()=>{setDisplay("flex"); setIndex("-1");}} >
                        <a class="nav-link btn-login cursor-pointer" href="#">
                            Login
                        </a>
                    </li>
                    <li class="nav-item" onClick={()=>{setDisplay1("flex"); setIndex("-1");}} >
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

</>
		)
}

export default Header;