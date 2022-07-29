import "./navigation.css"

function VertiBar() {
    return(
        <div>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/letter">Cover Letter</a></li>
                    <li><a href="/resume">Resume</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/showcase">Project Showcase</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default VertiBar;