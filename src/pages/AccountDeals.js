import React,{useState, useEffect} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AccountSidebar from '../components/AccountSidebar';
import Deal from '../components/Deal';
import {Link} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {register,selectUser} from "../features/userSlice";


const AccountDeals = () => {
    const [result, setResult] = useState("");
    const [error, setError] = useState("");
    const user = useSelector(selectUser);

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
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch("https://posla-api.herokuapp.com/api/account/deals", requestOptions)
      .then(response => response.json())
      .then((res) => {
        const result = res.data;
        setResult(result);
        console.log(result);
      })
      .catch(error => console.log('error', error));

    },[token]);


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
                        <li class="breadcrumb-item active" aria-current="page">Deals</li>
                    </ol>
                </div>

                <div class="section">
                    <div class="section-title section-title-sm">
                        Active Deals ()
                        <Link to="/account/deals/create" class="btn btn-blue btn-sm pull-right">Create New Deal</Link>
                    </div>
                    <div>

                        <ul class="nav nav-tabs posla-tabs posla-tabs-2">
                            <li class="nav-item">
                                <Link to="/account/deals/" class="nav-link active">
                                    <div class="text-center">
                                        Active Deals()
                                    </div>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/account/deals/paused" class="nav-link">
                                    <div class="text-center">
                                        Paused Deals (3)
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    

                        <div class="deal-list deal-list-mini mt-20 row" style={{marginTop:"20px"}}>
                            {result && result.data.map((item)=>(
                            <div class="col-sm-6 col-lg-4 deal-mgmt">
                               <Link to={`/deal/${item.category_id}`} class="deal" style={{height:"auto"}}>
                                  
                                  <div class="deal-info-top">
                                      <div>
                                          <img src='/images/deal-1.png' alt="Olawale Lawal" class="dp-cover" />
                                      </div>
                                      <div class="">
                                          <div>
                                              <img src='/images/user.png' alt="Olawale Lawal" class="dp-contain" />
                                          </div>
                                          <div class="text-fade font-13 ellipsis">
                                              {/*{item.category_name}*/}
                                          </div>
                                      </div>
                                      <div class="font-bold ellipsis-2-lines mt-5 pr-10 pl-10" style={{minHeight: "38px"}}>
                                          {/*{item.description}*/}
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
                                            {/*{item.tags.map((tag)=> <div class="item-labels-tags">{tag} </div> )}*/} 
                                      </div>
                                  </div>
                                  
                              </Link>

                                <div class="dropdown bg-blue">
                                    <label class="label label-fff label-sm mr-5 pull-right" style={{marginTop:"7px"}}>
                                       {/* Pending Approval -- Active --*/}
                                       pending
                                    </label>
                                    <div class="dropdown1 ">
                                        <div id="navbarDropdown" class="nav-link bg-blue dropdown-toggle b-1-blue text-fff dropbtn1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Manage
                                        </div>
                                        <div class="dropdown-menu dropdown-menu-right dropdown-content1" aria-labelledby="navbarDropdown" style={{marginTop:"-20px"}}>
                                            <Link to="/deal/0d8aa710-c3b7-4d4d-b7f0-61da7b23af9f" class="dropdown-item" >
                                                Preview
                                            </Link>
                                            <Link to="/account/deals/pause/1234" class="dropdown-item" >
                                                Pause
                                            </Link>
                                            <Link to="/account/deals/edit/1234" class="dropdown-item" >
                                                Edit
                                            </Link>
                                            <Link to="/account/deals/delete/1234" class="dropdown-item" >
                                                Delete
                                            </Link>
                                        </div>
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