import { Document, Page, pdfjs } from "react-pdf";
import './css/PDF.css'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function ResumePage(){
    return (
        <div className="pdf_container">
            <Document file="./Files/Resume.pdf">
                <Page pageNumber={1}/>
                <Page pageNumber={2} />
            </Document>
        </div>
    );
}

export default ResumePage;