import React from 'react';
import './App.css';
import {DocViewer} from './DocViewer';

function App() {
    return (
        <div className="App">
            docx:
            <DocViewer url="/docpoc/doc.docx"/>
            <br/>
            xlsx:
            <DocViewer url="/docpoc/doc.xlsx"/>
            <br/>
            pptx:
            <DocViewer url="/docpoc/doc.pptx"/>
            <br/>
            pdf:
            <DocViewer url="/docpoc/doc.pdf"/>
        </div>
    );
}

export default App;
