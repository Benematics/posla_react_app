import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AccountSidebar from '../components/AccountSidebar';
import ProjectList from '../components/ProjectList';
import {Link} from 'react-router-dom';


const AccountProject =()=>{
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

        fetch("https://posla-api.herokuapp.com/api/account/projects", requestOptions)
          .then(response => response.json())
          .then((result) => 
            {
            const res = result.data; 
            setResult(res)
            console.log(res)
                    })
          .catch(error => console.log('error', error));
    },[token])
    return(
<>
    <Header/>
        <div class="container" style={{marginTop: "20px", marginBottom: "20px"}}>
            <div class="row">
                <div class="d-none d-md-block col-md-4 col-lg-3">

                   <AccountSidebar/>

                </div>

                <div class="col-12 col-md-8 col-lg-9">

                    <div aria-label="breadcrumb" class="details-page-breadcrumb mb-10">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><Link to="/account">Account</Link></li>
                            <li class="breadcrumb-item active" aria-current="page">Projects</li>
                        </ol>
                    </div>

                    <div class="section">
                        <div class="section-title section-title-sm">
                            Active Projects (6)
                            <Link to="/account/projects/create" class="btn btn-blue btn-sm pull-right">Create New Project</Link>
                        </div>
                        <div>

                            <ul class="nav nav-tabs posla-tabs posla-tabs-2">
                                <li class="nav-item">
                                    <Link to="/account/projects/" class="nav-link active">
                                        <div class="text-center">
                                            Active Projects (6)
                                        </div>
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/account/projects/paused" class="nav-link">
                                        <div class="text-center">
                                            Paused Projects (3)
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        
                            
                            <div class="project-list project-list-mini mt-20 row" style={{marginTop: "20px"}}>
                                {result && result.map((item)=>(
                                    <div class="col-sm-6 col-md-12 col-lg-6 project-mgmt" style={{marginTop:"10px"}}>
                                        <Link to={`/project/${item.id}`} className="project" id="projectlist">
                                        
                                        <div>
                                            <div>
                                                <span className="fa fa-angle-right icon-50"></span>
                                            </div>
                                            <div className="">
                                                <div className="font-bold">
                                                    {item.title}
                                                </div>

                                                <div className="text-fade ellipsis-2-lines mt-5">
                                                    {item.description}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-5 ellipsis">
                                            <div className="project-price">
                                                ${item.budget}
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
                                            <div className="item-labels-tags">
                                                {item.tags}
                                            </div>
                                        </div>

                                    </Link>
                                    <div class="dropdown bg-blue">
                                        <label class="label label-fff label-sm mr-5 pull-right" style = {{marginTop:"3px"}}>
                                            {/*Pending Approval Status (Active)*/}
                                            Pending
                                        </label>
                                        <div class="dropdown1">
                                            <div id="navbarDropdown" class="nav-link bg-blue dropdown-toggle b-1-blue text-fff dropbtn1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Manage
                                            </div>
                                            <div class="dropdown-menu dropdown-menu-right dropdown-content1" aria-labelledby="navbarDropdown" style = {{marginTop:"-20px"}}>
                                                <Link class="dropdown-item" to="/project/c1d00230-a423-4b84-a121-7105239ff8d8678">
                                                    Preview
                                                </Link>
                                                <Link class="dropdown-item" to="/account/projects/pause/1234">
                                                    Pause
                                                </Link>
                                                <Link class="dropdown-item" to="/account/projects/edit/1234">
                                                    Edit
                                                </Link>
                                                <Link class="dropdown-item" to="/account/projects/delete/1234">
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
export default AccountProject;