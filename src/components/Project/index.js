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
          title="Movie Match"
          imageUrl={project2}
          body="Do you ever struggle to decide on what movie to watch? My app makes it easy. Choose a category and get a randomized suggestion. Enjoy a hassle-free movie-watching experience."
          url={'https://github.com/mica-ailen/Choosing-your-movie'}
          button={'View repository'}
        />
        <Cards
          title="Dish Discovery"
          imageUrl={project3}
          body="Staring at a fridge full of ingredients? My app helps you out. Enter an ingredient and get a selection of recipes, plus step-by-step video tutorials. Cook with ease, no matter your experience."
          url={'https://github.com/mica-ailen/Getting-recipes'}
          button={'View repository'}
        />
        <Cards
          title="Film Search Application"
          imageUrl={project4}
          body="This application was created to search your favorite movie and it allows you to quickly find information about films that interest you. This app is the perfect companion for discovering new and classic films."
          url={'https://github.com/mica-ailen/Movie-App-React'}
          button={'View repository'}
        />
        <Cards
          title="Circra"
          imageUrl={project5}
          body="Do you want to buy Graphic Company products online? Look no further. My app lets you browse, add to wishlist, and complete purchases via WhatsApp. It's shopping made simple."
          url={'https://www.circra.com'}
          button={'In progress'}
        />
      </div>
    </>
  )
}

export default Projects

