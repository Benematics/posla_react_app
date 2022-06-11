import React, {useState, useEffect} from 'react';
import CommonFilter from '../components/CommonFilter';
import {Link} from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';


const DealsCat = () => {
    const [deal, setDeal] = useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(res => {setDeal(res)})
        .catch((error) => {console.log(error)})
    },[]);

    useEffect(()=>{
        fetch('https://dummyjson.com/products/category/smartphones')
        .then(res => res.json())
        .then(console.log);
    },[])


    return(
<>
<Header/>
    <div class="container" style={{marginTop:"20px"}}>
        <div class="row">
            
            <div class="col-md-4 col-lg-3 d-none d-md-block">

                <div class="section sticky-top">
            <form action="" method="get">
                <div class="filter-section">
                    <div class="filter-title">
                        Select Category
                    </div>
                    <div class="filter-body pr-0 pl-0">
                        <div class="mh-150 list-icon-text filter-body-list">
                            <Link to="/category/deals/category1">
                                <div>
                                    <span class="fa fa-angle-right"></span>
                                </div>
                                <div>
                                    Smart Phones
                                </div>
                            </Link>
                            <Link to="/category/deals/category1" class="active">
                                <div>
                                    <span class="fa fa-angle-right"></span>
                                </div>
                                <div>
                                    Sub Category 1
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

                <div class="filter-section">
                    <div class="filter-title">
                        Budget ($)
                    </div>
                    <div class="filter-body">

                        <div class="posla-price-slider p-10 pt-20 pb-20">
                            <div class="posla-price-slider-slide">
                                <div id="slider-range" class="price-filter-range posla-slider-range" name="rangeInput">
                                    price range
                                </div>
                            </div>
                            <div class="posla-price-slider-input">
                                <input type="number" min="0" max="9900"  id="min_price" class="posla-slider-min-input price-range-field" />
                                <input type="number" min="0" max="10000" id="max_price" class="posla-slider-max-input price-range-field" />
                            </div>
                            <button class="price-range-search" id="price-range-submit">Search</button> 
                            <div id="searchResults" class="search-results-block"></div>
                        </div>

                    </div>
                </div>

                <div class="filter-section">
                    <div class="filter-title">
                        Proposals
                    </div>
                    <div class="filter-body pt-10 pb-10">
                        <label class="checkbox-inline mb-5">
                            <input type="checkbox" name="check" id=""/>
                            No Proposals Yet
                        </label>
                        <label class="checkbox-inline mb-5">
                            <input type="checkbox" name="check" id=""/>
                            1-5 Proposals
                        </label>
                        <label class="checkbox-inline mb-5">
                            <input type="checkbox" name="check" id=""/>
                            6-10 Proposals
                        </label>
                        <label class="checkbox-inline mb-5">
                            <input type="checkbox" name="check" id=""/>
                            10-20 Proposals
                        </label>
                        <label class="checkbox-inline">
                            <input type="checkbox" name="check" id=""/>
                            20 & Above Proposals
                        </label>
                    </div>
                </div>

                <div>
                    <button class="btn btn-orange btn-sm mr-5 mb-5">
                        Apply filter
                    </button>
                    <button class="btn btn-transparent-black btn-sm mb-5">
                        Clear filter
                    </button>
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
                        Select Category
                    </div>
                    <div class="filter-body pr-0 pl-0">
                        <div class="mh-150 list-icon-text filter-body-list">
                            <Link to="/category/deals/category1">
                                <div>
                                    <span class="fa fa-angle-right"></span>
                                </div>
                                <div>
                                    Main Category
                                </div>
                            </Link>
                            <Link to="/category/deals/category1" class="active">
                                <div>
                                    <span class="fa fa-angle-right"></span>
                                </div>
                                <div>
                                    Sub Category 1
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

                <div class="filter-section">
                    <div class="filter-title">
                        Budget ($)
                    </div>
                    <div class="filter-body">

                        <div class="posla-price-slider p-10 pt-20 pb-20">
                            <div class="posla-price-slider-slide">
                                <div id="slider-range" class="price-filter-range posla-slider-range" name="rangeInput">
                                    price range
                                </div>
                            </div>
                            <div class="posla-price-slider-input">
                                <input type="number" min="0" max="9900"  id="min_price" class="posla-slider-min-input price-range-field" />
                                <input type="number" min="0" max="10000" id="max_price" class="posla-slider-max-input price-range-field" />
                            </div>
                            <button class="price-range-search" id="price-range-submit">Search</button> 
                            <div id="searchResults" class="search-results-block"></div>
                        </div>

                    </div>
                </div>

                <div class="filter-section">
                    <div class="filter-title">
                        Proposals
                    </div>
                    <div class="filter-body pt-10 pb-10">
                        <label class="checkbox-inline mb-5">
                            <input type="checkbox" name="check" id=""/>
                            No Proposals Yet
                        </label>
                        <label class="checkbox-inline mb-5">
                            <input type="checkbox" name="check" id=""/>
                            1-5 Proposals
                        </label>
                        <label class="checkbox-inline mb-5">
                            <input type="checkbox" name="check" id=""/>
                            6-10 Proposals
                        </label>
                        <label class="checkbox-inline mb-5">
                            <input type="checkbox" name="check" id=""/>
                            10-20 Proposals
                        </label>
                        <label class="checkbox-inline">
                            <input type="checkbox" name="check" id=""/>
                            20 & Above Proposals
                        </label>
                    </div>
                </div>

                <div>
                    <button class="btn btn-orange btn-sm mr-5 mb-5">
                        Apply filter
                    </button>
                    <button class="btn btn-transparent-black btn-sm mb-5">
                        Clear filter
                    </button>
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
                            Smart Phones
                        </div>
                        <div class="font-12 text-fade">
                            (30 active deals)
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
                            Showing 1 - 15 of 31
                        </div>

                        <form method="get" action="" class="pull-right">
                            <select class="form-control-md" Style={{"width": "100px", "padding": "0px"}}>
                                
                                    <option value="new" selected >Newest First</option>
                                    <option value="old"  selected >Oldest First</option>
                                    <option value="budget_high_low"  selected >Budget - High to Low</option>
                                    <option value="budget_low_high"  selected >Budget - Low to High</option>
                                    <option value="proposals_high_low" selected >Proposals - High to Low</option>
                                    <option value="proposals_low_high" selected >Proposals - Low to High</option>
                                
                            </select>
                        </form>

                    </div>
                    {deal.map((item)=>(
                    <div class="deal-list deal-list-wide" style={{marginTop:"10px"}}>
                        <Link to="/deal/c1d00230-a423-4b84-a121-7105239ff8d8" className="deal" id="deallist">
                            <div>
                                <div>
                                    <span className="fa fa-angle-right icon-50"></span>
                                </div>
                                <div className="">
                                    <div className="font-bold">
                                       {item.name}
                                    </div>

                                    <div className="text-fade ellipsis-2-lines mt-5">
                                       {item.email}
                                    </div>
                                </div>
                            </div>
                        <div className="mt-5 ellipsis">
                            <div className="deal-price">
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
                            <div className="item-labels-tags">
                                {item.website}
                            </div>
                        </div>
                        </Link>
                    </div>
                        ))}

                </div>

                <div class="section">
                    //pagination here
                </div>

            </div>
            
            <div class="col-lg-3 d-none d-lg-block">
                
                <Link to="" class="posla-ad-space">
                    <img src='/images/ad-400-200-1.jpg' class="dp-contain" alt="Ad"/>
                </Link>

                <div class="section pl-10 pr-10 sticky-top">
                    <div class="section-title">
                        Featured deals
                    </div>
                    <div class="deal-list deal-list-mini">
                               <Link to="/deal/c1d00230-a423-4b84-a121-7105239ff8d8" className="deal" id="deallist">
                                    <div>
                                        <div>
                                            <span className="fa fa-angle-right icon-50"></span>
                                        </div>
                                        <div className="">
                                            <div className="font-bold">
                                               ggffh
                                            </div>

                                            <div className="text-fade ellipsis-2-lines mt-5">
                                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                                            </div>
                                        </div>
                                    </div>
                                <div className="mt-5 ellipsis">
                                    <div className="deal-price">
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
                                    <div className="item-labels-tags">
                                        Tag name
                                    </div>
                                </div>
                                </Link>
                    </div>
                </div>

            </div>

        </div>
    </div>
<Footer/>
</>
        )
}
export default DealsCat; 



 
    