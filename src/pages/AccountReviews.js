import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AccountSidebar from '../components/AccountSidebar';
import {Link} from "react-router-dom";


const AccountReviews = () =>{
    const [result, setResult] = useState("");
    const [error, setError] = useState("");
    const rating = 2;




    useEffect (()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json())
  .then(response=>{
    setResult(response)
  })
  .catch(error => console.log(error));

    })
    return(
        <>
            <Header/>
    <div class="container" style={{marginTop:"20px"}}>
        <div class="row">
            <div class="d-none d-md-block col-md-4 col-lg-3">

               <AccountSidebar/>

            </div>

            <div class="col-12 col-md-8 col-lg-9">

                <div aria-label="breadcrumb" class="details-page-breadcrumb mb-10">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><Link to="/account">Account</Link></li>
                        <li class="breadcrumb-item active" aria-current="page">Reviews</li>
                    </ol>
                </div>

                <div class="section">
                    <div class="section-title section-title-sm">
                        Reviews
                    </div>
                    <div>
                        
                        <ul class="nav nav-tabs posla-tabs posla-tabs-2">
                            <li class="nav-item">
                                <Link to="/account/reviews" class="nav-link active">
                                    <div class="text-center">
                                        Received (6)
                                    </div>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/account/reviews/sent" class="nav-link">
                                    <div class="text-center">
                                        Sent (13)
                                    </div>
                                </Link>
                            </li>
                        </ul>








                    { 
                        rating < 2  ? 
                                <>
                                    <i class="fa fa-star fa-1x" style={{color:"blue"}}></i>
                                    <i class="fa fa-star-half-o fa-1x" style={{color:"blue"}}></i>
                                    <i class="fa fa-star-o fa-1x" style={{color:"blue"}}></i>
                                    <i class="fa fa-star-o fa-1x" style={{color:"blue"}}></i>
                                    <i class="fa fa-star-o fa-1x" style={{color:"blue"}}></i>
                                </>       
                                :
                                <>
                                    <i class="fa fa-star fa-1x" style={{color:"blue"}}></i>
                                    <i class="fa fa-star fa-1x" style={{color:"blue"}}></i>
                                    <i class="fa fa-star-o fa-1x" style={{color:"blue"}}></i>
                                    <i class="fa fa-star-o fa-1x" style={{color:"blue"}}></i>
                                    <i class="fa fa-star-o fa-1x" style={{color:"blue"}}></i>
                                </>                                      
                        }
                    
                        <div class="b-1-ddd p-20-10-responsive">
                            
                             {result && result.map((item)=>(
                            <div class="mb-20">
                                <Link to="" class="p-20-10-responsive d-block b-1-ddd bb-none pt-10 pb-10 hover-bg-ddd">
                                    <div class="user-msg-img pull-left">
                                        <img src='/images/deal-1.png' alt="Olawale Lawal" class="dp-cover" />
                                    </div>
                                    <div class="overflow-hidden">
                                        <div class="font-bold ellipsis">
                                            {item.title}
                                        </div>
                                        <div class="pt-3">
                                            <label class="label-md d-inline bg-blue pr-10 pl-10 pt-2 pb-2 mr-5 text-fff br-5 pull-left">Posla Deal</label>
                                            <button type="button" class="btn btn-transparent-black btn-xs icon-right pull-left">
                                                View Deal
                                                <span class="fa fa-angle-right"></span>
                                            </button>
                                        </div>
                                    </div>
                                </Link>

                                <div class="user-msg b-1-ddd">
                                    <div class="overflow-hidden">
                                        <div class="user-msg-img pull-left">
                                            <img src='/images/user.png' alt="Firstname lastname" class="dp-contain" />
                                        </div>
                                        <div class="pull-right d-none d-sm-block">
                                            <div class="rating-box mt-5">
                                           
                         
                                                    {   
                                                        rating < 1  ? 
                                                                    <>
                                                                        <i class="fa fa-star-half-o fa-1x" style={{color:"blue"}}></i>
                                                                        <i class="fa fa-star-o fa-1x" style={{color:"blue"}}></i>
                                                                        <i class="fa fa-star-o fa-1x" style={{color:"blue"}}></i>
                                                                        <i class="fa fa-star-o fa-1x" style={{color:"blue"}}></i>
                                                                        <i class="fa fa-star-o fa-1x" style={{color:"blue"}}></i>
                                                                    </>       
                                                                    :
                                                                    <>
                                                                        <i class="fa fa-star fa-1x" style={{color:"blue"}}></i>
                                                                        <i class="fa fa-star-o fa-1x" style={{color:"blue"}}></i>
                                                                        <i class="fa fa-star-o fa-1x" style={{color:"blue"}}></i>
                                                                        <i class="fa fa-star-o fa-1x" style={{color:"blue"}}></i>
                                                                        <i class="fa fa-star-o fa-1x" style={{color:"blue"}}></i>
                                                                    </>   

                                                    }
                
                                            
                                                <div class="font-bold text-orange">
                                                    {rating}
                                                </div>
                                            </div>
                                        </div>
                                        <div class="overflow-hidden">
                                            <div class="font-bold">
                                                Firstname Lastname
                                            </div>
                                            <div class="text-fade">
                                                Published: Jan 12, 2019
                                            </div>
                                            <div class="rating-box d-block d-sm-none">
                                                <div>
                                                    <div></div>
                                                    <div style={{width: "75%"}}></div>
                                                </div>
                                                <div class="font-bold text-orange">
                                                    5.0
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mt-10 font-normal text-justify">
                                       {item.body}
                                    </div>
                                </div>
                            </div>
                            

                            ))}
                                

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
export default AccountReviews;