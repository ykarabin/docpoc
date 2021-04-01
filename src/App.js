import React, {useState} from 'react';
import './App.css';
import {DocViewer} from './DocViewer';

function App() {
    const [format, setFormat] = useState('docxSample.docx');

    return (
        <div className="App ">
            <div className="buttons">
                <button onClick={()=>{setFormat('docxSample.docx')}}>docxSample.docx</button>
                <button onClick={()=>{setFormat('docxSample.xod')}}>docxSample.xod</button>
                <button onClick={()=>{setFormat('pptxSample.pptx')}}>pptxSample.pptx</button>
                <button onClick={()=>{setFormat('pptxSample.xod')}}>pptxSample.xod</button>
                <button onClick={()=>{setFormat('pdfSample.pdf')}}>pdfSample.pdf</button>
                <button onClick={()=>{setFormat('pdfSample.xod')}}>pdfSample.xod</button>
                <button onClick={()=>{setFormat('xlsxSample.xlsx')}}>xlsxSample.xlsx</button>
                <button onClick={()=>{setFormat('xlsxSample.xod')}}>xlsxSample.xod</button>
                <button onClick={()=>{setFormat('xmlSample.xml')}}>xmlSample.xml</button>
                <button onClick={()=>{setFormat('xmlSample.xod')}}>xmlSample.xod</button>
            </div>
            <div className="format">{format}</div>
            <DocViewer className="doc" url={`/docpoc/${format}`} />
        </div>
    );
}

export default App;
