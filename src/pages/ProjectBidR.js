import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AccountSidebar from '../components/AccountSidebar';
import ProjectList from '../components/ProjectList';
import {Link} from "react-router-dom";


const ProjectBidR = () => {

     const [result, setResult] = useState("");
    const [error, setError] = useState("");
    const [display, setDisplay] = useState("none");

    useEffect (()=>{
        fetch("https://dummyjson.com/posts")
  .then(response => response.json())
  .then((response)=>{
    setResult(response);
    console.log(response);
  })
  .catch(error => console.log(error));
    },[])
    
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
                        <li class="breadcrumb-item"><a href="/account">Account</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Project Bids</li>
                    </ol>
                </div>

                <div class="section">
                    <div class="section-title section-title-sm">
                        My Project Bids
                    </div>
                    <div>

                        <ul class="nav nav-tabs posla-tabs posla-tabs-3">
                            <li class="nav-item">
                                <a href="/account/project-bids/" class="nav-link active">
                                    <div class="text-center">
                                        Ongoing
                                        <span class="d-none d-sm-inline d-md-none d-lg-inline">
                                            Biddings
                                        </span>
                                        (8)
                                    </div>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="/account/project-bids/accepted" class="nav-link">
                                    <div class="text-center">
                                        Accepted
                                        <span class="d-none d-sm-inline d-md-none d-lg-inline">
                                            Biddings
                                        </span>
                                        (3)
                                    </div>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="/account/project-bids/rejected" class="nav-link">
                                    <div class="text-center">
                                        Rejected
                                        <span class="d-none d-sm-inline d-md-none d-lg-inline">
                                            Biddings
                                        </span>
                                        (14)
                                    </div>
                                </a>
                            </li>
                        </ul>
                    
                        
                        <div class="project-list project-list-mini mt-20 row">


                            
                                {result && result.posts.map((item)=>(
                                    <div class="col-sm-6 col-md-12 col-lg-6 project-mgmt" style={{marginTop:"20px"}}>
                                        <a href="/project/c1d00230-a423-4b84-a121-7105239ff8d8" class="project">
                                            
                                            <div>
                                                <div>
                                                    <span class="fa fa-angle-right icon-50"></span>
                                                </div>
                                                <div class="">
                                                    <div class="font-bold">
                                                        I need a bike rider for my new logistic business
                                                    </div>

                                                    <div class="text-fade ellipsis-2-lines mt-5">
                                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="mt-5 ellipsis">
                                                <div class="project-price">
                                                    $150
                                                </div>
                                                <div class="item-labels">
                                                    <div class="item-labels-new">
                                                        New
                                                    </div>
                                                    <div class="item-labels-featured">
                                                        Featured
                                                    </div>
                                                    <div class="item-labels-proposals">
                                                        18 proposals
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="item-labels item-labels-tags-all ellipsis">
                                                <div class="item-labels-prefix">
                                                    Tags & Skills:
                                                </div>
                                                {item.tags.map((tag)=>(
                                                <div class="item-labels-tags">
                                                    {tag}
                                                </div>
                                                   ))}
                                            </div>

                                        </a>



                                        <div class="p-10 b-1-ddd bg-blue text-fff" style={{padding:"6px"}}>
                                            <a class="btn btn-fff text-333 btn-xs mt-0 mr-5 pull-right" data-toggle="modal" data-target="#proposal-1" onClick={()=>{setDisplay("block")}}>
                                                <span class="far fa-circle bg-333"></span>
                                                View Proposal
                                            </a>
                                            My Proposal: $550
                                        </div>

                                        <div class="modal" id="proposal-1" style={{display:display, background:"rgb(0,0,0, 0.5)", }}>
                                            <div class="modal-dialog">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h4 class="modal-title">Proposal</h4>
                                                        <button type="button" class="close" data-dismiss="modal" onClick={()=>{setDisplay("none")}}>&times;</button>
                                                    </div>
                                                    <div class="modal-body">
                                                        <div class="p-20">
                                                            
                                                            <div class="">
                                                                Proposal price:
                                                                <div class="note font-bold font-16 pt-3 pb-3 pr-10 pl-10 d-inline">
                                                                    $550
                                                                </div>
                                                            </div>

                                                            <hr class="mt-20 mb-20"/>

                                                            <div>
                                                                Proposal Message:
                                                            </div>

                                                            <div class="text-fade line-height-20 mt-5">
                                                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>     

                                ))}

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
export default ProjectBidR;