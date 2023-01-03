import "./css/nav.css"
import { Link } from "react-router-dom";

const NavigationBar = () =>{
    //<li><a href="/showcase">Project Showcase</a></li>

    return(
        <div className="navbar">
            <div className='name'><h1>Kennon Dong</h1></div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/letter">Cover Letter</Link></li>
                <li><Link to="/resume">Resume</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
    );
}

export default NavigationBar;