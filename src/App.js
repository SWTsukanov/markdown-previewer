import React from 'react'

import Editor from "./component/Editor/Editor.component"
import Previewer from "./component/Previewer/Previewer.component"
import './App.css';

function App() {
  return (
    <div className="App">
        <div className="wrapper">
            <Editor/>
            <Previewer/>
        </div>
    </div>
  );
}

export default App;
