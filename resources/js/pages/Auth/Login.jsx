import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../helpers/AuthContext";

const Login=()=>{

    const [user,setUser]=useState({
        email:"",
        password:"",
    })
    const [error,setError]=useState(null)
    const navigate = useNavigate();
    const {setCurrentUser}=useContext(AuthContext);



    const handleChange=(e)=>{
        const {name,value} =e.target
        setUser({...user,[name]:value});
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!user.email){
            return setError("Missing email");
        }
        if(!user.password){
            return setError("Missing password");
        }
        
        setError(null);
        console.log(user);


        axios
        .post("/api/login", user)
        .then((res) => {
            console.log(res);
            localStorage.setItem("loginToken",res.data.data.token)
            setCurrentUser(res.data.data)
            setError(null)
            console.log(res)
            navigate("/home");
        })
        .catch((err) => {
            setError(err.response.data.data.error)
            console.log(err.response.data)
        //   setStateError(err.response.data);
        });


    }
    return (
        <section className="user-form-part">
            <div className="user-form-banner">
                <div className="user-form-content">
                    <h1>Advertise your assets <span>Buy what are you needs.</span></h1>
                    <p>Biggest Online Advertising Marketplace in the World.</p>
                </div>
            </div>
            <div className="user-form-category">
                
                <div className="user-form-category-btn">
                    <ul className="nav nav-tabs">
                        <li><a href="#login-tab" className="nav-link active" data-toggle="tab">sign in</a></li>
                        <li>
                            <Link to="/sign-up" className="nav-link">sign up</Link>
                            
                        </li>
                    </ul>
                </div>
                <div className="tab-pane active" id="login-tab">
                    <div className="user-form-title">
                        <h2>Welcome!</h2>
                        <p>Use credentials to access your account.</p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-12">
                            {(error && 
                                <small className={error ? 'display_error text-center' : ""}>{error ? error : ""}</small>        
                            )}
                                <div className="form-group"><input name="email" onChange={handleChange} type="email" value={user.email} className="form-control"
                                        placeholder="Email Address"/></div>
                            </div>
                            <div className="col-12">
                                <div className="form-group"><input name="password" onChange={handleChange} type="password" value={user.password} className="form-control"
                                        placeholder="Password"/></div>
                            </div>
                            <div className="col-12">
                                <div className="form-group"><button type="submit" className="btn btn-inline"><i
                                            className="fas fa-unlock"></i><span>Enter your account</span></button></div>
                            </div>
                        </div>
                    </form>
                    <div className="user-form-direction">
                        <p>Don't have an account? click on the <span><Link to="/sign-up">( sign up )</Link></span>button above.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login;