import React, {useState, useEffect} from 'react';
import AccountSidebar from '../components/AccountSidebar';
import NavTabProjectMgt from '../components/NavTabProjectMgt';
import Footer from "../components/Footer";
import Header from "../components/Header";
import {Link} from "react-router-dom";

const ProjectEditInfo = () =>{
	const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [subcategory, setSubCategory] = useState("");
    const [timeframe, setTimeframe] = useState("");
    const [budget, setBudget] = useState(0);
    const [status,setStatus] = useState("");
    const [expdate, setExpdate] = useState("");
    const [picture_1, setPicture_1] = useState("");
    const [picture_2, setPicture_2] = useState("");
    const [picture_3, setPicture_3] = useState("");
    const [picture_4, setPicture_4] = useState("");
    const [picture_5, setPicture_5] = useState("");
    const [picture_6, setPicture_6] = useState("");
    const [description, setDescription] = useState("");
    const [visibility, setVisibility] = useState("");
    const [tags, setTags] = useState("");
    
		
	const [display, setDisplay] = useState("None")
	const [errors, setErrors] = useState("");

	

	const handleSubmit =(e)=>{
		e.preventDefault()
		
		}
          var myHeaders = new Headers();
            myHeaders.append("Accept", "application/json");
            myHeaders.append("Authorization", "Bearer 32|eErM5O7mDTyPLqezAvMuF7m234Iy659hjdJRVLM5");

           var formdata = new FormData();
            formdata.append("title", title);
            formdata.append("category_id", category);
            formdata.append("subcategory_id", subcategory);
            formdata.append("timeframe", timeframe);
            formdata.append("budget", 0);
            formdata.append("active_until", expdate);
            formdata.append("description", description);
            formdata.append("status", status);
            formdata.append("tags", tags);
            formdata.append("visibility", visibility);
            formdata.append("pictures[]", "favicon.ico");

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: formdata,
  redirect: 'follow'
};

fetch("https://jbuit.com/api/contact/", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

	

	return(
	<>
    <Header/>
	<div class="container" style={{marginTop:"20px", marginBottom:"20px"}}>
        <div class="row">
            <div class="d-none d-md-block col-md-4 col-lg-3">
                <AccountSidebar/>    
            </div>
            
            <div class="col-12 col-md-8 col-lg-9">
                
                <div aria-label="breadcrumb" class="details-page-breadcrumb mb-10">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><Link to="/account">Account</Link></li>
                        <li class="breadcrumb-item"><Link to="/account/projects">Projects</Link></li>
                        <li class="breadcrumb-item active" aria-current="page">Edit Project</li>
                    </ol>
                </div>
                
                <div class="section">
                    <div class="section-title">
                        Edit Project
                    </div>
                    <div>
                        
                       <NavTabProjectMgt/>
                        
                        <div class="tab-content">
                            <div class="tab-pane active">

                                <form action="/account/projects/edit/1234/publish">
                                    <div class="b-1-ddd">

                                        <div class="p-20">
                                            
                                            <div class="row">
                                                <div class="col-sm-6">
                                                    <div class="form-group">
                                                        <label for="title" class="control-label">
                                                            Project Title:
                                                        </label>
                                                        <textarea name="title" id="title" onChange={(e)=> setTitle(e.target.value)} class="form-control resize-none" style={{height: "99px"}} placeholder="I need..." value={title}></textarea>
                                                    </div>
                                                </div>
                                                <div class="col-sm-6">
                                                    <div class="form-group">
                                                        <label for="category" class="control-label">
                                                            Category:
                                                        </label>
                                                        <select name="category" id="category" onChange={(e)=> setCategory(e.target.value)} value={category}>
                                                            <option>- Select -</option>
                                                            <option>web development</option>
                                                            <option>mobile development</option>
                                                        </select>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="subcategory" class="control-label">
                                                            SubCategory:
                                                        </label>
                                                        <select name="subcategory" id="subcategory" onChange={(e)=> setSubCategory(e.target.value)} value={subcategory}>
                                                            <option>- Select -</option>
                                                             <option>frontend development</option>
                                                              <option>backend development</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="col-sm-6">
                                                    <div class="row">
                                                        <div class="col-sm-6">
                                                            <div class="form-group">
                                                                <label for="timeframe" class="control-label">
                                                                    Project Timeframe:
                                                                </label>
                                                                <select name="timeframe" id="timeframe" onChange={(e)=> setTimeframe(e.target.value)} value={timeframe}>
                                                                    <option>- Select -</option>
                                                                    <option >1 day</option>
                                                                    <option >2 days</option>
                                                                    <option>3 days</option>
                                                                    <option >5 days</option>
                                                                    <option>7 days</option>
                                                                    <option>10 days</option>
                                                                    <option>20 days</option>
                                                                    <option>30 days</option>
                                                                    <option>45 days</option>
                                                                    <option>60 days</option>
                                                                    <option>90 days</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div class="col-sm-6">
                                                            <div class="form-group">
                                                                <label for="budget" class="control-label">
                                                                    Budget:
                                                                </label>
                                                                <div class="input-group input-group-attach input-group-attach-transparent input-group-attach-transparent-left">
                                                                    <div class="input-group-btn">
                                                                        <button type="button" class="btn btn-md">
                                                                            <span class="font-18">$</span>
                                                                        </button>
                                                                    </div>
                                                                    <input type="number" class="form-control" name="budget" id="budget" value={budget} onChange={(e)=> setBudget(e.target.value)}/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="expdate" class="control-label">
                                                            Active Until:
                                                        </label>
                                                        <input type="datetime-local" class="form-control" name="expdate" id="expdate" onChange={(e)=> setExpdate(e.target.value)} value={expdate}/>
                                                    </div>
                                                </div>
                                            </div>

                                            <hr/>
                                            
                                            <div class="row">
                                                <div class="col-sm-12 file-upload-box-container">
                                                
                                                    <div class="file-upload-box">
                                                        <label class="" for="picture_1">
                                                            <div>
                                                                <span class="fa fa-plus icon-50"></span>
                                                            </div>
                                                            <div>
                                                                Main Picture
                                                                <br />
                                                                (jpg, jpeg, png, gif)
                                                            </div>
                                                            <button class="btn btn-danger btn-xs file-upload-box-delete" type="button">
                                                                <span class="fa fa-times"></span>
                                                                Delete
                                                            </button>
                                                        </label>
                                                        <input type="file" name="picture_1" id="picture_1" accept="image/*" onChange={(e)=> setPicture_1(e.target.value)} value={picture_1}/>
                                                    </div>
                                                    
                                                    <div class="file-upload-box">
                                                        <label class="" for="picture_2">
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
                                                        <input type="file" name="picture_2" id="picture_2" accept="image/*" onChange={(e)=> setPicture_2(e.target.value)} value={picture_2}/>
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
                                                        <input type="file" name="picture_3" id="picture_3" accept="image/*" onChange={(e)=> setPicture_3(e.target.value)} value={picture_3}/>
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
                                                        <input type="file" name="picture_4" id="picture_4" accept="image/*" onChange={(e)=> setPicture_4(e.target.value)} value={picture_4}/>
                                                    </div>
                                                    
                                                    <div class="file-upload-box">
                                                        <label class="" for="picture_5">
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
                                                        <input type="file" name="picture_5" id="picture_5" accept="image/*" onChange={(e)=> setPicture_5(e.target.value)} value={picture_5}/>
                                                    </div>
                                                    
                                                    <div class="file-upload-box">
                                                        <label class="" for="picture_6">
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
                                                        <input type="file" name="picture_6" id="picture_6" accept="image/*" onChange={(e)=> setPicture_6(e.target.value)} value={picture_6}/>
                                                    </div>
                                                    
                                                </div>
                                            </div>

                                            <hr/>

                                            <div class="row">
                                                <div class="col-sm-6">
                                                    <div class="form-group">
                                                        <label for="description" class="control-label">
                                                            Project Description:
                                                        </label>
                                                        <textarea name="description" id="description" class="form-control resize-none" style={{height: "99px"}} onChange={(e)=> setDescription(e.target.value)} value={description}></textarea>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="visibility" class="control-label">
                                                            Visiblility:
                                                        </label>
                                                        <select name="visibility" id="visibility" onChange={(e)=> setVisibility(e.target.value)} value={visibility}>
                                                            <option>- Select -</option>
                                                            <option>Public</option>
                                                            <option>Private</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="col-sm-6">
                                                    <div class="form-group">
                                                        <label for="tags" class="control-label">
                                                            Tags:
                                                        </label>
                                                        let's do comman separated value for now.. onsave, explode input with comma 
                                                        <input type="search" name="tags" class="form-control" placeholder="Search" onChange={(e)=> setTags(e.target.value)} value={tags}/>
                                                    </div>
                                                    <div>
                                                        <div class="item-labels item-labels-tags-all" style={{marginLeft: "-2px"}}>
                                                            <div class="item-labels-tags cursor-pointer">
                                                                Mobile App
                                                            </div>
                                                            <div class="item-labels-tags cursor-pointer">
                                                                iOS App
                                                            </div>
                                                            <div class="item-labels-tags cursor-pointer">
                                                                App Store
                                                            </div>
                                                            <div class="item-labels-tags cursor-pointer">
                                                                iOS App
                                                            </div>
                                                            <div class="item-labels-tags cursor-pointer">
                                                                App Store
                                                            </div>
                                                            <div class="item-labels-tags cursor-pointer">
                                                                iOS App
                                                            </div>
                                                            <div class="item-labels-tags cursor-pointer">
                                                                App Store
                                                            </div>
                                                            <div class="item-labels-tags cursor-pointer">
                                                                iOS App
                                                            </div>
                                                            <div class="item-labels-tags cursor-pointer">
                                                                App Store
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        </div>

                                        <div class="p-15 mt-15 bt-1-ddd floated-content">
                                            <div class="pull-right">
                                                <Link to="/account/projects/edit/1234/rules" class="btn btn-transparent-black btn-sm icon-left">
                                                    <span class="fa fa-angle-left"></span>
                                                    Back
                                                </Link>
                                                <button type="submit" class="btn btn-blue btn-sm icon-right" onClick={handleSubmit}>
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
export default ProjectEditInfo;