import React from 'react';
import {useNavigate} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {register,selectUser} from "../features/userSlice";

const AccountSidebar = () => {

    const user = useSelector(selectUser);
    const navigate = useNavigate();
    const handleLogout = (e) => {
        e.preventDefault();
        navigate("/");
        localStorage.clear();
    }
    const rating = 4.5;
   
	return(
<div class="section mb-0 account-sidebar" Style={{borderBottomLeftRadius: '0', borderBottomRightRadius: '0', marginTop:"20px"}}> 
    <div class="section mb-0 account-sidebar">

    <div class="account-sidebar-info text-center">
        <div>
            <img src="/images/user.png"alt="User name" class="dp-cover" />
        </div>
        <div class="font-bold">
            {user.name}
        </div>
        <div class="text-fade">
            short description short description short description short description
        </div>
        <div>
            <div class="rating-box mt-5">
                <div style={{background:"white"}}>
                    <i class="fa fa-star fa-1x" style={{color:"blue"}}></i>
                    <i class="fa fa-star fa-1x" style={{color:"blue"}}></i>
                    <i class="fa fa-star fa-1x" style={{color:"blue"}}></i>
                    <i class="fa fa-star fa-1x" style={{color:"blue"}}></i>
                    <i class="fa fa-star-o fa-1x" style={{color:"blue"}}></i>
                </div>
                <div>
                    <span class="font-bold text-orange">
                        {rating}
                    </span>
                    <span class="text-fade">
                        (1809 reviews)
                    </span>
                </div>
            </div>
        </div>
        <div class="text-center mt-5">
            <a href="/account/profile/edit" class="btn btn-transparent-grey btn-sm mt-5">
                Edit Profile
            </a>
            <a href="" class="btn btn-transparent-grey btn-sm mt-5">
                View As Guest
            </a>
        </div>
    </div>
</div>

if mode is on

<div class="section p-0 mt-0 mb-0 bg-red overflow-hidden" Style={{'border-top-left-radius': '0', 'border-top-right-radius': '0'}}>
    <a href="/account/settings/vacation-mode" class="pt-5 pb-5 pl-10 pr-10 d-block text-fff text-center">
        Vacation Mode [On]
    </a>
</div>

end if 

<div class="section p-0 mt-5 account-sidebar-links overflow-hidden">
    <div>
        <a href="/account/dashboard" class="account-sidebar-dashboard">
            Dashboard
        </a>
    </div>
    <div>
        <a href="/account/profile" class="account-sidebar-profile">
            Profile
        </a>
    </div>
    <div>
        <a href="/account/orders" class="account-sidebar-orders">
            My Orders
        </a>
    </div>
    <div>
        <a href="/account/deals" class="account-sidebar-deals">
            My Deals
        </a>
    </div>
    <div>
        <a href="/account/projects" class="account-sidebar-projects">
            My Projects
        </a>
    </div>
    <div>
        <a href="/account/project-bids" class="account-sidebar-project-bids">
            My Project Bids
        </a>
    </div>
    <div>
        <a href="/account/favourites" class="account-sidebar-favourites">
            Favourites
        </a>
    </div>
    <div>
        <a href="/messages" class="account-sidebar-msg">
            Messages
        </a>
    </div>
    <div>
        <a href="/account/earnings-withdrawals" class="account-sidebar-earnings-withdrawals">
            Earnings & Withdrawals
        </a>
    </div>
    <div>
        <a href="/account/wallet" class="account-sidebar-wallet">
            My Wallet
        </a>
    </div>
    <div>
        <a href="/account/reviews" class="account-sidebar-reviews">
            My Reviews
        </a>
    </div>
    <div>
        <a href="/account/settings" class="account-sidebar-settings">
            Account Settings
        </a>
    </div>
    <div>
        <a href="/" onClick={handleLogout}>
            Logout
        </a>
    </div>
</div>
</div>
		)
}
export default AccountSidebar;