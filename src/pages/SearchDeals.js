import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FilterSearch from '../components/FilterSearch';
import FilterDeals from '../components/FilterDeals';
import Deal from '../components/Deal';
import {Link} from "react-router-dom";

const SearchDeals = () => {

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
<div class="container" style={{marginTop:"20px", marginBottom:"20px"}}>
        <div class="row">
            
            <div class="col-md-4 col-lg-3 d-none d-md-block">

                <div class="section sticky-top">
                    <FilterSearch/>
                    <FilterDeals/>
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
                                    <FilterDeals/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="mb-20">
                    <div class="text-center">
                        <div class="font-20 font-bold">
                            Search Result (Deals)
                        </div>
                        <div class="font-12 text-fade">
                            (10 active deals)
                        </div>
                    </div>
                </div>

                <div class="section mb-5 pb-5">
                    <div class="section-title floated-content">

                        <button class="btn btn-transparent-black d-block d-md-none pull-left btn-sm" data-toggle="modal" data-target="#filter">
                            <span class="fa fa-filter"></span>
                            Filter
                        </button>
                        
                        <div class="font-bold d-none d-md-inline mt-10 pull-left">
                            Showing 1 - 20 of 65
                        </div>

                        <form method="get" action="" class="pull-right">
                            <select class="form-control-md"  style={{width: "100px", padding: "0px"}}>
                                <option value="new" selected>Newest First</option>
                                <option value="old">Oldest First</option>
                                <option value="budget_high_low">Budget - High to Low</option>
                                <option value="budget_low_high">Budget - Low to High</option>
                                <option value="ratings_high_low">Ratings - High to Low</option>
                                <option value="ratings_low_high">Ratings - Low to High</option>
                            </select>
                        </form>

                    </div>

                    <div class="deal-list deal-list-double">
                        {search(data).slice(0, paginate).map((item)=>(
                            <a href="/deal/0d8aa710-c3b7-4d4d-b7f0-61da7b23af9f" class="deal" style={{height:"auto"}} key={item.id}>   
                                <div class="deal-info-top">
                                    <div>
                                        <img src="/images/deal-1.png" alt="Olawale Lawal" class="dp-cover" />
                                    </div>
                                    <div class="">
                                        <div>
                                            <img src="/images/user.png" alt="Olawale Lawal" class="dp-contain" />
                                        </div>
                                        <div class="text-fade font-13 ellipsis">
                                            {item.user_id}
                                        </div>
                                    </div>
                                    <div class="font-bold ellipsis-2-lines mt-5 pr-10 pl-10" style={{minHeight: "38px", paddingRight:"10px", paddingLeft:"10px", marginTop:"5px"}}>
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

                                <div class="pt-5 bt-1-ddd" style={{marginTop: "-3px"}}>
                                    <div class="mt-0 pl-10 item-labels item-labels-tags-all ellipsis">
                                        <div class="item-labels-prefix">
                                            Tags & Skills:
                                        </div>
                                        <div class="item-labels-tags">
                                            Mobile App
                                        </div>
                                    </div>
                                </div>
                                
                            </a>
                        ))}

                    </div>
                </div>

                <div class="section">
                   //pagination here
                </div>

            </div>
            
            <div class="col-lg-3 d-none d-lg-block" style={{zIndex:-1}}>
                
                <Link to="" class="posla-ad-space">
                    <img src='/images/ad-400-200-1.jpg' class="dp-contain" alt="Ad"/>
                </Link>

                <div class="section pl-10 pr-10 sticky-top">
                    <div class="section-title">
                        Featured Deals
                    </div>
                    <div class="deal-list deal-list-single">
                        <Deal/>
                    </div>
                </div>

            </div>

        </div>
    </div>
<Footer/>
</>
    )
}

export default SearchDeals;