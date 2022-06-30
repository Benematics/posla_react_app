import React, {useState, useEffect} from 'react';
import AccountSidebar from '../components/AccountSidebar'; 
import {Link} from "react-router-dom";
import NavTabDeals from '../components/NavTabDeals';
import Header from '../components/Header';
import Footer from '../components/Footer';

const DealPricing = () => {
    const [tick, setTick] = useState("hidden")
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [delivery, setDelivery] = useState("");
    const [revision, setRevision] = useState("");
    const [price, setPrice] = useState("");


    const handleSubmit = (e) =>{
        var myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Authorization", "Bearer 41|1rEpfWLienwJOQmLxPuDmRUP5DgtMt5GzThDTKpb");

        var formdata = new FormData();
        formdata.append("types[basic][name]", name);
        formdata.append("types[basic][type]", "basic");
        formdata.append("types[basic][description]", description);
        formdata.append("types[basic][delivery_timeframe]", delivery);
        formdata.append("types[basic][revision_num]", revision);
        formdata.append("types[basic][price]", price);
        formdata.append("types[standard][name]", "1");
        formdata.append("types[standard][type]", "standard");
        formdata.append("types[standard][description]", "standard description");
        formdata.append("types[standard][delivery_timeframe]", "2");
        formdata.append("types[standard][revision_num]", "1");
        formdata.append("types[standard][price]", "100");

        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: formdata,
          redirect: 'follow'
        };

        fetch("https://jbuit.com/api/contact/", requestOptions)
          .then(response => response.text())
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

                                <form action="/account/deals/create/1234/requirements">
                                    
                                    <input type="hidden" name="stage" value="pricing"/>
                                    <div class="b-1-ddd" style={{padding:"20px"}}>

                                        <div class="p-20">
                                            
                                            <div class="table-responsive b-1-ddd">
                                                <table class="table table-bordered table-col-padding" style={{minWidth:'600px'}}>
                                                    <thead>
                                                        <tr class="bg-eee">
                                                            <th style={{width: '120px'}}></th>
                                                            <th>
                                                                <label class="checkbox-inline">
                                                                    <input type="checkbox" name="type[basic][status]" class="deal-pricing-toggle" id="basic" value="1" checked required/>
                                                                    <input type="hidden" name="type[basic][position]" value="1"/>
                                                                    <input type="hidden" name="type[basic][type]" value="Basic"/>
                                                                    Basic
                                                                </label>
                                                            </th>
                                                            <th>
                                                                <label class="checkbox-inline">
                                                                    <input type="checkbox" name="type[standard][status]" class="deal-pricing-toggle" id="standard" value="1"/>
                                                                    <input type="hidden" name="type[standard][position]" value="2"/>
                                                                     <input type="hidden" name="type[standard][type]" value="Standard"/>
                                                                    Standard
                                                                </label>
                                                            </th>
                                                            <th>
                                                                <label class="checkbox-inline">
                                                                    <input type="checkbox" name="type[premium][status]" class="deal-pricing-toggle" id="premium" value="1"/>
                                                                    <input type="hidden" name="type[premium][position]" value="3"/>
                                                                     <input type="hidden" name="type[premium][type]" value="Premium"/>
                                                                    Premium
                                                                </label>
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td rowspan="2" style={{width: '120px'}}></td>
                                                            <td>
                                                                <textarea name="type[basic][name]" id="" class="form-control resize-none mt-15 pricing_basic_action" style={{height: '45px'}} placeholder="Name" onChange={(e)=>{setName(e.target.value)}} disabled="enabled"></textarea>
                                                            </td>
                                                            <td>
                                                                <textarea name="type[standard][name]" id="" class="form-control resize-none mt-15 pricing_standard_action" style={{height: '45px'}} placeholder="Name" onChange={(e)=>{setName(e.target.value)}} disabled="true"></textarea>
                                                            </td>
                                                            <td>
                                                                <textarea name="type[premium][name]" id="" class="form-control resize-none mt-15 pricing_premium_action" style={{height: '45px'}} placeholder="Name" onChange={(e)=>{setName(e.target.value)}} disabled="true"></textarea>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <textarea name="type[basic][description]" id="" class="form-control resize-none pricing_basic_action" style={{height: '85px'}} placeholder="Short Description" onChange={(e)=>{setDescription(e.target.value)}} disabled="true"></textarea>
                                                            </td>
                                                            <td>
                                                                <textarea name="type[standard][description]" id="" class="form-control resize-none pricing_standard_action" style={{height: '85px'}} placeholder="Short Description" onChange={(e)=>{setDescription(e.target.value)}} disabled="true"></textarea>
                                                            </td>
                                                            <td>
                                                                <textarea name="type[premium][description]" id="" class="form-control resize-none pricing_premium_action" style={{height: '85px'}} placeholder="Short Description" onChange={(e)=>{setDescription(e.target.value)}} disabled="true"></textarea>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                
                                                <hr class="mt-20 mb-20"/>

                                                <table class="table table-bordered table-col-padding" >
                                                    <tbody>
                                                        <tr>
                                                            <td style={{height: '120px'}}>
                                                                <span>
                                                                    Delivery Timeframe
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <select name="type[basic][delivery_timeframe]" id="" class="pricing_basic_action" onChange={(e)=>{setDelivery(e.target.value)}} disabled="true">
                                                                    <option value="">- Select -</option>
                                                                    <option value="1">1 day</option>
                                                                    <option value="2">2 days</option>
                                                                    <option value="3">3 days</option>
                                                                    <option value="5">5 days</option>
                                                                    <option value="7">7 days</option>
                                                                    <option value="10">10 days</option>
                                                                    <option value="20">20 days</option>
                                                                    <option value="30">30 days</option>
                                                                    <option value="45">45 days</option>
                                                                    <option value="60">60 days</option>
                                                                    <option value="90">90 days</option>
                                                                </select>
                                                            </td>
                                                            <td>
                                                                <select id="" name="type[standard][delivery_timeframe]" class="pricing_standard_action" onChange={(e)=>{setDelivery(e.target.value)}} disabled="true">
                                                                    <option value="">- Select -</option>
                                                                    <option value="1">1 day</option>
                                                                    <option value="2">2 days</option>
                                                                    <option value="3">3 days</option>
                                                                    <option value="5">5 days</option>
                                                                    <option value="7">7 days</option>
                                                                    <option value="10">10 days</option>
                                                                    <option value="20">20 days</option>
                                                                    <option value="30">30 days</option>
                                                                    <option value="45">45 days</option>
                                                                    <option value="60">60 days</option>
                                                                    <option value="90">90 days</option>
                                                                </select>
                                                            </td>
                                                            <td>
                                                                <select id="" name="type[premium][delivery_timeframe]" class="pricing_premium_action" onChange={(e)=>{setDelivery(e.target.value)}} disabled="true">
                                                                    <option value="">- Select -</option>
                                                                    <option value="1">1 day</option>
                                                                    <option value="2">2 days</option>
                                                                    <option value="3">3 days</option>
                                                                    <option value="5">5 days</option>
                                                                    <option value="7">7 days</option>
                                                                    <option value="10">10 days</option>
                                                                    <option value="20">20 days</option>
                                                                    <option value="30">30 days</option>
                                                                    <option value="45">45 days</option>
                                                                    <option value="60">60 days</option>
                                                                    <option value="90">90 days</option>
                                                                </select>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style={{height: '120px'}}>
                                                                <span>
                                                                    Revision
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <select name="type[basic][revision_num]" id="" class="pricing_basic_action" onChange={(e)=>{setRevision(e.target.value)}} disabled="true">
                                                                    <option value="">- Select -</option>
                                                                    <option value="1">1</option>
                                                                    <option value="2">2</option>
                                                                    <option value="3">3</option>
                                                                    <option value="5">5</option>
                                                                    <option value="7">7</option>
                                                                    <option value="10">10</option>
                                                                </select>
                                                            </td>
                                                            <td>
                                                                <select name="type[standard][revision_num]" id="" class="pricing_standard_action" onChange={(e)=>{setRevision(e.target.value)}} disabled="true">
                                                                    <option value="">- Select -</option>
                                                                    <option value="1">1</option>
                                                                    <option value="2">2</option>
                                                                    <option value="3">3</option>
                                                                    <option value="5">5</option>
                                                                    <option value="7">7</option>
                                                                    <option value="10">10</option>
                                                                </select>
                                                            </td>
                                                            <td>
                                                                <select name="type[premium][revision_num]" id="" class="pricing_premium_action" onChange={(e)=>{setRevision(e.target.value)}} disabled="true">
                                                                    <option value="">- Select -</option>
                                                                    <option value="1">1</option>
                                                                    <option value="2">2</option>
                                                                    <option value="3">3</option>
                                                                    <option value="5">5</option>
                                                                    <option value="7">7</option>
                                                                    <option value="10">10</option>
                                                                </select>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style={{height: '120px'}}>
                                                                <span>
                                                                    Price
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <div class="input-group input-group-attach input-group-attach-transparent input-group-attach-transparent-left" disabled="true">
                                                                    <div class="input-group-btn">
                                                                        <button type="button" class="btn btn-md">
                                                                            <span class="font-18">$</span>
                                                                        </button>
                                                                    </div>
                                                                    <input type="number" name="type[basic][price]" class="form-control pricing_basic_action" onChange={(e)=>{setPrice(e.target.value)}} disabled="true"/>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="input-group input-group-attach input-group-attach-transparent input-group-attach-transparent-left">
                                                                    <div class="input-group-btn">
                                                                        <button type="button" class="btn btn-md">
                                                                            <span class="font-18">$</span>
                                                                        </button>
                                                                    </div>
                                                                    <input type="number" name="type[standard][price]" class="form-control pricing_standard_action" onChange={(e)=>{setPrice(e.target.value)}} disabled="true" disabled="true"/>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="input-group input-group-attach input-group-attach-transparent input-group-attach-transparent-left">
                                                                    <div class="input-group-btn">
                                                                        <button type="button" class="btn btn-md">
                                                                            <span class="font-18">$</span>
                                                                        </button>
                                                                    </div>
                                                                    <input type="number" name="type[premium][price]" class="form-control pricing_premium_action" onChange={(e)=>{setPrice(e.target.value)}} disabled="true"/>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            
                                        </div>

                                        <div class="p-15 mt-15 bt-1-ddd floated-content">
                                            <div class="pull-right">
                                                <Link to="/account/deals/create/1234/info" class="btn btn-transparent-black btn-sm icon-left" style={{marginTop: "10px"}}>
                                                    <span class="fa fa-angle-left"></span>
                                                    Back
                                                </Link>
                                                <Link to="/account/deals/create/1234/requirement" onClick={handleSubmit}>
                                                    <button type="submit" class="btn btn-blue btn-sm icon-right"  style={{marginTop: "10px", marginLeft:"10px"}}>
                                                            Proceed
                                                            <span class="fa fa-angle-right"></span>
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
export default DealPricing;