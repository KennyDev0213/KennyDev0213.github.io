import React from "react";
import {pdfjs, Document, Page} from "react-pdf";
import CoverLetter from "../Files/CoverLetter.pdf";
import "../css/document.css"

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const CoverPage = () => {
    return(
    <div className="document">
        <Document file={CoverLetter}>
            <Page pageNumber={1} />
        </Document>
    </div>
    )
}

export default CoverPage;