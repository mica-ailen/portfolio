import React from 'react'

export default function Cards({ title, imageUrl, body, url, button }) {
  return (
    <>
      <div className="card-container">
        <div className="cards">
          <div className="image-container">
            <img src={imageUrl} alt="" />
          </div>
          <div className="card-title">
            <h3>{title}</h3>
          </div>
          <div className="card-body">
            <p>{body}</p>
          </div>
          <div className="btn">
            <button>
              <a href={url} target="_blank">
                {button}
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
