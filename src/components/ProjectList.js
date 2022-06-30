import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

const ProjectList = () =>{
    const [project, setProject] = useState([]);
    useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(res => {
            setProject(res);
        })
        .catch((error) => {
            console.log(error);
        })
    },[]);


 	return(
<>
        
        <Link to="/project/c1d00230-a423-4b84-a121-7105239ff8d8" className="project" id="projectlist">
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
            <div className="project-price">
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
            <div className="item-labels-tags">
                Tag name
            </div>
            <div className="item-labels-tags">
                Tag name
            </div>
            <div className="item-labels-tags">
                Tag name
            </div>
            <div className="item-labels-tags">
                Tag name
            </div>
            <div className="item-labels-tags">
                Tag name
            </div>
            <div className="item-labels-tags">
                Tag name
            </div>
        </div>
        </Link>
</>
 		)
 }
 export default ProjectList;