import React from 'react'
import './index.scss'
import Project from './Project'
import Cards from './Cards'
import project1 from './polskablog.PNG'
import project2 from './movieapp.PNG'
import project3 from './project-recipes.PNG'
import project4 from './project4.PNG'
import project5 from './project.PNG'

const Projects = () => {
  return (
    <>
      <Project />
      <div className="center">
        <Cards
          title="Polska Blog"
          imageUrl={project1}
          body="It is an application developed for a group of 4 thousand people who are seeking to become Polish citizens. It has a form with more than 45 conditionals.
        There are also 6 articles with information."
          url={'https://www.polskablog.com/'}
          button={'View website'}
        />
        <Cards
          title="Choosing your movie"
          imageUrl={project2}
          body="How many times have you sat for hours trying to find a good movie to watch? I made this application that will give you a movie depending on the category you want to watch today."
          url={'https://github.com/mica-ailen/Choosing-your-movie'}
          button={'View repository'}
        />
        <Cards
          title="Getting recipes"
          imageUrl={project3}
          body="I developed this application to make it easier for you to find what to cook with the ingredients you have at home.
         Just write down the ingredients you want and you will have all the recipes."
          url={'https://github.com/mica-ailen/Getting-recipes'}
          button={'View repository'}
        />
        <Cards
          title="Search a movie"
          imageUrl={project4}
          body="This application was created to search your favorite movie and it allows you to quickly find information about films that interest you. This app is the perfect companion for discovering new and classic films."
          url={'https://github.com/mica-ailen/Movie-App-React'}
          button={'View repository'}
        />
        <Cards
          title="Circra"
          imageUrl={project5}
          body="I am developing an E-commerce for a Graphic Company where you can see the products, have the option to add them to a list and then communicate via Whatsapp to complete the purchase."
          url={'https://www.circra.com'}
          button={'In progress'}
        />
      </div>
    </>
  )
}

export default Projects
