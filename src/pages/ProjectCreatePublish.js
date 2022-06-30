import React, {useState, useEffect} from 'react';
import AccountSidebar from '../components/AccountSidebar';
import NavTabProjectMgt from '../components/NavTabProjectMgt';
import {Link} from "react-router-dom";
import Header from '../components/Header';
import Footer from '../components/Footer';

const ProjectCreatePublish = () =>{

    const [token, setToken] = useState("");


    useEffect(() => {
        const access = localStorage.getItem("token");
        if (access) {
        setToken(access);
        console.log(access);
        }
    }, [token]);


    const handleSubmit =(e)=>{
        e.preventDefault()
        var myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Authorization", `Bearer ${token}`);

        var formdata = new FormData();
        formdata.append("project_id", "966bfb44-c409-403f-9c67-c01642171868");
        formdata.append("boosted", "1");

        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: formdata,
          redirect: 'follow'
        };

        fetch("https://posla-api.herokuapp.com/api/projects/create/stage-three-publish", requestOptions)
          .then(response => response.json())
          .then(result => console.log(result))
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
                
                <div aria-label="breadcrumb" class="details-page-breadcrumb mb-10" style={{marginBottom:"10px"}}>
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><Link to="/account">Account</Link></li>
                        <li class="breadcrumb-item"><Link to="/account/projects">Projects</Link></li>
                        <li class="breadcrumb-item active" aria-current="page">Create Project</li>
                    </ol>
                </div>
                
                <div class="section">
                    <div class="section-title">
                        Create Project
                    </div>
                    <div>
                        
                        <NavTabProjectMgt/>
                        
                        <div class="tab-content">
                            <div class="tab-pane active">

                                <form action="/account/projects/create/1234/success">
                                    
                                    <input type="hidden" name="stage" value="publish"/>
                                    <div class="b-1-ddd">

                                        <div class="p-20" style={{padding:"20px"}}>
                                            
                                            <div class="mx-auto mw-600 p-20 b-1-ddd" style={{padding:"20px", maxWidth:"600px"}}>
                                                
                                                <div>
                                                    <div class="font-bold">
                                                        Show my project to more sellers
                                                    </div>
                                                    <div class="text-fade">
                                                        This feature is optional. It allows your project to shown more often, to a wider range of potential sellers.
                                                    </div>
                                                </div>
                                                <div class="mt-20" style={{marginTop:"20px"}}>
                                                    <div class="pull-left mr-10" style={{marginRight:"10px"}}>
                                                        <span class="fa fa-check-circle icon-green icon-20"></span>
                                                    </div>
                                                    <div class="overflow-hidden">
                                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                                                    </div>
                                                </div>
                                                <div class="mt-10" style={{marginTop:"10px"}}>
                                                    <div class="pull-left mr-10" style={{marginRight:"10px"}}>
                                                        <span class="fa fa-check-circle icon-green icon-20"></span>
                                                    </div>
                                                    <div class="overflow-hidden">
                                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                                                    </div>
                                                </div>
                                                <div class="mt-10" style={{marginTop:"10px"}}>
                                                    <div class="pull-left mr-10" style={{marginRight:"10px"}}>
                                                        <span class="fa fa-check-circle icon-green icon-20"></span>
                                                    </div>
                                                    <div class="overflow-hidden">
                                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                                                    </div>
                                                </div>
                                            
                                            </div>

                                            <div class="hidden mx-auto mw-600 mt-20" style={{marginTop:"20px", maxWidth:"600px"}}>

                                                <div class="row">
                                                    <div class="col-sm-6">
                                                        <label class="checkbox-inline cursor-pointer d-block">
                                                            <input type="checkbox" name="" class="mr-10 pull-left"/>
                                                            <div class="overflow-hidden">
                                                                Show my project to more sellers
                                                            </div>
                                                        </label>
                                                    </div>
                                                    <div class="col-sm-6 text-right d-none d-sm-block">
                                                        <div class="text-blue font-20 font-bold">
                                                            $3 / month
                                                        </div>
                                                        <div class="text-fade text-small">
                                                            Invoice generated Monthly
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-6 text-left d-block d-sm-none mt-20">
                                                        <div class="text-blue font-20 font-bold">
                                                            $3 / month
                                                        </div>
                                                        <div class="text-fade text-small">
                                                            Invoice generated Monthly
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="mt-30" style={{marginTop:"30px"}}>
                                                    After expiration, your project will no longer be “featured” but it will still be visible to potential sellers accross our platform.
                                                </div>

                                            </div>

                                        </div>
                                        
                                        
                                        <div class="p-15 mt-15 bt-1-ddd floated-content" style={{marginTop:"15px", padding:"15px"}}>
                                            <div class="pull-right">
                                                <Link to="/account/projects/edit/1234/info" class="btn btn-transparent-black btn-sm icon-left">
                                                    <span class="fa fa-angle-left"></span>
                                                    Back
                                                </Link>
                                                <button type="submit" class="btn btn-blue btn-sm icon-right" style={{marginLeft:"10px"}} onClick={handleSubmit}>
                                                    Publish
                                                    <span class="fa fa-check-circle"></span>
                                                </button>
                                            </div>
                                        </div>

                                    </div>
                                </form>
                                
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
export default ProjectCreatePublish;