import React from 'react';
import {Link} from "react-router-dom";

const NavTabProjectMgt = () =>{
    return(
        <>
            <ul class="nav nav-tabs posla-tabs posla-tabs-3 nav-tabs-style-1 nav-tabs-style-1-lg-responsive">
                <li class="nav-item">
                    <Link to="#" class="nav-link">
                        <div class="font-20 font-bold">
                            1
                        </div>
                        <div class="text-fade line-height-mini mb-5" style={{marginBottom:"5px"}}>
                            Rules
                        </div>
                    </Link>
                </li>
                <li class="nav-item">
                    <Link to="#"class="nav-link ">
                        <div class="font-20 font-bold">
                            2
                        </div>
                        <div class="text-fade line-height-mini mb-5" style={{marginBottom:"5px"}}>
                            Info
                        </div>
                    </Link>
                </li>
                <li class="nav-item">
                    <Link to="#" class="nav-link">
                        <div class="font-20 font-bold">
                            3
                        </div>
                        <div class="text-fade line-height-mini mb-5" style={{marginBottom:"5px"}}>
                            Publish
                        </div>
                    </Link>
                </li>
            </ul>
        </>
        )
}
export default NavTabProjectMgt;

