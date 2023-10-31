import HeartIcons from './HeartIcons'
import './index.scss'

const Home = () => {
  return (
    <div className="home-page">
      <div className="text-zone">
        <h1 className="title">
          Hi, I'm Micaela
          <br />
          Web developer
        </h1>
        <h2>Full Stack Developer</h2>
        <a
          href="https://www.linkedin.com/in/micaela-paw/"
          className="button"
          target="_blank"
        >
          CONTACT ME
        </a>
      </div>
      <div>
        <HeartIcons />
      </div>
    </div>
  )
}

export default Home