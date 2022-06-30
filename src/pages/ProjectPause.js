import React, {useState, useEffect} from 'react';
import AccountSidebar from '../components/AccountSidebar';
import ProjectList from '../components/ProjectList';
import Footer from "../components/Footer";
import Header from "../components/Header";
import {Link} from "react-router-dom";

const ProjectPause = () =>{
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
                        <li class="breadcrumb-item"><Link to="/account/projects">Projects</Link></li>
                        <li class="breadcrumb-item active" aria-current="page">Pause Project</li>
                    </ol>
                </div>

                <div class="section">
                    <div class="section-title">
                        Pause Project - #1234
                    </div>
                    <div>

                        <div>
                            Are you sure you want to pause this project?
                        </div>

                        <div class="row mt-30">
                            <div class="col-sm-12">
                                <div class="project-list project-list-wide">
                                    <ProjectList/>
                                </div>
                            </div>

                            <div class="col-sm-12">
                                <div class="note d-inline-block mt-20">
                                    Please note:
                                </div>
                                <ul class="list-style mt-10">
                                    <li>
                                        This action cannot be undone.
                                    </li>
                                    <li class="mt-5">
                                        Paused projects will no longer be active and visible to users on this platform.
                                    </li>
                                    <li class="mt-5">
                                        To keep the project active but private, please <Link to="/account/projects/edit/1234/info" class="underline">edit the visibility</Link> status of this project.
                                    </li>
                                    <li class="mt-5">
                                        Orders already attached to this project will not be affected.
                                    </li>
                                    <li class="mt-5">
                                        Current payments for "featured" ad project, will be paused.
                                    </li>
                                    <li class="mt-5">
                                        All pending refunds on this project will not be affected.
                                    </li>
                                    <li class="mt-5">
                                        Earnings acquired from this project will not be affected.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="mt-20 pt-20 bt-1-ddd">

                            <form action="/account/projects" class="floated-content">
                                <button type="submit" class="btn btn-blue btn-sm pull-right ml-10">
                                    Pause Project
                                </button>
                                <Link to="/account/projects" class="btn btn-transparent-black btn-sm pull-right">
                                    Cancel
                                </Link>
                            </form>

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
export default ProjectPause;