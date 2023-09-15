/* eslint-disable no-unused-vars */
import React from 'react';
import "./Home.css"


const Home = () => {
    return (
        <div className='card-container'>
            <h2>Course Registration</h2>
            <div className="card">
                <img className='photo' src="https://i.ibb.co/ZJv51cg/hitesh-choudhary-D9-Zow2-REm8-U-unsplash.jpg" alt="" />
                <h3>Introduction to Python</h3>
                <p>Learn the fundamentals of Python programming, including syntax, data types, and control structures</p>
                <div className="price-credit">
                    <p>price: 300</p>
                    <p>credit: 2 hr</p>
                </div>
                <button className='btn'>Select</button>
            </div>
        </div>
    );
};

export default Home;