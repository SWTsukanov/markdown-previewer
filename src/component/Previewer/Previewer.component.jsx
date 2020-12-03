import React, {useState} from 'react'
import Toolbar from "../Toolbar/Toolbar.component";

import "./prewiewer.component.scss"

const Previewer = () => {
    const [toggleSize,setToggleSize] = useState("from Previewer")
    console.log(toggleSize)

    return (
        <div className="previewer">
            <Toolbar caption="Previewer" resize={setToggleSize}/>
            <div>
                "Previewer"
            </div>
        </div>
    )

}

export default Previewer;