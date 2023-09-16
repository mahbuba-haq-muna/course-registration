/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import "./Course.css"

const Course = ({selectedCourse, remaining, totalCredit}) => {
    
    return (
        <div className='add-course'>
            <h3 className='remaining-credit'>Credit Hour Remaining {remaining} hr</h3> <hr />
            <h3>Course Name</h3>
            {
                selectedCourse.map((card, index)=>(
                        <li key={card.id}>{index+1}.  {card.course_name}</li>
                ))
            } <hr />

            <p>Total Credit {totalCredit}</p>
          
        </div>
    );
};

export default Course;