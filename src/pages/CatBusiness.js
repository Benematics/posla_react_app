import React from 'react';
import CommonFilter from '../components/CommonFilter';
import ProjectList from '../components/ProjectList';
import Header from '../components/Header';
import Footer from '../components/Footer';


const CatBusiness = () => {
    return(
<>
<Header/>
    <div class="container">
        <div class="row">
            
            <div class="col-md-4 col-lg-3 d-none d-md-block">

                <div class="section sticky-top">
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
                                   <CommonFilter/>
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
                            (30 active projects)
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
                       <ProjectList/>
                    </div>
                </div>

                <div class="section">
                    //pagination here
                </div>

            </div>
            
            <div class="col-lg-3 d-none d-lg-block">
                
                <a href="" class="posla-ad-space">
                    <img src='/img/app/samples/ad-400-200-1.jpg' class="dp-contain" alt="Ad"/>
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
export default CatBusiness; 

