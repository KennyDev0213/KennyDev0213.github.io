import React from "react";
import {pdfjs, Document, Page} from "react-pdf";
import Resume from "../Files/Resume.pdf";
import "../css/document.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const ResumePage = () => {
    return(
    <div className="document">
        <Document file={Resume}>
            <Page pageNumber={1} />
        </Document>
    </div>
    )
}

export default ResumePage;