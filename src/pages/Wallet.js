import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {Link} from "react-router-dom";
import AccountSidebar from '../components/AccountSidebar';


const Wallet = () =>{
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
                        <li class="breadcrumb-item active" aria-current="page">Wallet</li>
                    </ol>
                </div>

                <div class="section">
                    <div class="section-title section-title-sm">
                        My Wallet
                        <Link to="/account/wallet/deposit" class="btn btn-blue btn-sm pull-right">New Deposit</Link>
                    </div>
                    <div>

                        <div class="b-1-ddd p-20 pt-0">
                            <div class="row" style={{padding:"10px"}}>
                                <div class="col-12 col-sm-6 col-lg-3">
                                    <div class="b-1-ddd p-10 mt-20">
                                        <div class="text-center font-bold font-20">
                                            $15,200
                                        </div>
                                        <div class="text-center text-fade">
                                            Total
                                            <br class="d-none d-lg-block"/>
                                            Deposits
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-sm-6 col-lg-3">
                                    <div class="b-1-ddd p-10 mt-20">
                                        <div class="text-center font-bold font-20">
                                            $6,500
                                        </div>
                                        <div class="text-center text-fade">
                                            Total
                                            <br class="d-none d-lg-block"/>
                                            Spent
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-sm-6 col-lg-3">
                                    <div class="b-1-ddd p-10 mt-20">
                                        <div class="text-center font-bold font-20">
                                            $8,700
                                        </div>
                                        <div class="text-center text-fade">
                                            Available
                                            <br class="d-none d-lg-block"/>
                                            Balance
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-sm-6 col-lg-3">
                                    <div class="b-1-ddd p-10 mt-20">
                                        <div class="text-center font-bold font-20">
                                            $2,500
                                        </div>
                                        <div class="text-center text-fade">
                                            Total
                                            <br class="d-none d-lg-block"/>
                                            Pending
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="section-title section-title-sm mt-30">
                        History
                    </div>

                    
                    <div class="table-responsive b-1-ddd">
                        <table class="table table-tr-lines table-history">
                            <thead>
                                <tr class="bg-eee">
                                    <th>
                                        Date
                                    </th>
                                    <th>
                                        Description
                                    </th>
                                    <th>
                                        Amount
                                    </th>
                                    <th>
                                        Status
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div>
                                            Feb 03, 2021
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            Cr: via Paystack #09904981298233
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            $1,200
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <label class="label label-success">Success</label>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div>
                                            Feb 03, 2021
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            Cr: via Paystack #09904981298233
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            $1,200
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <label class="label label-danger">Failed</label>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>


                </div>


            </div>
        </div>
    </div>
			<Footer/>
		</>
		)
}
export default Wallet;