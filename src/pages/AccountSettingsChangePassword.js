import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AccountSidebar from '../components/AccountSidebar';
import {Link} from "react-router-dom";
import { toast } from 'react-toastify';

const AccountSettings = () => {

    const [opass, setOpass] =  useState("");
    const [npass, setNpass] = useState("");
    const [cpass, setCpass] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();

        var myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Authorization", "Bearer 236|mIhQ8zv7X77WUe4YCizSqjpI8VzMpOjw96AquVpB");

        var formdata = new FormData();
        formdata.append("old_password", opass);
        formdata.append("new_password", npass);
        formdata.append("new_password_confirmation", cpass);

        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: formdata,
          redirect: 'follow'
        };

        fetch("https://posla-api.herokuapp.com/api/auth/change-password", requestOptions)
          .then(response => response.json())
          .then((result) => {
            if (result.status == true) {
                toast("Password Updated Successfully")
            }else{
                toast("Error!")
            }
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
                                            <li class="breadcrumb-item"><Link to="/account/settings">Settings</Link></li>
                                            <li class="breadcrumb-item active" aria-current="page">Change Password</li>
                                        </ol>
                                    </div>

                                    <div class="section">
                                        <div class="section-title section-title-sm">
                                            Change Password
                                        </div>
                                        <div>

                                            <form action="">
                                                <div class="b-1-ddd p-20 mw-400" style={{padding:"20px"}}>

                                                    <div class="form-group">
                                                        <label class="control-label">
                                                            Old Password:
                                                        </label>
                                                        <input type="password" name="" class="form-control" onChange={(e)=>{setOpass(e.target.value)}}/>
                                                    </div>

                                                    <div class="form-group">
                                                        <label class="control-label">
                                                            New Password:
                                                        </label>
                                                        <input type="password" name="" class="form-control" onChange={(e)=>{setNpass(e.target.value)}}/>
                                                    </div>

                                                    <div class="form-group">
                                                        <label class="control-label">
                                                            Retype Password:
                                                        </label>
                                                        <input type="password" name="" class="form-control" onChange={(e)=>{setCpass(e.target.value)}}/>
                                                    </div>
                                                </div>

                                                <div class="pt-20 mt-20 bt-1-ddd mw-400" style={{marginTop:"20px", paddingTop:"20", minWidth:"400px"}}>

                                                    <div class="floated-content" style={{marginTop:"15px"}}>
                                                        <button type="submit" class="btn btn-blue btn-sm pull-right ml-10" style={{marginLeft:"10px"}} onClick={handleSubmit}>
                                                            Change Password
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
export default AccountSettings;