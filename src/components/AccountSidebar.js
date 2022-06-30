import React, { useState, useEffect} from 'react';
import {useNavigate, Link} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {register,selectUser} from "../features/userSlice";

const AccountSidebar = () => {

    const user = useSelector(selectUser);
    const navigate = useNavigate();
    const handleLogout = (e) => {
        e.preventDefault();
        navigate("/");
    }
    



    const [info, setInfo] = useState("");

    useEffect(() => {
    const acce = localStorage.getItem("account detail");
    if (acce) {
      setInfo(JSON.parse(acce));
      console.log(acce);
    }
}, []);









   
return(
<div class="section mb-0 account-sidebar" style={{borderBottomLeftRadius: '0', borderBottomRightRadius: '0', marginTop:"20px"}}> 
    <div class="section mb-0 account-sidebar">

    <div class="account-sidebar-info text-center">
        <div>
            <img src="/images/user.png"alt="User name" class="dp-cover" />
        </div>
        <div class="font-bold">
            {info.name}
        </div>
        <div class="text-fade">
            {info.short_description}
        </div>
        <div>
            <div class="rating-box mt-5">
                <div style={{background:"white"}}>

                {info.rating < 1 && (
                    <>
                        <i class="fa fa-star-half-o fa-1x" style={{color:"orange"}}></i>
                        <i class="fa fa-star-o fa-1x" style={{color:"orange"}}></i>
                        <i class="fa fa-star-o fa-1x" style={{color:"orange"}}></i>
                        <i class="fa fa-star-o fa-1x" style={{color:"orange"}}></i>
                        <i class="fa fa-star-o fa-1x" style={{color:"orange"}}></i>
                    </>
                    )}

                </div>
                <div>
                    <span class="font-bold text-orange">
                        {info.rating}
                    </span>
                    <span class="text-fade">
                        (1809 reviews)
                    </span>
                </div>
            </div>
        </div>
        <div class="text-center mt-5" style={{marginTop:"5px"}}>
            <Link to="/account/profile/edit" class="btn btn-transparent-grey btn-sm mt-5" style={{marginTop:"5px"}}>
                Edit Profile
            </Link>
            <Link to="" class="btn btn-transparent-grey btn-sm mt-5" style={{marginTop:"5px"}}>
                View As Guest
            </Link>
        </div>
    </div>
</div>

<div class="section p-0 mt-0 mb-0 bg-red overflow-hidden" style={{borderTopLeftRadius: '0', borderTopRightRadius: '0', height:"auto"}}>
    <Link to="/account/settings/vacation-mode" class="pt-3 pb-3 pl-10 pr-10 d-block text-fff text-center">
        Vacation Mode [On]
    </Link>
</div>
 

<div class="section p-0 mt-5 account-sidebar-links overflow-hidden" style={{marginTop:"20px"}}>
    <div>
        <Link to="/account/dashboard" class="account-sidebar-dashboard">
            Dashboard
        </Link>
    </div>
    <div>
        <Link to="/account/profile" class="account-sidebar-profile">
            Profile
        </Link>
    </div>
    <div>
        <Link to="/account/orders" class="account-sidebar-orders">
            My Orders
        </Link>
    </div>
    <div>
        <Link to="/account/deals" class="account-sidebar-deals">
            My Deals
        </Link>
    </div>
    <div>
        <Link to="/account/projects" class="account-sidebar-projects">
            My Projects
        </Link>
    </div>
    <div>
        <Link to="/account/project-bids" class="account-sidebar-project-bids">
            My Project Bids
        </Link>
    </div>
    <div>
        <Link to="/account/favourites" class="account-sidebar-favourites">
            Favourites
        </Link>
    </div>
    <div>
        <Link to="/messages" class="account-sidebar-msg">
            Messages
        </Link>
    </div>
    <div>
        <Link to="/account/earnings-withdrawals" class="account-sidebar-earnings-withdrawals">
            Earnings & Withdrawals
        </Link>
    </div>
    <div>
        <Link to="/account/wallet" class="account-sidebar-wallet">
            My Wallet
        </Link>
    </div>
    <div>
        <Link to="/account/reviews" class="account-sidebar-reviews">
            My Reviews
        </Link>
    </div>
    <div>
        <Link to="/account/settings" class="account-sidebar-settings">
            Account Settings
        </Link>
    </div>
    <div>
        <Link to="/" onClick={handleLogout}>
            Logout
        </Link>
    </div>
</div>
</div>
		)
}
export default AccountSidebar;