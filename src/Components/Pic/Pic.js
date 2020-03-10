import React, { useState } from 'react';

import './Pic.css'


function Pic (props){

  let bgColorValue = null;
  let fontColorValue = null;
  let linkColorValue = null;
  // let bgColorValueOp = 'rgba( 255, 255, 255, 0.4)';

  switch (props.bgColorValue) {
    case 'red':
      bgColorValue = 'rgb(181,35,35)';
      fontColorValue = '#fff'
      linkColorValue = 'white'
      break;
    case 'blue':
      bgColorValue = 'rgb(21, 105, 199)'
      fontColorValue = '#fff'
      linkColorValue = 'white'
      break;
    case 'green':
      bgColorValue = 'rgba(10,150,100,1)'
      break;
    default:
      bgColorValue = 'rgba( 255, 255, 255, 1)';
      fontColorValue = '#000'
      linkColorValue = 'blue'
  }

  const [image] = useState(props.img)
  const [headerStyle, setHeaderStyle] = useState({padding: '0.75em 0'})
  const [infoBgStyle, setInfoBgStyle] = useState({marginTop: '11.5em', backgroundColor: bgColorValue, color: fontColorValue})

  let visitLink

  if(props.link){
    visitLink = <a href={props.link} className={linkColorValue} target="_blank" rel="noopener noreferrer">Continue...</a>
  }

  const mouseEnterHandler = () => {
    setHeaderStyle({padding: '1.15em 0 1em 0'})
    setInfoBgStyle({marginTop: '0', backgroundColor: bgColorValue, color: fontColorValue})
  }

  const mouseLeaveHandler = () => {
    setHeaderStyle({padding: '0.75em 0'})
    setInfoBgStyle({marginTop: '11.5em', backgroundColor: bgColorValue, color: fontColorValue})
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
