import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {Link} from "react-router-dom";
import AccountSidebar from '../components/AccountSidebar';
import Deal from '../components/Deal.js';



const Favorites = () =>{
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

        {/*var formdata = new FormData();*/}

        var requestOptions = {
          method: 'GET',
          headers: myHeaders,
         
          redirect: 'follow'
        };

        fetch("https://posla-api.herokuapp.com/api/account/favourites", requestOptions)
          .then(response => response.json())
            .then((response)=>{
                const res = response.data
                
                console.log(res.deal_favourites)
              })
          .catch(error => console.log('error', error));
    },[token])
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
                        <li class="breadcrumb-item active" aria-current="page">Favourites</li>
                    </ol>
                </div>

                <div class="section">
                    <div class="section-title section-title-sm">
                        Favourites (9)
                    </div>
                    <div>

                        <ul class="nav nav-tabs posla-tabs posla-tabs-2">
                            <li class="nav-item">
                                <Link to="/account/favourites/deals" class="nav-link active">
                                    <div class="text-center">
                                        Deals (10)
                                    </div>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/account/favourites/projects" class="nav-link">
                                    <div class="text-center">
                                        Projects (3)
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    

                        <div class="deal-list deal-list-mini mt-20 row">
                         {result && result.products.map((item)=>(
                            
                            <div class="col-sm-6 col-lg-4 deal-mgmt">
                                    <Link to="/deal/0d8aa710-c3b7-4d4d-b7f0-61da7b23af9f" class="deal" style={{height:"auto"}}> 
                                        <div class="deal-info-top">
                                            <div>
                                                <img src='/images/deal-1.png' alt="Olawale Lawal" class="dp-cover" />
                                            </div>
                                            <div class="">
                                                <div>
                                                    <img src={item.thumbnail} alt="Olawale Lawal" class="dp-contain" />
                                                </div>
                                                <div class="text-fade font-13 ellipsis">
                                                    {item.title}
                                                </div>
                                            </div>
                                            <div class="font-bold ellipsis-2-lines mt-5 pr-10 pl-10" style={{minHeight: "38px"}}>
                                               {item.description}
                                            </div>
                                        </div>

                                        <div class="mt-10 mr-10 ml-10 ellipsis">
                                            <div class="project-price">
                                                <span class="font-size-10 text-fade" style={{paddingRight:"2.5px"}}>Starting At</span>
                                                ${item.price}
                                            </div>
                                            <div class="item-labels">
                                                <div class="item-labels-new">
                                                    New
                                                </div>
                                                <div class="item-labels-featured">
                                                    Featured
                                                </div>
                                            </div>
                                        </div>

                                        <div class="pt-5 bt-1-ddd" style={{marginTop: "-3px"}}>
                                            <div class="mt-0 pl-10 item-labels item-labels-tags-all ellipsis">
                                                <div class="item-labels-prefix">
                                                    Tags & Skills:
                                                </div>
                                                <div class="item-labels-tags">
                                                    Mobile App
                                                </div>
                                                <div class="item-labels-tags">
                                                    iOS App
                                                </div>
                                                <div class="item-labels-tags">
                                                    App Store
                                                </div>
                                                <div class="item-labels-tags">
                                                    Swift Language
                                                </div>
                                                <div class="item-labels-tags">
                                                    Objective C
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </Link>
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
export default Favorites;