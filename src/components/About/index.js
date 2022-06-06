import {faCss3, faGit, faHtml5, faJs, faReact } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'


const About = () => {
    return (
        <div className="container about-page">
            <div className='text-zone-about'>
                <h1>About me</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed dignissim metus, at imperdiet dui. Duis nec iaculis justo, sit amet rutrum justo. Ut sed efficitur felis. Aliquam vestibulum sodales justo, sit amet imperdiet ante blandit varius. In viverra volutpat lacus. Quisque porttitor massa at tincidunt dapibus. Etiam convallis nulla orci. Donec at eros volutpat, convallis dui vel, ultricies mi. Nam sollicitudin sagittis ornare.</p>
                <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque accumsan felis turpis, eget interdum dui facilisis at. In aliquam, est in euismod consectetur, tellus velit commodo risus, eget cursus turpis nibh et est. Etiam condimentum neque sapien, eget ornare est eleifend eu. Donec tristique ut mauris in convallis. In et lectus id mauria.</p>
                <p>Praesent vitae hendrerit lacus. Donec porta sodales velit quis convallis. Nunc ultricies volutpat magna id porta. Pellentesque tristique, neque eget aliquet elementum, lectus elit ultrices arcu, porta aliquam nisl nisi sed risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam a varius felis, vel vehicula nulla. Quisque vitae est nec justo feugiat aliquet quis sit amet libero.</p>
            </div>
            <div className="stage-cube-cont">
                <div className="cubespinner">
                <div className='face1'>
                <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
                </div>
                <div className='face2'>
                <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
                </div>
                <div className='face3'>
                <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
                </div>
                <div className='face4'>
                <FontAwesomeIcon icon={faJs} color="#EFD81D"/>
                </div>
                <div className='face5'>
                <FontAwesomeIcon icon={faGit} color="rgb(237, 67, 0)"/>
                </div>
                <div className='face6'></div>
                </div>

            </div>
        </div>
    )
}

export default About