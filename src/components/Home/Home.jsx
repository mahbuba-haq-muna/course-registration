/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import "./Home.css"
import { FaDollarSign, FaBookOpen } from "react-icons/fa";


const Home = () => {

    const [allCourses, setAllCourses]= useState([])

useEffect(()=>{
    fetch("./card.json")
    .then(res=>res.json())
    .then((data)=> setAllCourses(data))
},[])

console.log(allCourses)

    return (
        <div className="container">
            <div className='card-container'>
            <h2>Course Registration</h2>
            <div className="allCards">
            {
                allCourses.map(card =>(
                    <div key={card.id} className="card">
                <img className='photo' src={card.image_url} alt="" />
                <h3>{card.course_name}</h3>
                <p><small>{card.course_details}</small></p>
                <div className="price-credit">
                    <p><FaDollarSign></FaDollarSign>  price: {card.price}</p>
                    <p><FaBookOpen></FaBookOpen>   credit: {card.course_credit} hr</p>
                </div>
                <button className='btn'>Select</button>
            </div>
                ))
            }
            </div>
        </div>
        <div className="cart">
            <h4>Credit Hour Remaining 7 hr</h4>
        </div>
        </div>
    );
};

export default Home;