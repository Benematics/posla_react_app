import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import AccountSidebar from '../components/AccountSidebar';
import NavTabDealsMgt from '../components/NavTabDealsMgt';
import Header from '../components/Header';
import Footer from '../components/Footer';

const DealsEditPricing = () =>{
	const [dealsPricing, setDealsPricing] = useState({
		 pricing_standard:"",
		pricing_standard1:"",
		pricing_standard2:"",
		short_description:"",
		short_description1:"",
		short_description2:"",
		delivery_timeframe:"",
		delivery_timeframe1:"",
		delivery_timeframe2:"",
		revision:"",
		revision1:"",
		revision2:"",
		price:"",
		price1:"",
		price2:""
		

	});
	 const [display, setDisplay]= useState("None");
    const [errors, setErrors] = useState("");

    const handleChange = (e) =>{
        setDealsPricing({...dealsPricing, [e.target.name]:[e.target.value]});
        console.log(dealsPricing);
    }

    const handleSubmit =(e)=>{
        e.preventDefault()
        const sendDealsPricing ={
        pricing_standard:dealsPricing.pricing_standard,
		pricing_standard1:dealsPricing.pricing_standard1,
		pricing_standard2:dealsPricing.pricing_standard2,
		short_description:dealsPricing.short_description,
		short_description1: dealsPricing.short_description1,
		short_description2: dealsPricing.short_description2,
		delivery_timeframe: dealsPricing.delivery_timeframe,
		delivery_timeframe1: dealsPricing.delivery_timeframe1,
		delivery_timeframe2: dealsPricing.delivery_timeframe2,
		revision: dealsPricing.revision,
		revision1: dealsPricing.revision1,
		revision2: dealsPricing.revision2,
		price: dealsPricing.price,
		price1: dealsPricing.price1,
		price2: dealsPricing.price2

        }


        fetch('https://jbuit.com/api/contact/',{
          method: 'POST',
          headers: {
            "Content-Type" : "application/json",
            "accept" : "application/json"},
             body: JSON.stringify(sendDealsPricing)
           }).then(async response => {
             if (!response.ok) {
             const validation = await response.json();
             setErrors(validation.errors);
             console.log(validation.errors);
           }else{
            setDisplay('block')
           }
        })

    }

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
                        <li class="breadcrumb-item"><Link to="/account">Account</Link></li>
                        <li class="breadcrumb-item"><Link to="/account/deals">Deals</Link></li>
                        <li class="breadcrumb-item active" aria-current="page">Edit Deal</li>
                    </ol>
                </div>
                
                <div class="section">
                    <div class="section-title">
                        Edit Deal
                    </div>
                    <div>
                        
                        <NavTabDealsMgt/>
                        
                        <div class="tab-content">
                            <div class="tab-pane active">

                                <form action="/account/deals/edit/1234/requirements">
                                    
                                    <div class="b-1-ddd" style={{padding:"20px"}}>

                                        <div class="p-20">
                                            
                                            <div class="table-responsive b-1-ddd">
                                                <table class="table table-bordered table-col-padding" style={{minWidth: "600px"}}>
                                                    <thead>
                                                        <tr class="bg-eee">
                                                            <th style={{width: "120px"}}></th>
                                                            <th>
                                                                <label class="checkbox-inline">
                                                                    <input type="checkbox" name="level" class="deal-pricing-toggle" value="pricing_standard" onChange={handleChange}/>
                                                                    Basic
                                                                </label>
                                                            </th>
                                                            <th>
                                                                <label class="checkbox-inline">
                                                                    <input type="checkbox" name="level" class="deal-pricing-toggle" value="pricing_standard" onChange={handleChange} />
                                                                    Standard
                                                                </label>
                                                            </th>
                                                            <th>
                                                                <label class="checkbox-inline">
                                                                    <input type="checkbox" name="level" class="deal-pricing-toggle" value="pricing_standard" onChange={handleChange}/>
                                                                    Premium
                                                                </label>
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td rowspan="2" style={{width: "120px"}}></td>
                                                            <td>
                                                                <textarea name="pricing_standard" id="" class="form-control resize-none mt-15 pricing_standard_action" style={{height: "45px"}} placeholder="Name" onChange={handleChange}></textarea>
                                                            </td>
                                                            <td>
                                                                <textarea name="pricing_standard1" id="" class="form-control resize-none mt-15 pricing_standard_action" style={{height: "45px"}} placeholder="Name" onChange={handleChange}></textarea>
                                                            </td>
                                                            <td>
                                                                <textarea name="pricing_standard2" id="" class="form-control resize-none mt-15 pricing_standard_action" style={{height: "45px"}} placeholder="Name" onChange={handleChange}></textarea>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <textarea name="short_description" id="" class="form-control resize-none pricing_standard_action" style={{height: "85px"}} placeholder="Short Description"></textarea>
                                                            </td>
                                                            <td>
                                                                <textarea name="short_description1" id="" class="form-control resize-none pricing_standard_action" style={{height: "85px"}} placeholder="Short Description"></textarea>
                                                            </td>
                                                            <td>
                                                                <textarea name="short_description2" id="" class="form-control resize-none pricing_standard_action" style={{height: "85px"}} placeholder="Short Description"></textarea>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                
                                                <hr class="mt-20 mb-20"/>

                                                <table class="table table-bordered table-col-padding" style={{minWidth: "600px"}}>
                                                    <tbody>
                                                        <tr>
                                                            <td style={{width: "120px"}}>
                                                                <span>
                                                                    Delivery Timeframe
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <select name="delivery_timeframe" id="" class="pricing_standard_action" onChange={handleChange}>
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
                                                                <select name="delivery_timeframe1" id="" class="pricing_standard_action" onChange={handleChange}>
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
                                                                <select name="delivery_timeframe2" id="" class="pricing_standard_action">onChange={handleChange}
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
                                                            <td style={{width: "120px"}}>
                                                                <span>
                                                                    Revision
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <select name="revision" id="" class="pricing_standard_action" onChange={handleChange}>
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
                                                                <select name="revision1" id="" class="pricing_standard_action" onChange={handleChange}>
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
                                                                <select name="revision2" id="" class="pricing_standard_action" onChange={handleChange}>
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
                                                            <td style={{width: "120px"}}>
                                                                <span>
                                                                    Price
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <div class="input-group input-group-attach input-group-attach-transparent input-group-attach-transparent-left">
                                                                    <div class="input-group-btn">
                                                                        <button type="button" class="btn btn-md">
                                                                            <span class="font-18">$</span>
                                                                        </button>
                                                                    </div>
                                                                    <input type="number" class="form-control pricing_standard_action"/>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="input-group input-group-attach input-group-attach-transparent input-group-attach-transparent-left">
                                                                    <div class="input-group-btn">
                                                                        <button type="button" class="btn btn-md">
                                                                            <span class="font-18">$</span>
                                                                        </button>
                                                                    </div>
                                                                    <input type="number" class="form-control pricing_standard_action"/>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="input-group input-group-attach input-group-attach-transparent input-group-attach-transparent-left">
                                                                    <div class="input-group-btn">
                                                                        <button type="button" class="btn btn-md">
                                                                            <span class="font-18">$</span>
                                                                        </button>
                                                                    </div>
                                                                    <input type="number" class="form-control pricing_standard_action"/>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            
                                        </div>

                                        <div class="p-15 mt-15 bt-1-ddd floated-content">
                                            <div class="pull-right">
                                                <Link to="/account/deals/edit/1234/info" class="btn btn-transparent-black btn-sm icon-left">
                                                    <span class="fa fa-angle-left"></span>
                                                    Back
                                                </Link>
                                                <button type="submit" class="btn btn-blue btn-sm icon-right" onClick={handleSubmit}>
                                                    Proceed
                                                    <span class="fa fa-angle-right"></span>
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
export default DealsEditPricing;