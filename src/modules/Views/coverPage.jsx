import { Document, Page } from "react-pdf";
import "./css/PDF.css"

function CoverPage(){
    const path = './Files/CoverLetter.pdf';
    
    return (
        <div className="pdf_container">
            <Document file={path}>
                <Page pageIndex={0}/>
            </Document>
        </div>
    );
}

export default CoverPage;