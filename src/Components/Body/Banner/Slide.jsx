import React from 'react'

function Slide(props) {
  
  const {slide} = props

  return ( 
      <img src={slide.img} style={{width:"100%",height:"500px"}} alt=""/>
  )

}
export default Slide