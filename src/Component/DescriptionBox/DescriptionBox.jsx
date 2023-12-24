import React from 'react'
import './descriptionbox.css'
const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box">Review (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>E-commerc Lorem ipsum dolor sit amet consectetur adipisicing 
                elit. Quia sit facere provident ipsum ducimus, deleniti
                quaerat libero assumenda, impedit quae id nobis expedita 
                eveniet soluta deserunt aut harum esse autem.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Laboriosam at minima voluptates, minus, quo veritatis 
                    explicabo ut, vitae dolorum necessitatibus inventore 
                    quibusdam? Consequuntur id excepturi doloremque vero minus optio debitis.</p>
        </div>
    </div>
  )
}

export default DescriptionBox