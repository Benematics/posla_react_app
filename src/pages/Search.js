import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {useNavigate, Link} from "react-router-dom";


const Search = () => {
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
 



    if (error) {
    	return(
    	<>
    	<p>Nothing To show</p>
    	</>
    		)

    } else {
	return(
		<>
<Header/>
	<div class="container" style={{marginTop:"20px", marginBottom:"20px"}}>
        <div class="row">
            
            <div class="col-md-4 col-lg-3 d-none d-md-block">

                <div class="section sticky-top">
                    <form action="" method="get">

					    <div class="filter-section">
					        <div class="filter-title">
					            Currently Showing
					        </div>
					        <div class="filter-body pr-0 pl-0">
					            <div class="mh-150 list-icon-text filter-body-list">
					                <Link to="/search" class="active">
					                    <div>
					                        <span class="fa fa-angle-right"></span>
					                    </div>
					                    <div>
					                        All search results ({total.length})
					                    </div>
					                </Link>
					                <Link to="/search/deals">
					                    <div>
					                        <span class="fa fa-angle-right"></span>
					                    </div>
					                    <div>
					                        Deals only ({search.length})
					                    </div>
					                </Link>
					                <Link to="/search/projects">
					                    <div>
					                        <span class="fa fa-angle-right"></span>
					                    </div>
					                    <div>
					                        Projects only ({search_project.length})
					                    </div>
					                </Link>
					                <Link to="/search/freelancers">
					                    <div>
					                        <span class="fa fa-angle-right"></span>
					                    </div>
					                    <div>
					                        Freelancers only ({search_user.length})
					                    </div>
					                </Link>
					            </div>
					        </div>
					    </div>

					</form>
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
                                   <form action="" method="get">
									    <div class="filter-section">
									        <div class="filter-title">
									            Currently Showing
									        </div>
									        <div class="filter-body pr-0 pl-0">
									            <div class="mh-150 list-icon-text filter-body-list">
									                <Link to="/search" class="active">
									                    <div>
									                        <span class="fa fa-angle-right"></span>
									                    </div>
									                    <div>
									                        All search results (30)
									                    </div>
									                </Link>
									                <Link to="/search/deals">
									                    <div>
									                        <span class="fa fa-angle-right"></span>
									                    </div>
									                    <div>
									                        Deals only (10)
									                    </div>
									                </Link>
									                <Link to="/search/projects">
									                    <div>
									                        <span class="fa fa-angle-right"></span>
									                    </div>
									                    <div>
									                        Projects only (10)
									                    </div>
									                </Link>
									                <Link to="/search/freelancers">
									                    <div>
									                        <span class="fa fa-angle-right"></span>
									                    </div>
									                    <div>
									                        Freelancers only (10)
									                    </div>
									                </Link>
									            </div>
									        </div>
									    </div>

									</form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="mb-20">
                    <div class="text-center">
                        <div class="font-20 font-bold">
                            Search Result (All)
                        </div>
                        <div class="font-12 text-fade">
                            (30 results found)
                        </div>
                        <div class="mt-10">
                            <button class="btn btn-transparent-black d-block d-md-none mx-auto btn-sm" data-toggle="modal" data-target="#filter">
                                <span class="fa fa-filter"></span>
                                Filter search result
                            </button>
                        </div>
                        {/*<input
                            type="search"
                            name="search-form"
                            id="search-form"
                            className="search-input"
                            placeholder="Search for..."
                            onChange={(e) => setQuery(e.target.value)}
                        />
	                    <div className="select">
	                        <select
	                            onChange={(e) => setFilter(e.target.value)}
	                            className="custom-select"
	                            aria-label="Filter Countries By Region"
	                        >
	                            <option value="">Filter By Region</option>
	                            {filter_items.map((item) => (
	                                <option value={item}>Filter By {item}</option>
	                            ))}
	                        </select>
	                        <span className="focus"></span>
	                    </div>*/}
                    </div>
                </div>

                <div class="section">
                    <div class="section-title floated-content">
                        Deals (10)
                        <a href="/search/deals" class="btn btn-transparent-black btn-xs pull-right hover-bg-orange">View All</a>
                    </div>
                    <div class="deal-list deal-list-double">
					{/*<select onChange={(e) => setFilter(e.target.value)}>
					{filter_items.map((item) => (
					<option value={item}>Filter By {item}</option>     
					    ))}
					</select>*/}

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
                    <a href="/search/deals" class="d-block text-center pt-10 pb-10 b-1-ddd bg-eee hover-bg-orange" style={{paddingTop:"10px", paddingBottom:"10px"}}>
                        View All Deals (10)
                        <span class="fa fa-angle-right"></span>
                    </a>
                </div>

                <div class="section">
                    <div class="section-title floated-content">
                        Projects (10)
                        <a href="/search/projects" class="btn btn-transparent-black btn-xs pull-right hover-bg-orange">View All</a>
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
                    <a href="/search/projects" class="d-block text-center pt-10 pb-10 b-1-ddd bg-eee hover-bg-orange" style={{paddingTop:"10px", paddingBottom:"10px"}}>
                        View All Projects (10)
                        <span class="fa fa-angle-right"></span>
                    </a>
                </div>

                <div class="section">
                    <div class="section-title floated-content">
                        Freelancers (10)
                        <a href="/search/freelancers" class="btn btn-transparent-black btn-xs pull-right hover-bg-orange">View All</a>
                    </div>
                    <div class="freelancers-list freelancers-list-double">
                    {search_user(dealData).map((item)=>(
                    	<a href="/user/abcde12345" class="freelancer">
						    <div>
						        <img src="/images/user.png" alt="Olawale Lawal" class="dp-contain" />
						    </div>
						    <div>
						        <div class="font-bold">
						            {item.user_name}
						        </div>
						        <div class="text-fade font-normal ellipsis-2-lines">
						            {item.full_description}
						        </div>
						    </div>    
						</a>
						))}
                    </div>
                    <a href="/search/freelancers" class="d-block text-center pt-10 pb-10 b-1-ddd bg-eee hover-bg-orange" style={{paddingTop:"10px", paddingBottom:"10px"}}>
                        View All Freelancers (10)
                        <span class="fa fa-angle-right"></span>
                    </a>     	
                </div>

            </div>
            
            <div class="col-lg-3 d-none d-lg-block">
                
                <div class="sticky-top">
                    <a href="" class="posla-ad-space">
                        <img src="/images/ad-400-200-1.jpg" class="dp-contain" alt="Ad"/>
                    </a>

                    <a href="" class="posla-ad-space">
                        <img src="/images/ad-400-200-1.jpg" class="dp-contain" alt="Ad"/>
                    </a>

                    <a href="" class="posla-ad-space">
                        <img src="/images/ad-400-200-1.jpg" class="dp-contain" alt="Ad"/>
                    </a>
                </div>

            </div>

        </div>
    </div>
			<Footer/>
		</>
		)
	}
}
export default Search;