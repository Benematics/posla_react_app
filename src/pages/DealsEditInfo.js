import React from 'react';
import AccountSidebar from '../components/AccountSidebar';
import NavTabDealsMgt from '../components/NavTabDealsMgt';
import {Link} from "react-router-dom";
import Header from '../components/Header';
import Footer from '../components/Footer';

const DealsEditInfo = ()=>{
	return(
			<>
	<Header/>
	<div class="container">
        <div class="row">
            <div class="d-none d-md-block col-md-4 col-lg-3">

                <AccountSidebar/>
                
            </div>
            
            <div class="col-12 col-md-8 col-lg-9">
                
                <div aria-label="breadcrumb" class="details-page-breadcrumb mb-10">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><Link to="/account">Account</Link></li>
                        <li class="breadcrumb-item"><Link to="/account/deals">Deals</Link></li>
                        <li class="breadcrumb-item active" aria-current="page">Edit Deal</li>
                    </ol>
                </div>
                
                <div class="section">
                    <div class="section-title">
                        Edit Deal
                    </div>
                        
                    <div>
                        
                        <NavTabDealsMgt/>
                        
                        <div class="tab-content">
                            <div class="tab-pane active">

                                <form action="/account/deals/edit/1234/pricing" enctype="multipart/form-data">
                                    
                                    <div class="b-1-ddd" style={{padding:"20px"}}>

                                        <div class="p-20">
                                            
                                            <div class="row">
                                                <div class="col-sm-6">
                                                    <div class="form-group">
                                                        <label for="title" class="control-label">
                                                            Deal Title:
                                                        </label>
                                                        <textarea name="title" id="title" class="form-control resize-none" style={{height: "99px"}} placeholder="I will..."></textarea>
                                                    </div>
                                                </div>
                                                <div class="col-sm-6">
                                                    <div class="form-group">
                                                        <label for="category" class="control-label">
                                                            Category:
                                                        </label>
                                                        <select name="category_id" id="category" required id="category">
                                                            <option value="">Category 1</option>
                                                            <option value="">Category 1</option>
                                                            <option value="">Category 1</option>
                                                            <option value="">Category 1</option>
                                                            <option value="">Category 1</option>
                                                        </select>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="subcategory_id" class="control-label">
                                                            SubCategory:
                                                        </label>
                                                        <select name="subcategory_id" id="subCategory">
                                                            <option value="">- Select -</option>
                                                            <option value="">Subcategory 1</option>
                                                            <option value="">Subcategory 1</option>
                                                            <option value="">Subcategory 1</option>
                                                            <option value="">Subcategory 1</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>

                                            <hr/>
                                            
                                            <div class="row">
                                                <div class="col-sm-12 file-upload-box-container">
                                                    
                                                        <div class="file-upload-box">
                                                            <label class="" for="picture_2">
                                                                <div>
                                                                    <span class="fa fa-plus icon-50"></span>
                                                                </div>
                                                                <div>
                                                                    Add Picture
                                                                    <br/>
                                                                    (jpg, jpeg, png, gif)
                                                                </div>
                                                                <button class="btn btn-danger btn-xs file-upload-box-delete" type="button">
                                                                    <span class="fa fa-times"></span>
                                                                    Delete
                                                                </button>
                                                                <input type="checkbox" name="delete_image[]" value="" class="d-none"/>
                                                                -- Hidden checkbox for delete --
                                                            </label>
                                                            <input type="file" name="picture_2" id="picture_2" accept="image/*" />
                                                        </div> 
                                                    
                                                        <div class="file-upload-box">
                                                            <label class="" for="picture_3">
                                                                <div>
                                                                    <span class="fa fa-plus icon-50"></span>
                                                                </div>
                                                                <div>
                                                                    Add Picture
                                                                    <br />
                                                                    (jpg, jpeg, png, gif)
                                                                </div>
                                                                <button class="btn btn-danger btn-xs file-upload-box-delete" type="button">
                                                                    <span class="fa fa-times"></span>
                                                                    Delete
                                                                </button>
                                                            </label>
                                                            <input type="file"  name="pictures[]" id="picture_3" accept="image/*" />
                                                        </div> 
                                                    
                                                    
                                                    <div class="file-upload-box">
                                                        <label class="" for="picture_4">
                                                            <div>
                                                                <span class="fa fa-plus icon-50"></span>
                                                            </div>
                                                            <div>
                                                                Add Picture
                                                                <br />
                                                                (jpg, jpeg, png, gif)
                                                            </div>
                                                            <button class="btn btn-danger btn-xs file-upload-box-delete" type="button">
                                                                <span class="fa fa-times"></span>
                                                                Delete
                                                            </button>
                                                        </label>
                                                        <input type="file"  name="pictures[]" id="picture_4" accept="image/*" />
                                                    </div>
                                                </div>
                                            </div>

                                            <hr/>

                                            <div class="row">
                                                <div class="col-sm-6">
                                                    <div class="form-group">
                                                        <label for="description" class="control-label">
                                                            Deal Description:
                                                        </label>
                                                        <textarea name="description" id="description" class="form-control resize-none" style={{height: "99px"}}></textarea>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="visibility" class="control-label">
                                                            Visiblility:
                                                        </label>
                                                        <select name="status" id="visibility">
                                                            <option value="">- Select -</option>
                                                            <option value="1">Public</option>
                                                            <option value="0">Private</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="col-sm-6">
                                                    <div class="form-group">
                                                        <label for="tags" class="control-label">
                                                            Tags:
                                                        </label>

                                                        -- let's do comman separated value for now.. onsave, explode input with comma --
                                                        <input type="search" name="tags" class="form-control" placeholder="Search" value=""/>
                                                    </div>
                                                    <div>
                                                        <div class="item-labels item-labels-tags-all" style={{marginLeft: "-2px"}}>
                                                            <div class="item-labels-tags cursor-pointer">
                                                                tag here
                                                            </div>
                                                            <div class="item-labels-tags cursor-pointer">
                                                                tag here
                                                            </div>
                                                            <div class="item-labels-tags cursor-pointer">
                                                                tag here
                                                            </div>
                                                            <div class="item-labels-tags cursor-pointer">
                                                                tag here
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        </div>

                                        <div class="p-15 mt-15 bt-1-ddd floated-content">
                                            <div class="pull-right">
                                                <Link to="/account/deals/edit/1234/rules" class="btn btn-transparent-black btn-sm icon-left">
                                                    <span class="fa fa-angle-left"></span>
                                                    Back
                                                </Link>
                                                <button type="submit" class="btn btn-blue btn-sm icon-right">
                                                    Proceed
                                                    <span class="fa fa-angle-right"></span>
                                                </button>
                                            </div>
                                        </div>

                                    </div>
                                </form>
                                
                            </div>
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
export default DealsEditInfo;