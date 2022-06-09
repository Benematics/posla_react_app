import React, {useState, useEffect} from 'react';
import AccountSidebar from '../components/AccountSidebar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {Link}  from 'react-router-dom';


const Dashboard = () => {
    const [deals, setDeals] = useState("");
    const [project, setProject] = useState("");
    useEffect(()=>{
        fetch("https://dummyjson.com/products")
        .then(res => res.json())
        .then(res => {
            setDeals(res)
        })
        .catch((error)=>console.log(error))
    },[])
    useEffect(()=>{
    fetch("https://dummyjson.com/posts")
    .then(res1 => res1.json())
    .then(res1 => {
        setProject(res1)
    })
    .catch((error1)=>console.log(error1))
},[deals])
	return(
<>
<Header/>
	<div class="container" style={{marginTop:"20px", height:"auto", marginBottom:"20px", zIndex: "-1"}}>
        <div class="row">
            <div class="d-none d-md-block col-md-4 col-lg-3">

               <AccountSidebar/>

            </div>

            <div class="col-12 col-md-8 col-lg-9">

                <div aria-label="breadcrumb" class="details-page-breadcrumb mb-10">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="/account">Account</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Dashboard</li>
                    </ol>
                </div>



                <div class="section">
                    <div class="section-title">
                        Active Deals ()
                        <a href="/account/deals" class="btn btn-transparent-black btn-xs pull-right hover-bg-orange">View All</a>
                    </div>
                    <div>
                         maximum of 3 deals where status == active 
                    <div class="deal-list deal-list-mini row">
                         {deals && deals.products.map((item)=>(
                                <div class="col-sm-6 col-lg-4">
                                    <a href="/deal/0d8aa710-c3b7-4d4d-b7f0-61da7b23af9f" class="deal" style={{height:"auto", zIndex:"-1"}}>
            
                                        <div class="deal-info-top">
                                            <div>
                                                <img src='/images/deal-1.png' alt="Olawale Lawal" class="dp-cover" style={{zIndex:"-1"}}/>
                                            </div>
                                            <div class="">
                                                <div>
                                                    <img src={item.thumbnail} alt={item.title} class="dp-contain" />
                                                </div>
                                                <div class="text-fade font-13 ellipsis">
                                                    {item.title}

                                                </div>
                                            </div>
                                            <div class="font-bold ellipsis-2-lines mt-5 pr-10 pl-10" style={{minHeight: "38px"}}>
                                                {item.description}
                                            </div>
                                        </div>

                                        <div class="mt-10 mr-10 ml-10 ellipsis" style={{paddingLeft:"10px"}}>
                                            <div class="project-price">
                                                <span class="font-size-10 text-fade" style={{marginRight: "5px"}}>Starting At</span>
                                                ${item.price}
                                            </div>
                                            <div class="item-labels">
                                                <div class="item-labels-new">
                                                    New
                                                </div>
                                                <div class="item-labels-featured">
                                                    Featured
                                                </div>
                                            </div>
                                        </div>

                                        <div class="pt-5 bt-1-ddd" style={{marginTop: "-3px"}}>
                                            <div class="mt-0 pl-10 item-labels item-labels-tags-all ellipsis">
                                                <div class="item-labels-prefix">
                                                    Tags & Skills:
                                                </div>
                                                <div class="item-labels-tags">
                                                    Mobile App
                                                </div>
                                                <div class="item-labels-tags">
                                                    iOS App
                                                </div>
                                                <div class="item-labels-tags">
                                                    App Store
                                                </div>
                                                <div class="item-labels-tags">
                                                    Swift Language
                                                </div>
                                                <div class="item-labels-tags">
                                                    Objective C
                                                </div>
                                            </div>
                                        </div>      
                                    </a>
                            </div>
                            ))}   
                        </div>
                        <div>
                            <a href="/account/deals" class="d-block text-center pt-10 pb-10 b-1-ddd bg-eee hover-bg-orange">
                                View All Deals
                                <span class="fa fa-angle-right"></span>
                            </a>
                        </div>
                    </div>
                </div>


                <div class="section">
                    <div class="section-title">
                        Active Projects ()
                        <a href="/account/projects" class="btn btn-transparent-black btn-xs pull-right hover-bg-orange">View All</a>
                    </div>
                    <div>
                        <div class="project-list project-list-wide">
                             maximum of 3 projects where status == active 
                             {project && project.posts.map((item)=>(
                                <Link to="/project/c1d00230-a423-4b84-a121-7105239ff8d8" className="project" id="projectlist" >
                                        <div>
                                            <div>
                                                <span className="fa fa-angle-right icon-50"></span>
                                            </div>
                                            <div className="">
                                                <div className="font-bold">
                                                  
                                                </div>

                                                <div className="text-fade ellipsis-2-lines mt-5">
                                                  {item.body}
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
                                ))}

                        </div>
                    </div>
                    <div>
                        <a href="/account/projects" class="d-block text-center pt-10 pb-10 b-1-ddd bg-eee hover-bg-orange">
                            View All Projects
                            <span class="fa fa-angle-right"></span>
                        </a>
                    </div>
                </div>


                <div class="row">
                    <div class="col-sm-6 col-md-12 col-lg-6">
                        <div class="section">
                            <div class="section-title">
                                Stats - Seller
                            </div>
                            <div>
                                <div class="tab-pane container p-0" id="price_3_premium">
                                    <div class="text-left-right text-left-right-60-40">
                                        <div class="bg-eee">
                                            <div>
                                                <span class="fa fa-file"></span>
                                                <div class="overflow-hidden">
                                                    Projects Completed:
                                                </div>
                                            </div>
                                            <div>
                                                117
                                            </div>
                                        </div>
                                        <div>
                                            <div>
                                                <span class="fa fa-star"></span>
                                                <div class="overflow-hidden">
                                                    Overall Rating:
                                                </div>
                                            </div>
                                            <div>
                                                4.5
                                            </div>
                                        </div>
                                        <div class="bg-eee">
                                            <div>
                                                <span class="fa fa-users"></span>
                                                <div class="overflow-hidden">
                                                    Buyers worked with:
                                                </div>
                                            </div>
                                            <div>
                                                83
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-12 col-lg-6">
                        <div class="section">
                            <div class="section-title">
                                Stats - Buyer
                            </div>
                            <div>
                                <div class="tab-pane container p-0" id="price_3_premium">
                                    <div class="text-left-right text-left-right-60-40">
                                        <div class="bg-eee">
                                            <div>
                                                <span class="fa fa-file"></span>
                                                <div class="overflow-hidden">
                                                    Projects Posted:
                                                </div>
                                            </div>
                                            <div>
                                                3
                                            </div>
                                        </div>
                                        <div>
                                            <div>
                                                <span class="fa fa-star"></span>
                                                <div class="overflow-hidden">
                                                    Projects Issuance:
                                                </div>
                                            </div>
                                            <div>
                                                2
                                            </div>
                                        </div>
                                        <div class="bg-eee">
                                            <div>
                                                <span class="fa fa-users"></span>
                                                <div class="overflow-hidden">
                                                    Sellers worked with:
                                                </div>
                                            </div>
                                            <div>
                                                2
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="section">
                    <div class="section-title">
                        My Reviews
                    </div>
                    <div>
                        <div class="rating-box rating-box-lg mt-5">
                            <div>
                                <div></div>
                                <div style={{width: "75%"}}></div>  put product rating here (in percentage) 
                            </div>
                            <div class="font-bold text-orange">
                                5.0
                            </div>
                        </div>
                    </div>
                    <div class="p-20 pb-0 mb-20 b-1-ddd">
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="reviews-summary">
                                    <div>
                                        Seller communication level
                                        <span class="font-bold">(4.5)</span>
                                    </div>
                                    <div>
                                        <div style={{width: "80%"}}></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="reviews-summary">
                                    <div>
                                        Seller communication level
                                        <span class="font-bold">(4.5)</span>
                                    </div>
                                    <div>
                                        <div style={{width: "80%"}}></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="reviews-summary">
                                    <div>
                                        Seller communication level
                                        <span class="font-bold">(4.5)</span>
                                    </div>
                                    <div>
                                        <div style={{width: "80%"}}></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="reviews-summary">
                                    <div>
                                        Seller communication level
                                        <span class="font-bold">(4.5)</span>
                                    </div>
                                    <div>
                                        <div style={{width: "80%"}}></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="reviews-summary">
                                    <div>
                                        Seller communication level
                                        <span class="font-bold">(4.5)</span>
                                    </div>
                                    <div>
                                        <div style={{width: "80%"}}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="section-title" style={{marginTop:"10px"}}>
                        1809 Reviews
                        <a href="/account/reviews" class="btn btn-transparent-black btn-xs pull-right hover-bg-orange">View All</a>
                    </div>
                    <div>
                        
                        <div class="user-msg b-1-eee" style={{marginTop:"10px"}}>
                            <div class="overflow-hidden">
                                <div class="user-msg-img pull-left">
                                    <img src="/images/user.png" alt="Firstname lastname" class="dp-contain" />
                                </div>
                                <div class="pull-right d-none d-sm-block">
                                    <div class="rating-box mt-5">
                                        <div>
                                            <div></div>
                                            <div style={{width: "75%"}}></div>  put product rating here (in percentage) 
                                        </div>
                                        <div class="font-bold text-orange">
                                            5.0
                                        </div>
                                    </div>
                                </div>
                                <div class="overflow-hidden">
                                    <div class="font-bold">
                                        Firstname Lastname
                                    </div>
                                    <div class="text-fade">
                                        Published: Jan 12, 2019
                                    </div>
                                    <div class="rating-box d-block d-sm-none">
                                        <div>
                                            <div></div>
                                            <div style={{width: "75%"}}></div>  put product rating here (in percentage) 
                                        </div>
                                        <div class="font-bold text-orange">
                                            5.0
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-10 font-normal text-justify">
                                I've worked with Kristen twice now. I have never worked with a graphic designer before and she's truly the best. Such a great lady and works really hard to make her customers satisfied. She is also really talented, open to ideas and works fast.
                            </div>
                        </div>

                        <a href="/account/reviews" class="d-block text-center pt-10 pb-10 b-1-ddd bg-eee hover-bg-orange">
                            View All Reviews
                            <span class="fa fa-angle-right"></span>
                        </a>
                        
                    </div>
                </div>

                

            </div>
        </div>
    </div>
<Footer/>
</>
		)
}
export default Dashboard;