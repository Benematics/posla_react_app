import React,{useState,useEffect} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AccountSidebar from '../components/AccountSidebar';
import NavTabDeals from '../components/NavTabDeals';
import {Link, useParams} from "react-router-dom";

const DealInfo = () => {

    const [display, setDisplay]= useState("None")
    const [errors, setErrors] = useState("");
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState([]);
    const [subcategory_id, setSubcategory_Id] = useState("");
    const [pictures, setPictures] = useState({
        picture_1:"",
        picture_2:"",
        picture_3:"",
        picture_4:"",
        picture_5:"",
        picture_6:""
    });
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState(0);
    const [tags, setTags]= useState([]);
    const [stage, setStage] = useState("");
    const params = useParams();
    console.log(params);

    
    const handleChange = (e) =>{
        setPictures({...pictures, [e.target.name]:[e.target.value]});
        console.log(pictures);
    }


    const [token, setToken] = useState("");

    useEffect(() => {
    const access = localStorage.getItem("token");
    if (access) {
      setToken(access);
      console.log(access);
    }
}, [token]);


    {/*Category Id*/}
    useEffect(()=>{
                var myHeaders = new Headers();
                myHeaders.append("Accept", "application/json");
                myHeaders.append("Authorization", `Bearer ${token}`);

                var requestOptions = {
                  method: 'GET',
                  headers: myHeaders,
                  redirect: 'follow'
                };

                fetch("https://posla-api.herokuapp.com/api/category/main-categories", requestOptions)
                  .then(response => response.json())
                  .then((result) => {
                    const res = result.data;
                    setCategory(res);
                    console.log(res);
                  })
                  .catch(error => console.log('error', error));
    }, [token]);





    {/*Sub Category Id*/}

    useEffect(()=>{
        var myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Authorization", `Bearer ${token}`);

        var requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow'
        };

        fetch(`https://posla-api.herokuapp.com/api/category/main-categories/${category}`, requestOptions)
          .then(response => response.json())
          .then((result) => {
            const res = result.data;
            setSubcategory_Id(res);
            console.log(res);
        })
          .catch(error => console.log('error', error));
    },[token, category])




    const handleSubmit =(e)=>{
        e.preventDefault()
       {/* const sendDealsInfo ={
           title: dealsInfo.title,
        category_id: dealsInfo.category_id,
       subcategory_id:dealsInfo.subcategory_id,
        picture_1:dealsInfo.picture_1,
        picture_2:dealsInfo.picture_2,
        picture_3:dealsInfo.picture_3,
        picture_4:dealsInfo.picture_4,
        picture_5:dealsInfo.picture_5,
        Picture_6:dealsInfo.Picture_6,
        description:dealsInfo.description,
        status:dealsInfo.status,
        tags:dealsInfo.tags,
        stage:dealsInfo.stage
        }

        fetch('https://jbuit.com/api/contact/',{
          method: 'POST',
          headers: {
            "Content-Type" : "application/json",
            "accept" : "application/json"},
             body: JSON.stringify(sendDealsInfo)
           }).then(async response => {
             if (!response.ok) {
             const validation = await response.json();
             setErrors(validation.errors);
             console.log(validation.errors);
           }else{
            setDisplay('block');
           }
        })
    */}
    {/*New Code*/}
        var myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Authorization", `Bearer ${token}`)

        var formdata = new FormData();
        formdata.append("title", title);
        formdata.append("category_id", category);
        formdata.append("subcategory_id", subcategory_id);
        formdata.append("description", description);
        formdata.append("status", status);
        formdata.append("tags", tags);
        formdata.append("pictures[]", pictures);

        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: formdata,
          redirect: 'follow'
        };

        fetch("https://posla-api.herokuapp.com/api/deals/create/stage-two-info", requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));
    }

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
                        <li class="breadcrumb-item"><Link to="/account/deals">Deals</Link></li>
                        <li class="breadcrumb-item active" aria-current="page">Create Deal</li>
                    </ol>
                </div>

                <div class="section">
                    <div class="section-title">
                        Create Deal
                    </div>
                    <div>
                        
                        <NavTabDeals/>
                        
                        <div class="tab-content">
                            <div class="tab-pane active" >

                                  <form action="/account/deals/create/1234/pricing" enctype="multipart/form-data">
                                    
                                    <div class="b-1-ddd" style={{padding:"20px"}}>

                                        <div class="p-20">
                                            
                                            <div class="row">
                                                <div class="col-sm-6">
                                                    <div class="form-group">
                                                        <label for="title" class="control-label">
                                                            Deal Title:
                                                        </label>
                                                        <textarea name="title" id="title" class="form-control resize-none" style={{height: '99px'}} onChange={(e)=>{setTitle(e.target.value)}} placeholder="I will..."></textarea>
                                                    </div>
                                                </div>
                                                <div class="col-sm-6">
                                                    <div class="form-group">
                                                        <label for="category" class="control-label">
                                                            Category:
                                                        </label>
                                                        <select name="category_id" id="category" required>
                                                                <option value="" > {params.userId} </option>
                                                            {category && category.map((item)=>(
                                                                <option value={item.id} onChange={(e)=>{setCategory(e.target.value)}}>{item.name}</option>
                                                                ))}
                                                        </select>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="subcategory" class="control-label">
                                                            Sub Category:
                                                        </label>
                                                        <select name="subcategory_id" id="subCategory" required>
                                                                <option value="" > Select </option>
                                                            {subcategory_id && subcategory_id.map((item)=>(
                                                                <option value={item.id} onChange={(e)=>{setSubcategory_Id(e.target.value)}}>{item.name}</option>
                                                                ))}
                                                        </select>
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
                                                    <input type="file" name="picture_1" id="picture_1" accept="image/*" value={pictures.picture_1} onChange={handleChange} />
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
                                                    <input type="file" name="picture_2" id="picture_2" accept="image/*" value={pictures.picture_2} onChange={handleChange} />
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
                                                    <input type="file" name="picture_3" id="picture_3" accept="image/*" value={pictures.picture_3} onChange={handleChange} />
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
                                                    <input type="file" name="picture_4" id="picture_4" accept="image/*" value={pictures.picture_4} onChange={handleChange} />
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
                                                    <input type="file" name="picture_5" id="picture_5" accept="image/*" value={pictures.picture_5} onChange={handleChange} />
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
                                                    <input type="file" name="picture_6" id="picture_6" accept="image/*" value={pictures.picture_6} onChange={handleChange} />
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
                                                        <textarea name="description" id="description" class="form-control resize-none" style={{height: "99px"}} onChange={(e)=>{setDescription(e.target.value)}}></textarea>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="visibility" class="control-label">
                                                            Visiblility:
                                                        </label>
                                                        <select name="status" id="visibility" onChange={(e)=>{setStatus(e.target.value)}}>
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
   
                                                        <input type="search" name="tags" class="form-control" placeholder="Search" value={tags}/>
                                                    </div>
                                                    <div>
                                                        <div class="item-labels item-labels-tags-all" style={{marginLeft: "-2px"}}>
                                                            <div class="item-labels-tags cursor-pointer" onClick={()=>{setTags("mobile")}}>
                                                                Mobile App
                                                            </div>
                                                            <div class="item-labels-tags cursor-pointer" onClick={()=>{setTags("mobile")}}>
                                                                Mobile App
                                                            </div>
                                                            <div class="item-labels-tags cursor-pointer" onClick={()=>{
                                                                {tags.push("web")}
                                                            }}>
                                                                Mobile App
                                                            </div>
                                                            <div class="item-labels-tags cursor-pointer" onClick={()=>{setTags("real")}}>
                                                                Mobile App
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="p-15 mt-15 bt-1-ddd floated-content">
                                            <div class="pull-right">
                                                <Link to="/account/deals/create" class="btn btn-transparent-black btn-sm icon-left" style={{marginTop: "10px"}}>
                                                    <span class="fa fa-angle-left"></span>
                                                    Back
                                                </Link>
                                                <input type="hidden" name="stage" value="info" onChange={(e)=>{setStage(e.target.value)}} />
                                                <button type="submit" class="btn btn-blue btn-sm icon-right" onClick={handleSubmit} style={{marginTop: "10px", marginLeft:"10px"}}>
                                                    Proceed
                                                    <span class="fa fa-angle-right"></span>
                                                </button>
                                                <p style={{display:display}}>category created successfully</p>
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
export default DealInfo;