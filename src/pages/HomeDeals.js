import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectName from '../components/ProjectName';
import ModalDialog from '../components/ModalDialog';
import {useNavigate, Link} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {register,selectUser} from "../features/userSlice";
import LoadingSpinner from "../components/LoadingSpinner";
import { toast } from 'react-toastify';

const HomeDeals = () =>{

	const [result, setResult] = useState("");
	const [category, setCategory] = useState([]);
	const user = useSelector(selectUser);

	useEffect(()=>{
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer 41|1rEpfWLienwJOQmLxPuDmRUP5DgtMt5GzThDTKpb");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch("https://posla-api.herokuapp.com/api/front/deals", requestOptions)
      .then(response => response.json())
      .then(res => {
        const deals = res.data;
        setResult(deals);
        console.log(deals);
      })
      .catch(error => console.log('error', error));

    },[]);


		useEffect(()=>{
		        var myHeaders = new Headers();
				myHeaders.append("Accept", "application/json");
				myHeaders.append("Authorization", "Bearer 41|1rEpfWLienwJOQmLxPuDmRUP5DgtMt5GzThDTKpb");

				var requestOptions = {
				  method: 'GET',
				  headers: myHeaders,
				  redirect: 'follow'
				};

				fetch("https://posla-api.herokuapp.com/api/category/main-categories", requestOptions)
				  .then(response => response.json())
				  .then(result => {
				  	const res = result.data;
				  	setCategory(res);
				  	console.log(res);
				  })
				  .catch(error => console.log('error', error));
	}, []);


	return(
		<>
		<Header/>
			<div class="modal" id="modalCategories">
		        <div class="modal-dialog">
		            <div class="modal-content">
		                <div class="modal-header">
		                    <h4 class="modal-title">Deal Categories</h4>
		                    <button type="button" class="close" data-dismiss="modal">&times;</button>
		                </div>
		                <div class="modal-body">
		                    <div class="p-10">
		                        
		                        <div class="font-bold">
		                            Select a category:
		                        </div>

		                        <div class="home-category-list mt-5">

		                        {category.map((item)=>{ return(  
		                            <a href="/category/music-audio/deals">
		                                <span class="fa fa-angle-right icon-000 icon-18 pull-right d-inline"></span>
		                                {item.name}
		                            </a>
		                            )})}   
		                        </div>

		                    </div>
		                </div>
		            </div>
		        </div>
		    </div>
		        

		    <div class="container" style={{marginTop:"20px", marginBottom:"20px"}}>
		        <div class="row">
		            
		            <div class="col-md-4 col-lg-3 d-none d-md-block">
		                <div class="sticky-top">
		                    <div class="home-category-list">
		                        {category.map((item)=>{ return(  
		                            <a href="/category/music-audio/deals">
		                                <span class="fa fa-angle-right icon-000 icon-18 pull-right d-inline"></span>
		                                {item.name}
		                            </a>
		                            )})}      
		                    </div>

		                    <div class="mt-10">
		                        <a href="/support" class="text-fade d-inline hover-underline">
		                            Suggest a category
		                            <span class="fa fa-angle-right icon-grey ml-2"></span>
		                        </a>
		                    </div>
		                </div>

		            </div>

		            <div class="col-md-8 col-lg-6">

		                <div class="row">
		                    <div class="col-sm-6 col-lg-12">

		                        <div class="section">
		                            <form action="/account/deals/create" class="post-project">
		                                <div class="section-title">
		                                    <span class="fa fa-edit"></span>
		                                    Create New Deal
		                                </div>
		                                <div class="form-group">
		                                    <textarea name="title" id="" class="form-control" placeholder="I will..." style={{height: "50px"}}></textarea>
		                                </div>
		                                <div class="floated-content">
		                                    <div class="form-group pull-left d-none">
		                                        <select name="privacy" id="privacy" class="form-control">
		                                            <option value="">-- Select Privacy --</option>
		                                        </select>
		                                    </div>
		                                    <button class="btn btn-blue btn-sm pull-right">
		                                        Continue
		                                        <span class="fa fa-angle-right"></span>
		                                    </button>
		                                </div>
		                            </form>
		                        </div>

		                        <div class="section d-none d-sm-block d-md-none">
		                            <a data-toggle="modal" data-target="#modalCategories" class="d-block">
		                                <span class="fa fa-angle-right pull-right icon-18"></span>
		                                <span class="fa fa-list-alt pull-left icon-18 mr-10 icon-blue"></span>
		                                View all deal categories
		                            </a>
		                        </div>

		                    </div>
		                    <div class="col-sm-6">
		                        <div class="home-section-user bg-fff shadow-sm mb-30 br-4 d-block d-lg-none">
		                            <div></div>
		                            <div class="home-section-user-info">
		                                <a href="/account">
		                                    <span class="fa fa-user"></span>
		                                </a>
		                                <div>
		                                    <a href="/account" class="font-bold d-block hover-underline">
		                                        Olawale Lawal
		                                    </a>
		                                    <div class="text-fade">
		                                        Frontend Developer, UIUX Designer, Graphics Designer
		                                    </div>
		                                </div>
		                            </div>
		                            <div>
		                                <a href="/" class="btn btn-orange btn-block">
		                                    Switch to Selling
		                                </a>
		                            </div>
		                        </div>
		                    </div>
		                </div>
		                

		                <div class="section d-block d-sm-none">
		                    <a data-toggle="modal" data-target="#modalCategories" class="d-block">
		                        <span class="fa fa-angle-right pull-right icon-18"></span>
		                        <span class="fa fa-list-alt pull-left icon-18 mr-10 icon-blue"></span>
		                        View all deal categories
		                    </a>
		                </div>
		                

		                <div class="section">
		                    <div class="section-title">
		                        Featured Deals
		                    </div>
		                    <div class="deal-list deal-list-double">
		                    {result && result["Programming & Tech 3"].map((item)=>(
									<a href="/deal/0d8aa710-c3b7-4d4d-b7f0-61da7b23af9f" class="deal" style={{height:"270px"}}>
									    
									    <div class="deal-info-top">
									        <div>
									            <img src="/images/deal-1.png" alt="Olawale Lawal" class="dp-cover" />
									        </div>
									        <div class="">
									            <div>
									                <img src="/images/user.png" alt="Olawale Lawal" class="dp-contain" />
									            </div>
									            <div class="text-fade font-13 ellipsis">
									                Olawale Lawal
									            </div>
									        </div>
									        <div class="font-bold ellipsis-2-lines mt-5 pr-10 pl-10" style={{minHeight: "38px"}}>
									            I can abc build a beautiful bespoke logo for your company using the style and color combination you prefer.
									        </div>
									    </div>

									    <div class="mt-10 mr-10 ml-10 ellipsis">
									        <div class="project-price">
									            <span class="font-size-10 text-fade">Starting At</span>
									            $400
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
		                                      {item.tags.map((item)=>(
		                                        <div class="item-labels-tags">
		                                        {item}
		                                         </div>
		                                        ))}
									        </div>
									    </div>
									</a>
									 ))}
		                    </div>
		                </div>

		                {category.map((item)=>(
		                <div class="section">
		                    <div class="section-title">
		                        {item.name}
		                        <a href="/category/music-audio/deals" class="btn btn-transparent-black btn-xs pull-right hover-bg-orange">View All</a>
		                    </div>
		                    <div class="deal-list deal-list-double">
		                    {result && result["Programming & Tech 3"].map((item)=>(
									<a href="/deal/0d8aa710-c3b7-4d4d-b7f0-61da7b23af9f" class="deal" style={{height:"270px"}}>
									    
									    <div class="deal-info-top">
									        <div>
									            <img src="/images/deal-1.png" alt="Olawale Lawal" class="dp-cover" />
									        </div>
									        <div class="">
									            <div>
									                <img src="/images/user.png" alt="Olawale Lawal" class="dp-contain" />
									            </div>
									            <div class="text-fade font-13 ellipsis">
									                Olawale Lawal
									            </div>
									        </div>
									        <div class="font-bold ellipsis-2-lines mt-5 pr-10 pl-10" style={{minHeight: "38px"}}>
									            I can abc build a beautiful bespoke logo for your company using the style and color combination you prefer.
									        </div>
									    </div>

									    <div class="mt-10 mr-10 ml-10 ellipsis">
									        <div class="project-price">
									            <span class="font-size-10 text-fade">Starting At</span>
									            $400
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
		                                      {item.tags.map((item)=>(
		                                        <div class="item-labels-tags">
		                                        {item}
		                                         </div>
		                                        ))}
									        </div>
									    </div>
									    
									</a>
									 ))}
		                    </div>
		                    
		                    <a href="/category/music-audio/deals" class="d-block text-center pt-10 pb-10 b-1-ddd bg-eee hover-bg-orange">
		                        View All {item.name} Deals
		                        <span class="fa fa-angle-right"></span>
		                    </a>
		                </div>

		                ))}
		            </div>
		            
		            <div class="col-lg-3 d-none d-lg-block">
		                
		                <div class="home-section-user bg-fff shadow-sm mb-30 br-4">
		                    <div></div>
		                    <div class="home-section-user-info">
		                        <a href="/account">
		                            <span class="fa fa-user"></span>
		                        </a>
		                        <div>
		                            <a href="/account" class="font-bold d-block hover-underline">
		                                {user.name}
		                            </a>
		                            <div class="text-fade">
		                                Frontend Developer, UIUX Designer, Graphics Designer
		                            </div>
		                        </div>
		                    </div>
		                    <div>
		                        <a href="/" class="btn btn-orange btn-block">
		                            Switch to Selling
		                        </a>
		                    </div>
		                </div>

		                <div class="section pl-10 pr-10 sticky-top" style={{marginTop:"20px"}}>
		                    <div class="section-title">
		                        Latest Deals
		                    </div>
		                    {result && result["Programming & Tech 3"].map((item)=>(
		                    <div class="deal-list deal-list-single">
								<a href="/deal/0d8aa710-c3b7-4d4d-b7f0-61da7b23af9f" class="deal" style={{height:"270px"}}>
								    
								    <div class="deal-info-top">
								        <div>
								            <img src="/images/deal-1.png" alt="Olawale Lawal" class="dp-cover" />
								        </div>
								        <div class="">
								            <div>
								                <img src="/images/user.png" alt="Olawale Lawal" class="dp-contain" />
								            </div>
								            <div class="text-fade font-13 ellipsis">
								                Olawale Lawal
								            </div>
								        </div>
								        <div class="font-bold ellipsis-2-lines mt-5 pr-10 pl-10" style={{minHeight: "38px"}}>
								            I can abc build a beautiful bespoke logo for your company using the style and color combination you prefer.
								        </div>
								    </div>

								    <div class="mt-10 mr-10 ml-10 ellipsis">
								        <div class="project-price">
								            <span class="font-size-10 text-fade">Starting At</span>
								            $400
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
	                                      {item.tags.map((item)=>(
	                                        <div class="item-labels-tags">
	                                        {item}
	                                         </div>
	                                        ))}
									        </div>
								    </div>
								    
								</a>
		                    </div>
		                        ))}
		                </div>

		            </div>

		        </div>
		    </div>
		  <Footer/>
		</>
		)
}

export default HomeDeals;