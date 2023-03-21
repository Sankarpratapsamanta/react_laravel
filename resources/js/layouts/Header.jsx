import { useContext } from 'react';
import Logo from '../../../public/user/images/logo.png';
import userLogo from '../../../public/user/images/user.png';
import { AuthContext } from '../helpers/AuthContext';

const Header=({search})=>{
    const {currentUser,setCurrentUser}=useContext(AuthContext);

    const handleLogout=()=>{
        localStorage.clear();
        setCurrentUser(null);

    }
    return (
        <header className="header-part">
        <div className="container">
            <div className="header-content">
                <div className="header-left"><button type="button" className="header-widget sidebar-btn"><i
                            className="fas fa-align-left"></i></button><a href="index.html" className="header-logo"><img
                            src={Logo} alt="logo"/></a><a href="user-form.html"
                        className="header-widget header-user"><img src={userLogo} alt="user"/><span>{currentUser.name}</span></a><button type="button" className="header-widget search-btn"><i
                            className="fas fa-search"></i></button></div>

                <form className="header-form">
                    <div className="header-search"><button type="button" title="Search Submit "><i
                                className="fas fa-search"></i></button>
                    <input type="text" onChange={(e)=>search(e)} placeholder="Search, Whatever you needs..."/></div>
                    
                </form>
                
                <div className="header-right">
                    <button className="btn btn-inline post-btn" onClick={handleLogout}><span>Logout</span></button>
                    {/* <a href="ad-post.html" className="btn btn-inline post-btn"><span>Logout</span></a> */}
                </div>
            </div>
        </div>
    </header>
    )
}

export default Header;