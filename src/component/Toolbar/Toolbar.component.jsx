import React from 'react'

import "./tollbar.component.scss"

const Toolbar = ({caption, resize}) => {
    return (
        <div className="toolbar">
            <div className="caption">
                <i className="fab fa-free-code-camp"></i>
                {caption}
            </div>
            <i className="fas fa-expand-alt" onClick={()=>resize(`resize from ${caption}`)}></i>
        </div>
    )
}

export default Toolbar;