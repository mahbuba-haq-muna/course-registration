/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import "./Home.css"
import { FaDollarSign, FaBookOpen } from "react-icons/fa";
import Course from '../Course/Course';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Home = () => {

    const [allCourses, setAllCourses]= useState([])
    const [selectedCourse, setSelectedCourse] = useState([])
    const [remaining, setRemaining] = useState(20)
    const [totalCredit, setTotalCredit] = useState(0)

useEffect(()=>{
    fetch("./card.json")
    .then(res=>res.json())
    .then((data)=> setAllCourses(data))
},[])

const handleSelectCourse = (card) =>{
    const isExist = selectedCourse.find((course) => course.id == card.id)
    let count = card.course_credit

    
    if(isExist){
      return toast('Already Selected')
    }
    else{

        selectedCourse.forEach((course)=>{
            count = count+ course.course_credit
        });

        const remainingCredit = 20 - count;
        if(count > 20){
            return toast('You have crossed your credit limit ')
            
        }
        else{
            setRemaining(remainingCredit);
            setTotalCredit(count);
            setSelectedCourse([...selectedCourse, card])
        }
        <ToastContainer />
        
    }
   
   
}

    return (
        
        <div>
            <h2 className='tittle'>Course Registration</h2>
            <div className="container">
            <div className='card-container'>
            <div className="allCards">
            {
                allCourses.map((card) =>(
                    <div key={card.id} className="card">
                <img className='photo' src={card.image_url} alt="" />
                <h3>{card.course_name}</h3>
                <p><small>{card.course_details}</small></p>
                <div className="price-credit">
                    <p><FaDollarSign></FaDollarSign>  price: {card.price}</p>
                    <p><FaBookOpen></FaBookOpen>   credit: {card.course_credit} hr</p>
                </div>
                <button onClick={() =>handleSelectCourse(card)} className='btn'>Select</button>
            </div>
                ))
            }
            </div>
        </div>
        <div className="cart">
            <Course 
            selectedCourse={selectedCourse}
            remaining={remaining}
            totalCredit={totalCredit}
            >
            </Course>
        </div>
        </div>
        </div>
    );
};

export default Home;