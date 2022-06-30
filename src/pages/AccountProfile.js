import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {Link} from "react-router-dom";
import AccountSidebar from '../components/AccountSidebar';
import {useSelector, useDispatch} from "react-redux";
import {register,selectUser} from "../features/userSlice";


const AccountProfile = () =>{
    const user = useSelector(selectUser);
    const [token, setToken] = useState("");
    const [result, setResult] = useState("");
    const [account, setAccount] = useState("");

useEffect(() => {
    const access = localStorage.getItem("token");
    if (access) {
      setToken(access);
      console.log(access);
    }
}, []);

useEffect(() => {
    const acc1 = localStorage.getItem("account detail");
    if (acc1) {
      setAccount(JSON.parse(acc1));
      console.log(acc1);
    }
}, []);

useEffect(()=>{
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch("https://posla-api.herokuapp.com/api/account/profile", requestOptions)
      .then(response => response.json())
      .then((result) => {
        const res = result.data;
        setResult(res)
        console.log(res)
      })
      .catch(error => console.log('error', error));
},[token, result])

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
                        <li class="breadcrumb-item"><Link to="/">Account</Link></li>
                        <li class="breadcrumb-item active" aria-current="page">Profile</li>
                    </ol>
                </div>

                <div class="section">
                    <div class="section-title section-title-sm">
                        My Profile
                        <Link to="/account/profile/edit" class="btn btn-blue btn-sm pull-right">Edit Profile</Link>
                    </div>
                    <div>

                        <div class="row">
                            <div class="col-sm-6 mb-30">

                                <div class="p-10 pl-15 pr-15 font-bold bg-blue text-fff">
                                    Basic Information
                                </div>
                                <div class="b-1-ddd bt-none">
                                    <div class="text-left-right text-left-right-40-60">
                                        <div class="bg-eee">
                                            <div>
                                                <span class="fa fa-user"></span>
                                                <div class="overflow-hidden">
                                                    Name:
                                                </div>
                                            </div>
                                            <div>
                                                {account.name}
                                            </div>
                                        </div>
                                        <div>
                                            <div>
                                                <span class="fa fa-user-circle"></span>
                                                <div class="overflow-hidden">
                                                    Username:
                                                </div>
                                            </div>
                                            <div>
                                                {account.username}
                                            </div>
                                        </div>
                                        <div class="bg-eee">
                                            <div>
                                                <span class="fa fa-envelope"></span>
                                                <div class="overflow-hidden">
                                                    Email Address:
                                                </div>
                                            </div>
                                            <div>
                                               {account.email}
                                            </div>
                                        </div>
                                        <div>
                                            <div>
                                                <span class="fa fa-phone-square"></span>
                                                <div class="overflow-hidden">
                                                    Phone:
                                                </div>
                                            </div>
                                            <div>
                                                {account.phone}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="col-sm-6 mb-30">

                                <div class="p-10 pl-15 pr-15 font-bold bg-blue text-fff">
                                    Additional Information
                                </div>
                                <div class="b-1-ddd bt-none">
                                    <div class="text-left-right text-left-right-40-60">
                                        <div class="bg-eee">
                                            <div>
                                                <span class="fa fa-flag"></span>
                                                <div class="overflow-hidden">
                                                    Country:
                                                </div>
                                            </div>
                                            <div>
                                               {account.country}
                                            </div>
                                        </div>
                                        <div>
                                            <div>
                                                <span class="fa fa-circle"></span>
                                                <div class="overflow-hidden">
                                                    Gender:
                                                </div>
                                            </div>
                                            <div>
                                                {account.gender}
                                            </div>
                                        </div>
                                        <div class="bg-eee">
                                            <div>
                                                <span class="fa fa-calendar"></span>
                                                <div class="overflow-hidden">
                                                    Date of Birth:
                                                </div>
                                            </div>
                                            <div>
                                                {account.dob}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="col-sm-6 mb-30">

                                <div class="p-10 pl-15 pr-15 font-bold bg-blue text-fff">
                                    Description
                                </div>
                                <div class="b-1-ddd bt-none">
                                    <div class="p-20" style={{padding:"20px"}}>
                                        <div class="text-fade">
                                            Short Description:
                                        </div>
                                            <div class="mt-5" style={{marginTop:"5px"}}>
                                                {account.short_description}
                                            </div>
                                            <div class="text-fade mt-25"style={{marginTop:"25px"}}>
                                                Long Description :
                                            </div>
                                            <div class="mt-5 text-justify" style={{marginTop:"5px"}}>  
                                                {account.full_description}    
                                            </div>
                                    </div>
                                </div>

                            </div>


                             <div class="col-sm-6 mb-30">

                                <div class="p-10 pl-15 pr-15 font-bold bg-blue text-fff">
                                    Languages
                                </div>
                                <div class="b-1-ddd bt-none">
                                    <div class="text-left-right text-left-right-40-60">

                                              <div class="bg-eee">
                                                  <div>
                                                      <span class="fa fa-book"></span>
                                                      <div class="overflow-hidden">
                                                          English
                                                      </div>
                                                  </div>
                                                  <div>
                                                      Fluent
                                                  </div>
                                              </div>
                                        
                                    </div>
                                </div>

                                <div class="p-10 pl-15 pr-15 mt-30 font-bold bg-blue text-fff">
                                    Skillset
                                </div>
                                <div class="b-1-ddd bt-none">
                                    <div class="p-15 pt-20 item-labels item-labels-md item-labels-tags-all">
                                   
                                       <div class="item-labels-tags">
                                           Skills 1
                                       </div>
                                     
                                    </div>
                                </div>

                            </div>
                           
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </div>
			<Footer/>
		</>
		)
}
export default AccountProfile;