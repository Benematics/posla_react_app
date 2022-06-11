import React from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import {useSelector} from "react-redux";
import {selectUser} from "./features/userSlice";
import HomePage from './pages/HomePage';
import DealsPage from './pages/DealsPage';
import DealInfo from './pages/DealInfo';
import DealPricing from './pages/DealPricing';
import DealRequirement from './pages/DealRequirement';
import DealPublish from './pages/DealPublish';
import ProjectDetails from './pages/ProjectDetails';
import Dashboard from './pages/Dashboard';
import CatBusiness from './pages/CatBusiness';
import SearchDeals from './pages/SearchDeals';
import Account from './pages/Account';
import AccountProfile from './pages/AccountProfile';
import AccountOrders from './pages/AccountOrders';
import AccountDeals from './pages/AccountDeals';
import AccountProject from './pages/AccountProject';
import ProjectBid from './pages/ProjectBid';
import ProjectBidA from './pages/ProjectBidA';
import ProjectBidR from './pages/ProjectBidR';
import Favorites from './pages/Favorites';
import FavoritesAccepted from './pages/FavoritesAccepted';
import FavDeals from './pages/FavDeals';
import Messages from './pages/Messages';
import UserMsg from './pages/UserMsg';
import User from './pages/User';
import UserDeal from './pages/UserDeal';
import UserProject from './pages/UserProject';
import UserReview from './pages/UserReview';
import EarnWith from './pages/EarnWith';
import EarnWithNew from './pages/EarnWithNew';
import Wallet from './pages/Wallet';
import Deposit from './pages/Deposit';
import AccountReviews from './pages/AccountReviews';
import ReviewsSent from './pages/ReviewsSent';
import ReviewsRecieved from './pages/ReviewsRecieved';
import Settings from './pages/Settings';
import ProfileEdit from './pages/ProfileEdit';
import AdminPage from './pages/AdminPage';
import AdminLogin from './pages/AdminLogin';
import AdminList from './pages/AdminList';
import AdminForm from './pages/AdminForm';
import AdminDetails from './pages/AdminDetails';
import AdminListCat from './pages/AdminListCat';
import EmailSample from './pages/EmailSample';
import FrontErrors from './pages/FrontErrors';
import TermsOfService from './pages/TermsOfService';
import AboutUs from './pages/AboutUs';
import SupportTicketsEach from './pages/SupportTicketsEach';
import SupportTicketsNew from './pages/SupportTicketsNew';
import SupportTicketsAll from './pages/SupportTicketsAll';
import SupportTicketsIndex from './pages/SupportTicketsIndex';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import CheckoutStatus from './pages/CheckoutStatus';
import AccountSettingsChangePassword from './pages/AccountSettingsChangePassword';
import WithdrawalSettings from './pages/WithdrawalSettings';
import VacationMode from './pages/VacationMode';
import VacationModeSuccess from './pages/VacationModeSuccess';
import ProjectEdit from './pages/ProjectEdit';
import ProjectEditInfo from './pages/ProjectEditInfo';
import ProjectPublish from './pages/ProjectPublish';
import ProjectSuccess from './pages/ProjectSuccess';
import ProjectCreate from './pages/ProjectCreate';
import ProjectCreateInfo from './pages/ProjectCreateInfo';
import ProjectCreatePublish from './pages/ProjectCreatePublish';
import ProjectCreateSuccess from './pages/ProjectCreateSuccess';
import ProjectDelete from './pages/ProjectDelete';
import ProjectPause from './pages/ProjectPause';
import ProjectListPaused from './pages/ProjectListPaused';
import DealsEditRules from './pages/DealsEditRules';
import DealsEditInfo from './pages/DealsEditInfo';
import DealsEditPricing from './pages/DealsEditPricing';
import DealsEditSuccess from './pages/DealsEditSuccess';
import DealsPaused from './pages/DealsPaused';
import DealsPause from './pages/DealsPause';
import DealsDelete from './pages/DealsDelete';
import Resolution from './pages/Resolution';
import ResEachBuyer from './pages/ResEachBuyer';
import ResEachSeller from './pages/ResEachSeller';
import OrderDetails from './pages/OrderDetails';
import OrderReview from './pages/OrderReview';
import OrderRequirement from './pages/OrderRequirement';
import OrderDeliver from './pages/OrderDeliver';
import Login from './pages/Login';
import Register from './pages/Register';
import RegistrationSuccess from "./pages/RegistrationSuccess";
import ForgotPassword from "./pages/ForgotPassword";
import PasswordReset from "./pages/PasswordReset";
import PasswordResetSuccessful from "./pages/PasswordResetSuccessful";
import ForgotPasswordSuccess from "./pages/ForgotPasswordSuccess";
import VerifyEmail from "./pages/VerifyEmail";
import DealsCreateSuccess from "./pages/DealsCreateSuccess";
import AdminUsersList from "./pages/AdminUsersList";
import AdminDealsList from "./pages/AdminDealsList";
import AdminProjectList from "./pages/AdminProjectList";
import HomeDeals from "./pages/HomeDeals";
import DealDetails from "./pages/DealDetails";
import DealsCat from "./pages/DealsCat";


function App() {
  const user = useSelector(selectUser);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/admin" element={<AdminPage/>}/>
        <Route path="/account/deals/create" element={<DealsPage/>}/>
        <Route path="/account/deals/create/1234/info" element={<DealInfo/>}/>
        <Route path="/account/deals/create/1234/pricing" element={<DealPricing/>}/>
        <Route path="/account/deals/create/1234/requirement" element={<DealRequirement/>}/>
        <Route path="/account/deals/create/1234/publish" element={<DealPublish/>}/>
        <Route path="/project/c1d00230-a423-4b84-a121-7105239ff8d8" element={<ProjectDetails/>}/>
        <Route path="/deal/0d8aa710-c3b7-4d4d-b7f0-61da7b23af9f" element={<DealDetails/>}/>
        <Route path="/account/dashboard" element={<Dashboard/>}/>
        <Route path="/category/business/projects" element={<CatBusiness/>}/>
        <Route path="/deals" element={<HomeDeals/>}/>
        <Route path="/account" element={<Account/>}/>
        <Route path="/account/profile" element={<AccountProfile/>}/>
        <Route path="/account/orders" element={<AccountOrders/>}/>
        <Route path="/account/deals" element={<AccountDeals/>}/>
        <Route path="/account/projects" element={<AccountProject/>}/>
        <Route path="/account/project-bids" element={<ProjectBid/>}/>
        <Route path="/account/project-bids/accepted" element={<ProjectBidA/>}/>
        <Route path="/account/project-bids/rejected" element={<ProjectBidR/>}/>
        <Route path="/account/favourites" element={<Favorites/>}/>
        <Route path="/account/favourites/projects" element={<FavoritesAccepted/>}/>
        <Route path="/account/favourites/deals" element={<FavDeals/>}/>
        <Route path="/messages" element={<Messages/>}/>
        <Route path="/messages/user000000" element={<UserMsg/>}/>
        <Route path="/user/abcde12345" element={<User/>}/>
        <Route path="/user/abcde12345/deals" element={<UserDeal/>}/>
        <Route path="/user/abcde12345/projects" element={<UserProject/>}/>
        <Route path="/user/abcde12345/reviews" element={<UserReview/>}/>
        <Route path="/account/earnings-withdrawals" element={<EarnWith/>}/>
        <Route path="/account/earnings-withdrawals/new" element={<EarnWithNew/>}/>
        <Route path="/account/wallet" element={<Wallet/>}/>
        <Route path="/account/wallet/deposit" element={<Deposit/>}/>
        <Route path="/account/reviews" element={<AccountReviews/>}/>
        <Route path="/account/reviews/sent" element={<ReviewsSent/>}/>
        <Route path="/account/reviews/received" element={<ReviewsRecieved/>}/>
        <Route path="/account/settings" element={<Settings/>}/>
        <Route path="/account/profile/edit" element={<ProfileEdit/>}/>
        <Route path="/admin/login" element={<AdminLogin/>}/>
        <Route path="/admin/sample/list" element={<AdminList/>}/>
        <Route path="/admin/sample/form" element={<AdminForm/>}/>
        <Route path="/admin/sample/details" element={<AdminDetails/>}/>
        <Route path="/admin/list/category" element={<AdminListCat/>}/>
        <Route path="/email/sample" element={<EmailSample/>}/>
        <Route path="/404" element={<FrontErrors/>}/>
        <Route path="/terms" element={<TermsOfService/>}/>
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/support/tickets/123456789012" element={<SupportTicketsEach/>}/>
        <Route path="/support/tickets/new" element={<SupportTicketsNew/>}/>
        <Route path="/support/tickets" element={<SupportTicketsAll/>}/>
        <Route path="/support/" element={<SupportTicketsIndex/>}/>
        <Route path="/cart/" element={<Cart/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/checkout/status" element={<CheckoutStatus/>}/>
        <Route path="/account/settings/change-password" element={<AccountSettingsChangePassword/>}/>
        <Route path="/account/settings/withdrawal-settings" element={<WithdrawalSettings/>}/>
        <Route path="/account/settings/vacation-mode" element={<VacationMode/>}/>
        <Route path="/account/settings/vacation-mode-success" element={<VacationModeSuccess/>}/>
        <Route path="/account/projects/edit/1234" element={<ProjectEdit/>}/>
        <Route path="/account/projects/edit/1234/rules" element={<ProjectEdit/>}/>
        <Route path="/account/projects/edit/1234/info" element={<ProjectEditInfo/>}/>
        <Route path="/account/projects/edit/1234/publish" element={<ProjectPublish/>}/>
        <Route path="/account/projects/edit/1234/success" element={<ProjectSuccess/>}/>
        <Route path="/account/projects/create" element={<ProjectCreate/>}/>
        <Route path="/account/projects/create/1234/info" element={<ProjectCreateInfo/>}/>
        <Route path="/account/projects/create/1234/publish" element={<ProjectCreatePublish/>}/>
        <Route path="/account/projects/create/1234/success" element={<ProjectCreateSuccess/>}/>
        <Route path="/account/projects/delete/1234" element={<ProjectDelete/>}/>
        <Route path="/account/projects/pause/1234" element={<ProjectPause/>}/>
        <Route path="/account/projects/paused" element={<ProjectListPaused/>}/>
        <Route path="/account/deals/edit/1234" element={<DealsEditRules/>}/>
        <Route path="/account/deals/edit/1234/rules" element={<DealsEditRules/>}/>
        <Route path="/account/deals/edit/1234/info" element={<DealsEditInfo/>}/>
        <Route path="/account/deals/edit/1234/pricing" element={<DealsEditPricing/>}/>
        <Route path="/account/deals/edit/1234/success" element={<DealsEditSuccess/>}/>
        <Route path="/account/deals/paused" element={<DealsPaused/>}/>
        <Route path="/account/deals/pause/1234" element={<DealsPause/>}/>
        <Route path="/account/deals/delete/1234" element={<DealsDelete/>}/>
        <Route path="/account/resolution/orders" element={<Resolution/>}/>
        <Route path="/account/resolution/orders/123456789012" element={<ResEachBuyer/>}/>
        <Route path="/account/resolution/orders/123456789013" element={<ResEachSeller/>}/>
        <Route path="/account/orders/123456789012" element={<OrderDetails/>}/>
        <Route path="/account/orders/review/123456789012" element={<OrderReview/>}/>
        <Route path="/account/orders/requirements/123456789012" element={<OrderRequirement/>}/>
        <Route path="/account/orders/deliver/123456789012" element={<OrderDeliver/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/account/registration-successful" element={<RegistrationSuccess/>}/>
        <Route path="/account/forgot-password" element={<ForgotPassword/>} />
        <Route path="/account/password-reset" element={<PasswordReset/>}/>
        <Route path="/account/password-reset/successful" element={<PasswordResetSuccessful/>}/>
        <Route path="/account/forgot-password/successful" element={<ForgotPasswordSuccess/>}/>
        <Route path="/account/verify-email" element={<VerifyEmail/>}/>
        <Route path="/account/deals/create/1234/success" element={<DealsCreateSuccess/>}/>
        <Route path="/admin/users-list" element={<AdminUsersList/>}/>
        <Route path="/admin/deals-list" element={<AdminDealsList/>}/>
        <Route path="/admin/project-list" element={<AdminProjectList/>}/>
        <Route path="/category/music-audio/deals" element={<DealsCat/>}/>


         




    
      </Routes>
    </BrowserRouter>
  );
}

export default App;
