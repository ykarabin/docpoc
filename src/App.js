import React from 'react';
import './App.css';
import {DocViewer} from './DocViewer';

function App() {
  return (
    <div className="App">
      <DocViewer url="/docpoc/doc.docx" />
      <br/>
      <DocViewer url="/docpoc/doc.pdf" />
    </div>
  );
}

export default App;
