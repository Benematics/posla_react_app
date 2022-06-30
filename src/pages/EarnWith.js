import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AccountSidebar from '../components/AccountSidebar';
import {Link} from "react-router-dom";


const EarnWith = () => {
    const [result, setResult] = useState("");
    const [error, setError] = useState("");
    const [token, setToken] = useState("");

    useEffect(() => {
    const access = localStorage.getItem("token");
    if (access) {
      setToken(access);
      console.log(access);
    }
}, [token]);


    useEffect(()=>{
        var myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Authorization", `Bearer ${token}`);

        var requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow'
        };

        fetch("https://posla-api.herokuapp.com/api/account/earnings-withdrawals", requestOptions)
          .then(response => response.json())
          .then((result) => 
            {
            const res = result.data; 
            localStorage.setItem("available for withdrawal", JSON.stringify(res.available_for_withdraw))
            setResult(res)
            console.log(res)
                    })
          .catch(error => console.log('error', error));
    },[token])

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
                        <li class="breadcrumb-item active" aria-current="page">Earnings & Withdrawals</li>
                    </ol>
                </div>

                <div class="section">
                    <div class="section-title section-title-sm">
                        Earnings & Withdrawals
                        <Link to="/account/earnings-withdrawals/new" class="btn btn-blue btn-sm pull-right">New Withdrawal</Link>
                    </div>
                    <div>

                        <div class="b-1-ddd p-20 pt-0" style={{padding:"20px"}}>
                            <div class="row">
                                <div class="col-12 col-sm-6 col-lg-3">
                                    <div class="b-1-ddd p-10 mt-20" style={{padding:"10px", marginTop:"20px"}}>
                                        <div class="text-center font-bold font-20">
                                            ${result && result.total_earnings}
                                        </div>
                                        <div class="text-center text-fade">
                                            Total
                                            <br class="d-none d-lg-block"/>
                                            Earnings
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-sm-6 col-lg-3">
                                    <div class="b-1-ddd p-10 mt-20" style={{padding:"10px", marginTop:"20px"}}>
                                        <div class="text-center font-bold font-20">
                                            ${result && result.total_withdrawn}
                                        </div>
                                        <div class="text-center text-fade">
                                            Total
                                            <br class="d-none d-lg-block"/>
                                            Withdrawn
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-sm-6 col-lg-3">
                                    <div class="b-1-ddd p-10 mt-20" style={{padding:"10px", marginTop:"20px"}}>
                                        <div class="text-center font-bold font-20">
                                            ${result && result.available_for_withdraw}
                                        </div>
                                        <div class="text-center text-fade">
                                            Available for
                                            <br class="d-none d-lg-block"/>
                                            Withdrawal
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-sm-6 col-lg-3">
                                    <div class="b-1-ddd p-10 mt-20" style={{padding:"10px", marginTop:"20px"}}>
                                        <div class="text-center font-bold font-20">
                                            ${result && result.pending_clearance}
                                        </div>
                                        <div class="text-center text-fade">
                                            Pending
                                            <br class="d-none d-lg-block"/>
                                            Clearance
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="section-title section-title-sm mt-30" style={{ marginTop:"30px"}}>
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
                                        Type
                                    </th>
                                    <th>
                                        Status
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                            {result && result.history.map(()=>(
                                <tr>
                                    <td>
                                        <div>
                                            Feb 03, 2021
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            Cr: Deal: I need a mobile application for an ecommerce startup in Eastern Africa
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            $1,200
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <label class="label label-transparent-black">Earning</label>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <label class="label label-success">Completed</label>
                                        </div>
                                    </td>
                                </tr>
                                ))}
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
export default EarnWith;