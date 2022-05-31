import {Link} from 'react-router-dom'
import './index.scss'

const Home = () => {
    return (
        <div className="home-page">
            <div className="text-zone">
                <h1 className="title">Hi, <br/>I'm Micaela
                <br/>
                Web developer
                </h1>
                <h2>Frontend Developer</h2>
                <Link to="/contact" className="button">CONTACT ME</Link>
            </div>
        </div>
    );
}

export default Home