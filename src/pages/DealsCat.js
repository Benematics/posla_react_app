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
    <div class="container" style={{marginTop:"20px", marginBottom:"20px"}}>
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
                                        <Link to="/category/deals/category1">
                                            <div>
                                                <span class="fa fa-angle-right"></span>
                                            </div>
                                            <div>
                                                Sub Category 1
                                            </div>
                                        </Link>
                                        <Link to="/category/deals/category1">
                                            <div>
                                                <span class="fa fa-angle-right"></span>
                                            </div>
                                            <div>
                                                Sub Category 1
                                            </div>
                                        </Link>
                                        <Link to="/category/deals/category1">
                                            <div>
                                                <span class="fa fa-angle-right"></span>
                                            </div>
                                            <div>
                                                Sub Category 1
                                            </div>
                                        </Link>
                                        <Link to="/category/deals/category1">
                                            <div>
                                                <span class="fa fa-angle-right"></span>
                                            </div>
                                            <div>
                                                Sub Category 1
                                            </div>
                                        </Link>
                                        <Link to="/category/deals/category1">
                                            <div>
                                                <span class="fa fa-angle-right"></span>
                                            </div>
                                            <div>
                                                Sub Category 1
                                            </div>
                                        </Link>
                                        <Link to="/category/deals/category1">
                                            <div>
                                                <span class="fa fa-angle-right"></span>
                                            </div>
                                            <div>
                                                Sub Category 1
                                            </div>
                                        </Link>
                                        <Link to="/category/deals/category1">
                                            <div>
                                                <span class="fa fa-angle-right"></span>
                                            </div>
                                            <div>
                                                Sub Category 1
                                            </div>
                                        </Link>
                                        <Link to="/category/deals/category1">
                                            <div>
                                                <span class="fa fa-angle-right"></span>
                                            </div>
                                            <div>
                                                Sub Category 1
                                            </div>
                                        </Link>
                                        <Link to="/category/deals/category1">
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
                                            <div id="slider-range" class="price-filter-range posla-slider-range" name="rangeInput"></div>
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
                                    Ratings
                                </div>
                                <div class="filter-body pt-10 pb-10">
                                    <label class="checkbox-inline">
                                        <input type="checkbox" name="" id=""/>
                                        <span class="fa fa-star"></span>
                                        <span class="fa fa-star"></span>
                                        <span class="fa fa-star"></span>
                                        <span class="fa fa-star"></span>
                                        <span class="fa fa-star"></span>
                                    </label>
                                    <label class="checkbox-inline">
                                        <input type="checkbox" name="" id=""/>
                                        <span class="fa fa-star"></span>
                                        <span class="fa fa-star"></span>
                                        <span class="fa fa-star"></span>
                                        <span class="fa fa-star"></span>
                                        <span class="fa fa-star-o"></span>
                                    </label>
                                    <label class="checkbox-inline">
                                        <input type="checkbox" name="" id=""/>
                                        <span class="fa fa-star"></span>
                                        <span class="fa fa-star"></span>
                                        <span class="fa fa-star"></span>
                                        <span class="fa fa-star-o"></span>
                                        <span class="fa fa-star-o"></span>
                                    </label>
                                    <label class="checkbox-inline">
                                        <input type="checkbox" name="" id=""/>
                                        <span class="fa fa-star"></span>
                                        <span class="fa fa-star"></span>
                                        <span class="fa fa-star-o"></span>
                                        <span class="fa fa-star-o"></span>
                                        <span class="fa fa-star-o"></span>
                                    </label>
                                    <label class="checkbox-inline">
                                        <input type="checkbox" name="" id=""/>
                                        <span class="fa fa-star"></span>
                                        <span class="fa fa-star-o"></span>
                                        <span class="fa fa-star-o"></span>
                                        <span class="fa fa-star-o"></span>
                                        <span class="fa fa-star-o"></span>
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
                                                    <Link to="/category/deals/category1">
                                                        <div>
                                                            <span class="fa fa-angle-right"></span>
                                                        </div>
                                                        <div>
                                                            Sub Category 1
                                                        </div>
                                                    </Link>
                                                    <Link to="/category/deals/category1">
                                                        <div>
                                                            <span class="fa fa-angle-right"></span>
                                                        </div>
                                                        <div>
                                                            Sub Category 1
                                                        </div>
                                                    </Link>
                                                    <Link to="/category/deals/category1">
                                                        <div>
                                                            <span class="fa fa-angle-right"></span>
                                                        </div>
                                                        <div>
                                                            Sub Category 1
                                                        </div>
                                                    </Link>
                                                    <Link to="/category/deals/category1">
                                                        <div>
                                                            <span class="fa fa-angle-right"></span>
                                                        </div>
                                                        <div>
                                                            Sub Category 1
                                                        </div>
                                                    </Link>
                                                    <Link to="/category/deals/category1">
                                                        <div>
                                                            <span class="fa fa-angle-right"></span>
                                                        </div>
                                                        <div>
                                                            Sub Category 1
                                                        </div>
                                                    </Link>
                                                    <Link to="/category/deals/category1">
                                                        <div>
                                                            <span class="fa fa-angle-right"></span>
                                                        </div>
                                                        <div>
                                                            Sub Category 1
                                                        </div>
                                                    </Link>
                                                    <Link to="/category/deals/category1">
                                                        <div>
                                                            <span class="fa fa-angle-right"></span>
                                                        </div>
                                                        <div>
                                                            Sub Category 1
                                                        </div>
                                                    </Link>
                                                    <Link to="/category/deals/category1">
                                                        <div>
                                                            <span class="fa fa-angle-right"></span>
                                                        </div>
                                                        <div>
                                                            Sub Category 1
                                                        </div>
                                                    </Link>
                                                    <Link to="/category/deals/category1">
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
                                                        <div id="slider-range" class="price-filter-range posla-slider-range" name="rangeInput"></div>
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
                                                Ratings
                                            </div>
                                            <div class="filter-body pt-10 pb-10">
                                                <label class="checkbox-inline">
                                                    <input type="checkbox" name="" id=""/>
                                                    <span class="fa fa-star"></span>
                                                    <span class="fa fa-star"></span>
                                                    <span class="fa fa-star"></span>
                                                    <span class="fa fa-star"></span>
                                                    <span class="fa fa-star"></span>
                                                </label>
                                                <label class="checkbox-inline">
                                                    <input type="checkbox" name="" id=""/>
                                                    <span class="fa fa-star"></span>
                                                    <span class="fa fa-star"></span>
                                                    <span class="fa fa-star"></span>
                                                    <span class="fa fa-star"></span>
                                                    <span class="fa fa-star-o"></span>
                                                </label>
                                                <label class="checkbox-inline">
                                                    <input type="checkbox" name="" id=""/>
                                                    <span class="fa fa-star"></span>
                                                    <span class="fa fa-star"></span>
                                                    <span class="fa fa-star"></span>
                                                    <span class="fa fa-star-o"></span>
                                                    <span class="fa fa-star-o"></span>
                                                </label>
                                                <label class="checkbox-inline">
                                                    <input type="checkbox" name="" id=""/>
                                                    <span class="fa fa-star"></span>
                                                    <span class="fa fa-star"></span>
                                                    <span class="fa fa-star-o"></span>
                                                    <span class="fa fa-star-o"></span>
                                                    <span class="fa fa-star-o"></span>
                                                </label>
                                                <label class="checkbox-inline">
                                                    <input type="checkbox" name="" id=""/>
                                                    <span class="fa fa-star"></span>
                                                    <span class="fa fa-star-o"></span>
                                                    <span class="fa fa-star-o"></span>
                                                    <span class="fa fa-star-o"></span>
                                                    <span class="fa fa-star-o"></span>
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
                            Category name
                        </div>
                        <div class="font-12 text-fade">
                            (30 active deals)
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
                            Showing 1 - 15 of 31
                        </div>

                        <form method="get" action="" class="pull-right">
                            <select class="form-control-md" onchange="this.form.submit()" style={{width: "100px", padding: "0px !important"}}>
                                
                                    <option value="new" >Newest First</option>
                                    <option value="old" >Oldest First</option>
                                    <option value="budget_high_low" >Budget - High to Low</option>
                                    <option value="budget_low_high" >Budget - Low to High</option>
                                    <option value="ratings_high_low" >Ratings - High to Low</option>
                                    <option value="ratings_low_high" >Ratings - Low to High</option>
                               
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

                        <a href="/deal/0d8aa710-c3b7-4d4d-b7f0-61da7b23af9f" class="deal" style={{height:"270px"}}>
                            
                            <div class="deal-info-top">
                                <div>
                                    <img src="/images/deal-1.png" alt="Olawale Lawal" class="dp-cover" />
                                </div>
                                <div class="">
                                    <div>
                                        <img src="/images/user.png" alt="Olawale Lawal" class="dp-contain" />
                                    </div>
                                    <div class="text-fade font-13 ellipsis">
                                        Olawale Lawal
                                    </div>
                                </div>
                                <div class="font-bold ellipsis-2-lines mt-5 pr-10 pl-10" style={{minHeight: "38px"}}>
                                    I can abc build a beautiful bespoke logo for your company using the style and color combination you prefer.
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
                                    <div>UI</div>

                                </div>
                            </div>
                        </a>




                        <a href="/deal/0d8aa710-c3b7-4d4d-b7f0-61da7b23af9f" class="deal" style={{height:"270px"}}>
                            
                            <div class="deal-info-top">
                                <div>
                                    <img src="/images/deal-1.png" alt="Olawale Lawal" class="dp-cover" />
                                </div>
                                <div class="">
                                    <div>
                                        <img src="/images/user.png" alt="Olawale Lawal" class="dp-contain" />
                                    </div>
                                    <div class="text-fade font-13 ellipsis">
                                        Olawale Lawal
                                    </div>
                                </div>
                                <div class="font-bold ellipsis-2-lines mt-5 pr-10 pl-10" style={{minHeight: "38px"}}>
                                    I can abc build a beautiful bespoke logo for your company using the style and color combination you prefer.
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
                                    <div>UI</div>

                                </div>
                            </div>
                        </a>
                    </div>
                </div>

                <div class="section">
                    //pagination here
                </div>

            </div>
            
            <div class="col-lg-3 d-none d-lg-block">
                
                <a href="" class="posla-ad-space">
                    <img src="/images/ad-400-200-1.jpg" class="dp-contain" alt="Ad"/>
                </a>

                <div class="section pl-10 pr-10 sticky-top">
                    <div class="section-title">
                        Featured Deals
                    </div>
                    <div class="deal-list deal-list-single">
                        
                        <a href="/deal/0d8aa710-c3b7-4d4d-b7f0-61da7b23af9f" class="deal" style={{height:"270px"}}>
                            
                            <div class="deal-info-top">
                                <div>
                                    <img src="/images/deal-1.png" alt="Olawale Lawal" class="dp-cover" />
                                </div>
                                <div class="">
                                    <div>
                                        <img src="/images/user.png" alt="Olawale Lawal" class="dp-contain" />
                                    </div>
                                    <div class="text-fade font-13 ellipsis">
                                        Olawale Lawal
                                    </div>
                                </div>
                                <div class="font-bold ellipsis-2-lines mt-5 pr-10 pl-10" style={{minHeight: "38px"}}>
                                    I can abc build a beautiful bespoke logo for your company using the style and color combination you prefer.
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
                                    <div>UI</div>

                                </div>
                            </div>
                        </a>
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



 
    