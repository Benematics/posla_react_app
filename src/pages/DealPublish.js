import React,{useState,useEffect} from 'react';
import AccountSidebar from '../components/AccountSidebar';
import {Link, useNavigate} from "react-router-dom";
import NavTabDeals from '../components/NavTabDeals';
import Header from '../components/Header';
import Footer from '../components/Footer';


const DealPublish = () => {

    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer 41|1rEpfWLienwJOQmLxPuDmRUP5DgtMt5GzThDTKpb");

        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          redirect: 'follow'
        };

        fetch("https://jbuit.com/api/contact/", requestOptions)
          .then(response => response.text())
          .then(result => {
            navigate("/account/deals/create/1234/success")
            console.log(result);
          })
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
		                
		                <div aria-label="breadcrumb" class="details-page-breadcrumb mb-10">
		                    <ol class="breadcrumb">
		                        <li class="breadcrumb-item"><Link to="/account">Account</Link></li>
		                        <li class="breadcrumb-item"><Link to="/account/deals">Deals</Link></li>
		                        <li class="breadcrumb-item active" aria-current="page">Create Deal</li>
		                    </ol>
		                </div>


		        <div class="section">
                    <div class="section-title">
                        Create Deal
                    </div>
                    <div>
                        
                        <NavTabDeals/>
                        
                        <div class="tab-content">
                            <div class="tab-pane active">

                                <form action="/account/deals/create/1234/success">
                                    
                                    <input type="hidden" name="stage" value="publish"/>
                                    <div class="b-1-ddd" style={{padding:"20px"}}>

                                        <div class="p-20">
                                            
                                            <div class="mx-auto mw-600 p-20 b-1-ddd" style={{padding:"20px"}}>
                                                
                                                <div>
                                                    <div class="font-bold">
                                                        Show my deal to more buyers
                                                    </div>
                                                    <div class="text-fade">
                                                        This feature is optional. It allows your deal to shown more often, to a wider range of potential buyers.
                                                    </div>
                                                </div>
                                                <div class="mt-20">
                                                    <div class="pull-left mr-10">
                                                        <span class="fa fa-check-circle icon-green icon-20"></span>
                                                    </div>
                                                    <div class="overflow-hidden">
                                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                                                    </div>
                                                </div>
                                                <div class="mt-10">
                                                    <div class="pull-left mr-10">
                                                        <span class="fa fa-check-circle icon-green icon-20"></span>
                                                    </div>
                                                    <div class="overflow-hidden">
                                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                                                    </div>
                                                </div>
                                                <div class="mt-10">
                                                    <div class="pull-left mr-10">
                                                        <span class="fa fa-check-circle icon-green icon-20"></span>
                                                    </div>
                                                    <div class="overflow-hidden">
                                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                                                    </div>
                                                </div>
                                            
                                            </div>

                                            <div class="hidden mx-auto mw-600 mt-20">

                                                <div class="row">
                                                    <div class="col-sm-6">
                                                        <label class="checkbox-inline cursor-pointer d-block">
                                                            <input type="checkbox" name="boosted" class="mr-10 pull-left" value="1"/>
                                                            <div class="overflow-hidden">
                                                                Show my deal to more buyers
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

                                                <div class="mt-30">
                                                    After expiration, your deal will no longer be “featured” but it will still be visible to potential buyers accross our platform.
                                                </div>

                                            </div>

                                        </div>
                                        
                                        
                                        <div class="p-15 mt-15 bt-1-ddd floated-content" style={{marginTop:"20px"}}>
                                            <div class="pull-right">
                                                <Link to="/account/deals/create/1234/requirements" class="btn btn-transparent-black btn-sm icon-left" style={{marginTop: "10px"}}>
                                                    <span class="fa fa-angle-left"></span>
                                                    Back
                                                </Link>
                                                <Link to="/account/deals/create/1234/success" onClick={handleSubmit}>
                                                    <button type="submit" class="btn btn-blue btn-sm icon-right" style={{marginTop: "10px", marginLeft:"10px"}}>
                                                        Publish
                                                        <span class="fa fa-check-circle"></span>
                                                    </button>
                                                </Link>
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
export default 	DealPublish;