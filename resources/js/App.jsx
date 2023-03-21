import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import Home from "./pages/Dashboard/Home";
import axios from "axios";
import { AuthContext } from "./helpers/AuthContext";


axios.defaults.baseURL = "http://localhost:8000/";

function App() {
    const [currentUser,setCurrentUser]=useState(null);
    let token = localStorage.getItem("loginToken");

    console.log(token);

    useEffect(()=>{
        let isSubscribed = true;
        fetchCurrentUser(isSubscribed);
        return () => (isSubscribed = false)
    },[])

    const fetchCurrentUser=(sub)=>{
        if(sub){
            axios
      .get("/api/user", {
        headers: { 
            "Authorization": 'Bearer '+ token
        },
      })
      .then((res) => {
        setCurrentUser(res.data)
      }).catch(err=>{
        setCurrentUser(null)
      })
        }
        
    }


    return (
        <BrowserRouter>
            {/* <div>
                <Header />
            </div> */}
            <AuthContext.Provider value={{currentUser,setCurrentUser}}>
                <Routes>
                    <Route path="/"  element={!currentUser ? <Login/> : <Navigate to="/home" />} exact/>
                    <Route path="/sign-up"  element={!currentUser ? <Signup/> : <Navigate to="/home" />}/>
                    <Route path="/home"  element={!currentUser ? <Navigate to="/" /> :  <Home/>}/>
                </Routes>
            </AuthContext.Provider>
        </BrowserRouter>
        // <section class="inner-section ad-list-part">
        //     <div class="container">
        //         <div class="row content-reverse">
        //             <div class="col-lg-4 col-xl-3">
        //                 <div class="row">
        //                     <div class="col-md-6 col-lg-12">
        //                         <div class="product-widget">
        //                             <h6 class="product-widget-title">
        //                                 Filter by Price
        //                             </h6>
        //                             <form class="product-widget-form">
        //                                 <div class="product-widget-group">
        //                                     <input
        //                                         type="text"
        //                                         placeholder="min - 00"
        //                                     />
        //                                     <input
        //                                         type="text"
        //                                         placeholder="max - 1B"
        //                                     />
        //                                 </div>
        //                                 <button
        //                                     type="submit"
        //                                     class="product-widget-btn"
        //                                 >
        //                                     <i class="fas fa-search"></i>
        //                                     <span>search</span>
        //                                 </button>
        //                             </form>
        //                         </div>
        //                     </div>
                            
        //                     <div class="col-md-6 col-lg-12">
        //                         <div class="product-widget">
        //                             <h6 class="product-widget-title">
        //                                 Filter by cities
        //                             </h6>
        //                             <form class="product-widget-form">
        //                                 <div class="product-widget-search">
        //                                     <input
        //                                         type="text"
        //                                         placeholder="Search"
        //                                     />
        //                                 </div>
        //                                 <ul class="product-widget-list product-widget-scroll">
        //                                     <li class="product-widget-item">
        //                                         <div class="product-widget-checkbox">
        //                                             <input
        //                                                 type="checkbox"
        //                                                 id="chcek9"
        //                                             />
        //                                         </div>
        //                                         <label
        //                                             class="product-widget-label"
        //                                             for="chcek9"
        //                                         >
        //                                             <span class="product-widget-text">
        //                                                 Los Angeles
        //                                             </span>
        //                                             <span class="product-widget-number">
        //                                                 (95)
        //                                             </span>
        //                                         </label>
        //                                     </li>
        //                                     <li class="product-widget-item">
        //                                         <div class="product-widget-checkbox">
        //                                             <input
        //                                                 type="checkbox"
        //                                                 id="chcek10"
        //                                             />
        //                                         </div>
        //                                         <label
        //                                             class="product-widget-label"
        //                                             for="chcek10"
        //                                         >
        //                                             <span class="product-widget-text">
        //                                                 San Francisco
        //                                             </span>
        //                                             <span class="product-widget-number">
        //                                                 (82)
        //                                             </span>
        //                                         </label>
        //                                     </li>
        //                                     <li class="product-widget-item">
        //                                         <div class="product-widget-checkbox">
        //                                             <input
        //                                                 type="checkbox"
        //                                                 id="chcek11"
        //                                             />
        //                                         </div>
        //                                         <label
        //                                             class="product-widget-label"
        //                                             for="chcek11"
        //                                         >
        //                                             <span class="product-widget-text">
        //                                                 California
        //                                             </span>
        //                                             <span class="product-widget-number">
        //                                                 (1t)
        //                                             </span>
        //                                         </label>
        //                                     </li>
        //                                     <li class="product-widget-item">
        //                                         <div class="product-widget-checkbox">
        //                                             <input
        //                                                 type="checkbox"
        //                                                 id="chcek12"
        //                                             />
        //                                         </div>
        //                                         <label
        //                                             class="product-widget-label"
        //                                             for="chcek12"
        //                                         >
        //                                             <span class="product-widget-text">
        //                                                 Manhattan
        //                                             </span>
        //                                             <span class="product-widget-number">
        //                                                 (46)
        //                                             </span>
        //                                         </label>
        //                                     </li>
        //                                     <li class="product-widget-item">
        //                                         <div class="product-widget-checkbox">
        //                                             <input
        //                                                 type="checkbox"
        //                                                 id="chcek13"
        //                                             />
        //                                         </div>
        //                                         <label
        //                                             class="product-widget-label"
        //                                             for="chcek13"
        //                                         >
        //                                             <span class="product-widget-text">
        //                                                 Baltimore
        //                                             </span>
        //                                             <span class="product-widget-number">
        //                                                 (24)
        //                                             </span>
        //                                         </label>
        //                                     </li>
        //                                     <li class="product-widget-item">
        //                                         <div class="product-widget-checkbox">
        //                                             <input
        //                                                 type="checkbox"
        //                                                 id="chcek14"
        //                                             />
        //                                         </div>
        //                                         <label
        //                                             class="product-widget-label"
        //                                             for="chcek14"
        //                                         >
        //                                             <span class="product-widget-text">
        //                                                 Avocados
        //                                             </span>
        //                                             <span class="product-widget-number">
        //                                                 (34)
        //                                             </span>
        //                                         </label>
        //                                     </li>
        //                                     <li class="product-widget-item">
        //                                         <div class="product-widget-checkbox">
        //                                             <input
        //                                                 type="checkbox"
        //                                                 id="chcek15"
        //                                             />
        //                                         </div>
        //                                         <label
        //                                             class="product-widget-label"
        //                                             for="chcek15"
        //                                         >
        //                                             <span class="product-widget-text">
        //                                                 new york
        //                                             </span>
        //                                             <span class="product-widget-number">
        //                                                 (82)
        //                                             </span>
        //                                         </label>
        //                                     </li>
        //                                     <li class="product-widget-item">
        //                                         <div class="product-widget-checkbox">
        //                                             <input
        //                                                 type="checkbox"
        //                                                 id="chcek16"
        //                                             />
        //                                         </div>
        //                                         <label
        //                                             class="product-widget-label"
        //                                             for="chcek16"
        //                                         >
        //                                             <span class="product-widget-text">
        //                                                 Houston
        //                                             </span>
        //                                             <span class="product-widget-number">
        //                                                 (45)
        //                                             </span>
        //                                         </label>
        //                                     </li>
        //                                     <li class="product-widget-item">
        //                                         <div class="product-widget-checkbox">
        //                                             <input
        //                                                 type="checkbox"
        //                                                 id="chcek17"
        //                                             />
        //                                         </div>
        //                                         <label
        //                                             class="product-widget-label"
        //                                             for="chcek17"
        //                                         >
        //                                             <span class="product-widget-text">
        //                                                 Chicago
        //                                             </span>
        //                                             <span class="product-widget-number">
        //                                                 (19)
        //                                             </span>
        //                                         </label>
        //                                     </li>
        //                                 </ul>
        //                                 <button
        //                                     type="submit"
        //                                     class="product-widget-btn"
        //                                 >
        //                                     <i class="fas fa-broom"></i>
        //                                     <span>Clear Filter</span>
        //                                 </button>
        //                             </form>
        //                         </div>
        //                     </div>
                            
        //                 </div>
        //             </div>
        //             <div class="col-lg-8 col-xl-9">
        //                 <div class="row">
        //                     <div class="col-lg-12">
        //                         <div class="header-filter">
        //                             <div class="filter-short">
        //                                 <label class="filter-label">
        //                                     Short by :
        //                                 </label>
        //                                 <select class="custom-select filter-select">
        //                                     <option selected="">default</option>
        //                                     <option value="3">trending</option>
        //                                     <option value="1">featured</option>
        //                                     <option value="2">recommend</option>
        //                                 </select>
        //                             </div>
                                    
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div class="row">
        //                     <div class="col-sm-6 col-md-6 col-lg-6 col-xl-4">
        //                         <div class="product-card">
        //                             <div class="product-media">
        //                                 <div class="product-img">
        //                                     <img
        //                                         src="images/product/07.jpg"
        //                                         alt="product"
        //                                     />
        //                                 </div>
        //                                 <div class="product-type">
        //                                     <span class="flat-badge booking">
        //                                         booking
        //                                     </span>
        //                                 </div>
        //                                 <ul class="product-action">
        //                                     <li class="view">
        //                                         <i class="fas fa-eye"></i>
        //                                         <span>264</span>
        //                                     </li>
        //                                     <li class="click">
        //                                         <i class="fas fa-mouse"></i>
        //                                         <span>134</span>
        //                                     </li>
        //                                     <li class="rating">
        //                                         <i class="fas fa-star"></i>
        //                                         <span>4.5/7</span>
        //                                     </li>
        //                                 </ul>
        //                             </div>
        //                             <div class="product-content">
        //                                 <ol class="breadcrumb product-category">
        //                                     <li>
        //                                         <i class="fas fa-tags"></i>
        //                                     </li>
        //                                     <li class="breadcrumb-item">
        //                                         <a href="#">Luxury</a>
        //                                     </li>
        //                                     <li
        //                                         class="breadcrumb-item active"
        //                                         aria-current="page"
        //                                     >
        //                                         resort
        //                                     </li>
        //                                 </ol>
        //                                 <h5 class="product-title">
        //                                     <a href="ad-details-left.html">
        //                                         Lorem ipsum dolor sit amet
        //                                         consect adipisicing elit
        //                                     </a>
        //                                 </h5>
        //                                 <div class="product-meta">
        //                                     <span>
        //                                         <i class="fas fa-map-marker-alt"></i>
        //                                         Uttara, Dhaka
        //                                     </span>
        //                                     <span>
        //                                         <i class="fas fa-clock"></i>30
        //                                         min ago
        //                                     </span>
        //                                 </div>
        //                                 <div class="product-info">
        //                                     <h5 class="product-price">
        //                                         $1590<span>/per week</span>
        //                                     </h5>
        //                                     <div class="product-btn">
        //                                         <a
        //                                             href="compare.html"
        //                                             title="Compare"
        //                                             class="fas fa-compress"
        //                                         ></a>
        //                                         <button
        //                                             type="button"
        //                                             title="Wishlist"
        //                                             class="far fa-heart"
        //                                         ></button>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div class="col-sm-6 col-md-6 col-lg-6 col-xl-4">
        //                         <div class="product-card">
        //                             <div class="product-media">
        //                                 <div class="product-img">
        //                                     <img
        //                                         src="images/product/08.jpg"
        //                                         alt="product"
        //                                     />
        //                                 </div>
        //                                 <div class="product-type">
        //                                     <span class="flat-badge sale">
        //                                         sale
        //                                     </span>
        //                                 </div>
        //                                 <ul class="product-action">
        //                                     <li class="view">
        //                                         <i class="fas fa-eye"></i>
        //                                         <span>264</span>
        //                                     </li>
        //                                     <li class="click">
        //                                         <i class="fas fa-mouse"></i>
        //                                         <span>134</span>
        //                                     </li>
        //                                     <li class="rating">
        //                                         <i class="fas fa-star"></i>
        //                                         <span>4.5/7</span>
        //                                     </li>
        //                                 </ul>
        //                             </div>
        //                             <div class="product-content">
        //                                 <ol class="breadcrumb product-category">
        //                                     <li>
        //                                         <i class="fas fa-tags"></i>
        //                                     </li>
        //                                     <li class="breadcrumb-item">
        //                                         <a href="#">gadget</a>
        //                                     </li>
        //                                     <li
        //                                         class="breadcrumb-item active"
        //                                         aria-current="page"
        //                                     >
        //                                         mobile
        //                                     </li>
        //                                 </ol>
        //                                 <h5 class="product-title">
        //                                     <a href="ad-details-left.html">
        //                                         Lorem ipsum dolor sit amet
        //                                         consect adipisicing elit
        //                                     </a>
        //                                 </h5>
        //                                 <div class="product-meta">
        //                                     <span>
        //                                         <i class="fas fa-map-marker-alt"></i>
        //                                         Uttara, Dhaka
        //                                     </span>
        //                                     <span>
        //                                         <i class="fas fa-clock"></i>30
        //                                         min ago
        //                                     </span>
        //                                 </div>
        //                                 <div class="product-info">
        //                                     <h5 class="product-price">
        //                                         $454<span>/fixed</span>
        //                                     </h5>
        //                                     <div class="product-btn">
        //                                         <a
        //                                             href="compare.html"
        //                                             title="Compare"
        //                                             class="fas fa-compress"
        //                                         ></a>
        //                                         <button
        //                                             type="button"
        //                                             title="Wishlist"
        //                                             class="far fa-heart"
        //                                         ></button>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div class="col-sm-6 col-md-6 col-lg-6 col-xl-4">
        //                         <div class="product-card">
        //                             <div class="product-media">
        //                                 <div class="product-img">
        //                                     <img
        //                                         src="images/product/09.jpg"
        //                                         alt="product"
        //                                     />
        //                                 </div>
        //                                 <div class="product-type">
        //                                     <span class="flat-badge sale">
        //                                         sale
        //                                     </span>
        //                                 </div>
        //                                 <ul class="product-action">
        //                                     <li class="view">
        //                                         <i class="fas fa-eye"></i>
        //                                         <span>264</span>
        //                                     </li>
        //                                     <li class="click">
        //                                         <i class="fas fa-mouse"></i>
        //                                         <span>134</span>
        //                                     </li>
        //                                     <li class="rating">
        //                                         <i class="fas fa-star"></i>
        //                                         <span>4.5/7</span>
        //                                     </li>
        //                                 </ul>
        //                             </div>
        //                             <div class="product-content">
        //                                 <ol class="breadcrumb product-category">
        //                                     <li>
        //                                         <i class="fas fa-tags"></i>
        //                                     </li>
        //                                     <li class="breadcrumb-item">
        //                                         <a href="#">animal</a>
        //                                     </li>
        //                                     <li
        //                                         class="breadcrumb-item active"
        //                                         aria-current="page"
        //                                     >
        //                                         cat
        //                                     </li>
        //                                 </ol>
        //                                 <h5 class="product-title">
        //                                     <a href="ad-details-left.html">
        //                                         Lorem ipsum dolor sit amet
        //                                         consect adipisicing elit
        //                                     </a>
        //                                 </h5>
        //                                 <div class="product-meta">
        //                                     <span>
        //                                         <i class="fas fa-map-marker-alt"></i>
        //                                         Uttara, Dhaka
        //                                     </span>
        //                                     <span>
        //                                         <i class="fas fa-clock"></i>30
        //                                         min ago
        //                                     </span>
        //                                 </div>
        //                                 <div class="product-info">
        //                                     <h5 class="product-price">
        //                                         $235<span>/Negotiable</span>
        //                                     </h5>
        //                                     <div class="product-btn">
        //                                         <a
        //                                             href="compare.html"
        //                                             title="Compare"
        //                                             class="fas fa-compress"
        //                                         ></a>
        //                                         <button
        //                                             type="button"
        //                                             title="Wishlist"
        //                                             class="far fa-heart"
        //                                         ></button>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div class="col-sm-6 col-md-6 col-lg-6 col-xl-4">
        //                         <div class="product-card">
        //                             <div class="product-media">
        //                                 <div class="product-img">
        //                                     <img
        //                                         src="images/product/10.jpg"
        //                                         alt="product"
        //                                     />
        //                                 </div>
        //                                 <div class="product-type">
        //                                     <span class="flat-badge rent">
        //                                         rent
        //                                     </span>
        //                                 </div>
        //                                 <ul class="product-action">
        //                                     <li class="view">
        //                                         <i class="fas fa-eye"></i>
        //                                         <span>264</span>
        //                                     </li>
        //                                     <li class="click">
        //                                         <i class="fas fa-mouse"></i>
        //                                         <span>134</span>
        //                                     </li>
        //                                     <li class="rating">
        //                                         <i class="fas fa-star"></i>
        //                                         <span>4.5/7</span>
        //                                     </li>
        //                                 </ul>
        //                             </div>
        //                             <div class="product-content">
        //                                 <ol class="breadcrumb product-category">
        //                                     <li>
        //                                         <i class="fas fa-tags"></i>
        //                                     </li>
        //                                     <li class="breadcrumb-item">
        //                                         <a href="#">automobile</a>
        //                                     </li>
        //                                     <li
        //                                         class="breadcrumb-item active"
        //                                         aria-current="page"
        //                                     >
        //                                         private car
        //                                     </li>
        //                                 </ol>
        //                                 <h5 class="product-title">
        //                                     <a href="ad-details-left.html">
        //                                         Lorem ipsum dolor sit amet
        //                                         consect adipisicing elit
        //                                     </a>
        //                                 </h5>
        //                                 <div class="product-meta">
        //                                     <span>
        //                                         <i class="fas fa-map-marker-alt"></i>
        //                                         Uttara, Dhaka
        //                                     </span>
        //                                     <span>
        //                                         <i class="fas fa-clock"></i>30
        //                                         min ago
        //                                     </span>
        //                                 </div>
        //                                 <div class="product-info">
        //                                     <h5 class="product-price">
        //                                         $768<span>/per month</span>
        //                                     </h5>
        //                                     <div class="product-btn">
        //                                         <a
        //                                             href="compare.html"
        //                                             title="Compare"
        //                                             class="fas fa-compress"
        //                                         ></a>
        //                                         <button
        //                                             type="button"
        //                                             title="Wishlist"
        //                                             class="far fa-heart"
        //                                         ></button>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div class="col-sm-6 col-md-6 col-lg-6 col-xl-4">
        //                         <div class="product-card">
        //                             <div class="product-media">
        //                                 <div class="product-img">
        //                                     <img
        //                                         src="images/product/11.jpg"
        //                                         alt="product"
        //                                     />
        //                                 </div>
        //                                 <div class="product-type">
        //                                     <span class="flat-badge booking">
        //                                         booking
        //                                     </span>
        //                                 </div>
        //                                 <ul class="product-action">
        //                                     <li class="view">
        //                                         <i class="fas fa-eye"></i>
        //                                         <span>264</span>
        //                                     </li>
        //                                     <li class="click">
        //                                         <i class="fas fa-mouse"></i>
        //                                         <span>134</span>
        //                                     </li>
        //                                     <li class="rating">
        //                                         <i class="fas fa-star"></i>
        //                                         <span>4.5/7</span>
        //                                     </li>
        //                                 </ul>
        //                             </div>
        //                             <div class="product-content">
        //                                 <ol class="breadcrumb product-category">
        //                                     <li>
        //                                         <i class="fas fa-tags"></i>
        //                                     </li>
        //                                     <li class="breadcrumb-item">
        //                                         <a href="#">Luxury</a>
        //                                     </li>
        //                                     <li
        //                                         class="breadcrumb-item active"
        //                                         aria-current="page"
        //                                     >
        //                                         Duplex house
        //                                     </li>
        //                                 </ol>
        //                                 <h5 class="product-title">
        //                                     <a href="ad-details-left.html">
        //                                         Lorem ipsum dolor sit amet
        //                                         consect adipisicing elit
        //                                     </a>
        //                                 </h5>
        //                                 <div class="product-meta">
        //                                     <span>
        //                                         <i class="fas fa-map-marker-alt"></i>
        //                                         Uttara, Dhaka
        //                                     </span>
        //                                     <span>
        //                                         <i class="fas fa-clock"></i>30
        //                                         min ago
        //                                     </span>
        //                                 </div>
        //                                 <div class="product-info">
        //                                     <h5 class="product-price">
        //                                         $1470<span>/per day</span>
        //                                     </h5>
        //                                     <div class="product-btn">
        //                                         <a
        //                                             href="compare.html"
        //                                             title="Compare"
        //                                             class="fas fa-compress"
        //                                         ></a>
        //                                         <button
        //                                             type="button"
        //                                             title="Wishlist"
        //                                             class="far fa-heart"
        //                                         ></button>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div class="col-sm-6 col-md-6 col-lg-6 col-xl-4">
        //                         <div class="product-card">
        //                             <div class="product-media">
        //                                 <div class="product-img">
        //                                     <img
        //                                         src="images/product/13.jpg"
        //                                         alt="product"
        //                                     />
        //                                 </div>
        //                                 <div class="product-type">
        //                                     <span class="flat-badge sale">
        //                                         sale
        //                                     </span>
        //                                 </div>
        //                                 <ul class="product-action">
        //                                     <li class="view">
        //                                         <i class="fas fa-eye"></i>
        //                                         <span>264</span>
        //                                     </li>
        //                                     <li class="click">
        //                                         <i class="fas fa-mouse"></i>
        //                                         <span>134</span>
        //                                     </li>
        //                                     <li class="rating">
        //                                         <i class="fas fa-star"></i>
        //                                         <span>4.5/7</span>
        //                                     </li>
        //                                 </ul>
        //                             </div>
        //                             <div class="product-content">
        //                                 <ol class="breadcrumb product-category">
        //                                     <li>
        //                                         <i class="fas fa-tags"></i>
        //                                     </li>
        //                                     <li class="breadcrumb-item">
        //                                         <a href="#">electronics</a>
        //                                     </li>
        //                                     <li
        //                                         class="breadcrumb-item active"
        //                                         aria-current="page"
        //                                     >
        //                                         laptop
        //                                     </li>
        //                                 </ol>
        //                                 <h5 class="product-title">
        //                                     <a href="ad-details-left.html">
        //                                         Lorem ipsum dolor sit amet
        //                                         consect adipisicing elit
        //                                     </a>
        //                                 </h5>
        //                                 <div class="product-meta">
        //                                     <span>
        //                                         <i class="fas fa-map-marker-alt"></i>
        //                                         Uttara, Dhaka
        //                                     </span>
        //                                     <span>
        //                                         <i class="fas fa-clock"></i>30
        //                                         min ago
        //                                     </span>
        //                                 </div>
        //                                 <div class="product-info">
        //                                     <h5 class="product-price">
        //                                         $1550<span>/fixed</span>
        //                                     </h5>
        //                                     <div class="product-btn">
        //                                         <a
        //                                             href="compare.html"
        //                                             title="Compare"
        //                                             class="fas fa-compress"
        //                                         ></a>
        //                                         <button
        //                                             type="button"
        //                                             title="Wishlist"
        //                                             class="far fa-heart"
        //                                         ></button>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div class="col-sm-6 col-md-6 col-lg-6 col-xl-4">
        //                         <div class="product-card">
        //                             <div class="product-media">
        //                                 <div class="product-img">
        //                                     <img
        //                                         src="images/product/14.jpg"
        //                                         alt="product"
        //                                     />
        //                                 </div>
        //                                 <div class="product-type">
        //                                     <span class="flat-badge rent">
        //                                         rent
        //                                     </span>
        //                                 </div>
        //                                 <ul class="product-action">
        //                                     <li class="view">
        //                                         <i class="fas fa-eye"></i>
        //                                         <span>264</span>
        //                                     </li>
        //                                     <li class="click">
        //                                         <i class="fas fa-mouse"></i>
        //                                         <span>134</span>
        //                                     </li>
        //                                     <li class="rating">
        //                                         <i class="fas fa-star"></i>
        //                                         <span>4.5/7</span>
        //                                     </li>
        //                                 </ul>
        //                             </div>
        //                             <div class="product-content">
        //                                 <ol class="breadcrumb product-category">
        //                                     <li>
        //                                         <i class="fas fa-tags"></i>
        //                                     </li>
        //                                     <li class="breadcrumb-item">
        //                                         <a href="#">automobile</a>
        //                                     </li>
        //                                     <li
        //                                         class="breadcrumb-item active"
        //                                         aria-current="page"
        //                                     >
        //                                         bike
        //                                     </li>
        //                                 </ol>
        //                                 <h5 class="product-title">
        //                                     <a href="ad-details-left.html">
        //                                         Lorem ipsum dolor sit amet
        //                                         consect adipisicing elit
        //                                     </a>
        //                                 </h5>
        //                                 <div class="product-meta">
        //                                     <span>
        //                                         <i class="fas fa-map-marker-alt"></i>
        //                                         Uttara, Dhaka
        //                                     </span>
        //                                     <span>
        //                                         <i class="fas fa-clock"></i>30
        //                                         min ago
        //                                     </span>
        //                                 </div>
        //                                 <div class="product-info">
        //                                     <h5 class="product-price">
        //                                         $90<span>/per hour</span>
        //                                     </h5>
        //                                     <div class="product-btn">
        //                                         <a
        //                                             href="compare.html"
        //                                             title="Compare"
        //                                             class="fas fa-compress"
        //                                         ></a>
        //                                         <button
        //                                             type="button"
        //                                             title="Wishlist"
        //                                             class="far fa-heart"
        //                                         ></button>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div class="col-sm-6 col-md-6 col-lg-6 col-xl-4">
        //                         <div class="product-card">
        //                             <div class="product-media">
        //                                 <div class="product-img">
        //                                     <img
        //                                         src="images/product/15.jpg"
        //                                         alt="product"
        //                                     />
        //                                 </div>
        //                                 <div class="product-type">
        //                                     <span class="flat-badge sale">
        //                                         sale
        //                                     </span>
        //                                 </div>
        //                                 <ul class="product-action">
        //                                     <li class="view">
        //                                         <i class="fas fa-eye"></i>
        //                                         <span>264</span>
        //                                     </li>
        //                                     <li class="click">
        //                                         <i class="fas fa-mouse"></i>
        //                                         <span>134</span>
        //                                     </li>
        //                                     <li class="rating">
        //                                         <i class="fas fa-star"></i>
        //                                         <span>4.5/7</span>
        //                                     </li>
        //                                 </ul>
        //                             </div>
        //                             <div class="product-content">
        //                                 <ol class="breadcrumb product-category">
        //                                     <li>
        //                                         <i class="fas fa-tags"></i>
        //                                     </li>
        //                                     <li class="breadcrumb-item">
        //                                         <a href="#">gadget</a>
        //                                     </li>
        //                                     <li
        //                                         class="breadcrumb-item active"
        //                                         aria-current="page"
        //                                     >
        //                                         camera
        //                                     </li>
        //                                 </ol>
        //                                 <h5 class="product-title">
        //                                     <a href="ad-details-left.html">
        //                                         Lorem ipsum dolor sit amet
        //                                         consect adipisicing elit
        //                                     </a>
        //                                 </h5>
        //                                 <div class="product-meta">
        //                                     <span>
        //                                         <i class="fas fa-map-marker-alt"></i>
        //                                         Uttara, Dhaka
        //                                     </span>
        //                                     <span>
        //                                         <i class="fas fa-clock"></i>30
        //                                         min ago
        //                                     </span>
        //                                 </div>
        //                                 <div class="product-info">
        //                                     <h5 class="product-price">
        //                                         $1200<span>/Negotiable</span>
        //                                     </h5>
        //                                     <div class="product-btn">
        //                                         <a
        //                                             href="compare.html"
        //                                             title="Compare"
        //                                             class="fas fa-compress"
        //                                         ></a>
        //                                         <button
        //                                             type="button"
        //                                             title="Wishlist"
        //                                             class="far fa-heart"
        //                                         ></button>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div class="col-sm-6 col-md-6 col-lg-6 col-xl-4">
        //                         <div class="product-card">
        //                             <div class="product-media">
        //                                 <div class="product-img">
        //                                     <img
        //                                         src="images/product/16.jpg"
        //                                         alt="product"
        //                                     />
        //                                 </div>
        //                                 <div class="product-type">
        //                                     <span class="flat-badge booking">
        //                                         booking
        //                                     </span>
        //                                 </div>
        //                                 <ul class="product-action">
        //                                     <li class="view">
        //                                         <i class="fas fa-eye"></i>
        //                                         <span>264</span>
        //                                     </li>
        //                                     <li class="click">
        //                                         <i class="fas fa-mouse"></i>
        //                                         <span>134</span>
        //                                     </li>
        //                                     <li class="rating">
        //                                         <i class="fas fa-star"></i>
        //                                         <span>4.5/7</span>
        //                                     </li>
        //                                 </ul>
        //                             </div>
        //                             <div class="product-content">
        //                                 <ol class="breadcrumb product-category">
        //                                     <li>
        //                                         <i class="fas fa-tags"></i>
        //                                     </li>
        //                                     <li class="breadcrumb-item">
        //                                         <a href="#">luxury</a>
        //                                     </li>
        //                                     <li
        //                                         class="breadcrumb-item active"
        //                                         aria-current="page"
        //                                     >
        //                                         ship
        //                                     </li>
        //                                 </ol>
        //                                 <h5 class="product-title">
        //                                     <a href="ad-details-left.html">
        //                                         Lorem ipsum dolor sit amet
        //                                         consect adipisicing elit
        //                                     </a>
        //                                 </h5>
        //                                 <div class="product-meta">
        //                                     <span>
        //                                         <i class="fas fa-map-marker-alt"></i>
        //                                         Uttara, Dhaka
        //                                     </span>
        //                                     <span>
        //                                         <i class="fas fa-clock"></i>30
        //                                         min ago
        //                                     </span>
        //                                 </div>
        //                                 <div class="product-info">
        //                                     <h5 class="product-price">
        //                                         $1200<span>/per day</span>
        //                                     </h5>
        //                                     <div class="product-btn">
        //                                         <a
        //                                             href="compare.html"
        //                                             title="Compare"
        //                                             class="fas fa-compress"
        //                                         ></a>
        //                                         <button
        //                                             type="button"
        //                                             title="Wishlist"
        //                                             class="far fa-heart"
        //                                         ></button>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div class="col-sm-6 col-md-6 col-lg-6 col-xl-4">
        //                         <div class="product-card">
        //                             <div class="product-media">
        //                                 <div class="product-img">
        //                                     <img
        //                                         src="images/product/02.jpg"
        //                                         alt="product"
        //                                     />
        //                                 </div>
        //                                 <div class="product-type">
        //                                     <span class="flat-badge sale">
        //                                         sale
        //                                     </span>
        //                                 </div>
        //                                 <ul class="product-action">
        //                                     <li class="view">
        //                                         <i class="fas fa-eye"></i>
        //                                         <span>264</span>
        //                                     </li>
        //                                     <li class="click">
        //                                         <i class="fas fa-mouse"></i>
        //                                         <span>134</span>
        //                                     </li>
        //                                     <li class="rating">
        //                                         <i class="fas fa-star"></i>
        //                                         <span>4.5/7</span>
        //                                     </li>
        //                                 </ul>
        //                             </div>
        //                             <div class="product-content">
        //                                 <ol class="breadcrumb product-category">
        //                                     <li>
        //                                         <i class="fas fa-tags"></i>
        //                                     </li>
        //                                     <li class="breadcrumb-item">
        //                                         <a href="#">fashion</a>
        //                                     </li>
        //                                     <li
        //                                         class="breadcrumb-item active"
        //                                         aria-current="page"
        //                                     >
        //                                         shoes
        //                                     </li>
        //                                 </ol>
        //                                 <h5 class="product-title">
        //                                     <a href="ad-details-left.html">
        //                                         Lorem ipsum dolor sit amet
        //                                         consect adipisicing elit
        //                                     </a>
        //                                 </h5>
        //                                 <div class="product-meta">
        //                                     <span>
        //                                         <i class="fas fa-map-marker-alt"></i>
        //                                         Uttara, Dhaka
        //                                     </span>
        //                                     <span>
        //                                         <i class="fas fa-clock"></i>30
        //                                         min ago
        //                                     </span>
        //                                 </div>
        //                                 <div class="product-info">
        //                                     <h5 class="product-price">
        //                                         $578<span>/fixed</span>
        //                                     </h5>
        //                                     <div class="product-btn">
        //                                         <a
        //                                             href="compare.html"
        //                                             title="Compare"
        //                                             class="fas fa-compress"
        //                                         ></a>
        //                                         <button
        //                                             type="button"
        //                                             title="Wishlist"
        //                                             class="far fa-heart"
        //                                         ></button>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div class="col-sm-6 col-md-6 col-lg-6 col-xl-4">
        //                         <div class="product-card">
        //                             <div class="product-media">
        //                                 <div class="product-img">
        //                                     <img
        //                                         src="images/product/03.jpg"
        //                                         alt="product"
        //                                     />
        //                                 </div>
        //                                 <div class="product-type">
        //                                     <span class="flat-badge rent">
        //                                         rent
        //                                     </span>
        //                                 </div>
        //                                 <ul class="product-action">
        //                                     <li class="view">
        //                                         <i class="fas fa-eye"></i>
        //                                         <span>264</span>
        //                                     </li>
        //                                     <li class="click">
        //                                         <i class="fas fa-mouse"></i>
        //                                         <span>134</span>
        //                                     </li>
        //                                     <li class="rating">
        //                                         <i class="fas fa-star"></i>
        //                                         <span>4.5/7</span>
        //                                     </li>
        //                                 </ul>
        //                             </div>
        //                             <div class="product-content">
        //                                 <ol class="breadcrumb product-category">
        //                                     <li>
        //                                         <i class="fas fa-tags"></i>
        //                                     </li>
        //                                     <li class="breadcrumb-item">
        //                                         <a href="#">education</a>
        //                                     </li>
        //                                     <li
        //                                         class="breadcrumb-item active"
        //                                         aria-current="page"
        //                                     >
        //                                         book
        //                                     </li>
        //                                 </ol>
        //                                 <h5 class="product-title">
        //                                     <a href="ad-details-left.html">
        //                                         Lorem ipsum dolor sit amet
        //                                         consect adipisicing elit
        //                                     </a>
        //                                 </h5>
        //                                 <div class="product-meta">
        //                                     <span>
        //                                         <i class="fas fa-map-marker-alt"></i>
        //                                         Uttara, Dhaka
        //                                     </span>
        //                                     <span>
        //                                         <i class="fas fa-clock"></i>30
        //                                         min ago
        //                                     </span>
        //                                 </div>
        //                                 <div class="product-info">
        //                                     <h5 class="product-price">
        //                                         $57<span>/per week</span>
        //                                     </h5>
        //                                     <div class="product-btn">
        //                                         <a
        //                                             href="compare.html"
        //                                             title="Compare"
        //                                             class="fas fa-compress"
        //                                         ></a>
        //                                         <button
        //                                             type="button"
        //                                             title="Wishlist"
        //                                             class="far fa-heart"
        //                                         ></button>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div class="col-sm-6 col-md-6 col-lg-6 col-xl-4">
        //                         <div class="product-card">
        //                             <div class="product-media">
        //                                 <div class="product-img">
        //                                     <img
        //                                         src="images/product/04.jpg"
        //                                         alt="product"
        //                                     />
        //                                 </div>
        //                                 <div class="product-type">
        //                                     <span class="flat-badge sale">
        //                                         sale
        //                                     </span>
        //                                 </div>
        //                                 <ul class="product-action">
        //                                     <li class="view">
        //                                         <i class="fas fa-eye"></i>
        //                                         <span>264</span>
        //                                     </li>
        //                                     <li class="click">
        //                                         <i class="fas fa-mouse"></i>
        //                                         <span>134</span>
        //                                     </li>
        //                                     <li class="rating">
        //                                         <i class="fas fa-star"></i>
        //                                         <span>4.5/7</span>
        //                                     </li>
        //                                 </ul>
        //                             </div>
        //                             <div class="product-content">
        //                                 <ol class="breadcrumb product-category">
        //                                     <li>
        //                                         <i class="fas fa-tags"></i>
        //                                     </li>
        //                                     <li class="breadcrumb-item">
        //                                         <a href="#">electronics</a>
        //                                     </li>
        //                                     <li
        //                                         class="breadcrumb-item active"
        //                                         aria-current="page"
        //                                     >
        //                                         television
        //                                     </li>
        //                                 </ol>
        //                                 <h5 class="product-title">
        //                                     <a href="ad-details-left.html">
        //                                         Lorem ipsum dolor sit amet
        //                                         consect adipisicing elit
        //                                     </a>
        //                                 </h5>
        //                                 <div class="product-meta">
        //                                     <span>
        //                                         <i class="fas fa-map-marker-alt"></i>
        //                                         Uttara, Dhaka
        //                                     </span>
        //                                     <span>
        //                                         <i class="fas fa-clock"></i>30
        //                                         min ago
        //                                     </span>
        //                                 </div>
        //                                 <div class="product-info">
        //                                     <h5 class="product-price">
        //                                         $246<span>/Negotiable</span>
        //                                     </h5>
        //                                     <div class="product-btn">
        //                                         <a
        //                                             href="compare.html"
        //                                             title="Compare"
        //                                             class="fas fa-compress"
        //                                         ></a>
        //                                         <button
        //                                             type="button"
        //                                             title="Wishlist"
        //                                             class="far fa-heart"
        //                                         ></button>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div class="col-sm-6 col-md-6 col-lg-6 col-xl-4">
        //                         <div class="product-card">
        //                             <div class="product-media">
        //                                 <div class="product-img">
        //                                     <img
        //                                         src="images/product/05.jpg"
        //                                         alt="product"
        //                                     />
        //                                 </div>
        //                                 <div class="product-type">
        //                                     <span class="flat-badge sale">
        //                                         sale
        //                                     </span>
        //                                 </div>
        //                                 <ul class="product-action">
        //                                     <li class="view">
        //                                         <i class="fas fa-eye"></i>
        //                                         <span>264</span>
        //                                     </li>
        //                                     <li class="click">
        //                                         <i class="fas fa-mouse"></i>
        //                                         <span>134</span>
        //                                     </li>
        //                                     <li class="rating">
        //                                         <i class="fas fa-star"></i>
        //                                         <span>4.5/7</span>
        //                                     </li>
        //                                 </ul>
        //                             </div>
        //                             <div class="product-content">
        //                                 <ol class="breadcrumb product-category">
        //                                     <li>
        //                                         <i class="fas fa-tags"></i>
        //                                     </li>
        //                                     <li class="breadcrumb-item">
        //                                         <a href="#">gadgets</a>
        //                                     </li>
        //                                     <li
        //                                         class="breadcrumb-item active"
        //                                         aria-current="page"
        //                                     >
        //                                         headphone
        //                                     </li>
        //                                 </ol>
        //                                 <h5 class="product-title">
        //                                     <a href="ad-details-left.html">
        //                                         Lorem ipsum dolor sit amet
        //                                         consect adipisicing elit
        //                                     </a>
        //                                 </h5>
        //                                 <div class="product-meta">
        //                                     <span>
        //                                         <i class="fas fa-map-marker-alt"></i>
        //                                         Uttara, Dhaka
        //                                     </span>
        //                                     <span>
        //                                         <i class="fas fa-clock"></i>30
        //                                         min ago
        //                                     </span>
        //                                 </div>
        //                                 <div class="product-info">
        //                                     <h5 class="product-price">
        //                                         $723<span>/fixed</span>
        //                                     </h5>
        //                                     <div class="product-btn">
        //                                         <a
        //                                             href="compare.html"
        //                                             title="Compare"
        //                                             class="fas fa-compress"
        //                                         ></a>
        //                                         <button
        //                                             type="button"
        //                                             title="Wishlist"
        //                                             class="far fa-heart"
        //                                         ></button>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div class="col-sm-6 col-md-6 col-lg-6 col-xl-4">
        //                         <div class="product-card">
        //                             <div class="product-media">
        //                                 <div class="product-img">
        //                                     <img
        //                                         src="images/product/06.jpg"
        //                                         alt="product"
        //                                     />
        //                                 </div>
        //                                 <div class="product-type">
        //                                     <span class="flat-badge rent">
        //                                         rent
        //                                     </span>
        //                                 </div>
        //                                 <ul class="product-action">
        //                                     <li class="view">
        //                                         <i class="fas fa-eye"></i>
        //                                         <span>264</span>
        //                                     </li>
        //                                     <li class="click">
        //                                         <i class="fas fa-mouse"></i>
        //                                         <span>134</span>
        //                                     </li>
        //                                     <li class="rating">
        //                                         <i class="fas fa-star"></i>
        //                                         <span>4.5/7</span>
        //                                     </li>
        //                                 </ul>
        //                             </div>
        //                             <div class="product-content">
        //                                 <ol class="breadcrumb product-category">
        //                                     <li>
        //                                         <i class="fas fa-tags"></i>
        //                                     </li>
        //                                     <li class="breadcrumb-item">
        //                                         <a href="#">automobiles</a>
        //                                     </li>
        //                                     <li
        //                                         class="breadcrumb-item active"
        //                                         aria-current="page"
        //                                     >
        //                                         by cycle
        //                                     </li>
        //                                 </ol>
        //                                 <h5 class="product-title">
        //                                     <a href="ad-details-left.html">
        //                                         Lorem ipsum dolor sit amet
        //                                         consect adipisicing elit
        //                                     </a>
        //                                 </h5>
        //                                 <div class="product-meta">
        //                                     <span>
        //                                         <i class="fas fa-map-marker-alt"></i>
        //                                         Uttara, Dhaka
        //                                     </span>
        //                                     <span>
        //                                         <i class="fas fa-clock"></i>30
        //                                         min ago
        //                                     </span>
        //                                 </div>
        //                                 <div class="product-info">
        //                                     <h5 class="product-price">
        //                                         $35<span>/per hour</span>
        //                                     </h5>
        //                                     <div class="product-btn">
        //                                         <a
        //                                             href="compare.html"
        //                                             title="Compare"
        //                                             class="fas fa-compress"
        //                                         ></a>
        //                                         <button
        //                                             type="button"
        //                                             title="Wishlist"
        //                                             class="far fa-heart"
        //                                         ></button>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div class="col-sm-6 col-md-6 col-lg-6 col-xl-4">
        //                         <div class="product-card">
        //                             <div class="product-media">
        //                                 <div class="product-img">
        //                                     <img
        //                                         src="images/product/01.jpg"
        //                                         alt="product"
        //                                     />
        //                                 </div>
        //                                 <div class="product-type">
        //                                     <span class="flat-badge booking">
        //                                         booking
        //                                     </span>
        //                                 </div>
        //                                 <ul class="product-action">
        //                                     <li class="view">
        //                                         <i class="fas fa-eye"></i>
        //                                         <span>264</span>
        //                                     </li>
        //                                     <li class="click">
        //                                         <i class="fas fa-mouse"></i>
        //                                         <span>134</span>
        //                                     </li>
        //                                     <li class="rating">
        //                                         <i class="fas fa-star"></i>
        //                                         <span>4.5/7</span>
        //                                     </li>
        //                                 </ul>
        //                             </div>
        //                             <div class="product-content">
        //                                 <ol class="breadcrumb product-category">
        //                                     <li>
        //                                         <i class="fas fa-tags"></i>
        //                                     </li>
        //                                     <li class="breadcrumb-item">
        //                                         <a href="#">properties</a>
        //                                     </li>
        //                                     <li
        //                                         class="breadcrumb-item active"
        //                                         aria-current="page"
        //                                     >
        //                                         house
        //                                     </li>
        //                                 </ol>
        //                                 <h5 class="product-title">
        //                                     <a href="ad-details-left.html">
        //                                         Lorem ipsum dolor sit amet
        //                                         consect adipisicing elit
        //                                     </a>
        //                                 </h5>
        //                                 <div class="product-meta">
        //                                     <span>
        //                                         <i class="fas fa-map-marker-alt"></i>
        //                                         Uttara, Dhaka
        //                                     </span>
        //                                     <span>
        //                                         <i class="fas fa-clock"></i>30
        //                                         min ago
        //                                     </span>
        //                                 </div>
        //                                 <div class="product-info">
        //                                     <h5 class="product-price">
        //                                         $234<span>/per month</span>
        //                                     </h5>
        //                                     <div class="product-btn">
        //                                         <a
        //                                             href="compare.html"
        //                                             title="Compare"
        //                                             class="fas fa-compress"
        //                                         ></a>
        //                                         <button
        //                                             type="button"
        //                                             title="Wishlist"
        //                                             class="far fa-heart"
        //                                         ></button>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div class="row">
        //                     <div class="col-lg-12">
        //                         <div class="footer-pagection">
        //                             <p class="page-info">
        //                                 Showing 12 of 60 Results
        //                             </p>
        //                             <ul class="pagination">
        //                                 <li class="page-item">
        //                                     <a class="page-link" href="#">
        //                                         <i class="fas fa-long-arrow-alt-left"></i>
        //                                     </a>
        //                                 </li>
        //                                 <li class="page-item">
        //                                     <a
        //                                         class="page-link active"
        //                                         href="#"
        //                                     >
        //                                         1
        //                                     </a>
        //                                 </li>
        //                                 <li class="page-item">
        //                                     <a class="page-link" href="#">
        //                                         2
        //                                     </a>
        //                                 </li>
        //                                 <li class="page-item">
        //                                     <a class="page-link" href="#">
        //                                         3
        //                                     </a>
        //                                 </li>
        //                                 <li class="page-item">...</li>
        //                                 <li class="page-item">
        //                                     <a class="page-link" href="#">
        //                                         67
        //                                     </a>
        //                                 </li>
        //                                 <li class="page-item">
        //                                     <a class="page-link" href="#">
        //                                         <i class="fas fa-long-arrow-alt-right"></i>
        //                                     </a>
        //                                 </li>
        //                             </ul>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </section>
    );
}

export default App;

if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}
