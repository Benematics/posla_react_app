import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AccountSidebar from '../components/AccountSidebar';
import {Link} from "react-router-dom";

const WithdrawalSettings = () => {
    const [disabled, setDisabled] = useState("disabled");
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
                        <li class="breadcrumb-item"><Link to="/account/settings">Settings</Link></li>
                        <li class="breadcrumb-item active" aria-current="page">Withdrawal Settings</li>
                    </ol>
                </div>

                <div class="section">
                    <div class="section-title section-title-sm">
                        Withdrawal Settings
                    </div>
                    <div>

                        <form action="">
                            <div class="row">

                                <div class="col-sm-6 col-md-12 col-lg-6">
                                    <div class="b-1-ddd">
                                        <div class="bb-1-ddd font-bold pr-20 pl-20 pt-5 pb-5 bg-eee" style={{paddingRight:"20px", paddingLeft:"20px", paddingTop:"5px", paddingBottom:"5px"}}>
                                            Preferred Payment Method
                                        </div>
                                        <div class="p-20" style={{padding:"20px"}}>
                                            <div>
                                                <label class="checkbox-inline cursor-pointer">
                                                    <input type="radio" name="method" onChange={(e)=>{setDisabled(e.target.attribute)}}/>
                                                    Use PayPal
                                                </label>
                                            </div>
                                            <div class="mt-10" style={{marginTop:"10px"}}>
                                                <label class="checkbox-inline cursor-pointer">
                                                    <input type="radio" name="method"/>
                                                    Use Bank Wire Transfer
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <hr class="mt-30 mb-0"/>

                            <div class="row">

                                <div class="col-sm-6 col-md-12 col-lg-6">
                                    <div class="b-1-ddd mt-30" style={{marginTop:"30px"}}>
                                        <div class="bb-1-ddd font-bold pr-20 pl-20 pt-5 pb-5 bg-eee" style={{paddingRight:"20px", paddingLeft:"20px", paddingTop:"5px", paddingBottom:"5px"}}>
                                            PayPal
                                        </div>
                                        <div class="p-20" style={{padding:"20px"}}>
                                            <div class="form-group">
                                                <label for="paypal_email" class="control-label">
                                                    My Paypal Email Address:
                                                </label>
                                                <input type="email" name="paypal_email" id="paypal_email" class="form-control"/>
                                            </div>

                                            <div class="form-group">
                                                <label for="currency" class="control-label">
                                                    Preferred Currency:
                                                </label>
                                                <select name="currency" id="currency" readonly {...disabled}>
                                                    <option value="usd" selected>US Dollar (USD)</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            
                                <div class="col-sm-6 col-md-12 col-lg-6">
                                    <div class="b-1-ddd mt-30" style={{marginTop:"30px"}}>
                                        <div class="bb-1-ddd font-bold pr-20 pl-20 pt-5 pb-5 bg-eee" style={{paddingRight:"20px", paddingLeft:"20px", paddingTop:"5px", paddingBottom:"5px"}}>
                                            Bank Wire Transfer
                                        </div>
                                        <div class="p-20" style={{padding:"20px"}}>
                                            <div class="form-group">
                                                <label for="bank_name" class="control-label">
                                                    Bank Name:
                                                </label>
                                                <select name="bank_name" id="bank_name">
                                                    <option value="">- Select -</option>
                                                </select>
                                            </div>

                                            <div class="form-group">
                                                <label for="account_name" class="control-label">
                                                    Bank Account Name:
                                                </label>
                                                <input type="text" name="account_name" id="account_name" class="form-control"/>
                                            </div>

                                            <div class="form-group">
                                                <label for="swift_code" class="control-label">
                                                    Swift Code:
                                                </label>
                                                <input type="text" name="swift_code" id="swift_code" class="form-control"/>
                                            </div>

                                            <div class="form-group">
                                                <label for="iban" class="control-label">
                                                    IBAN / Bank account number
                                                </label>
                                                <input type="text" name="iban" id="iban" class="form-control"/>
                                            </div>

                                            <div class="form-group">
                                                <label for="currency" class="control-label">
                                                    Preferred Currency:
                                                </label>
                                                <select name="currency" id="currency" readonly disabled>
                                                    <option value="">- Select -</option>
                                                    <option value="usd" selected>US Dollar (USD)</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>

                            <div class="pt-20 mt-20 bt-1-ddd" style={{marginTop:"20px", paddingTop:"20px"}}>

                                <div class="floated-content">
                                    <button type="submit" class="btn btn-blue btn-sm pull-right ml-10" style={{marginLeft:"10px"}}>
                                        Save Changes
                                    </button>
                                    <Link to="/account/settings" class="btn btn-transparent-black btn-sm pull-right">
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
export default WithdrawalSettings;