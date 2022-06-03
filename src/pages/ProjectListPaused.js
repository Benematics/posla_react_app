import React from 'react';
import AccountSidebar from '../components/AccountSidebar';
import ProjectList from '../components/ProjectList';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ProjectListPaused = () =>{
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
                        <li class="breadcrumb-item"><a href="/account">Account</a></li>
                        <li class="breadcrumb-item"><a href="/account/projects">Projects</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Paused</li>
                    </ol>
                </div>

                <div class="section">
                    <div class="section-title section-title-sm">
                        Paused Projects (3)
                        <a href="/account/projects/create" class="btn btn-orange btn-sm pull-right hover-bg-orange">Create New Project</a>
                    </div>
                    <div>

                        <ul class="nav nav-tabs posla-tabs posla-tabs-2">
                            <li class="nav-item">
                                <a href="/account/projects/" class="nav-link">
                                    <div class="text-center">
                                        Active Projects (6)
                                    </div>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="/account/projects/paused" class="nav-link active">
                                    <div class="text-center">
                                        Paused Projects (3)
                                    </div>
                                </a>
                            </li>
                        </ul>
                    
                        
                        <div class="project-list project-list-mini mt-20 row">


                            <div class="col-sm-6 col-md-12 col-lg-6 project-mgmt">
                               <ProjectList/>
                                <div class="dropdown">
                                    <label class="label label-fff label-sm mr-5 pull-right" style={{marginTop: "7px"}}>
                                        Paused
                                    </label>
                                    <div id="navbarDropdown" class="nav-link bg-blue dropdown-toggle b-1-blue text-fff" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Manage
                                    </div>
                                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown" style={{marginTop: "-20px"}}>
                                        <a class="dropdown-item" href="/project/c1d00230-a423-4b84-a121-7105239ff8d8678">
                                            Preview
                                        </a>
                                        <a class="dropdown-item cursor-pointer" onClick="event.preventDefault(); document.getElementById('resume-form').submit();">
                                            Resume
                                        </a>
                                        <form id="resume-form" action="" method="POST" class="d-none">
                                            -- hidden input with project id --
                                        </form>
                                        <a class="dropdown-item" href="/account/projects/edit/1234">
                                            Edit
                                        </a>
                                        <a class="dropdown-item" href="/account/projects/delete/1234">
                                            Delete
                                        </a>
                                    </div>
                                </div>
                            </div>


                            <div class="col-sm-6 col-md-12 col-lg-6 project-mgmt">
                               <ProjectList/>
                                <div class="dropdown">
                                    <label class="label label-fff label-sm mr-5 pull-right" style={{marginTop: "7px"}}>
                                        Paused
                                    </label>
                                    <div id="navbarDropdown" class="nav-link bg-blue dropdown-toggle b-1-blue text-fff" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Manage
                                    </div>
                                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown" style={{marginTop: "-20px"}}>
                                        <a class="dropdown-item" href="/project/c1d00230-a423-4b84-a121-7105239ff8d8678">
                                            Preview
                                        </a>
                                        <a class="dropdown-item cursor-pointer" onClick="event.preventDefault(); document.getElementById('resume-form').submit();">
                                            Resume
                                        </a>
                                        <form id="resume-form" action="" method="POST" class="d-none">
                                          
                                            -- hidden input with project id --
                                        </form>
                                        <a class="dropdown-item" href="/account/projects/edit/1234">
                                            Edit
                                        </a>
                                        <a class="dropdown-item" href="/account/projects/delete/1234">
                                            Delete
                                        </a>
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
export default ProjectListPaused; 