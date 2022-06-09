import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AccountSidebar from '../components/AccountSidebar';
import {useSelector, useDispatch} from "react-redux";
import {register,selectUser} from "../features/userSlice";


const AccountProfile = () =>{
    const user = useSelector(selectUser);
	return(
		<>
			<Header/>
	<div class="container">
        <div class="row">
            <div class="d-none d-md-block col-md-4 col-lg-3">

                <AccountSidebar/>
            </div>

            <div class="col-12 col-md-8 col-lg-9">

                <div aria-label="breadcrumb" class="details-page-breadcrumb mb-10">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="/">Account</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Profile</li>
                    </ol>
                </div>

                <div class="section">
                    <div class="section-title section-title-sm">
                        My Profile
                        <a href="/account/profile/edit" class="btn btn-blue btn-sm pull-right">Edit Profile</a>
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
                                                {user.name}
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
                                                {user.username}
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
                                               {user.email}
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
                                                {user.phone}
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
                                                Nigeria
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
                                                Male
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
                                                Dec 25, 2021
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
                                    <div class="p-20">
                                        <div class="text-fade">
                                            Short Description:
                                        </div>
                                        <div class="mt-5">
                                            Frontend Developer with expecience in UIUX & Graphcis Design
                                        </div>
                                        <div class="text-fade mt-25">
                                            Long Description :
                                        </div>
                                        <div class="mt-5 text-justify">
                                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
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
                                        <div>
                                            <div>
                                                <span class="fa fa-book"></span>
                                                <div class="overflow-hidden">
                                                    French
                                                </div>
                                            </div>
                                            <div>
                                                Average
                                            </div>
                                        </div>
                                        <div class="bg-eee">
                                            <div>
                                                <span class="fa fa-book"></span>
                                                <div class="overflow-hidden">
                                                    Spanish
                                                </div>
                                            </div>
                                            <div>
                                                Average
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
                                        
                                        <div class="item-labels-tags">
                                            Skills 1
                                        </div>

                                        <div class="item-labels-tags">
                                            Skills 1
                                        </div>

                                        <div class="item-labels-tags">
                                            Skills 1
                                        </div>

                                        <div class="item-labels-tags">
                                            Skills 1
                                        </div>

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