import { useContext, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { AuthContext } from "../../helpers/AuthContext";

const Signup=()=>{

    const [user,setUser]=useState({
        name:"",
        email:"",
        password:"",
        c_password:""
    })

    const [error,setError]=useState(null)
    const {setCurrentUser}=useContext(AuthContext);

    const navigate = useNavigate();

    const handleChange=(e)=>{
        const {name,value} =e.target
        setUser({...user,[name]:value});
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!user.name){
            return setError("Missing username");
        }
        if(!user.email){
            return setError("Missing email");
        }
        if(!user.password){
            return setError("Missing password");
        }
        if(user.password.length < 8){
            return setError("Password must be 8 characters or more"); 
        }
        if(user.password !== user.c_password){
            return setError("Confirm Password not matched");
        }
        setError(null);
        console.log(user);


        axios
        .post("/api/register", user)
        .then((res) => {
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
                        <li>
                            <Link to="/" className="nav-link">sign in</Link>
                        </li>
                        <li><a href="#register-tab" className="nav-link active" data-toggle="tab">sign up</a></li>
                    </ul>
                </div>
                <div className="tab-pane active" id="register-tab">
                    <div className="user-form-title">
                        <h2>Register</h2>
                        <p>Setup a new account in a minute.</p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="row">

                        

                        <div className="col-12">
                        {(error && 
                                <small className={error ? 'display_error text-center' : ""}>{error ? error : ""}</small>        
                            )}
                                <div className="form-group"><input type="text" onChange={handleChange} name="name" value={user.name} className="form-control"
                                        placeholder="Username"/>
                               
                                </div>
                            </div>

                            <div className="col-12">
                                <div className="form-group"><input name="email" onChange={handleChange} type="email" value={user.email} className="form-control"
                                        placeholder="Email Address"/></div>
                            </div>
                            <div className="col-12">
                                <div className="form-group"><input name="password" onChange={handleChange} type="password" value={user.password} className="form-control"
                                        placeholder="Password"/></div>
                            </div>
                            <div className="col-12">
                                <div className="form-group"><input name="c_password" onChange={handleChange} type="password" value={user.c_password} className="form-control"
                                        placeholder="Repeat Password"/></div>
                            </div>
                            <div className="col-12">
                            
                            
                                <div className="form-group"><button type="submit" className="btn btn-inline"><i
                                            className="fas fa-user-check"></i><span>Create new account</span></button></div>
                            </div>
                        </div>
                    </form>
                    <div className="user-form-direction">

                        <p>Already have an account? click on the <span><Link to="/">( sign in )</Link></span>button above.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Signup;