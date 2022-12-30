//require('bootstrap/style');
import './css/app.css';
import NavigationBar from './navigation';
import MainPage from './mainPage';
import CoverPage from './coverPage';
import ResumePage from './resumePage';
import ContactPage from './contactPage';
import ShowcasePage from './showcasePage';
import {HashRouter, Route, Routes} from 'react-router-dom';

function App(){
    return (
        <div>
            <div className="banner">
                <div id="sidebar">
                    
                </div>
                <div id="content">
                    <HashRouter hashType="noslash">
                        <NavigationBar />
                        <Routes>
                            <Route path="/" element={<MainPage />} />
                            <Route path="letter" element={<CoverPage />} />
                            <Route path="resume" element={<ResumePage />} />
                            <Route path="contact" element={<ContactPage />}/>
                            <Route path="showcase" element={<ShowcasePage />}/>
                        </Routes>
                    </HashRouter>
                </div>
            </div>
        </div>
    );
}

export default App;