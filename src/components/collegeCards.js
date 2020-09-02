import React from 'react';

import './college-card.css';
import * as image from '../assets/college_02.jpg'

export default function CollegeCard(props) {
    return (
        <div className="college-card">
            <div className="image-container">
                <img src={image} alt="background imafge"></img>
                <div className="image-container-child">
                    <div className="rating">
                        <span>
                            <span className="rating-primary">{props.data.rating}</span>
                            <span style={{fontSize: '15px'}}>/5</span>
                        </span>
                        <span className="status">{props.data.rating_remarks}</span>
                    </div>
                    <div className="tags">
                        {props.data.tags.map((el,index) => <span className="item" key={index}>{el}</span>)}
                    </div>
                    {props.data.promoted ? <div className="vc">
                        <div className="polygon">
                            <div className="polygon-text">
                                PROMOTED
                            </div>
                        </div>
                    </div> : ""}
                    <div className="in-colleges-rating">
                        #{props.data.ranking}
                    </div>
                </div>
            </div>
            
            <div className="description">
                <div className="description-university">
                    <div className="desc">
                        <div>
                            <span className="heading desc-line">{props.data.college_name} </span>
                            <span className="star-icons">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                            </span>
                        </div>
                        <span className="desc-line">
                            <span className="sub-heading">{props.data.nearest_place[0]} </span>
                            <span className="sub-heading light heading">| {props.data.nearest_place[1]} </span>
                        </span>
                        <div className="desc-line">
                            <span className="sub-heading green-heading">93% Match </span>
                            <span className="">from GTB Nagar, </span>
                            <span className="">{props.data.nearest_place[1]}</span>
                        </div>
                    </div>
                </div>
                <div className="pricing">
                    <div style={{lineHeight: "18px", display:"flex", flexDirection: "row"}}>
                        <span className="original-price">
                            ₹{props.data.original_fees}
                        </span>
                        <span className="tag">
                            <span style={{width:"1px", height: "1px", borderRadius: "50%", background: "white"}}>
                            </span>
                            <span className="tag-text">
                                {props.data.discount}
                            </span>
                        </span>
                    </div>
                    <div className="offered-price">
                        ₹{props.data.discounted_fees}
                    </div>
                    <div style={{lineHeight: "30px"}}>
                        {props.data.fees_cycle}
                    </div>
                </div>
            </div>
            <div className="offer-bar">
                <div className="bar">
                    <span className="sub-heading"> {props.data.offertext}</span>
                </div>
                <div className="sub-heading green-heading" style={{padding: "20px"}}>
                    {props.data.amenties[0]} . {props.data.amenties[1]}
                </div>
            </div>
        </div>
    )
} 