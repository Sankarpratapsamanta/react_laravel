import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import Home from "./pages/Dashboard/Home";
import axios from "axios";
import { AuthContext } from "./helpers/AuthContext";
import Details from "./pages/JobDetails/Details";


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
                    <Route path="/job/:id"  element={!currentUser ? <Navigate to="/" /> :  <Details/>}/>

                </Routes>
            </AuthContext.Provider>
        </BrowserRouter>
    );
}

export default App;

if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}
