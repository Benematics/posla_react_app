import React,{useState, useEffect} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AccountSidebar from '../components/AccountSidebar';
import Deal from '../components/Deal';
import {useSelector, useDispatch} from "react-redux";
import {register,selectUser} from "../features/userSlice";


const AccountDeals = () => {
    const [result, setResult] = useState("");
    const [error, setError] = useState("");
    const user = useSelector(selectUser);


    useEffect(()=>{
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer 41|1rEpfWLienwJOQmLxPuDmRUP5DgtMt5GzThDTKpb");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch("https://posla-api.herokuapp.com/api/front/deals", requestOptions)
      .then(response => response.json())
      .then(res => {
        const deals = res.data;
        setResult(deals);
        console.log(deals);
      })
      .catch(error => console.log('error', error));

    },[]);


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
                        <li class="breadcrumb-item"><a href="/account">Account</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Deals</li>
                    </ol>
                </div>

                <div class="section">
                    <div class="section-title section-title-sm">
                        Active Deals (6)
                        <a href="/account/deals/create" class="btn btn-blue btn-sm pull-right">Create New Deal</a>
                    </div>
                    <div>

                        <ul class="nav nav-tabs posla-tabs posla-tabs-2">
                            <li class="nav-item">
                                <a href="/account/deals/" class="nav-link active">
                                    <div class="text-center">
                                        Active Deals(6)
                                    </div>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="/account/deals/paused" class="nav-link">
                                    <div class="text-center">
                                        Paused Deals (3)
                                    </div>
                                </a>
                            </li>
                        </ul>
                    

                        <div class="deal-list deal-list-mini mt-20 row">
                            {result && result["Programming & Tech 3"].map((item)=>(

                            <div class="col-sm-6 col-lg-4 deal-mgmt">
                               <a href="/deal/0d8aa710-c3b7-4d4d-b7f0-61da7b23af9f" class="deal" style={{height:"280px"}}>
                                          
                                          <div class="deal-info-top">
                                              <div>
                                                  <img src='/images/deal-1.png' alt="Olawale Lawal" class="dp-cover" />
                                              </div>
                                              <div class="">
                                                  <div>
                                                      <img src='/images/user.png' alt="Olawale Lawal" class="dp-contain" />
                                                  </div>
                                                  <div class="text-fade font-13 ellipsis">
                                                      {item.category_name}
                                                  </div>
                                              </div>
                                              <div class="font-bold ellipsis-2-lines mt-5 pr-10 pl-10" style={{minHeight: "38px"}}>
                                                  {item.description}
                                              </div>
                                          </div>
                              
                                          <div class="mt-10 mr-10 ml-10 ellipsis">
                                              <div class="project-price">
                                                  <span class="font-size-10 text-fade">Starting At</span>
                                                  $400
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
                              
                                          <div class="pt-5 bt-1-ddd" style={{marginTop: "-3px", height:"300px"}}>
                                              <div class="mt-0 pl-10 item-labels item-labels-tags-all ellipsis">
                                                  <div class="item-labels-prefix">
                                                      Tags & Skills:
                                                  </div>
                                                      {item.tags.map((item)=>(
                                                        <div class="item-labels-tags">
                                                        {item}
                                                         </div>
                                                        ))}
                                              </div>
                                          </div>
                                          
                                      </a>

                                <div class="dropdown dropdown1">
                                    <label class="label label-fff label-sm mr-5 pull-right" style={{marginTop:"7px"}}>
                                       {/* Pending Approval -- Active --*/}
                                    </label>
                                    <div id="navbarDropdown" class="nav-link bg-blue dropdown-toggle b-1-blue text-fff dropbtn1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Manage
                                    </div>
                                    <div class="dropdown-menu dropdown-menu-right dropdown-content1" aria-labelledby="navbarDropdown" style={{marginTop:"-20px"}}>
                                        <a class="dropdown-item" href="/deal/0d8aa710-c3b7-4d4d-b7f0-61da7b23af9f">
                                            Preview
                                        </a>
                                        <a class="dropdown-item" href="/account/deals/pause/1234">
                                            Pause
                                        </a>
                                        <a class="dropdown-item" href="/account/deals/edit/1234">
                                            Edit
                                        </a>
                                        <a class="dropdown-item" href="/account/deals/delete/1234">
                                            Delete
                                        </a>
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
export default AccountDeals;