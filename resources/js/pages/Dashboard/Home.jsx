import React, { useCallback, useEffect, useState } from "react";
import MappingComponent from "../../components/mapping/MappingComponent";
import SortingComponent from "../../components/sort/SortingComponent";
import Header from "../../layouts/Header";


const Home=()=>{
    let token = localStorage.getItem("loginToken");


    const [job,setJob]=useState([]);

    const [filteredValue,setFilteredValue]=useState('')


    useEffect(()=>{
        fetchJobs();
    },[])

    

    const fetchJobs=()=>{
        axios
        .get("/api/job-list", {
          headers: { 
              "Authorization": 'Bearer '+ token
          },
        })
        .then((res) => {
            setJob(res.data.data)
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })
    }


    const handleSearch=useCallback(e=>{
        console.log(e.target.value)
        axios
        .get("/api/search?search=" + e.target.value, {
          headers: { 
              "Authorization": 'Bearer '+ token
          },
        })
        .then((res) => {
            setJob(res.data.data)
        })
        .catch((err) => {
            console.log(err)
        });
    },[])

    const handleSorting=useCallback(e=>{
        console.log(e.target.value)
        const {name,value} = e.target;
        axios
            .get("/api/sorting?sort=" +value+"&name="+name, {
            headers: { 
                "Authorization": 'Bearer '+ token
            },
        })
        .then((res) => {
            setJob(res.data.data)
        })
        .catch((err) => {
            console.log(err)
        });
        
    },[])
   


    const handleFilterChange =(event) => {
        console.log(event.target.value);
        setFilteredValue(event.target.value)
        let e = event.target.value;
        let filteredData = ''


        if(e === "1000"){
            filteredData = job.filter((filterTag)=>{
                return Number(filterTag.salary) > 1 && Number(filterTag.salary) < Number(event.target.value);
            })
            return setJob(filteredData)
        }else if(e === "10000"){
            filteredData = job.filter((filterTag)=>{
                return Number(filterTag.salary) > 1000 && Number(filterTag.salary) < Number(event.target.value);
            })
            return setJob(filteredData)
        }else if(e === "100000"){
            filteredData = job.filter((filterTag)=>{
                return Number(filterTag.salary) > 100000 && Number(filterTag.salary) < Number(event.target.value);
            })
            return setJob(filteredData);
        }else if(e === "10000000"){
            filteredData = job.filter((filterTag)=>{
                return Number(filterTag.salary) > 100000 && Number(filterTag.salary) < Number(event.target.value);
            })
            return setJob(filteredData)
        }else if(filteredValue === ""){
            fetchJobs()
        }

        console.log(job);
    }

    // const handleFilterChange=()=>{
    //     console.log(job)
    // }

    console.log('jsjsjs');
    console.log(job);

    return (
        <React.Fragment>
            <Header search={handleSearch}/>
        <section class="inner-section ad-list-part">
            <div class="container">
                <div class="row content-reverse">
                    <div class="col-lg-4 col-xl-3">
                        <div class="row">
                            <div class="col-md-6 col-lg-12">
                                <div class="product-widget">
                                    <h6 class="product-widget-title">
                                        Filter by salary
                                    </h6>
                                    <form class="product-widget-form">
                                        <ul class="product-widget-list product-widget-scroll">
                                            <li class="product-widget-item">
                                                <div class="product-widget-checkbox">
                                                    <input
                                                        type="radio"
                                                        id="chcek9"
                                                        name="job"
                                                        value="1000"
                                                        onChange={(e)=>handleFilterChange(e)}
                                                    />
                                                </div>
                                                <label
                                                    class="product-widget-label"
                                                    for="chcek9"
                                                >
                                                    <span class="product-widget-text">
                                                        Price 1 - 1000
                                                    </span>
                                                </label>

                                                
                                            </li>
                                            <li class="product-widget-item">
                                                <div class="product-widget-checkbox">
                                                    <input
                                                        type="radio"
                                                        id="chcek9"
                                                        name="job"
                                                        value="10000"
                                                        onChange={(e)=>handleFilterChange(e)}
                                                    />
                                                </div>
                                                <label
                                                    class="product-widget-label"
                                                    for="chcek9"
                                                >
                                                    <span class="product-widget-text">
                                                    Price 1000 - 10000
                                                    </span>
                                                </label>

                                                
                                            </li>
                                            <li class="product-widget-item">
                                                <div class="product-widget-checkbox">
                                                    <input
                                                        type="radio"
                                                        id="chcek9"
                                                        name="job"

                                                        value="100000"
                                                        onChange={(e)=>handleFilterChange(e)}
                                                    />
                                                </div>
                                                <label
                                                    class="product-widget-label"
                                                    for="chcek9"
                                                >
                                                    <span class="product-widget-text">
                                                    Price 10000 - 100000
                                                    </span>
                                                </label>

                                                
                                            </li>

                                            <li class="product-widget-item">
                                                <div class="product-widget-checkbox">
                                                    <input
                                                        type="radio"
                                                        id="chcek9"
                                                        name="job"
                                                        value="10000000"
                                                        onChange={(e)=>handleFilterChange(e)}
                                                    />
                                                </div>
                                                <label
                                                    class="product-widget-label"
                                                    for="chcek9"
                                                >
                                                    <span class="product-widget-text">
                                                    Price&nbsp;100000&nbsp;-&nbsp;10000000
                                                    </span>
                                                </label>

                                                
                                            </li>
                                        </ul>
                                        <button
                                            type="button"
                                            class="product-widget-btn"
                                            onClick={fetchJobs}
                                        >
                                            <i class="fas fa-broom"></i>
                                            <span>Clear Filter</span>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-8 col-xl-9">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="header-filter">
                                    <SortingComponent sorting={handleSorting} label={"Short by seniority"}/>
                                    <SortingComponent sorting={handleSorting} label={"Short by salary"}/>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <MappingComponent listings={job}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </React.Fragment>
    );
}

export default Home;