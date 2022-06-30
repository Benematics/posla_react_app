import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FilterSearch from '../components/FilterSearch';
import CommonFilter from '../components/CommonFilter';
import ProjectList from '../components/ProjectList';
import {Link} from "react-router-dom";

const SearchProjects = () => {

    const [result, setResult] = useState("");
    const [q, setQ] = useState("");
    const [searchParam] = ["projects", "deals", "freelancers"];
    const [token, setToken] = useState("");
    const [error, setError] = useState(null);
    const [items, setItems] = useState([]);
   const [proItems, setProItems] = useState([]);
   const [dealItems, setDealItems] = useState([]);
   const [filter, setFilter] = useState("");
   const [paginate, setpaginate] = useState(8);
   const [query, setQuery] = useState("");
   const [total, setTotal] = useState("");

    useEffect(()=>{
        const get = localStorage.getItem("Search");
        setQ(get);
        console.log(q);
    })

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

        fetch("https://posla-api.herokuapp.com/api/search", requestOptions)
          .then(response => response.json())
          .then((result) => {
            const res = result.data;
            const me = res.deal;
            const pro = res.project;
            const deal = res.user;
            setTotal(res);
            setItems(me);
            setProItems(pro);
            setDealItems(deal);
            console.log(items);
            console.log(proItems);
            console.log(dealItems);
            console.log(res);
          })
          .catch((error) => {
            setError(error);
            console.log('error', error)
          });
    }, [token])



    const data = Object.values(items);
    const proData = Object.values(proItems);
    const dealData = Object.values(dealItems);
    console.log(data);
    console.log(proData);
    console.log(dealData);

    const search_parameters = Object.keys(Object.assign({}, ...data));
    const search_pro = Object.keys(Object.assign({}, ...proData));
    const search_use = Object.keys(Object.assign({}, ...dealData));

    const filter_items = [...new Set(data.map((item) => item.title))];
    const filter_pro = [...new Set(proData.map((item) => item.title))];
    const filter_use = [...new Set(dealData.map((item) => item.title))];

    console.log(search_parameters);
{/*
    function search(items) {
        return items.filter(
            (item) =>
                item.region.includes(filter) &&
                search_parameters.some((parameter) =>
                    item[parameter]?.toString().toLowerCase().includes(query)
                )
        );
    }
*/}
    {/*search deals*/}
    function search(items) {
        return items.filter(
            (item) =>
                item &&
                search_parameters.some((parameter) =>
                    item[parameter]?.toString().toLowerCase().includes(q)
                )
        );
    }

    {/*search projects*/}
    function search_project(items) {
        return items.filter(
            (item) =>
                item &&
                search_pro.some((parameter) =>
                    item[parameter]?.toString().toLowerCase().includes(q)
                )
        );
    }

    {/*search users*/}
    function search_user(items) {
        return items.filter(
            (item) =>
                item &&
                search_use.some((parameter) =>
                    item[parameter]?.toString().toLowerCase().includes(q)
                )
        );
    }

    const load_more = (event) => {
        setpaginate((prevValue) => prevValue + 8);
    };

    return(
<>
<Header/>
    <div class="container" style={{marginTop:"10px", marginBottom:"10px"}}>
        <div class="row">
            
            <div class="col-md-4 col-lg-3 d-none d-md-block">

                <div class="section sticky-top">
                    <FilterSearch/>
                    <CommonFilter/>
                </div>

            </div>

            <div class="col-md-8 col-lg-6">


                <div class="modal" id="filter">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h4 class="modal-title">Filter</h4>
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                            </div>
                            <div class="modal-body">
                                <div class="p-10">
                                    <FilterSearch/>
                                    <ProjectList/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="mb-20">
                    <div class="text-center">
                        <div class="font-20 font-bold">
                            Search Result (Projects)
                        </div>
                        <div class="font-12 text-fade">
                            (10 active projects)
                        </div>
                    </div>
                </div>

                <div class="section mb-5">
                    <div class="section-title floated-content">

                        <button class="btn btn-transparent-black d-block d-md-none pull-left btn-sm" data-toggle="modal" data-target="#filter">
                            <span class="fa fa-filter"></span>
                            Filter
                        </button>
                        
                        <div class="font-bold d-none d-md-inline mt-10 pull-left">
                            Showing 1 - 10 of 10
                        </div>

                        <form method="get" action="" class="pull-right">
                            <select class="form-control-md" onchange="this.form.submit()" style={{width: "100px", padding: "0px !important"}}>
                                <option value="new" selected>Newest First</option>
                                <option value="old">Oldest First</option>
                                <option value="budget_high_low">Budget - High to Low</option>
                                <option value="budget_low_high">Budget - Low to High</option>
                                <option value="proposals_high_low">Proposals - High to Low</option>
                                <option value="proposals_low_high">Proposals - Low to High</option>
                            </select>
                        </form>

                    </div>

                    <div class="project-list project-list-wide">
                    {search_project(proData).map((item)=>(
                            <a href="/project/c1d00230-a423-4b84-a121-7105239ff8d8" class="project">        
                                <div>
                                    <div>
                                        <span class="fa fa-angle-right icon-50"></span>
                                    </div>
                                    <div class="">
                                        <div class="font-bold">
                                            {item.title}
                                        </div>

                                        <div class="text-fade ellipsis-2-lines mt-5">
                                            {item.description}
                                        </div>
                                    </div>
                                </div>

                                <div class="mt-5 ellipsis">
                                    <div class="project-price">
                                        ${item.budget}
                                    </div>
                                    <div class="item-labels">
                                        <div class="item-labels-new">
                                            New
                                        </div>
                                        <div class="item-labels-featured">
                                            Featured
                                        </div>
                                        <div class="item-labels-proposals">
                                            18 proposals
                                        </div>
                                    </div>
                                </div>

                                <div class="item-labels item-labels-tags-all ellipsis">
                                    <div class="item-labels-prefix">
                                        Tags & Skills:
                                    </div>
                                    {item.tags.map((me)=>(
                                    <div class="item-labels-tags">
                                        {me}
                                    </div>
                                        ))}
                                </div>
                            </a>
                    ))}
                    </div>
                </div>

                <div class="section">
                    //pagination here
                </div>

            </div>
            
            <div class="col-lg-3 d-none d-lg-block">
                
                <a href="" class="posla-ad-space">
                    <img src='/images/ad-400-200-1.jpg' class="dp-contain" alt="Ad"/>
                </a>

                <div class="section pl-10 pr-10 sticky-top">
                    <div class="section-title">
                        Featured Projects
                    </div>
                    <div class="project-list project-list-mini">
                        <ProjectList/>
                    </div>
                </div>

            </div>

        </div>
    </div>
<Footer/>
</>
    )
}

export default SearchProjects;