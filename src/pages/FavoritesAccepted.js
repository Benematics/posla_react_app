import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AccountSidebar from '../components/AccountSidebar';
import ProjectList from '../components/ProjectList';
import {Link} from 'react-router-dom';


const FavoritesAccepted = () =>{
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
                
                console.log(res.project_favorites)
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
                                <Link to="/account/favourites/" class="nav-link">
                                    <div class="text-center">
                                        Deals 11
                                    </div>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/account/favourites/projects" class="nav-link active">
                                    <div class="text-center">
                                        Projects (3)
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    

                        <div class="project-list project-list-mini mt-20 row">
                            
                        {result && result.posts.map((item)=>( 
                                <div class="col-sm-6 col-md-12 col-lg-6 project-mgmt" style={{marginTop:"10px"}}>                     
                                    <Link to="/project/c1d00230-a423-4b84-a121-7105239ff8d8" className="project" id="projectlist">
                                        
                                        <div>
                                            <div>
                                                <span className="fa fa-angle-right icon-50"></span>
                                            </div>
                                            <div className="">
                                                <div className="font-bold">
                                                    {item.title}
                                                </div>

                                                <div className="text-fade ellipsis-2-lines mt-5">
                                                    {item.body} 
                                                    </div>
                                            </div>
                                        </div>

                                        <div className="mt-5 ellipsis">
                                            <div className="project-price">
                                                $150
                                            </div>
                                            <div className="item-labels">
                                                <div className="item-labels-new">
                                                    New
                                                </div>
                                                <div className="item-labels-featured">
                                                    Featured
                                                </div>
                                                <div className="item-labels-proposals">
                                                    18 proposals
                                                </div>
                                            </div>
                                        </div>

                                        <div className="item-labels item-labels-tags-all ellipsis">
                                            <div className="item-labels-prefix">
                                                Tags & Skills:
                                            </div>
                                            {item.tags.map((me)=>(
                                            <div className="item-labels-tags">
                                                {me}
                                            </div>
                                                ))}
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
export default FavoritesAccepted;