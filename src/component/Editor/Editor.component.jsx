import React,{useState} from 'react'
import Toolbar from "../Toolbar/Toolbar.component";

import "./editor.component.scss"

const Editor = ()=>{
    const [toggleSize,setToggleSize] = useState("from editor")
    console.log(toggleSize)
    return (
        <div className="editor">
            <Toolbar caption = "Editor" resize ={setToggleSize}/>
            <textarea className="editor-area"></textarea>
        </div>
    )
}

export default Editor;