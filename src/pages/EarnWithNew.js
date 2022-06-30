import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AccountSidebar from '../components/AccountSidebar';
import {Link} from "react-router-dom";


const EarnWithNew = () =>{
    const [withdraw, setWithdraw] = useState("");
    const [pay, setPay] = useState("");

    useEffect(() => {
    const access = localStorage.getItem("available for withdrawal");
    if (access) {
      setWithdraw(access);
      console.log(access);
    }
}, [withdraw]);
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
                        <li class="breadcrumb-item"><Link to="/account/earnings-withdrawals">Earnings & Withdrawals</Link></li>
                        <li class="breadcrumb-item active" aria-current="page">New</li>
                    </ol>
                </div>

                <div class="section">
                    <div class="section-title section-title-sm">
                        New Withdrawal
                        <Link to="/account/settings/withdrawal-settings" class="btn btn-orange btn-sm pull-right d-none d-sm-inline-block">Change Withdrawal Settings</Link>
                        <Link to="/account/settings/withdrawal-settings" class="btn btn-orange btn-xs pull-right d-block d-sm-none" Style={{"margin-top": "-3px"}}>Change Withdrawal Settings</Link>
                    </div>
                    <div>
                        
                        <div class="note text-center">
                            Available for withdrawal:
                            ${withdraw}
                        </div>
                        
                        <form action="/account/earnings-withdrawals/" class="b-1-ddd p-20 mt-20 d-block" style={{marginTop:"20px", padding:"20px"}}>

                            <div class="row">
                                
                                <div class="col-12 col-sm-6 col-md-12 col-lg-6">
                                    <div class="form-group">
                                        <label for="amount" class="control-label">
                                            Amount To Withdraw:
                                        </label>
                                        <div class="input-group input-group-attach input-group-attach-transparent input-group-attach-transparent-left">
                                            <div class="input-group-btn">
                                                <button type="button" class="btn btn-md">
                                                    <span class="font-18">$</span>
                                                </button>
                                            </div>
                                            <input type="number" name="amount" id="amount" class="form-control"/>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-12 col-sm-6 col-md-12 col-lg-6">
                                    <div class="form-group">
                                        <label for="currency" class="control-label">
                                            Withdrawal Option:
                                        </label>
                                        <select name="currency" id="currency" onChange={(e)=>{setPay(e.target.value)}}>
                                            <option value="paypal" >PayPal</option>
                                            <option value="bak_wire" >Bank Wire</option>
                                        </select>
                                    </div>
                                </div>
                                
                            </div>

                            <hr class="hr-ddd"/>


                            { pay == "paypal" ?
                                (
                                <div class="row ">
                                    <div class="col-12 col-sm-6 col-md-12 col-lg-6">
                                        <div class="form-group">
                                            <label for="paypal_email" class="control-label">
                                                My Paypal Email Address:
                                            </label>
                                            <input type="email" name="paypal_email" id="paypal_email" class="form-control" />
                                        </div>
                                    </div>
                                    <div class="col-12 col-sm-6 col-md-12 col-lg-6">
                                        <div class="form-group">
                                            <label for="currency" class="control-label">
                                                Preferred Currency:
                                            </label>
                                            <select name="currency" id="currency">
                                                <option value="usd" selected>US Dollar (USD)</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                )
                                :
                                (
                            <div class="row">
                                <div class="col-12 col-sm-6 col-md-12 col-lg-6">
                                    <div class="form-group">
                                        <label for="bank_name" class="control-label">
                                            Bank Name:
                                        </label>
                                        <select name="bank_name" id="bank_name">
                                            <option value="">First Bank</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-12 col-sm-6 col-md-12 col-lg-6">
                                    <div class="form-group">
                                        <label for="account_name" class="control-label">
                                            Bank Account Name:
                                        </label>
                                        <input type="text" name="account_name" id="account_name" class="form-control"/>
                                    </div>
                                </div>
                                <div class="col-12 col-sm-6 col-md-12 col-lg-6">
                                    <div class="form-group">
                                        <label for="swift_code" class="control-label">
                                            Swift Code:
                                        </label>
                                        <input type="text" name="swift_code" id="swift_code" class="form-control"/>
                                    </div>
                                </div>
                                <div class="col-12 col-sm-6 col-md-12 col-lg-6">
                                    <div class="form-group">
                                        <label for="iban" class="control-label">
                                            IBAN / Bank account number
                                        </label>
                                        <input type="text" name="iban" id="iban" class="form-control"/>
                                    </div>
                                </div>
                                <div class="col-12 col-sm-6 col-md-12 col-lg-6">
                                    <div class="form-group">
                                        <label for="currency" class="control-label">
                                            Preferred Currency:
                                        </label>
                                        <select name="currency" id="currency">
                                            <option value="usd" selected>US Dollar (USD)</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            )}
 
                            <div class="pt-20 mt-20 bt-1-ddd" style={{padding:"20px", marginTop:"20px"}}>
                                <div class="floated-content">
                                    <button type="submit" class="btn btn-blue btn-sm pull-right ml-10" style={{marginLeft:"10px"}}>
                                        Save Changes
                                    </button>
                                    <Link to="/account/earnings-withdrawals/" class="btn btn-transparent-black btn-sm pull-right">
                                        Cancel
                                    </Link>
                                </div>
                            </div>

                        </form>
                    </div>

                </div>


            </div>
        </div>
    </div>
			<Footer/>
		</>
		)
}
export default EarnWithNew;