import "./css/nav.css"

const NavigationBar = () =>{
    //<li><a href="/showcase">Project Showcase</a></li>

    return(
        <div className="navbar">
            <div className='name'><h1>Kennon Dong</h1></div>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/letter">Cover Letter</a></li>
                <li><a href="/resume">Resume</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </div>
    );
}

export default NavigationBar;