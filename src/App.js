import React from 'react';
import './App.css';
import {DocViewer} from './DocViewer';

function App() {
  return (
    <div className="App">
      <DocViewer url="/doc.docx" />
      <br/>
      <DocViewer url="/doc.pdf" />
    </div>
  );
}

export default App;
