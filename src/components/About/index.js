import {
  faCss3,
  faGit,
  faHtml5,
  faJs,
  faReact,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  return (
    <div className="container about-page">
      <div className="text-zone-about">
        <h1 className='title-about'>About me</h1>
        <p>
          I am a Full-stack Developer (EU citizenship). I am passionate about
          creating visually appealing and user-friendly websites.
        </p>
        <p>
          My goal is to continuously improve my skills and stay up-to-date with
          the latest web development technologies. Whenever I have free time I
          dedicate it to keep learning, to improve my programming skills and to
          start new projects.
        </p>
        <p>
          I am a quick learner and always willing to take on new challenges. I
          am excited to be a part of a team where I can grow and make a positive
          impact on users through my work.
        </p>
        <p>
        Tech stack: HTML, CSS, Bootstrap, JavaScript, TypeScript, React, Node.js, Express, MongoDB.
        </p>
        <div className="icons">
          <h3>For more you can find me in:</h3>
          <a href="https://github.com/mica-ailen" target="_blank">
            <FontAwesomeIcon
              icon={faGithub}
              color="white"
              className="github-icon"
            />
          </a>
          <a href="https://www.linkedin.com/in/micaela-paw/" target="_blank">
            <FontAwesomeIcon
              icon={faLinkedin}
              color="white"
              className="linkedin-icon"
            />
          </a>
        </div>
      <div className="stage-cube-cont">
        <div className="cubespinner">
          <div className="face1">
            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faJs} color="#EFD81D" />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faGit} color="rgb(237, 67, 0)" />
          </div>
          <div className="face6"></div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default About

