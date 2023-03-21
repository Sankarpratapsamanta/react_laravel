import React from "react";
import jobImage from "../../../../public/user/images/job.jpg"

const MappingComponent=({listings})=>{
    return (
        <React.Fragment>
            {(listings.length > 0 && 
                listings.map((list,i)=>(
                    <div key={i} className="col-sm-6 col-md-6 col-lg-6 col-xl-4">
                        <div className="product-card">
                            <div className="product-media">
                                <div className="product-img">
                                    <img
                                        src={jobImage}
                                        alt="product"
                                    />
                                </div>
                            </div>
                            <div className="product-content">
                                <ol className="breadcrumb product-category">
                                    <li>
                                        <i className="fas fa-tags"></i>
                                    </li>
                                    <li
                                        className="breadcrumb-item active"
                                        aria-current="page"
                                    >
                                        {list.skill}
                                    </li>
                                </ol>

                                <h5 className="product-title">
                                    <a href="ad-details-left.html">
                                        {list.job_title}
                                    </a>
                                </h5>
                                <div className="product-meta">
                                    <span>
                                        <i className="fas fa-map-marker-alt"></i>
                                        {list.city}, {list.country}
                                    </span>
                                </div>
                                <div className="product-info">
                                    <h5 className="product-price">
                                        Salary {list.salary}<span></span>
                                    </h5>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                ))    
            )}
        </React.Fragment>
        
    )
}

export default MappingComponent;