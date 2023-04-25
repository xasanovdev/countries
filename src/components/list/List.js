import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faBookmark } from '@fortawesome/free-solid-svg-icons'

const List = ({ BookMark=[],year,category,rating,isTrending,title,image}) => {
  
    const [sset,setBookMarked] = useState(BookMark);
  
    return (
      <div>
        <div className='trending__slider-content' style={{backgroundImage:`url(${image})`}}>
          <div className={sset ? `trending__slider-bookmark` :`trending__slider-bookmark trending__slider-bookmark__active`} onClick={() => setBookMarked(!sset)}>
            <FontAwesomeIcon icon={faBookmark}   />
          </div>
          <div className='trending__slider-text'>
            <p className='trending__slider-title'>
              <span>{year}</span>
              <span>{category} </span>
              <span>{rating}</span>
            </p>
            <p className='trending__slider-subtitle'>{title}</p>
          </div>
        </div> 
      </div> 
    );
  }

export default List