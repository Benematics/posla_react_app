import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {Link} from "react-router-dom";
import AccountSidebar from '../components/AccountSidebar';
import { toast } from 'react-toastify';


const ProfileEdit = () =>{
    
    const [fullname,setFullname]= useState("");
    const [username,setUsername]= useState("");
    const [email,setEmail]= useState("");
    const [phone,setPhone]= useState("");   
    const [dob,setDob]= useState("");
    const [gender,setGender]= useState("");
    const [country,seCountry]= useState("");
    const [profile,setProfile]= useState("");
    const [short_description,setShort_description]= useState("");
    const [long_description,setLong_description]= useState("");
    const [skillset1, setSkillset1]= useState("");
    const [skillset2,setSkillset2]= useState("");
    const [language,setLanguage]= useState("");
    const [result, setResult] = useState("");
   
    const [display, setDisplay] = useState("None");
    const [errors, setErrors] = useState("");
    const [token, setToken] = useState("");

    const [file, setFile] = useState()

    function handleChange(e) {
        setFile(e.target.files[0])
      }


    useEffect(() => {
    const access = localStorage.getItem("token");
    if (access) {
      setToken(access);
      console.log(access);
    }
  }, [token]);



    const handleSubmit = (e) => {
    e.preventDefault()
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append("image", file);
    formdata.append("name", fullname);
    formdata.append("phone", phone);
    formdata.append("gender", gender);
    formdata.append("dob", dob);
    formdata.append("languages", language);
    formdata.append("skillsets[]", [skillset1, skillset2]);
    formdata.append("short_description", short_description);
    formdata.append("full_description", long_description);


    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
    };

   fetch("https://posla-api.herokuapp.com/api/auth/profile/update", requestOptions)
  .then(response => response.json())
  .then((result) => {
    const res = result.data
    if (result.status==true) {
        localStorage.setItem("account detail", JSON.stringify(res));
        localStorage.setItem("profile image", JSON.stringify(file));
        toast("updated successfully");

    }

    console.log(result);
})
  .catch(error => console.log('error', error));

    }




    return(
        <>
<Header/>
    <div class="container" style={{marginTop:"20px", height:"auto", marginBottom:"20px"}}>
        <div class="row">
            <div class="d-none d-md-block col-md-4 col-lg-3">

                <AccountSidebar/>

            </div>

            <div class="col-12 col-md-8 col-lg-9">

                <div aria-label="breadcrumb" class="details-page-breadcrumb mb-10" style={{marginBottom:"10px"}}>
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><Link to="/account">Account</Link></li>
                        <li class="breadcrumb-item"><Link to="/account/profile">Profile</Link></li>
                        <li class="breadcrumb-item active" aria-current="page">Edit</li>
                    </ol>
                </div>
                <div class="section">
                    <div class="section-title section-title-sm">
                        Edit Profile
                        <Link to="/account/profile/edit" class="btn btn-orange btn-sm pull-right hover-bg-orange">Save Profile</Link> 
                    </div>
                    <div>

                        <form action="/" method="POST" enctype="multipart/form-data">
                            
                            <div class="row">
                                <div class="col-sm-6 mb-30" style={{marginBottom:"30px"}}>

                                    <div class="p-10 pl-15 pr-15 font-bold bg-blue text-fff" style={{padding:"10px", paddingLeft:"15px", paddingRight:"15px"}}>
                                        Basic Information
                                    </div>
                                    <div class="b-1-ddd bt-none p-20" style={{padding:"20px"}}>

                                        <div class="form-group">
                                            <label for="name" class="control-label">
                                                Full name:
                                            </label>
                                            <input type="text" name="fullname" class="form-control" value={fullname} onChange= {(e)=>{setFullname(e.target.value)}}/>
                                        </div>

                                        <div class="form-group">
                                            <label for="username" class="control-label">
                                                Username:
                                            </label>
                                            <input type="text" disabled name="username" class="form-control" value={username} onChange= {(e)=>{setUsername(e.target.value)}}/>
                                        </div>

                                        <div class="form-group">
                                            <label for="email" class="control-label">
                                                Email Address:
                                            </label>
                                            <input type="email" disabled name="email" class="form-control" value={email} onChange= {(e)=>{setEmail(e.target.value)}}/>
                                        </div>

                                        <div class="form-group">
                                            <label for="phone" class="control-label">
                                                Phone Number:
                                            </label>
                                            <input type="tel" name="phone" class="form-control" value={phone} onChange= {(e)=>{setPhone(e.target.value)}}/>
                                        </div>

                                        <div class="form-group">
                                            <label for="dob" class="control-label">
                                                Date of Birth:
                                            </label>
                                            <input type="date" name="dob" class="form-control" value={dob} onChange= {(e)=>{setDob(e.target.value)}}/>
                                        </div>

                                        <div class="form-group">
                                            <label for="gender" class="control-label">
                                                Gender:
                                            </label>
                                            <select name="gender" id="gender" value={gender} onChange= {(e)=>{setGender(e.target.value)}}>
                                                <option value="">- Select -</option>
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                            </select>
                                        </div>

                                        <div class="form-group">
                                            <label for="country" class="control-label">
                                                Country:
                                            </label>
                                            <select name="country" id="country" value={country} onChange= {(e)=>{seCountry(e.target.value)}}>
                                                <option value="">- Select -</option>
                                            </select>
                                        </div>

                                    </div>

                                </div>
                                <div class="col-sm-6 mb-30" style={{marginBottom:"30px"}}>

                                    <div class="p-10 pl-15 pr-15 font-bold bg-blue text-fff" style={{padding:"10px", paddingLeft:"15px", paddingRight:"15px"}}>
                                        Profile Picture
                                    </div>
                                    <div class="b-1-ddd bt-none p-20" style={{padding:"20px"}}>

                                                                                
                                        <div class="note p-10" style={{padding:"10px"}}>
                                            Please upload a professionally-acceptable photo
                                        </div>
                                       

                                        <div class="form-group mt-10" style={{marginTop:"10px", marginBottom:"10px"}}>
                                            <label class="control-label">
                                                Upload Picture:
                                            </label>
                                            <input type="file" name="file" class="form-control" onChange= {handleChange}/>
                                        </div>

                                        {/*-- if profile picture exist --*/}
                                        <div class="">
                                            <div class="pull-left mr-10" style={{marginRight:"10px"}}>
                                                <label class="control-label mt-15" style={{marginTop:"15px"}}>
                                                    Current Photo:
                                                </label>
                                            </div>
                                            <div class="overflow-hidden">
                                                <div class="">
                                                    <div style={{width: "50px", height: "50px", borderRadius: "50%", overflow: "hidden", background: "#000"}}>
                                                        <img src='/images/posla-admin.jpg' alt="Firstname lastname" class="dp-cover" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/*-- end if --*/}

                                    </div>


                                    <div class="p-10 pl-15 pr-15 mt-30 font-bold bg-blue text-fff" style={{padding:"10px", paddingLeft:"15px", marginTop:"30px"}}>
                                        Description
                                    </div>
                                    <div class="b-1-ddd bt-none p-20" style={{padding:"20px"}}>
                                        
                                        <div class="form-group">
                                            <label for="short_description" class="control-label">
                                                Short Description:
                                            </label>
                                            <input type="text" name="short_description" id="short_description" class="form-control"  value={short_description} onChange= {(e)=>{setShort_description(e.target.value)}}/>
                                        </div>

                                        <div class="form-group">
                                            <label for="long_description" class="control-label">
                                                Full Description:
                                            </label>
                                            <textarea name="long_description" id="long_description" class="form-control resize-none" style={{height: "200px"}} value={long_description} onChange= {(e)=>{setLong_description(e.target.value)}}></textarea>
                                        </div>

                                    </div>

                                </div>
                                <div class="col-sm-6 mb-30" style={{marginBottom:"30px"}}>

                                    <div class="p-10 pl-15 pr-15 font-bold bg-blue text-fff" style={{padding:"10px", paddingLeft:"15px", paddingRight:"15px"}}>
                                        Skillset
                                    </div>
                                    <div class="b-1-ddd bt-none p-20" style={{padding:"20px"}}>
                                        
                                        <div class="input-group input-group-attach-right">
                                            <input type="text" class="form-control item-labels-tags-input" placeholder="Enter tags..."/>
                                            <div class="input-group-btn">
                                                <button type="button" class="btn btn-md btn-dark item-labels-tags-submit">
                                                    <span class="fa fa-plus"></span>
                                                </button>
                                            </div>
                                        </div>

                                        <div class="item-labels item-labels-md item-labels-tags-all mt-5" style={{marginTop:"5px"}}>
                                            <div class="item-labels-tags">
                                                Graphics Design
                                                <input type="hidden" name="skillset1" readonly value={skillset1} onChange= {(e)=>{setSkillset1(e.target.value)}}/>
                                                <span class="fa fa-times item-labels-tags-close"></span>
                                            </div>
                                            <div class="item-labels-tags">
                                                iOS App Designer
                                                <input type="hidden" name="skillset2" readonly value={skillset2} onChange= {(e)=>{setSkillset2(e.target.value)}}/>
                                                <span class="fa fa-times item-labels-tags-close"></span>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                                <div class="col-sm-6 mb-30" style={{marginBottom:"30px"}}>

                                    <div class="p-10 pl-15 pr-15 font-bold bg-blue text-fff" style={{padding:"10px", paddingLeft:"15px", paddingRight:"15px"}}>
                                        Languages
                                    </div>
                                    <div class="b-1-ddd bt-none p-20" style={{padding:"20px"}}>
                                        
                                        <div class="input-group input-group-attach-right" style={{padding: "5px"}}>
                                            <input type="text" class="form-control language-row-input" placeholder="Enter language..." style={{height: "35px"}}/>
                                            <select name="language" id="language" class="form-control language-row-select" style={{height: "35px"}} value={language} onChange= {(e)=>{setLanguage(e.target.value)}}>
                                                <option value="">- Select -</option>
                                                <option value="fluent">Fluent</option>
                                                <option value="average">Average</option>
                                                <option value="slighty">Slightly</option>
                                            </select>
                                            <div class="input-group-btn">
                                                <button type="button" class="btn btn-md btn-dark language-row-submit">
                                                    <span class="fa fa-plus"></span>
                                                </button>
                                            </div>
                                        </div>

                                        <div class="table-responsive b-1-ddd mt-10" style={{marginTop:"10px"}}>
                                            <table class="table table-tr-lines">
                                                <tbody class="language-row-all" style={{padding:"5px"}}>
                                                    <tr>
                                                        <td>
                                                            <div>
                                                                English
                                                            </div>
                                                             <input type="hidden" name="English" value="average" />
                                                        </td>
                                                        <td>
                                                            <div class="text-fade">
                                                                Fluent
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div>
                                                                <span class="fa fa-times icon-red cursor-pointer language-row-close"></span>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div>
                                                                French
                                                            </div>
                                                             <input type="hidden" name="French" value="Fluent" />
                                                        </td>
                                                        <td>
                                                            <div class="text-fade">
                                                                Average
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div>
                                                                <span class="fa fa-times icon-red cursor-pointer language-row-close"></span>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div>
                                                                Spanish
                                                            </div>
                                                             <input type="hidden" name="Spanish" value="Slightly" />
                                                        </td>
                                                        <td>
                                                            <div class="text-fade">
                                                                Average
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div>
                                                                <span class="fa fa-times icon-red cursor-pointer language-row-close"></span>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>

                                    </div>

                                </div>
                            </div>

                            <div class="pt-20 bt-1-ddd" style={{paddingTop:"20px"}}>

                                <div class="floated-content">
                                    <button type="submit" class="btn btn-blue btn-sm pull-right ml-10" onClick={handleSubmit} style={{marginLeft:"10px"}}>
                                        Save Changes       
                                    </button>
                                    <Link to="/account/profile" class="btn btn-transparent-black btn-sm pull-right">
                                        Cancel
                                    </Link>
                                     
                                </div>

                            </div>

                        </form>


                    </div>
                </div>

            </div>
        </div>
    </div>
            <Footer/>
        </>

        )
}
export default ProfileEdit;






  