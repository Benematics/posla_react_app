import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {Link} from "react-router-dom";
import ShareModal from '../components/ShareModal';
import {useSelector, useDispatch} from "react-redux";
import {register,selectUser} from "../features/userSlice";




const DealDetails = () =>{

	const [deal, setDeal] = useState([]);
    const [pro,setPro] = useState("");
    const [buyer, setBuyer] = useState("");
    const [token, setToken] = useState("");
    const [shareDeal, setShareDeal] = useState("none");
    const [id, setId] = useState("");
    const [basicDisplay, setBasicDisplay] = useState("block");
    const [standardDisplay, setStandardDisplay] = useState("none");
    const [premiumDisplay, setPremiumDisplay] = useState("none");
    const [active, setActive] = useState("");
    const [stanActive, setStanActive] = useState("");
    const [preActive, setPreActive] = useState("");

    const user = useSelector(selectUser);
    const path = window.location.pathname;

    useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(res => {
            setDeal(res);
        })
        .catch((error) => {
            console.log(error);
        })
    }, []);

    useEffect(()=>{
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then((res)=>{
            setPro(res);
            console.log(res);
        })
    },[]);

    {/* id */}
    useEffect(() => {
    const access = JSON.parse(localStorage.getItem("seller"));
    if (access) {
      setId(access.id);
      console.log(access.id);
        }
      }, []);


	{/*Token*/}
    useEffect(() => {
    const access = localStorage.getItem("token");
    if (access) {
      setToken(access);
      console.log(access);
	    }
	  }, []);



	{/*Single Deals Api*/}
    useEffect(()=>{
    	var myHeaders = new Headers();
		myHeaders.append("Authorization", `Bearer ${token}`);

		var requestOptions = {
		  method: 'GET',
		  headers: myHeaders,
		  redirect: 'follow'
		};

		fetch(`https://posla-api.herokuapp.com/api/front${path}`, requestOptions)
		  .then(response => response.json())
		  .then((result) => {
		  	const res = result.data[0];
		  	localStorage.setItem("buyer", JSON.stringify(res))
		  	setBuyer(res);
		  	console.log(res)
		  	console.log(path)
		  })
		  .catch(error => console.log('error', error));
	}, [token,path])


	{/*favorite*/}
    const favorite = (e) => {
        e.preventDefault();
        var myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Authorization", `Bearer ${token}`);

        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          redirect: 'follow'
        };

        fetch("https://posla-api.herokuapp.com/api/favourites/add-remove-deal", requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));
            }

    {/*Add Deal To Cart*/}
    const cart = (e) => {
    	e.preventDefault();
    	var myHeaders = new Headers();
		myHeaders.append("Authorization", `Bearer ${token}`);

		var requestOptions = {
		  method: 'POST',
		  headers: myHeaders,
		  redirect: 'follow'
		};

		fetch(`https://posla-api.herokuapp.com/api/cart/add-deal-to-cart/${id}`, requestOptions)
		  .then(response => response.json())
		  .then(result => console.log(result))
		  .catch(error => console.log('error', error));
    }

	

	return(
		<>
			<Header/>

				<div class="modal" id="shareModal" style={{display:shareDeal}}>
				    <div class="modal-dialog">
				        <div class="modal-content">

				            <div class="modal-header">
				                <h4 class="modal-title">Share</h4>
				                <button type="button" class="close" data-dismiss="modal" onClick={()=>{setShareDeal("none")}}>&times;</button>
				            </div>

				            <div class="modal-body">
				                
				                <div class="connection-modal">
				                    
				                    <div class="connection-modal-single">

				                        <div class="form-group mx-auto mt-20" style={{"maxWidth": "350px"}}>
				                            <label>Direct Link</label>
				                            <div class="input-group">
				                                <input type="text" class="form-control readonly" id="direct-share-link"  readonly
				                                value="share_link" />
				                                <button type="button" class="btn btn-blue btn-sm"  style={{borderRadius:"0", height: "35px;"}}>
				                                    <i class="fa fa-copy"></i>
				                                    Copy
				                                </button>
				                            </div>
				                        </div>

				                    </div>    

				                    <div class="text-center bt-1-ddd bb-1-ddd pt-10 pb-10 mt-20 mb-20 mr-65 ml-65" style={{paddingTop:"10px",marginBottom:"10px",marginTop:"20px", marginBottom:"20px", marginRight:"65px", marginLeft:"65px"}}>
				                        Share on Social Media
				                    </div>

				                    <div class="connection-modal-social">


				                        <Link to="https://www.facebook.com/sharer/sharer.php?u=" target="_blank" class="fb_color_bg">
				                            <span class="fa fa-facebook-f"></span>
				                        </Link>

				                        <Link to="https://twitter.com/home?status=" class="twitter_color_bg" target="_blank">
				                            <span class="fa fa-twitter"></span>
				                        </Link>

				                        <Link to="whatsapp://send?text=" target="_blank" class="whatsapp_color_bg">
				                            <span class="fa fa-whatsapp"></span>
				                        </Link>

				                        <Link to="mailto:?subject=share_text&body=" target="_blank" Style={{"background": "#f66"}}>
				                            <span class="fa fa-envelope"></span>
				                        </Link>

				                        <Link to="https://www.linkedin.com/shareArticle?mini=true&url=" target="_blank" class="linkedin_color_bg">
				                            <span class="fa fa-linkedin"></span>
				                        </Link>

				                        <Link to="http://pinterest.com/pin/create/button/?url=" target="_blank" class="pinterest_color_bg">
				                            <span class="fa fa-pinterest"></span>
				                        </Link>

				                    </div>

				                </div>    

				            </div>

				            <div class="modal-footer">
				                <button type="button" class="btn btn-danger btn-sm" data-dismiss="modal" onClick={()=>{setShareDeal("none")}}>Close</button>
				            </div>

				        </div>
				    </div>
				</div>



			    <div class="container" style={{marginTop:"20px", marginBottom:"20px"}}>
			        
			        <div class="section d-none d-sm-block p-5" style={{padding:"5px"}}>
			            <div class="row">
			                <div class="col-lg-6">
			                    <ul class="ul-inline details-page-top">
			                        <li>
			                            <a href="#overview">
			                                Overview
			                            </a>
			                        </li>
			                        <li>
			                            <a href="#description">
			                                Description
			                            </a>
			                        </li>
			                        <li>
			                            <a href="#about">
			                                About This Seller
			                            </a>
			                        </li>
			                        <li>
			                            <a href="#reviews">
			                                Reviews
			                            </a>
			                        </li>
			                    </ul>
			                </div>
			                <div class="col-lg-6 d-none d-lg-block">
			                    <form action="">
			                        <ul class="ul-inline pull-right mt-1" style={{marginTop:"1px"}}>
			                            <li>
			                                <button type="submit" class="btn btn-transparent-black btn-xs hover-bg-orange" title="Favourite" data-widget="collapse" data-toggle="tooltip" onClick={favorite}>
			                                    <span class="fa fa-heart" style={{position: "relative", top: "1px"}}></span>
			                                </button>
			                            </li>
			                            <li>
			                                <a class="p-0" title="Share Deal" data-widget="collapse" data-toggle="tooltip">
			                                    <button type="button" class="btn btn-transparent-black btn-xs hover-bg-orange" data-toggle="modal" data-target="#shareModal" onClick={()=>{setShareDeal("block")}}>
			                                        <span class="fa fa-share-alt"></span>
			                                    </button>
			                                </a>
			                            </li>
			                            <li>
			                                <a data-toggle="modal" data-target="#flag" class="btn btn-transparent-black btn-xs hover-bg-orange" title="Report Deal" data-widget="collapse" data-toggle="tooltip">
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

			                <div aria-label="breadcrumb" class="details-page-breadcrumb mb-10" style={{marginBottom:"10px"}}>
			                    <ol class="breadcrumb">
			                        <li class="breadcrumb-item"><a href="/category/deals/category1">{buyer.category_name}</a></li>
			                        <li class="breadcrumb-item"><a href="/category/deals/category1">{buyer.subcategory_name}</a></li>
			                        <li class="breadcrumb-item active" aria-current="page">{buyer.id}</li>
			                    </ol>
			                </div>

			                <div id="overview">
			                    <div>
			                        <h4 class="font-bold">
			                            {buyer.title}
			                        </h4>
			                    </div>
			                    <div class="details-title-sub floated-content mt-10" style={{marginTop:"10px"}}>
			                        <div class="pull-left">
			                            <a href="/user/abcde12345" class="user-img-text">
			                                <div>
			                                    <img src='/images/user.png' alt="Firstname lastname" class="dp-contain" />
			                                </div>
			                                <div class="hover-underline">
			                                   {buyer.user_name}
			                                </div>
			                            </a>
			                        </div>
			                        <div class="pull-left d-none d-sm-inline-block d-md-none d-lg-inline-block">|</div>
			                        <div class="pull-left d-none d-sm-inline-block d-md-none d-lg-inline-block">
                                            <div class="rating-box rating-box-eee mt-2">
                                                <div>
                                                    <div></div>
                                                    <div style={{width: "75%"}}></div>
                                                </div>
                                                <div>
                                                    3.75 (233)
                                                </div>
                                            </div>
			                        </div>
			                        <div class="pull-left">|</div>
			                        <div class="pull-left">
			                            2 weeks ago
			                        </div>
			                    </div>
			                </div>

			                <div class="section slider-section mt-10" style={{marginTop:"10px"}}>
			                    
			                    <div id="demo" class="carousel slide deals-slider" data-ride="carousel">
			                        {/* Indicators */}
			                        <ul class="carousel-indicators">
			                            <li data-target="#demo" data-slide-to="0" class="active"></li>
			                            <li data-target="#demo" data-slide-to="1" class=""></li>
			                            <li data-target="#demo" data-slide-to="2" class=""></li>
			                        </ul>
			                      
			                        {/* The slideshow */}
			                        <div class="carousel-inner">
			                            <div class="carousel-item active">
			                                <img src='/images/posla-admin.jpg' alt="name" class="dp-contain" />
			                            </div> 
			                            <div class="carousel-item">
			                                <img src='/images/user.png' alt="name" class="dp-contain" />
			                            </div> 
			                            <div class="carousel-item">
			                                <img src='/images/deal-1.png' alt="name" class="dp-contain" />
			                            </div> 
			                        </div>
			                      
			                        {/* Left and right controls */}
			                        <a class="carousel-control-prev" href="#demo" data-slide="prev">
			                          <span class="carousel-control-prev-icon"></span>
			                        </a>
			                        <a class="carousel-control-next" href="#demo" data-slide="next">
			                          <span class="carousel-control-next-icon"></span>
			                        </a>
			                    </div>
			                      
			                </div>

			                <div class="section" id="description">
			                    <div class="section-title">
			                        Description
			                    </div>
			                    <div class="line-height-25">
			                        {buyer.description}
			                    </div>
			                    <div class="mt-10" style={{marginTop:"10px"}}>
			                        <div class="pt-10 bt-1-ddd item-labels item-labels-tags-all d-block" style={{paddingTop:"10px"}}>
			                            <div class="item-labels-prefix">
			                                Tags & Skills:
			                            </div>
			                            {buyer && buyer.tags.map((me)=>(
			                            <>
				                            <div class="item-labels-tags">
				                                {me}
				                            </div>
			                            </>
			                            	))}
			                        </div>
			                    </div>
			                </div>

			                <div class="section d-block d-md-none">
			                    {/*Mobile screen */}
			                    <div>
			                        <ul class="nav nav-tabs posla-tabs posla-tabs-3">
			                            <li class="nav-item">
			                                <a class={`nav-link ${stanActive} ${active} ${preActive}`} data-toggle="tab" href="#price_1_basic" onClick={()=>{setBasicDisplay("block"); setStandardDisplay("none"); setPremiumDisplay("none"); setActive("active"); setStanActive(""); setPreActive("")}}>
			                                    Basic
			                                </a>
			                            </li>
			                            <li class="nav-item">
			                                <a class={`nav-link ${stanActive} ${active} ${preActive}`} data-toggle="tab" href="#price_1_standard" onClick={()=>{setBasicDisplay("none"); setStandardDisplay("block"); setPremiumDisplay("none");setActive(""); setStanActive("active"); setPreActive("")}}>
			                                    Standard
			                                </a>
			                            </li>
			                            <li class="nav-item">
			                                <a class={`nav-link ${stanActive} ${active} ${preActive}`} data-toggle="tab" href="#price_1_premium" onClick={()=>{setBasicDisplay("none"); setStandardDisplay("none"); setPremiumDisplay("block");setActive(""); setStanActive(""); setPreActive("active")}}>
			                                    Premium
			                                </a>
			                            </li>
			                        </ul>
			                          
			                        <form action="/cart">
			                            <div class="tab-content">
			                                
			                                <div class="tab-pane container" id="price_1_basic" style={{display: basicDisplay}}>
			                                    <div class="pt-20 pb-20" style={{paddingTop:"20px", paddingBottom:"20px"}}>
			                                        <div>
			                                            <div class="pull-right font-20 font-bold text-blue">
			                                                $150
			                                            </div>
			                                            <div class="overflow-hidden pt-10">
			                                                Basic Designs
			                                            </div>
			                                        </div>
			                                        <div class="text-fade mt-15">
			                                            hbjj
			                                        </div>
			                                    </div>
			                                    <div>
			                                        <div class="text-left-right">
			                                            <div class="bg-eee">
			                                                <div>
			                                                    <span class="fa fa-history"></span>
			                                                    <div class="overflow-hidden">
			                                                        Delivery Date
			                                                    </div>
			                                                </div>
			                                                <div>
			                                                    1 day delivery
			                                                </div>
			                                            </div>
			                                            <div>
			                                                <div>
			                                                    <span class="fa fa-refresh"></span>
			                                                    <div class="overflow-hidden">
			                                                        Revisions
			                                                    </div>
			                                                </div>
			                                                <div>
			                                                    4 revisions
			                                                </div>
			                                            </div>
			                                            <div class="bg-eee">
			                                                <div>
			                                                    <span class="fa fa-star"></span>
			                                                    <div class="overflow-hidden">
			                                                        Delivery Format
			                                                    </div>
			                                                </div>
			                                                <div>
			                                                    Work & Deliver
			                                                </div>
			                                            </div>
			                                        </div>
			                                    </div>
			                                    <div class="pt-20 pb-20" style={{paddingTop:"20px", paddingBottom:"20px"}}>
			                                        <button class="btn btn-blue btn-block" onClick={cart}>
			                                            Continue ($150)
			                                        </button>
			                                        <div class="mt-10" style={{marginTop:"10px"}}>
			                                            <a href="/messages/user000000" class="btn btn-transparent-black btn-block">
			                                                Contact Seller
			                                            </a>
			                                        </div>
			                                    </div>
			                                </div>

			                                <div class="tab-pane container" id="price_1_standard" style={{display:standardDisplay}}>
			                                    <div class="pt-20 pb-20">
			                                        <div>
			                                            <div class="pull-right font-20 font-bold text-blue">
			                                                $250
			                                            </div>
			                                            <div class="overflow-hidden pt-10">
			                                                Recommended (Super-fast delivery)
			                                            </div>
			                                        </div>
			                                        <div class="text-fade mt-15">
			                                            2 unique logo designs with facebook and twitter covers. All vector files; and unlimited revision.
			                                        </div>
			                                    </div>
			                                    <div>
			                                        <div class="text-left-right">
			                                            <div class="bg-eee">
			                                                <div>
			                                                    <span class="fa fa-history"></span>
			                                                    <div class="overflow-hidden">
			                                                        Delivery Date
			                                                    </div>
			                                                </div>
			                                                <div>
			                                                    1 day delivery
			                                                </div>
			                                            </div>
			                                            <div>
			                                                <div>
			                                                    <span class="fa fa-refresh"></span>
			                                                    <div class="overflow-hidden">
			                                                        Revisions
			                                                    </div>
			                                                </div>
			                                                <div>
			                                                    4 revisions
			                                                </div>
			                                            </div>
			                                            <div class="bg-eee">
			                                                <div>
			                                                    <span class="fa fa-star"></span>
			                                                    <div class="overflow-hidden">
			                                                        Delivery Format
			                                                    </div>
			                                                </div>
			                                                <div>
			                                                    Work & Deliver
			                                                </div>
			                                            </div>
			                                        </div>
			                                    </div>
			                                    <div class="pt-20 pb-20">
			                                        <button class="btn btn-blue btn-block" onClick={cart}>
			                                            Continue ($250)
			                                        </button>
			                                        <div class="mt-10">
			                                            <a href="/messages/user000000" class="btn btn-transparent-black btn-block">
			                                                Contact Seller
			                                            </a>
			                                        </div>
			                                    </div>
			                                </div>

			                                <div class="tab-pane container" id="price_1_premium" style={{display:premiumDisplay}}>
			                                    <div class="pt-20 pb-20">
			                                        <div>
			                                            <div class="pull-right font-20 font-bold text-blue">
			                                                $400
			                                            </div>
			                                            <div class="overflow-hidden pt-10">
			                                                Bespoke Designs (All branding packs)
			                                            </div>
			                                        </div>
			                                        <div class="text-fade mt-15">
			                                            5 supreme logo designs with social media covers, stationery designs, priority support, and all source files used in the making of all 5 logo designs.
			                                        </div>
			                                    </div>
			                                    <div>
			                                        <div class="text-left-right">
			                                            <div class="bg-eee">
			                                                <div>
			                                                    <span class="fa fa-history"></span>
			                                                    <div class="overflow-hidden">
			                                                        Delivery Date
			                                                    </div>
			                                                </div>
			                                                <div>
			                                                    1 day delivery
			                                                </div>
			                                            </div>
			                                            <div>
			                                                <div>
			                                                    <span class="fa fa-refresh"></span>
			                                                    <div class="overflow-hidden">
			                                                        Revisions
			                                                    </div>
			                                                </div>
			                                                <div>
			                                                    4 revisions
			                                                </div>
			                                            </div>
			                                            <div class="bg-eee">
			                                                <div>
			                                                    <span class="fa fa-star"></span>
			                                                    <div class="overflow-hidden">
			                                                        Delivery Format
			                                                    </div>
			                                                </div>
			                                                <div>
			                                                    Work & Deliver
			                                                </div>
			                                            </div>
			                                        </div>
			                                    </div>
			                                    <div class="pt-20 pb-20">
			                                        <button class="btn btn-blue btn-block" onClick={cart}>
			                                            Continue ($400)
			                                        </button>
			                                        <div class="mt-10">
			                                            <a href="/messages/user000000" class="btn btn-transparent-black btn-block">
			                                                Contact Seller
			                                            </a>
			                                        </div>
			                                    </div>
			                                </div>

			                            </div>
			                        </form>
			                    </div>
			                </div>


			                <div class="section d-block d-md-none">
			                    <div class="section-title">
			                        Share Link
			                    </div>
			                    <div>
			                        <div class="">
			                            This is a private deal. Copy the link below to share.
			                        </div>
			                        <div>
			                            <div class="copy-link mt-5" style={{marginTop:"5px"}}>
			                                <div class="input-group">
			                                    <input type="search" name="q" class="form-control" onfocus="highlightShareLink('direct-share-link-3')" id="direct-share-link-3" value="http://localhost:8001/deal/0d8aa710-c3b7-4d4d-b7f0-61da7b23af9f" readonly />
			                                    <div class="input-group-btn">
			                                        <button type="submit" class="btn btn-blue btn-md" onclick="copyShareLink('direct-share-link-3')" style={{borderRadius: "0 !important", height: "35px"}}>
			                                            <span class="fa fa-copy"></span>
			                                            <span>Copy</span>
			                                        </button>
			                                    </div>
			                                </div>
			                            </div>
			                            <div class="text-center mt-10" style={{marginTop:"10px"}}>
			                                <button type="button" class="btn btn-transparent-black btn-sm" data-toggle="modal" data-target="#shareModal" onClick={()=>{setShareDeal("block")}}>
			                                    <span class="fa fa-share-alt"></span>
			                                    Share this Deal
			                                </button>
			                            </div>
			                        </div>
			                    </div>
			                </div>

			                <div class="section" id="about">
			                    <div class="section-title">
			                        About this Seller
			                    </div>
			                    <div>
			                        <a href="/user/abcde12345" class="user-img-text user-img-text-md">
			                            <div>
			                                <img src="/images/user.png" alt="Firstname lastname" class="dp-contain" />
			                            </div>
			                            <div class="pt-5 underline-none">
			                                {buyer.user_name}
			                                <div class="pt-1">
			                                    <button class="btn btn-transparent-black btn-xs hover-bg-black">
			                                        View seller's profile
			                                    </button>
			                                </div>
			                            </div>
			                        </a>
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
			                                    {buyer.member_since}
			                                </div>
			                            </div>
			                            <div class="col-sm-6 mb-20">
			                                <div class="text-fade">
			                                    Project Delivery Rate
			                                </div>
			                                <div class="text-orange">
			                                    90%
			                                </div>
			                            </div>
			                        </div>
			                    </div>
			                    <div class="line-height-20 bt-1-ddd pt-10" >
			                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
			                    </div>
			                </div>

			                <div class="section-title" id="reviews">
			                    Reviews
			                </div>

			                <div class="section pb-0">
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

			                <div class="section mb-0">
			                    <div class="section-title">
			                        114 Reviews
			                        <a href="" class="btn btn-transparent-black btn-xs pull-right hover-bg-orange">View All</a>
			                    </div>
			                    <div>
			                        

			                        <div class="user-msg b-1-eee">
			                            <div class="overflow-hidden">
			                                <div class="user-msg-img pull-left">
			                                    <img src="/images/user.png" alt="Firstname lastname" class="dp-contain" />
			                                </div>
			                                <div class="pull-right d-none d-sm-block">
	                                            <div class="rating-box rating-box-eee mt-2">
	                                                <div>
	                                                    <div></div>
	                                                    <div style={{width: "75%"}}></div>
	                                                </div>
	                                                <div>
	                                                    3.75 (233)
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
	                                            <div class="rating-box rating-box-eee mt-2">
	                                                <div>
	                                                    <div></div>
	                                                    <div style={{width: "75%"}}></div>
	                                                </div>
	                                                <div>
	                                                    3.75 (233)
	                                                </div>
	                                            </div>
			                                </div>
			                            </div>
			                            <div class="mt-10 font-normal text-justify">
			                                I've worked with Kristen twice now. I have never worked with a graphic designer before and she's truly the best. Such a great lady and works really hard to make her customers satisfied. She is also really talented, open to ideas and works fast.
			                            </div>
			                        </div>
			                        
			                    </div>
			                </div>

			            </div>

			            <div class="col-md-4 d-none d-md-block">
			                
			                <div class="sticky-top d-none d-lg-block">
			                    <div class="section">
			                        <div>

			                           {/* web */}
			                        <ul class="nav nav-tabs posla-tabs posla-tabs-3">
			                            <li class="nav-item">
			                                <a class={`nav-link ${stanActive} ${active} ${preActive}`} data-toggle="tab" href="#price_1_basic" onClick={()=>{setBasicDisplay("block"); setStandardDisplay("none"); setPremiumDisplay("none"); setActive("active"); setStanActive(""); setPreActive("")}}>
			                                    Basic
			                                </a>
			                            </li>
			                            <li class="nav-item">
			                                <a class={`nav-link ${stanActive} ${active} ${preActive}`} data-toggle="tab" href="#price_1_standard" onClick={()=>{setBasicDisplay("none"); setStandardDisplay("block"); setPremiumDisplay("none");setActive(""); setStanActive("active"); setPreActive("")}}>
			                                    Standard
			                                </a>
			                            </li>
			                            <li class="nav-item">
			                                <a class={`nav-link ${stanActive} ${active} ${preActive}`} data-toggle="tab" href="#price_1_premium" onClick={()=>{setBasicDisplay("none"); setStandardDisplay("none"); setPremiumDisplay("block");setActive(""); setStanActive(""); setPreActive("active")}}>
			                                    Premium
			                                </a>
			                            </li>
			                        </ul>
			                              
			                            <form action="/cart">
			                                <div class="tab-content">
			                                    
			                                    <div class="tab-pane container active" id="price_2_basic" style={{display:basicDisplay}}>
			                                        <div class="pt-20 pb-20" style={{paddingTop:"20px", paddingBottom:"20px"}}>
			                                            <div>
			                                                <div class="pull-right font-20 font-bold text-blue">
			                                                    $150
			                                                </div>
			                                                <div class="overflow-hidden pt-10" style={{paddingTop:"10px"}}>
			                                                    Basic Designs
			                                                </div>
			                                            </div>
			                                            <div class="text-fade mt-15" style={{marginTop:"15px"}}>
			                                                2 basic logo designs with JPEG or JPG format and PNG format.
			                                            </div>
			                                        </div>
			                                        <div>
			                                            <div class="text-left-right">
			                                                <div class="bg-eee">
			                                                    <div>
			                                                        <span class="fa fa-history"></span>
			                                                        <div class="overflow-hidden">
			                                                            Delivery Date
			                                                        </div>
			                                                    </div>
			                                                    <div>
			                                                        1 day delivery
			                                                    </div>
			                                                </div>
			                                                <div>
			                                                    <div>
			                                                        <span class="fa fa-refresh"></span>
			                                                        <div class="overflow-hidden">
			                                                            Revisions
			                                                        </div>
			                                                    </div>
			                                                    <div>
			                                                        4 revisions
			                                                    </div>
			                                                </div>
			                                                <div class="bg-eee">
			                                                    <div>
			                                                        <span class="fa fa-star"></span>
			                                                        <div class="overflow-hidden">
			                                                            Delivery Format
			                                                        </div>
			                                                    </div>
			                                                    <div>
			                                                        Work & Deliver
			                                                    </div>
			                                                </div>
			                                            </div>
			                                        </div>
			                                        <div class="pt-20 pb-20" style={{paddingTop:"20px", paddingBottom:"20px"}}>
			                                            <button class="btn btn-blue btn-block" onClick={cart}>
			                                                Continue ($150)
			                                            </button>
			                                            <div class="mt-10" style={{marginTop:"10px"}}>
			                                                <a href="/messages/user000000" class="btn btn-transparent-black btn-block">
			                                                    Contact Seller
			                                                </a>
			                                            </div>
			                                        </div>
			                                    </div>

			                                    <div class="tab-pane container" id="price_2_standard" style={{display:standardDisplay}}>
			                                        <div class="pt-20 pb-20" style={{paddingTop:"20px", paddingBottom:"20px"}}>
			                                            <div>
			                                                <div class="pull-right font-20 font-bold text-blue">
			                                                    $250
			                                                </div>
			                                                <div class="overflow-hidden pt-10" style={{paddingTop:"10px"}}>
			                                                    Recommended (Super-fast delivery)
			                                                </div>
			                                            </div>
			                                            <div class="text-fade mt-15" style={{marginTop:"15px"}}>
			                                                2 unique logo designs with facebook and twitter covers. All vector files; and unlimited revision.
			                                            </div>
			                                        </div>
			                                        <div>
			                                            <div class="text-left-right">
			                                                <div class="bg-eee">
			                                                    <div>
			                                                        <span class="fa fa-history"></span>
			                                                        <div class="overflow-hidden">
			                                                            Delivery Date
			                                                        </div>
			                                                    </div>
			                                                    <div>
			                                                        1 day delivery
			                                                    </div>
			                                                </div>
			                                                <div>
			                                                    <div>
			                                                        <span class="fa fa-refresh"></span>
			                                                        <div class="overflow-hidden">
			                                                            Revisions
			                                                        </div>
			                                                    </div>
			                                                    <div>
			                                                        4 revisions
			                                                    </div>
			                                                </div>
			                                                <div class="bg-eee">
			                                                    <div>
			                                                        <span class="fa fa-star"></span>
			                                                        <div class="overflow-hidden">
			                                                            Delivery Format
			                                                        </div>
			                                                    </div>
			                                                    <div>
			                                                        Work & Deliver
			                                                    </div>
			                                                </div>
			                                            </div>
			                                        </div>
			                                        <div class="pt-20 pb-20" style={{paddingTop:"20px", paddingBottom:"20px"}}>
			                                            <button class="btn btn-blue btn-block" onClick={cart}>
			                                                Continue ($250)
			                                            </button>
			                                            <div class="mt-10" style={{marginTop:"10px"}}>
			                                                <a href="/messages/user000000" class="btn btn-transparent-black btn-block">
			                                                    Contact Seller
			                                                </a>
			                                            </div>
			                                        </div>
			                                    </div>

			                                    <div class="tab-pane container" id="price_2_premium" style={{display:premiumDisplay}}>
			                                        <div class="pt-20 pb-20" style={{paddingTop:"20px", paddingBottom:"20px"}}>
			                                            <div>
			                                                <div class="pull-right font-20 font-bold text-blue">
			                                                    $400
			                                                </div>
			                                                <div class="overflow-hidden pt-10" style={{marginTop:"10px"}}>
			                                                    Bespoke Designs (All branding packs)
			                                                </div>
			                                            </div>
			                                            <div class="text-fade mt-15" style={{marginTop:"15px"}}>
			                                                5 supreme logo designs with social media covers, stationery designs, priority support, and all source files used in the making of all 5 logo designs.
			                                            </div>
			                                        </div>
			                                        <div>
			                                            <div class="text-left-right">
			                                                <div class="bg-eee">
			                                                    <div>
			                                                        <span class="fa fa-history"></span>
			                                                        <div class="overflow-hidden">
			                                                            Delivery Date
			                                                        </div>
			                                                    </div>
			                                                    <div>
			                                                        1 day delivery
			                                                    </div>
			                                                </div>
			                                                <div>
			                                                    <div>
			                                                        <span class="fa fa-refresh"></span>
			                                                        <div class="overflow-hidden">
			                                                            Revisions
			                                                        </div>
			                                                    </div>
			                                                    <div>
			                                                        4 revisions
			                                                    </div>
			                                                </div>
			                                                <div class="bg-eee">
			                                                    <div>
			                                                        <span class="fa fa-star"></span>
			                                                        <div class="overflow-hidden">
			                                                            Delivery Format
			                                                        </div>
			                                                    </div>
			                                                    <div>
			                                                        Work & Deliver
			                                                    </div>
			                                                </div>
			                                            </div>
			                                        </div>
			                                        <div class="pt-20 pb-20" style={{paddingTop:"20px", paddingBottom:"20px"}}>
			                                            <button class="btn btn-blue btn-block" onClick={cart}>
			                                                Continue ($400)
			                                            </button>
			                                            <div class="mt-10" style={{marginTop:"10px"}}>
			                                                <a href="/messages/user000000" class="btn btn-transparent-black btn-block">
			                                                    Contact Seller
			                                                </a>
			                                            </div>
			                                        </div>
			                                    </div>
			                                    
			                                </div>
			                            </form>
			                        </div>
			                    </div>

			                    <div class="section">
			                        <div class="section-title">
			                            Share Link
			                        </div>
			                        <div>
			                            <div class="">
			                                This is a private deal. Copy the link below to share.
			                            </div>
			                            <div>
			                                <div class="copy-link mt-5" style={{marginTop:"5px"}}>
			                                    <div class="input-group">
			                                        <input type="search" name="q" class="form-control" onfocus="highlightShareLink('direct-share-link-2')" id="direct-share-link-2" value="http://localhost:8001/deal/0d8aa710-c3b7-4d4d-b7f0-61da7b23af9f" readonly />
			                                        <div class="input-group-btn">
			                                            <button type="submit" class="btn btn-blue btn-md" onclick="copyShareLink('direct-share-link-2')" style={{borderRadius: "0 !important", height: "35px"}}>
			                                                <span class="fa fa-copy"></span>
			                                                <span>Copy</span>
			                                            </button>
			                                        </div>
			                                    </div>
			                                </div>
			                                <div class="text-center mt-10" style={{marginTop:"10px"}}>
			                                    <button type="button" class="btn btn-transparent-black btn-sm" data-toggle="modal" data-target="#shareModal" onClick={()=>{setShareDeal("block")}}>
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
			                                <a class="p-0" title="Share Deal" data-widget="collapse" data-toggle="tooltip">
			                                    <button type="button" class="btn btn-transparent-black btn-xs hover-bg-orange" data-toggle="modal" data-target="#share">
			                                        <span class="fas fa-share-alt"></span>
			                                    </button>
			                                </a>
			                            </li>
			                            <li>
			                                <a data-toggle="modal" data-target="#flag" class="btn btn-transparent-black btn-xs hover-bg-orange" title="Report Deal" data-widget="collapse" data-toggle="tooltip">
			                                    <span class="fas fa-flag"></span>
			                                </a>
			                            </li>
			                        </ul>
			                    </form>
			                </div>

			                <div class="sticky-top d-none d-md-block d-lg-none mb-0">
			                    <div class="section">
			                        tab 
			                        <div>
			                            <ul class="nav nav-tabs posla-tabs posla-tabs-3">
			                                <li class="nav-item">
			                                    <a class="nav-link active" data-toggle="tab" href="#price_3_basic">
			                                        Basic
			                                    </a>
			                                </li>
			                                <li class="nav-item">
			                                    <a class="nav-link" data-toggle="tab" href="#price_3_standard">
			                                        Standard
			                                    </a>
			                                </li>
			                                <li class="nav-item">
			                                    <a class="nav-link" data-toggle="tab" href="#price_3_premium">
			                                        Premium
			                                    </a>
			                                </li>
			                            </ul>
			                            
			                            <form action="/cart">
			                                <div class="tab-content">
			                                    
			                                    <div class="tab-pane container active p-0" id="price_3_basic">
			                                        <div class="pt-20 pb-20" style={{paddingTop:"20px", paddingBottom:"20px"}}>
			                                            <div>
			                                                <div class="pull-right ml-10 font-20 font-bold text-blue" style={{marginLeft:"10px"}}>
			                                                    $150
			                                                </div>
			                                                <div class="overflow-hidden pt-5" style={{paddingTop:"5px"}}>
			                                                    Basic Designs
			                                                </div>
			                                            </div>
			                                            <div class="text-fade mt-15" style={{marginTop:"15px"}}>
			                                                2 basic logo designs with JPEG or JPG format and PNG format.
			                                            </div>
			                                        </div>
			                                        <div>
			                                            <div class="text-left-right">
			                                                <div class="bg-eee">
			                                                    <div class="w-100 pull-none">
			                                                        <span class="fa fa-history"></span>
			                                                        <div class="overflow-hidden">
			                                                            Delivery Date
			                                                        </div>
			                                                    </div>
			                                                    <div class="pl-10 pr-10" style={{paddingLeft:"10px", paddingRight:"10px"}}>
			                                                        1 day delivery
			                                                    </div>
			                                                </div>
			                                                <div>
			                                                    <div class="w-100 pull-none">
			                                                        <span class="fa fa-refresh"></span>
			                                                        <div class="overflow-hidden">
			                                                            Revisions
			                                                        </div>
			                                                    </div>
			                                                    <div class="pl-10 pr-10" style={{paddingLeft:"10px", paddingRight:"10px"}}>
			                                                        4 revisions
			                                                    </div>
			                                                </div>
			                                                <div class="bg-eee">
			                                                    <div class="w-100 pull-none">
			                                                        <span class="fa fa-star"></span>
			                                                        <div class="overflow-hidden">
			                                                            Delivery Format
			                                                        </div>
			                                                    </div>
			                                                    <div class="pl-10 pr-10" style={{paddingLeft:"10px", paddingRight:"10px"}}>
			                                                        Work & Deliver
			                                                    </div>
			                                                </div>
			                                            </div>
			                                        </div>
			                                        <div class="pt-20 pb-20" style={{paddingTop:"20px", paddingBottom:"20px"}}>
			                                            <button class="btn btn-blue btn-block" onClick={cart}>
			                                                Continue ($150)
			                                            </button>
			                                            <div class="mt-10" style={{marginTop:"10px"}}>
			                                                <a href="/messages/user000000" class="btn btn-transparent-black btn-block">
			                                                    Contact Seller
			                                                </a>
			                                            </div>
			                                        </div>
			                                    </div>

			                                </div>
			                            </form>
			                        </div>
			                    </div>

			                    <div class="section">
			                        <div class="section-title">
			                            Share Link
			                        </div>
			                        <div>
			                            <div class="">
			                                This is a private deal.
			                                <br/>
			                                Copy the link below to share.
			                            </div>
			                            <div>
			                                <div class="copy-link mt-5" style={{marginTop:"5px"}}>
			                                    <div class="input-group">
			                                        <input type="search" name="q" class="form-control" onfocus="highlightShareLink('direct-share-link-3')" id="direct-share-link-3" value="http://localhost:8001/deal/0d8aa710-c3b7-4d4d-b7f0-61da7b23af9f" readonly />
			                                        <div class="input-group-btn">
			                                            <button type="submit" class="btn btn-blue btn-md" onclick="copyShareLink('direct-share-link-3')" style={{borderRadius: "0 !important", height: "35px"}}>
			                                                <span class="fa fa-copy"></span>
			                                                <span>Copy</span>
			                                            </button>
			                                        </div>
			                                    </div>
			                                </div>
			                                <div class="text-center mt-10" style={{marginTop:"10px"}}>
			                                    <button type="button" class="btn btn-transparent-black btn-sm" data-toggle="modal" data-target="#shareModal" onClick={()=>{setShareDeal("block")}}>
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
			            Other Deals from this seller
			        </div>
			        <div class="section">
			            
			            <div class="deal-list deal-list-mini row">
			                <div class="col-sm-6 col-lg-3">
			                    
								<a href="/deal/0d8aa710-c3b7-4d4d-b7f0-61da7b23af9f" class="deal" style={{height:"auto"}}>
								    
								    <div class="deal-info-top">
								        <div>
								            <img src='/images/deal-1.png' alt="Olawale Lawal" class="dp-cover" />
								        </div>
								        <div class="">
								            <div>
								                <img src='/images/user.png' alt="Olawale Lawal" class="dp-contain" />
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

			            </div>
			        </div>
			            
			        <hr/>

			        <div class="font-18 font-bold pb-10 text-center b-none">
			            Similar Category Name Deals
			        </div>
			        <div class="section">
			            <div class="deal-list deal-list-mini row">
			                <div class="col-sm-6 col-lg-3">	

								<a href="/deal/0d8aa710-c3b7-4d4d-b7f0-61da7b23af9f" class="deal" style={{height:"auto"}}>
								    
								    <div class="deal-info-top">
								        <div>
								            <img src='/images/deal-1.png' alt="Olawale Lawal" class="dp-cover" />
								        </div>
								        <div class="">
								            <div>
								                <img src='/images/user.png' alt="Olawale Lawal" class="dp-contain" />
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

			            </div>
			        </div>
			            

			    </div>
			<Footer/>
		</>
		)
}
export default DealDetails;