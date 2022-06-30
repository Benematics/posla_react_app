import React from 'react';
import {Link} from "react-router-dom";


const FilterFreelancers = () => {
    return(
<>
<form action="" method="get">
    <div class="filter-section">
        <div class="filter-title">
            Select Language
        </div>
        <div class="filter-body pr-0 pl-0">
            <div class="mh-150 list-icon-text filter-body-list pr-10 pl-10 pt-5 pb-5" style={{paddingTop:"5px", paddingBottom:"5px", paddingLeft:"10px", paddingRight:"10px"}}>
                <label class="checkbox-inline mb-5" style={{marginBottom:"5px"}}>
                    <input type="checkbox" name="" id=""/>
                    English
                </label>
                <label class="checkbox-inline mb-5" style={{marginBottom:"5px"}}>
                    <input type="checkbox" name="" id=""/>
                    Hindi
                </label>
                <label class="checkbox-inline mb-5" style={{marginBottom:"5px"}}>
                    <input type="checkbox" name="" id=""/>
                    Russian
                </label>
                <label class="checkbox-inline mb-5" style={{marginBottom:"5px"}}>
                    <input type="checkbox" name="" id=""/>
                    Spanish
                </label>
                <label class="checkbox-inline mb-5" style={{marginBottom:"5px"}}>
                    <input type="checkbox" name="" id=""/>
                    Jamaican
                </label>
            </div>
        </div>
    </div>

    <div class="filter-section">
        <div class="filter-title">
            Ratings
        </div>
        <div class="filter-body pt-10 pb-10" style={{paddingTop:"10px", paddingBottom:"10px"}}>
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
        <button class="btn btn-orange btn-sm mr-5 mb-5" style={{marginBottom:"5px", marginRight:"5px"}}>
            Apply filter
        </button>
        <button class="btn btn-transparent-black btn-sm mb-5" style={{marginBottom:"5px"}}>
            Clear filter
        </button>
    </div>
</form>
</>
        )
}
export default FilterFreelancers;



