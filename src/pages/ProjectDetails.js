import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ShareModal from '../components/ShareModal';
import ProjectList from '../components/ProjectList';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from "react-redux";
import {register,selectUser} from "../features/userSlice";

const ProjectDetails = () => {

    const [project, setProject] = useState([]);
    const [pro,setPro] = useState("");
    const [buyer, setBuyer] = useState("");
    const user = useSelector(selectUser);
    useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(res => {
            setProject(res);
        })
        .catch((error) => {
            console.log(error);
        })
    });

    useEffect(()=>{
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then((res)=>{
            setPro(res);
            console.log(res);
        })
    },[]);


    useEffect(()=>{
        fetch('https://dummyjson.com/users/1')
        .then(res => res.json())
        .then((res)=>{
            setBuyer(res);
            console.log(res);
        });
    },[])


	return(
		<>
		<Header/>
		<ShareModal/>
		<div class="container" style={{marginTop: "20px"}}>
	        
	        <div class="section d-none d-sm-block p-5">
	            <div class="row">
	                <div class="col-lg-6">
	                    <ul class="ul-inline details-page-top">
	                        <li>
	                            <Link to="#overview">
	                                Overview
	                            </Link>
	                        </li>
	                        <li>
	                            <Link to="#description">
	                                Description
	                            </Link>
	                        </li>
	                        <li>
	                            <Link to="#about">
	                                About This Buyer
	                            </Link>
	                        </li>
	                        <li>
	                            <Link to="#proposals">
	                                Proposals
	                            </Link>
	                        </li>
	                    </ul>
	                </div>
	                <div class="col-lg-6 d-none d-lg-block">
	                    <form action="">
	                        <ul class="ul-inline pull-right mt-1">
	                            <li>
	                                <button type="submit" class="btn btn-transparent-black btn-xs hover-bg-orange" title="Favourite" data-widget="collapse" data-toggle="tooltip">
	                                    <span class="fa fa-heart" style={{position: "relative", top: "1px"}}></span>
	                                </button>
	                            </li>
	                            <li>
	                                <a class="p-0" title="Share Project" data-widget="collapse" data-toggle="tooltip">
	                                    <button type="button" class="btn btn-transparent-black btn-xs hover-bg-orange" data-toggle="modal" data-target="#shareModal">
	                                        <span class="fa fa-share-alt"></span>
	                                    </button>
	                                </a>
	                            </li>
	                            <li>
	                                <a data-toggle="modal" data-target="#flag" class="btn btn-transparent-black btn-xs hover-bg-orange" title="Report Project" data-widget="collapse" data-toggle="tooltip">
	                                    <span class="fa fa-flag"></span>
	                                </a>
	                            </li>
	                        </ul>
	                    </form>
	                </div>
	            </div>
	        </div>


	        <div class="row">
            
            <div class="col-md-8">

                <div aria-label="breadcrumb" class="details-page-breadcrumb mb-10">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><Link to="/category/projects/category1">Category</Link></li>
                        <li class="breadcrumb-item"><Link to="/category/projects/category1">SubCategory</Link></li>
                        <li class="breadcrumb-item active" aria-current="page">12345678</li>
                    </ol>
                </div>

                <div id="overview">
                    <div>
                        <h4 class="font-bold">
                            I Need An Accountant For My New Logistics Busine
                        </h4>
                    </div>
                    <div class="details-title-sub floated-content mt-10">
                        <div class="pull-left">
                            <Link to="/user/abcde12345" class="user-img-text">
                                <div>
                                    <img src="/images/user.png" alt="Firstname lastname" class="dp-contain" />
                                </div>
                                <div class="hover-underline">
                                    {user.name}
                                </div>
                            </Link>
                        </div>
                        <div class="pull-left">|</div>
                        <div class="pull-left">
                            5 months ago
                        </div>
                    </div>
                </div>

                <div class="section mt-10">
                    <div class="row">
                        <div class="col-6 col-sm-3 col-md-6 col-lg-3 text-center br-2-ddd pt-10 pb-10">
                            <div class="font-20 font-bold">
                                $1500
                            </div>
                            <div class="text-fade">
                                Budget
                            </div>
                        </div>
                        <div class="col-6 col-sm-3 col-md-6 col-lg-3 text-center br-2-ddd pt-10 pb-10 b-none b-md-none">
                            <div class="font-20 font-bold">
                                23
                            </div>
                            <div class="text-fade">
                                Proposals
                            </div>
                        </div>
                        <div class="col-6 col-sm-3 col-md-6 col-lg-3 text-center br-2-ddd pt-10 pb-10">
                            <div class="font-20 font-bold">
                                41
                            </div>
                            <div class="text-fade">
                                views
                            </div>
                        </div>
                        <div class="col-6 col-sm-3 col-md-6 col-lg-3 text-center pt-10 pb-10">
                           
                            <div class="font-20 font-bold status-open">
                                Open
                            </div>
                            <div class="text-fade">
                                Status
                            </div>
                        </div>
                    </div>
                </div>

                <div class="section" id="description">
                    <div class="section-title">
                        Description
                    </div>
                    <div class="line-height-25">
                        Application Type: iOS (Native) <br/>
                        Brief: App Based Security and Community management System. <br/>
                        Some Similar Apps/Websites: Mygate<br/>
                        Features: 3 Modules, Guard Resident and tenant Admin/Super Admin  <br/>
                        Designs: Need to be developed<br/>
                        APIs Status: Need to be developed<br/>
                        Backend Technology (APIs): APIs need to be developed in NodeJS<br/>
                        Send a Proposal if you can do it and I will send a detailed Requirement Documents for further discussion if I shortlist your Proposal.
                    </div>
                    <div class="mt-10">
                        <div class="pt-10 bt-1-ddd item-labels item-labels-tags-all d-block">
                            <div class="item-labels-prefix">
                                Tags & Skills:
                            </div>
                            <div class="item-labels-tags">
                                tag1
                            </div>
                            <div class="item-labels-tags">
                                tag1
                            </div>
                            <div class="item-labels-tags">
                                tag1
                            </div>
                            <div class="item-labels-tags">
                                tag1
                            </div>
                            <div class="item-labels-tags">
                                tag1
                            </div>
                            <div class="item-labels-tags">
                                tag1
                            </div>
                        </div>
                    </div>
                </div>

                <div class="d-block d-md-none">
                    <div class="section">
                        <div>
                            <button type="button" class="btn btn-blue btn-block" data-toggle="modal" data-target="#send_proposal">
                                Send Proposal
                            </button>
                        </div>
                        <div class="mt-15 mb-10">
                            Posted By:
                        </div>
                        <div class="text-left-right text-left-right-60-40">
                            <div class="bg-eee">
                                <div>
                                    <span class="fa fa-user"></span>
                                    <div class="overflow-hidden">
                                        Name:
                                    </div>
                                </div>
                                <div>
                                    {buyer.firstName} {buyer.lastName}
                                </div>
                            </div>
                            <div>
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
                            <div class="bg-eee">
                                <div>
                                    <span class="fa fa-file"></span>
                                    <div class="overflow-hidden">
                                        Projects Posted:
                                    </div>
                                </div>
                                <div>
                                    10
                                </div>
                            </div>
                            <div>
                                <div>
                                    <span class="fa fa-file-alt"></span>
                                    <div class="overflow-hidden">
                                        Projects Issuance:
                                    </div>
                                </div>
                                <div>
                                    90%
                                </div>
                            </div>
                            <div class="bg-eee">
                                <div>
                                    <span class="fa fa-file-alt"></span>
                                    <div class="overflow-hidden">
                                        Projects Completed:
                                    </div>
                                </div>
                                <div>
                                    70%
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="section">
                        <div class="section-title">
                            Share Link
                        </div>
                        <div>
                            <div class="">
                                This is a private project. Copy the link below to share.
                            </div>
                            <div>
                                <div class="copy-link mt-5">
                                    <div class="input-group">
                                        <input type="search" name="q" class="form-control"  id="direct-share-link-1" value="$share_link" readonly />
                                        <div class="input-group-btn" >
                                            <button type="submit" class="btn btn-blue btn-md"  style={{borderRadius: "0", height: "35px", marginLeft:"5px"}}>
                                                <span class="fa fa-copy"></span>
                                                <span>Copy</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="text-center mt-10" >
                                    <button type="button" class="btn btn-transparent-black btn-sm" data-toggle="modal" data-target="#shareModal" style={{marginTop:"5px"}}>
                                        <span class="fa fa-share-alt"></span>
                                        Share this Deal
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="section" id="about">
                    <div class="section-title">
                        About this Buyer
                    </div>
                    <div>
                        <Link to="/user/abcde12345" class="user-img-text user-img-text-md">
                            <div>
                                <img src={buyer.image} alt="Firstname lastname" class="dp-contain" />
                            </div>
                            <div class="pt-5 underline-none">
                                {buyer.firstName} {buyer.lastName}
                                <div class="pt-1">
                                    <button class="btn btn-transparent-black btn-xs hover-bg-black">
                                        View buyer's profile
                                    </button>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div class="bt-1-ddd pt-10 mt-10">
                        <div class="row">
                            <div class="col-sm-6 mb-20">
                                <div class="text-fade">
                                    Country
                                </div>
                                <div>
                                    Ireland
                                </div>
                            </div>
                            <div class="col-sm-6 mb-20">
                                <div class="text-fade">
                                    Gender
                                </div>
                                <div>
                                    {buyer.gender}
                                </div>
                            </div>
                            <div class="col-sm-6 mb-20">
                                <div class="text-fade">
                                    Member Since
                                </div>
                                <div>
                                    project-owner created_at
                                </div>
                            </div>
                            <div class="col-sm-6 mb-20">
                                <div class="text-fade">
                                    Project Issuance Rate
                                </div>
                                <div class="text-orange">
                                    90%
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="line-height-20 bt-1-ddd pt-10">
                        Hi, I am a project manager working for a startup here in Ireland. I also help clients (individuals and businesses) to manage their online platforms (be it Web, Mobile, or Desktop Applications). I can manage projects both at development stage and maintenance stage.
                    </div>
                </div>

                


                <div class="section mb-0" id="proposals">
                    <div class="section-title">
                        Proposals
                    </div>
                    <div>
                        <ul class="nav nav-tabs posla-tabs posla-tabs-4">
                            <li class="nav-item">
                                <a class="nav-link active" data-toggle="tab" href="#proposals_all">
                                    <div class="font-20 font-bold">
                                        17
                                    </div>
                                    <div class="text-fade line-height-mini mb-5">
                                        Received Proposals
                                    </div>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-toggle="tab" href="#proposals_active">
                                    <div class="font-20 font-bold">
                                        10
                                    </div>
                                    <div class="text-fade line-height-mini mb-5">
                                        Active Proposals
                                    </div>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-toggle="tab" href="#proposals_shortlisted">
                                    <div class="font-20 font-bold">
                                        3
                                    </div>
                                    <div class="text-fade line-height-mini mb-5">
                                        Shortlisted Proposals
                                    </div>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-toggle="tab" href="#proposals_rejected">
                                    <div class="font-20 font-bold">
                                        7
                                    </div>
                                    <div class="text-fade line-height-mini mb-5">
                                        Rejected Proposals
                                    </div>
                                </a>
                            </li>
                        </ul>




                          
                        

                          
                        <div class="tab-content">
                            <div class="tab-pane container active p-0" id="proposals_all">

                                <form action="">
                                    <div class="user-img-text user-img-text-md bb-1-ddd proposal-list-each">
                                        <Link to="" class="pull-left">
                                            <img src='/images/user.png' alt="Firstname lastname" class="dp-contain" />
                                        </Link>
                                        <div class="pull-right d-none d-sm-block d-md-none d-lg-block ml-15">
                                            <div>
                                                <div class="rating-box">
                                                    <div>
                                                        <div></div>
                                                        <div style={{width:"75%"}}></div>  put product rating here (in percentage) 
                                                    </div>
                                                    <div>
                                                        <span class="fa fa-star"></span> 
                                                        3.75
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="text-fade">
                                                12 projects received
                                            </div>
                                            <div class="text-fade">
                                                9 projects completed
                                            </div>
                                        </div>
                                        <div class="overflow-hidden">
                                            <Link to="" class="font-bold hover-underline">
                                                John Clifford
                                            </Link>
                                            <div class="text-fade">
                                                <span class="fa fa-flag text-fade"></span>
                                                Nigeria
                                                &nbsp; | &nbsp;
                                                <span class="fa fa-clock text-fade"></span>
                                                2 hours ago
                                            </div>
                                            <div class="text-fade">
                                                Swift, Objective C, Python, Machine Learning, AI
                                            </div>
                                            <div class="d-block d-sm-none d-md-block d-lg-none">
                                                <div class="rating-box">
                                                    <div>
                                                        <div></div>
                                                        <div style={{width:"75%"}}></div> put product rating here (in percentage) 
                                                    </div>
                                                    <div>
                                                        <span class="fa fa-star"></span> 
                                                        3.75
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="mt-2">
                                                <button type="button" class="btn btn-blue btn-xs" data-toggle="modal" data-target="#view_proposal_1">View Proposal</button>
                                                <button type="submit" class="btn btn-transparent-black btn-xs hover-bg-red" title="Remove shortlist" data-widget="collapse" data-toggle="tooltip">Shortlisted</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>

                                <form action="">
                                    <div class="user-img-text user-img-text-md bb-1-ddd proposal-list-each">
                                        <Link to="" class="pull-left">
                                            <img src='/images/user.png' alt="Firstname lastname" class="dp-contain" />
                                        </Link>
                                        <div class="pull-right d-none d-sm-block d-md-none d-lg-block ml-15">
                                            <div>
                                                <div class="rating-box">
                                                    <div>
                                                        <div></div>
                                                        <div style={{width:"75%"}}></div>  put product rating here (in percentage) 
                                                    </div>
                                                    <div>
                                                        <span class="fa fa-star"></span> 
                                                        3.75
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="text-fade">
                                                12 projects received
                                            </div>
                                            <div class="text-fade">
                                                9 projects completed
                                            </div>
                                        </div>
                                        <div class="overflow-hidden">
                                            <Link to="" class="font-bold hover-underline">
                                                John Clifford
                                            </Link>
                                            <div class="text-fade">
                                                <span class="fa fa-flag text-fade"></span>
                                                Nigeria
                                                &nbsp; | &nbsp;
                                                <span class="fa fa-clock text-fade"></span>
                                                2 hours ago
                                            </div>
                                            <div class="text-fade">
                                                Swift, Objective C, Python, Machine Learning, AI
                                            </div>
                                            <div class="d-block d-sm-none d-md-block d-lg-none">
                                                <div class="rating-box">
                                                    <div>
                                                        <div></div>
                                                        <div style={{width:"75%"}}></div> put product rating here (in percentage) 
                                                    </div>
                                                    <div>
                                                        <span class="fa fa-star"></span> 
                                                        3.75
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="mt-2">
                                                <button type="button" class="btn btn-blue btn-xs" data-toggle="modal" data-target="#view_proposal_1">View Proposal</button>
                                                <button type="submit" class="btn btn-orange btn-xs">Shortlist</button>
                                                <button type="submit" class="btn btn-transparent-black hover-bg-red btn-xs">Reject</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>

                            </div>

                            <div class="tab-pane container p-0 fade" id="proposals_active">
                                
                                <form action="">
                                    <div class="user-img-text user-img-text-md bb-1-ddd proposal-list-each">
                                        <Link to="" class="pull-left">
                                            <img src='/images/user.png' alt="Firstname lastname" class="dp-contain" />
                                        </Link>
                                        <div class="pull-right d-none d-sm-block d-md-none d-lg-block ml-15">
                                            <div>
                                                <div class="rating-box">
                                                    <div>
                                                        <div></div>
                                                        <div style={{width:"75%"}}></div>  put product rating here (in percentage)
                                                    </div>
                                                    <div>
                                                        <span class="fa fa-star"></span> 
                                                        3.75
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="text-fade">
                                                12 projects received
                                            </div>
                                            <div class="text-fade">
                                                9 projects completed
                                            </div>
                                        </div>
                                        <div class="overflow-hidden">
                                            <Link to="" class="font-bold hover-underline">
                                                John Clifford
                                            </Link>
                                            <div class="text-fade">
                                                <span class="fa fa-flag text-fade"></span>
                                                Nigeria
                                                &nbsp; | &nbsp;
                                                <span class="fa fa-clock text-fade"></span>
                                                2 hours ago
                                            </div>
                                            <div class="text-fade">
                                                Swift, Objective C, Python, Machine Learning, AI
                                            </div>
                                            <div class="d-block d-sm-none d-md-block d-lg-none">
                                                <div class="rating-box">
                                                    <div>
                                                        <div></div>
                                                        <div style={{width:"75%"}}></div>  put product rating here (in percentage) 
                                                    </div>
                                                    <div>
                                                        <span class="fa fa-star"></span> 
                                                        3.75
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="mt-2">
                                                <button type="button" class="btn btn-blue btn-xs" data-toggle="modal" data-target="#view_proposal_1">View Proposal</button>
                                                <button type="submit" class="btn btn-orange btn-xs">Shortlist</button>
                                                <button type="submit" class="btn btn-transparent-black hover-bg-red btn-xs">Reject</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>

                                <form action="">
                                    <div class="user-img-text user-img-text-md bb-1-ddd proposal-list-each">
                                        <Link to="" class="pull-left">
                                            <img src='/images/user.png' alt="Firstname lastname" class="dp-contain" />
                                        </Link>
                                        <div class="pull-right d-none d-sm-block d-md-none d-lg-block ml-15">
                                            <div>
                                                <div class="rating-box">
                                                    <div>
                                                        <div></div>
                                                        <div style={{width:"75%"}}></div> put product rating here (in percentage) 
                                                    </div>
                                                    <div>
                                                        <span class="fa fa-star"></span> 
                                                        3.75
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="text-fade">
                                                12 projects received
                                            </div>
                                            <div class="text-fade">
                                                9 projects completed
                                            </div>
                                        </div>
                                        <div class="overflow-hidden">
                                            <Link to="" class="font-bold hover-underline">
                                                John Clifford
                                            </Link>
                                            <div class="text-fade">
                                                <span class="fa fa-flag text-fade"></span>
                                                Nigeria
                                                &nbsp; | &nbsp;
                                                <span class="fa fa-clock text-fade"></span>
                                                2 hours ago
                                            </div>
                                            <div class="text-fade">
                                                Swift, Objective C, Python, Machine Learning, AI
                                            </div>
                                            <div class="d-block d-sm-none d-md-block d-lg-none">
                                                <div class="rating-box">
                                                    <div>
                                                        <div></div>
                                                        <div style={{width:"75%"}}></div>  put product rating here (in percentage) 
                                                    </div>
                                                    <div>
                                                         <span class="fa fa-star"></span> 
                                                        3.75
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="mt-2">
                                                <button type="button" class="btn btn-blue btn-xs" data-toggle="modal" data-target="#view_proposal_1">View Proposal</button>
                                                <button type="submit" class="btn btn-orange btn-xs">Shortlist</button>
                                                <button type="submit" class="btn btn-transparent-black hover-bg-red btn-xs">Reject</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>

                                <form action="">
                                    <div class="user-img-text user-img-text-md bb-1-ddd proposal-list-each">
                                        <Link to="" class="pull-left">
                                            <img src='/images/user.png' alt="Firstname lastname" class="dp-contain" />
                                        </Link>
                                        <div class="pull-right d-none d-sm-block d-md-none d-lg-block ml-15">
                                            <div>
                                                <div class="rating-box">
                                                    <div>
                                                        <div></div>
                                                        <div style={{width:"75%"}}></div>  put product rating here (in percentage) 
                                                    </div>
                                                    <div>
                                                        <span class="fa fa-star"></span> 
                                                        3.75
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="text-fade">
                                                12 projects received
                                            </div>
                                            <div class="text-fade">
                                                9 projects completed
                                            </div>
                                        </div>
                                        <div class="overflow-hidden">
                                            <Link to="" class="font-bold hover-underline">
                                                John Clifford
                                            </Link>
                                            <div class="text-fade">
                                                <span class="fa fa-flag text-fade"></span>
                                                Nigeria
                                                &nbsp; | &nbsp;
                                                <span class="fa fa-clock text-fade"></span>
                                                2 hours ago
                                            </div>
                                            <div class="text-fade">
                                                Swift, Objective C, Python, Machine Learning, AI
                                            </div>
                                            <div class="d-block d-sm-none d-md-block d-lg-none">
                                                <div class="rating-box">
                                                    <div>
                                                        <div></div>
                                                        <div style={{width:"75%"}}></div> put product rating here (in percentage)
                                                    </div>
                                                    <div>
                                                         <span class="fa fa-star"></span>
                                                        3.75
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="mt-2">
                                                <button type="button" class="btn btn-blue btn-xs" data-toggle="modal" data-target="#view_proposal_1">View Proposal</button>
                                                <button type="submit" class="btn btn-orange btn-xs">Shortlist</button>
                                                <button type="submit" class="btn btn-transparent-black hover-bg-red btn-xs">Reject</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>

                            </div>

                            <div class="tab-pane container p-0 fade" id="proposals_shortlisted">

                                <form action="">
                                    <div class="user-img-text user-img-text-md bb-1-ddd proposal-list-each">
                                        <Link to="" class="pull-left">
                                            <img src='/images/user.png' alt="Firstname lastname" class="dp-contain" />
                                        </Link>
                                        <div class="pull-right d-none d-sm-block d-md-none d-lg-block ml-15">
                                            <div>
                                                <div class="rating-box">
                                                    <div>
                                                        <div></div>
                                                        <div style={{width:"75%"}}></div>  put product rating here (in percentage) 
                                                    </div>
                                                    <div>
                                                         <span class="fa fa-star"></span> 
                                                        3.75
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="text-fade">
                                                12 projects received
                                            </div>
                                            <div class="text-fade">
                                                9 projects completed
                                            </div>
                                        </div>
                                        <div class="overflow-hidden">
                                            <Link to="" class="font-bold hover-underline">
                                                John Clifford
                                            </Link>
                                            <div class="text-fade">
                                                <span class="fa fa-flag text-fade"></span>
                                                Nigeria
                                                &nbsp; | &nbsp;
                                                <span class="fa fa-clock text-fade"></span>
                                                2 hours ago
                                            </div>
                                            <div class="text-fade">
                                                Swift, Objective C, Python, Machine Learning, AI
                                            </div>
                                            <div class="d-block d-sm-none d-md-block d-lg-none">
                                                <div class="rating-box">
                                                    <div>
                                                        <div></div>
                                                        <div style={{width:"75%"}}></div>  put product rating here (in percentage)
                                                    </div>
                                                    <div>
                                                        <span class="fa fa-star"></span> 
                                                        3.75
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="mt-2">
                                                <button type="button" class="btn btn-blue btn-xs" data-toggle="modal" data-target="#view_proposal_2">View Proposal</button>
                                                <button type="button" class="btn btn-orange btn-xs" data-toggle="modal" data-target="#view_proposal_2">Assign Project</button>
                                                <button type="submit" class="btn btn-transparent-black btn-xs hover-bg-red" title="Remove shortlist" data-widget="collapse" data-toggle="tooltip">Shortlisted</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>

                                <form action="">
                                    <div class="user-img-text user-img-text-md bb-1-ddd proposal-list-each">
                                        <Link to="" class="pull-left">
                                            <img src='/images/user.png' alt="Firstname lastname" class="dp-contain" />
                                        </Link>
                                        <div class="pull-right d-none d-sm-block d-md-none d-lg-block ml-15">
                                            <div>
                                                <div class="rating-box">
                                                    <div>
                                                        <div></div>
                                                        <div style={{width:"75%"}}></div> put product rating here (in percentage)
                                                    </div>
                                                    <div>
                                                        <span class="fa fa-star"></span> 
                                                        3.75
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="text-fade">
                                                12 projects received
                                            </div>
                                            <div class="text-fade">
                                                9 projects completed
                                            </div>
                                        </div>
                                        <div class="overflow-hidden">
                                            <Link to="" class="font-bold hover-underline">
                                                John Clifford
                                            </Link>
                                            <div class="text-fade">
                                                <span class="fa fa-flag text-fade"></span>
                                                Nigeria
                                                &nbsp; | &nbsp;
                                                <span class="fa fa-clock text-fade"></span>
                                                2 hours ago
                                            </div>
                                            <div class="text-fade">
                                                Swift, Objective C, Python, Machine Learning, AI
                                            </div>
                                            <div class="d-block d-sm-none d-md-block d-lg-none">
                                                <div class="rating-box">
                                                    <div>
                                                        <div></div>
                                                        <div style={{width:"75%"}}></div> put product rating here (in percentage) 
                                                    </div>
                                                    <div>
                                                        <span class="fa fa-star"></span> 
                                                        3.75
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="mt-2">
                                                <button type="button" class="btn btn-blue btn-xs" data-toggle="modal" data-target="#view_proposal_2">View Proposal</button>
                                                <button type="button" class="btn btn-orange btn-xs" data-toggle="modal" data-target="#view_proposal_2">Assign Project</button>
                                                <button type="submit" class="btn btn-transparent-black btn-xs hover-bg-red" title="Remove shortlist" data-widget="collapse" data-toggle="tooltip">Shortlisted</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>

                                <form action="">
                                    <div class="user-img-text user-img-text-md bb-1-ddd proposal-list-each">
                                        <Link to="" class="pull-left">
                                            <img src='/images/user.png' alt="Firstname lastname" class="dp-contain" />
                                        </Link>
                                        <div class="pull-right d-none d-sm-block d-md-none d-lg-block ml-15">
                                            <div>
                                                <div class="rating-box">
                                                    <div>
                                                        <div></div>
                                                        <div style={{width:"75%"}}></div>  put product rating here (in percentage) 
                                                    </div>
                                                    <div>
                                                        <span class="fa fa-star"></span> 
                                                        3.75
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="text-fade">
                                                12 projects received
                                            </div>
                                            <div class="text-fade">
                                                9 projects completed
                                            </div>
                                        </div>
                                        <div class="overflow-hidden">
                                            <Link to="" class="font-bold hover-underline">
                                                John Clifford
                                            </Link>
                                            <div class="text-fade">
                                                <span class="fa fa-flag text-fade"></span>
                                                Nigeria
                                                &nbsp; | &nbsp;
                                                <span class="fa fa-clock text-fade"></span>
                                                2 hours ago
                                            </div>
                                            <div class="text-fade">
                                                Swift, Objective C, Python, Machine Learning, AI
                                            </div>
                                            <div class="d-block d-sm-none d-md-block d-lg-none">
                                                <div class="rating-box">
                                                    <div>
                                                        <div></div>
                                                        <div style={{width:"75%"}}></div> put product rating here (in percentage)
                                                    </div>
                                                    <div>
                                                        <span class="fa fa-star"></span> 
                                                        3.75
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="mt-2">
                                                <button type="button" class="btn btn-blue btn-xs" data-toggle="modal" data-target="#view_proposal_1">View Proposal</button>
                                                <button type="button" class="btn btn-orange btn-xs" data-toggle="modal" data-target="#view_proposal_2">Assign Project</button>
                                                <button type="submit" class="btn btn-transparent-black btn-xs hover-bg-red" title="Remove shortlist" data-widget="collapse" data-toggle="tooltip">Shortlisted</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>

                            </div>

                            <div class="tab-pane container p-0 fade" id="proposals_rejected">

                                <form action="">
                                    <div class="user-img-text user-img-text-md bb-1-ddd proposal-list-each">
                                        <Link to="" class="pull-left">
                                            <img src='/images/user.png' alt="Firstname lastname" class="dp-contain" />
                                        </Link>
                                        <div class="pull-right d-none d-sm-block d-md-none d-lg-block ml-15">
                                            <div>
                                                <div class="rating-box">
                                                    <div>
                                                        <div></div>
                                                        <div style={{width:"75%"}}></div> put product rating here (in percentage) 
                                                    </div>
                                                    <div>
                                                        <span class="fa fa-star"></span> 
                                                        3.75
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="text-fade">
                                                12 projects received
                                            </div>
                                            <div class="text-fade">
                                                9 projects completed
                                            </div>
                                        </div>
                                        <div class="overflow-hidden">
                                            <Link to="" class="font-bold hover-underline">
                                                John Clifford
                                            </Link>
                                            <div class="text-fade">
                                                <span class="fa fa-flag text-fade"></span>
                                                Nigeria
                                                &nbsp; | &nbsp;
                                                <span class="fa fa-clock text-fade"></span>
                                                2 hours ago
                                            </div>
                                            <div class="text-fade">
                                                Swift, Objective C, Python, Machine Learning, AI
                                            </div>
                                            <div class="d-block d-sm-none d-md-block d-lg-none">
                                                <div class="rating-box">
                                                    <div>
                                                        <div></div>
                                                        <div style={{width:"75%"}}></div>  put product rating here (in percentage)
                                                    </div>
                                                    <div>
                                                        <span class="fa fa-star"></span> 
                                                        3.75
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="mt-2">
                                                <button type="button" class="btn btn-blue btn-xs" data-toggle="modal" data-target="#view_proposal_1">View Proposal</button>
                                                <button type="submit" class="btn btn-orange btn-xs">Shortlist</button>
                                                <button type="submit" class="btn btn-transparent-black hover-bg-red btn-xs">Reject</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>

                                <form action="">
                                    <div class="user-img-text user-img-text-md bb-1-ddd proposal-list-each">
                                        <Link to="" class="pull-left">
                                            <img src='/images/user.png' alt="Firstname lastname" class="dp-contain" />
                                        </Link>
                                        <div class="pull-right d-none d-sm-block d-md-none d-lg-block ml-15">
                                            <div>
                                                <div class="rating-box">
                                                    <div>
                                                        <div></div>
                                                        <div style={{width:"75%"}}></div>  put product rating here (in percentage)
                                                    </div>
                                                    <div>
                                                        <span class="fa fa-star"></span> 
                                                        3.75
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="text-fade">
                                                12 projects received
                                            </div>
                                            <div class="text-fade">
                                                9 projects completed
                                            </div>
                                        </div>
                                        <div class="overflow-hidden">
                                            <Link to="" class="font-bold hover-underline">
                                                John Clifford
                                            </Link>
                                            <div class="text-fade">
                                                <span class="fa fa-flag text-fade"></span>
                                                Nigeria
                                                &nbsp; | &nbsp;
                                                <span class="fa fa-clock text-fade"></span>
                                                2 hours ago
                                            </div>
                                            <div class="text-fade">
                                                Swift, Objective C, Python, Machine Learning, AI
                                            </div>
                                            <div class="d-block d-sm-none d-md-block d-lg-none">
                                                <div class="rating-box">
                                                    <div>
                                                        <div></div>
                                                        <div style={{width:"75%"}}></div>  put product rating here (in percentage)
                                                    </div>
                                                    <div>
                                                        <span class="fa fa-star"></span>
                                                        3.75
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="mt-2">
                                                <button type="button" class="btn btn-blue btn-xs" data-toggle="modal" data-target="#view_proposal_1">View Proposal</button>
                                                <button type="submit" class="btn btn-orange btn-xs">Shortlist</button>
                                                <button type="submit" class="btn btn-transparent-black hover-bg-red btn-xs">Reject</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>

                                <form action="">
                                    <div class="user-img-text user-img-text-md bb-1-ddd proposal-list-each">
                                        <Link to="" class="pull-left">
                                            <img src='/images/user.png' alt="Firstname lastname" class="dp-contain" />
                                        </Link>
                                        <div class="pull-right d-none d-sm-block d-md-none d-lg-block ml-15">
                                            <div>
                                                <div class="rating-box">
                                                    <div>
                                                        <div></div>
                                                        <div style={{width:"75%"}}></div>  put product rating here (in percentage) 
                                                    </div>
                                                    <div>
                                                        <span class="fa fa-star"></span> 
                                                        3.75
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="text-fade">
                                                12 projects received
                                            </div>
                                            <div class="text-fade">
                                                9 projects completed
                                            </div>
                                        </div>
                                        <div class="overflow-hidden">
                                            <Link to="" class="font-bold hover-underline">
                                                John Clifford
                                            </Link>
                                            <div class="text-fade">
                                                <span class="fa fa-flag text-fade"></span>
                                                Nigeria
                                                &nbsp; | &nbsp;
                                                <span class="fa fa-clock text-fade"></span>
                                                2 hours ago
                                            </div>
                                            <div class="text-fade">
                                                Swift, Objective C, Python, Machine Learning, AI
                                            </div>
                                            <div class="d-block d-sm-none d-md-block d-lg-none">
                                                <div class="rating-box">
                                                    <div>
                                                        <div></div>
                                                        <div style={{width:"75%"}}></div>  put product rating here (in percentage)
                                                    </div>
                                                    <div>
                                                        <span class="fa fa-star"></span> 
                                                        3.75
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="mt-2">
                                                <button type="button" class="btn btn-blue btn-xs" data-toggle="modal" data-target="#view_proposal_1">View Proposal</button>
                                                <button type="submit" class="btn btn-orange btn-xs">Shortlist</button>
                                                <button type="submit" class="btn btn-transparent-black hover-bg-red btn-xs">Reject</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <form action="" class="modal" id="send_proposal">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title">Send Proposal</h4>
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div class="modal-body">
                            <div class="p-20-10">

                                <div class="row">
                                    <div class="col-lg-8">
                                        
                                        <div>
                                            <div class="form-group">
                                                <label class="control-label">
                                                    My Proposal:
                                                    <span class="required">*</span>
                                                </label>
                                                <textarea class="form-control resize-none" style={{height:"85px"}} placeholder="Type a message or use a template..."></textarea>
                                            </div>
                                        </div>

                                        <div class="mt-30 b-1-ddd p-10">
                                            <div>
                                                Upload Attachments (optional)
                                            </div>
                                            <div class="row">
                                                <div class="col-sm-6 mt-10">
                                                    <input type="file" class="form-control"/>
                                                </div>
                                                <div class="col-sm-6 mt-10">
                                                    <input type="file" class="form-control"/>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row mt-20">
                                            <div class="col-sm-6">
                                                <div class="form-group">
                                                    <label class="control-label">
                                                        Proposed Budget (Total):
                                                    </label>
                                                    <div class="input-group input-group-attach input-group-attach-transparent input-group-attach-transparent-left">
                                                        <div class="input-group-btn">
                                                            <button type="button" class="btn btn-md">
                                                                <span class="font-18">$</span>
                                                            </button>
                                                        </div>
                                                        <input type="number" class="form-control"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-sm-6">
                                                <div class="form-group">
                                                    <label class="control-label">
                                                        Minimum Deposit:
                                                    </label>
                                                    <div class="input-group input-group-attach input-group-attach-transparent input-group-attach-transparent-left">
                                                        <div class="input-group-btn">
                                                            <button type="button" class="btn btn-md">
                                                                <span class="font-18">$</span>
                                                            </button>
                                                        </div>
                                                        <input type="number" class="form-control"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="col-lg-4">
                                        <hr class="hr-orange d-block d-lg-none hr-2 mt-10 mb-10"/>
                                        <div class="font-bold">
                                            Proposal Templates:
                                        </div>
                                        <div class="">
                                            <div class="b-1-ddd mb-10 p-5 overflow-auto" style={{height:"90px"}}>
                                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                                            </div>
                                            <div class="b-1-ddd mb-10 p-5 overflow-auto" style={{height:"90px"}}>
                                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                                            </div>
                                            <div class="b-1-ddd mb-10 p-5 overflow-auto" style={{height:"90px"}}>
                                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="close btn btn-transparent-black btn-sm icon-left" data-dismiss="modal">
                                <span class="fa fa-times"></span>
                                Cancel  
                            </button>
                            <button type="submit" class="btn btn-blue btn-sm add-question-btn icon-left">
                                <span class="fa fa-paper-plane"></span>
                                Submit Proposal  
                            </button>
                        </div>
                    </div>
                </div>
            </form>


            <div class="col-md-4 d-none d-md-block">

                <div class="sticky-top d-none d-lg-block">
                    <div class="section">
                        <div>
                            <button type="button" class="btn btn-blue btn-block" data-toggle="modal" data-target="#send_proposal">
                                Send Proposal
                            </button>
                        </div>
                        <div class="mt-15 mb-10">
                            Posted By:
                        </div>
                        <div class="text-left-right text-left-right-60-40">
                            <div class="bg-eee">
                                <div>
                                    <span class="fa fa-user"></span>
                                    <div class="overflow-hidden">
                                        Name:
                                    </div>
                                </div>
                                <div>
                                    {buyer.firstName} {buyer.lastName}
                                </div>
                            </div>
                            <div>
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
                            <div class="bg-eee">
                                <div>
                                    <span class="fa fa-file"></span>
                                    <div class="overflow-hidden">
                                        Projects Posted:
                                    </div>
                                </div>
                                <div>
                                    15  
                                </div>
                            </div>
                            <div>
                                <div>
                                    <span class="fa fa-file-alt"></span>
                                    <div class="overflow-hidden">
                                        Projects Issuance:
                                    </div>
                                </div>
                                <div>
                                    90%  
                                </div>
                            </div>
                            <div class="bg-eee">
                                <div>
                                    <span class="fa fa-file-alt"></span>
                                    <div class="overflow-hidden">
                                        Projects Completed:
                                    </div>
                                </div>
                                <div>
                                    70%
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="section">
                        <div class="section-title">
                            Share Link
                        </div>
                        <div>
                            <div class="">
                                This is a private project. Copy the link below to share.
                            </div>
                            <div>
                                <div class="copy-link mt-5">
                                    <div class="input-group">
                                        <input type="search" name="q" class="form-control"  id="direct-share-link-2" value="share_link" readonly />
                                        <div class="input-group-btn">
                                            <button type="submit" class="btn btn-blue btn-md"  style={{borderRadius:"0", height: "35px"}}>
                                                <span class="fa fa-copy"></span>
                                                <span>Copy</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="text-center mt-10">
                                    <button type="button" class="btn btn-transparent-black btn-sm" data-toggle="modal" data-target="#shareModal">
                                        <span class="fa fa-share-alt"></span>
                                        Share this Deal
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="section d-none d-md-block d-lg-none">
                    <form action="">
                        <ul class="ul-inline">
                            <li>
                                <button type="submit" class="btn btn-transparent-black btn-xs hover-bg-orange" title="Favourite" data-widget="collapse" data-toggle="tooltip">
                                    <span class="fas fa-heart" style={{position: "relative", top: "1px"}}></span>
                                </button>
                            </li>
                            <li>
                                <a class="p-0" title="Share Project" data-widget="collapse" data-toggle="tooltip">
                                    <button type="button" class="btn btn-transparent-black btn-xs hover-bg-orange" data-toggle="modal" data-target="#share">
                                        <span class="fas fa-share-alt"></span>
                                    </button>
                                </a>
                            </li>
                            <li>
                                <a data-toggle="modal" data-target="#flag" class="btn btn-transparent-black btn-xs hover-bg-orange" title="Report Project" data-widget="collapse" data-toggle="tooltip">
                                    <span class="fas fa-flag"></span>
                                </a>
                            </li>
                        </ul>
                    </form>
                </div>

                <div class="sticky-top d-none d-md-block d-lg-none">

                    <div class="section">
                        <div>
                            <button type="button" class="btn btn-blue btn-block" data-toggle="modal" data-target="#send_proposal">
                                Send Proposal
                            </button>
                        </div>
                        <div class="mt-15 mb-10">
                            Posted By:
                        </div>
                        <div class="text-left-right text-left-right-60-40">
                            <div class="bg-eee">
                                <div class="w-100 pull-none">
                                    <span class="fa fa-user"></span>
                                    <div class="overflow-hidden">
                                        Name:
                                    </div>
                                </div>
                                <div class="pl-10 pr-10">
                                    Firstname lastname
                                </div>
                            </div>
                            <div>
                                <div class="w-100 pull-none">
                                    <span class="fa fa-flag"></span>
                                    <div class="overflow-hidden">
                                        Country:
                                    </div>
                                </div>
                                <div class="pl-10 pr-10">
                                    Nigeria
                                </div>
                            </div>
                            <div class="bg-eee">
                                <div class="w-100 pull-none">
                                    <span class="fa fa-file"></span>
                                    <div class="overflow-hidden">
                                        Projects Posted:
                                    </div>
                                </div>
                                <div class="pl-10 pr-10">
                                    10
                                </div>
                            </div>
                            <div>
                                <div class="w-100 pull-none">
                                    <span class="fa fa-file-alt"></span>
                                    <div class="overflow-hidden">
                                        Projects Issuance:
                                    </div>
                                </div>
                                <div class="pl-10 pr-10">
                                    90%
                                </div>
                            </div>
                            <div class="bg-eee">
                                <div class="w-100 pull-none">
                                    <span class="fa fa-file-alt"></span>
                                    <div class="overflow-hidden">
                                        Projects Completed:
                                    </div>
                                </div>
                                <div class="pl-10 pr-10">
                                    70%
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="section">
                        <div class="section-title">
                            Share Link
                        </div>
                        <div>
                            <div class="">
                                This is a private project. Copy the link below to share.
                            </div>
                            <div>
                                <div class="copy-link mt-5">
                                    <div class="input-group">
                                        <input type="search" name="q" class="form-control"  id="direct-share-link-3" value="share_link" readonly />
                                        <div class="input-group-btn">
                                            <button type="submit" class="btn btn-blue btn-md"  style={{borderRadius: "0 ", height: "35px"}}>
                                                <span class="fa fa-copy"></span>
                                                <span>Copy</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="text-center mt-10">
                                    <button type="button" class="btn btn-transparent-black btn-sm" data-toggle="modal" data-target="#shareModal">
                                        <span class="fa fa-share-alt"></span>
                                        Share this Deal
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>

        
        <hr/>


        <div class="font-18 font-bold pb-10 text-center b-none">
            Other Projects from this buyer
        </div>
        <div class="section">
            <div class="project-list project-list-mini row">
               {project.map((item)=>(
                    <div class="col-lg-6">
                        <Link to="/project/c1d00230-a423-4b84-a121-7105239ff8d8" className="project" id="projectlist">
                                <div>
                                    <div>
                                        <span className="fa fa-angle-right icon-50"></span>
                                    </div>
                                    <div className="">
                                        <div className="font-bold">
                                          {project.username}
                                        </div>

                                        <div className="text-fade ellipsis-2-lines mt-5">
                                            menknvjnj
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
                                <div className="item-labels-tags">
                                    Tag name
                                </div>
                                <div className="item-labels-tags">
                                    Tag name
                                </div>
                                <div className="item-labels-tags">
                                    Tag name
                                </div>
                                <div className="item-labels-tags">
                                    Tag name
                                </div>
                                <div className="item-labels-tags">
                                    Tag name
                                </div>
                                <div className="item-labels-tags">
                                    Tag name
                                </div>
                            </div>
                        </Link>
                    </div>

                ))}
                    
                
                    <div class="col-lg-6">
                        'no project'
                    </div>
                    
                
            </div>
        </div>
            
        <hr/>

        <div class="font-18 font-bold pb-10 text-center b-none">
            Similar Projects
        </div>
        <div class="section">
            <div class="project-list project-list-mini row">
                
           
                    <div class="col-lg-6">
                        <Link to="/project/c1d00230-a423-4b84-a121-7105239ff8d8" className="project" id="projectlist">
                                <div>
                                    <div>
                                        <span className="fa fa-angle-right icon-50"></span>
                                    </div>
                                    <div className="">
                                        <div className="font-bold">
                                           ggffh
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
                                <div className="item-labels-tags">
                                    Tag name
                                </div>
                                <div className="item-labels-tags">
                                    Tag name
                                </div>
                                <div className="item-labels-tags">
                                    Tag name
                                </div>
                                <div className="item-labels-tags">
                                    Tag name
                                </div>
                                <div className="item-labels-tags">
                                    Tag name
                                </div>
                                <div className="item-labels-tags">
                                    Tag name
                                </div>
                            </div>
                        </Link>
                    </div>

               
                    <div class="col-lg-6">
                        no project
                    </div>
                
            </div>
        </div>

	    </div>
		<Footer/>
		</>
		)
}
export default ProjectDetails;