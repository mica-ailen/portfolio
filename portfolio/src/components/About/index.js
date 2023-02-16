import {
  faCss3,
  faGit,
  faHtml5,
  faJs,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Footer from '../Footer'
import './index.scss'

const About = () => {
  return (
    <div className="container about-page">
      <div className="text-zone-about">
        <h1>About me</h1>
        <p>
          I am a Frontend Web Developer (EU citizenship). I am passionate about
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
          Currently I'm continue to develop Freelance projects, which serve me
          to challenge myself.
        </p>
        <p>
          I have experience with HTML, CSS, Bootstrap, JavaScript and React.
        </p>
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
      <Footer />
    </div>
  )
}

export default About
