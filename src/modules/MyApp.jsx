import './css/app.css';
import NavigationBar from './navigation';
import MainPage from './Views/MainPage';
//import CoverPage from './Views/CoverLetterPage';
import ResumePage from './Views/ResumePage';
import ContactPage from './Views/ContactPage';
import ShowPage from './Views/ShowcasePage';
import {HashRouter, Route, Routes} from 'react-router-dom';

function App(){
    return (
        <div>
            <div className="banner">
                <div id="content">
                    <HashRouter hashType="noslash">
                        <NavigationBar />
                        <Routes>
                            <Route path="/" element={<MainPage />} />
                            <Route path="resume" element={<ResumePage />} />
                            <Route path="contact" element={<ContactPage />}/>
                            <Route path="projects" element={<ShowPage />}/>
                        </Routes>
                    </HashRouter>
                </div>
            </div>
        </div>
    );
}

export default App;