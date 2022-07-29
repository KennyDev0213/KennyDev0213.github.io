import { Document, Page } from "react-pdf";

function CoverPage(){
    const path = './Files/CoverLetter.pdf';
    
    return (
        <div>
            <Document file={path}>
                <Page pageIndex={0}/>
            </Document>
        </div>
    );
}

export default CoverPage;