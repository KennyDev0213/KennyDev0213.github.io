import './main.css';
import VertiBar from './modules/navigation';
import MainPage from './modules/Views/mainPage';
import CoverPage from './modules/Views/coverPage';
import ResumePage from './modules/Views/resumePage';
import ContactPage from './modules/Views/contactPage';
import ShowcasePage from './modules/Views/showcasePage';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App(){
    return (
        <div>
            <table id="layout">
                <tbody>
                    <tr>
                        <td id="sidebar">
                            <VertiBar />
                        </td>
                        <td id="mbody">
                            <BrowserRouter>
                                <Routes>
                                    <Route path="/" element={<MainPage />} />
                                    <Route path="letter" element={<CoverPage />} />
                                    <Route path="resume" element={<ResumePage />} />
                                    <Route path="contact" element={<ContactPage />}/>
                                    <Route path="showcase" element={<ShowcasePage />}/>
                                </Routes>
                            </BrowserRouter>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default App;