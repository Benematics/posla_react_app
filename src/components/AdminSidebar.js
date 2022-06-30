import React, {useState} from 'react';
import {Link} from "react-router-dom";

const AdminSidebar = () =>{
    const [pageDisplay, setPageDisplay] = useState("none");
    const [catDisplay, setCatDisplay] = useState("none");
    return(
        <>
            <aside class="main-sidebar" style={{position:"fixed"}}>
                <section class="sidebar">

                    <div class="user-panel">
                        <Link to="#" target="_blank">
                            <div class="image" style={{width: "60px", height: "60px", background: "#0073B1", border: "10px solid #0073B1", boxSizing: "content-box", overflow: "hidden"}}>
                                <img src='/images/logo.png' class="img-circle dp-contain" alt="Posla" style={{marginTop: "-15px"}}/>
                            </div>
                        </Link>
                        <div class="info" style={{paddingLeft: "10px", paddingRight: "10px"}}>

                            <p>Fname Lname</p>
                            <p class="font-weight-normal" style={{color: "#aaa"}}>
                                Admin
                            </p>
                        </div>
                    </div>


                    <ul class="sidebar-menu" data-widget="tree">
                        <li class="header">Welcome</li>
                        <li class="#">
                            <Link to="/admin/dashboard">
                                <i class="fa fa-user"></i> <span>Dashboard</span>
                            </Link>
                        </li>

                        <li class="header">Samples</li>

                        <li class="#">
                            <Link to="#" onClick={()=>{setPageDisplay("block")}}>
                                <i class="fa fa-list"></i>
                                <span>Pages</span>
                                <span class="pull-right-container">
                                    <i class="fa fa-angle-left pull-right"></i>
                                </span>
                            </Link>
                            <ul class="treeview-menu" style={{display: pageDisplay}}>
                                <li class="#">
                                    <Link to="/admin/sample/list">
                                        <i class="fa fa-list"></i>
                                        List Page
                                    </Link>
                                </li>
                                <li class="#">
                                    <Link to="/admin/sample/form">
                                        <i class="fa fa-list"></i>
                                        Form Page
                                    </Link>
                                </li>
                                <li class="#">
                                    <Link to="/admin/sample/details">
                                        <i class="fa fa-list"></i>
                                        Details Page
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        <li class="#">
                            <Link to="#" onClick={()=>{setCatDisplay("block")}}>
                                <i class="fa fa-list"></i>
                                <span>Category</span>
                                <span class="pull-right-container">
                                    <i class="fa fa-angle-left pull-right"></i>
                                </span>
                            </Link>
                            <ul class="treeview-menu" style={{display:catDisplay}}>
                                <li class="#">
                                    <Link to='/admin/categories'>
                                        <i class="fa fa-list"></i>
                                        List Category
                                    </Link>
                                </li>
                                <li class="#">
                                    <Link to='/admin/categories/create'>
                                        <i class="fa fa-list"></i>
                                        Create Category
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        <li class="header">Others</li>
                        <li>
                            <Link to="#" target="_blank">
                                <i class="fa fa-desktop"></i> <span>Goto homepage</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="">
                                <i class="fa fa-user"></i> <span>Logout</span>
                            </Link>
                        </li>

                    </ul>
                </section>
                
            </aside>
        </>
        )
}

export default AdminSidebar;


