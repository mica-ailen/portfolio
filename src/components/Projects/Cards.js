import React from 'react';
import './index.scss';

export default function Cards (title, imageUrl, body){
    return(
        <div className="card-container">
            <div class="image-container">
             <img src={imageUrl} alt=''/>   
            </div>
            <div className="card-title">
                <h3>{title}</h3>
            </div>
            <div className='card-body'>
                <p>{body}</p>
            </div>
            <div className="btn">
                <button>
                <a>View more</a>
                </button>
            </div>
        </div>
    )
}