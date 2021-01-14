import React, {useState} from 'react';
import './App.css';
import {DocViewer} from './DocViewer';

function App() {
    const [format, setFormat] = useState('docx');

    return (
        <div className="App">
            <div className="buttons">
                <button onClick={()=>{setFormat('docx')}}>docx</button>
                <button onClick={()=>{setFormat('xlsx')}}>xlsx</button>
                <button onClick={()=>{setFormat('pptx')}}>pptx</button>
                <button onClick={()=>{setFormat('pdf')}}>pdf</button>
            </div>
            <div className="format">{format}</div>
            <DocViewer className="doc" url={`/docpoc/doc.${format}`} />
        </div>
    );
}

export default App;
