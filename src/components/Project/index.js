import React from 'react';
import './index.scss';
import Project from './Project'
import Cards from './Cards';
import img from './polskablog.PNG';
import Img from './movieapp.PNG' 

const Projects = () => {
    return(
        <>
    <Project/>
    <Cards
     title='Polska Blog'
     imageUrl={img}
     body='I was helping in this project for the frontend part. There I was learning the best practices, how to develop the design from Figma and how to make a responsive website.'
    />
    <Cards 
    title='Movie App'
    imageUrl={Img}
    body='The goal of this project was to create a small application that chooses one random movie you can watch according to the category you want at that moment.'/>
    <Cards
    title='Movie App'
    imageUrl={Img}
    body='The goal of this project was to create a small application that chooses one random movie you can watch according to the category you want at that moment.'/>
        </>
    )
};


export default Projects;