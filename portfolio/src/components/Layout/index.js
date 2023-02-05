import { Outlet } from 'react-router-dom';
import './index.scss';
import Sidebar from '../Sidebar';
import Footer from '../Footer';



const Layout = () => {
    return <>
    <div className='App'>
    <Sidebar/>
    
    <div className='page'>
     <Outlet/>

    </div>

    </div>
    </>
}

export default Layout;