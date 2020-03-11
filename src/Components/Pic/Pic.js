import React, { useState } from 'react';

import './Pic.css'


function Pic (props){

  let fontColorValue = '#fff';
  let linkColorValue = 'white';

  const [image] = useState(props.img)
  const [headerStyle, setHeaderStyle] = useState({padding: '0.75em 0'})
  const [infoBgStyle, setInfoBgStyle] = useState({top: '70%', backgroundColor: props.bgColorValue, color: fontColorValue})

  let visitLink

  if(props.link){
    visitLink = <a href={props.link} className={linkColorValue} target="_blank" rel="noopener noreferrer">Continue...</a>
  }

  const mouseEnterHandler = () => {
    // setHeaderStyle({padding: '0.9em 0 1em 0'})
    setInfoBgStyle({top: '0', backgroundColor: props.bgColorValue, color: fontColorValue})
  }

  const mouseLeaveHandler = () => {
    // setHeaderStyle({padding: '0.75em 0'})
    setInfoBgStyle({top: '70%', backgroundColor: props.bgColorValue, color: fontColorValue})
  }

  return(
    <div onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} className="galleryImage" style={{backgroundImage: `url(${image})`}}>
      <div className="infoBackground" style={infoBgStyle}>
        <h3 className="bold" style={headerStyle}>{props.title}</h3>
        <p className="paragraph">{props.description}</p>
        {visitLink}
      </div>
    </div>
  )
}

export default Pic
