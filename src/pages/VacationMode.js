import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {Link, useNavigate} from "react-router-dom";
import AccountSidebar from '../components/AccountSidebar';

const VacationMode = () =>{

		const navigate = useNavigate();
	    const vacation = (e)=>{
        e.preventDefault();
            var myHeaders = new Headers();
            myHeaders.append("Accept", "application/json");
            myHeaders.append("Authorization", "Bearer 236|mIhQ8zv7X77WUe4YCizSqjpI8VzMpOjw96AquVpB");

            var requestOptions = {
              method: 'POST',
              headers: myHeaders,
              redirect: 'follow'
            };

            fetch("https://posla-api.herokuapp.com/api/account/settings/vacation", requestOptions)
              .then(response => response.json())
              .then((result) => {
              	navigate("/account/settings/vacation-mode-success");
              	console.log(result);
              })
              .catch(error => console.log('error', error));
    }


	return(
		<>
			<Header/>
				<div class="container" style={{marginTop:"20px", marginBottom:"20px"}}>
			        <div class="row">
			            <div class="d-none d-md-block col-md-4 col-lg-3">

			                 <AccountSidebar/>

			            </div>

			            <div class="col-12 col-md-8 col-lg-9">

			                <div aria-label="breadcrumb" class="details-page-breadcrumb mb-10">
			                    <ol class="breadcrumb">
			                        <li class="breadcrumb-item"><Link to="/account">Account</Link></li>
			                        <li class="breadcrumb-item"><Link to="/account/settings">Settings</Link></li>
			                        <li class="breadcrumb-item active" aria-current="page">Vacation Mode</li>
			                    </ol>
			                </div>

			                <div class="section">
			                    <div class="section-title section-title-sm">
			                        Vacation Mode
			                    </div>
			                    <div>

			                        <form action="/account/settings/vacation-mode-success">
			                            <div class="b-1-ddd p-20" style={{padding:"20px"}}>

			                                <div>
			                                    Are you sure you want to put your account on vacation mode?
			                                </div>

			                                <div class="mt-15" style={{marginTop:"15px"}}>
			                                    <div class="note d-inline-block">
			                                        Please note:
			                                    </div>
			                                    <ul class="list-style mt-10" style={{marginTop:"10px"}}>
			                                        <li>
			                                            This will temporarily hide your account generally from our platform.
			                                        </li>
			                                        <li class="mt-5" style={{marginTop:"5px"}}>
			                                            You are allowed to go on vacation mode for as long as you want.
			                                        </li>
			                                        <li class="mt-5" style={{marginTop:"5px"}}>
			                                            You may switch off the vacation mode and put your account back online at anytime.
			                                        </li>
			                                        <li class="mt-5" style={{marginTop:"5px"}}>
			                                            Your deals and project will be hidden generally on the platform.
			                                        </li>
			                                        <li class="mt-5" style={{marginTop:"5px"}}>
			                                            Your current orders will not be affected.
			                                        </li>
			                                        <li class="mt-5" style={{marginTop:"5px"}}>
			                                            Your earnings will not be affected.
			                                        </li>
			                                        <li class="mt-5" style={{marginTop:"5px"}}>
			                                            Your refunds will not be affected.
			                                        </li>
			                                        <li class="mt-5" style={{marginTop:"5px"}}>
			                                            You may request for your payment withdrawal during this period.
			                                        </li>
			                                        <li class="mt-5" style={{marginTop:"5px"}}>
			                                            You will not be allowed to bid for projects during this period.
			                                        </li>
			                                        <li class="mt-5" style={{marginTop:"5px"}}>
			                                            You deals will not be purchasable during this period.
			                                        </li>
			                                    </ul>
			                                </div>
			                                
			                            </div>

			                            <div class="pt-20 mt-20 bt-1-ddd" style={{paddingTop:"20px", marginTop:"20px"}}>

			                                <div class="floated-content">
			                                    <button type="submit" class="btn btn-danger btn-sm pull-right ml-10" style={{marginLeft:"10px"}} onClick={vacation}>
			                                        Turn on Vacation Mode
			                                    </button>
			                                    <Link to="/account/settings" class="btn btn-transparent-black btn-sm pull-right">
			                                        Cancel
			                                    </Link>
			                                </div>

			                            </div>
			                        </form>

			                    </div>
			                </div>


			            </div>
			        </div>
			    </div>
			<Footer/>
		</>
		)
}

export default VacationMode;