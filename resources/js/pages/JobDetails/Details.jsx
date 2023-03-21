import React, { useEffect, useState } from "react";
import Header from "../../layouts/Header";

import BlogImage from "../../../../public/images/job.jpg"
import { useParams } from "react-router-dom";

const Details=()=>{
    let token = localStorage.getItem("loginToken");

    const {id}=useParams();

    const [details,setDetails]=useState({});

    useEffect(()=>{
        axios
        .get("/api/job/"+id, {
          headers: { 
              "Authorization": 'Bearer '+ token
          },
        })
        .then((res) => {
            setDetails(res.data.data)
        })
    },[])

    return (
        <React.Fragment>
             <Header/>
             <section class="blog-details-part">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-10 m-auto">
                            <div class="blog-details-title">
                                <h2><a href="#">Lorem ipsum dolor sit amet consectetur adipisicing elit maxime tempore
                                        natus laborum autem.</a></h2>
                            </div>
                           
                            <div class="blog-details-image"><img style={{width:"300px"}} src={BlogImage} alt="blog-details"/></div>
                            <div class="blog-details-content">
                                <div class="description">
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore incidunt harum ea a
                                        dolorem neque labore animi? Asperiores necessitatibus voluptate ut iure alias, odit
                                        animi consequuntur fugiat esse atque sit aut reprehenderit mollitia dignissimos quasi
                                        vel quo neque eaque voluptates provident qui. At, debitis corporis. Asperiores quod,
                                        dolorum earum sunt eveniet dolores similique amet? Neque vel dolores quasi reiciendis
                                        rem dicta amet, ab tempore? Porro quos, alias nisi adipisci sed et architecto quis ipsam
                                        minus sint! Consequuntur minima excepturi dolor, nostrum dolore asperiores, atque
                                        laudantium magnam consequatur pariatur porro repellendus Perspiciatis labore libero
                                        quibusdam nobis dicta eum ipsam enim nisi.</p>
                                </div>
                                <div class="sub-content">
                                    <h4><b>JOB DETAILS</b></h4>
                                    <p>{details.job_title}</p>
                                    <p>{details.seniority_level}</p>
                                    <p>{details.skill}</p>
                                    <p>{details.salary}</p>
                                    <p>{details.company_size}</p>
                                    <p>{details.city}</p>
                                    <p>{details.country}</p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    
    )
}

export default Details;