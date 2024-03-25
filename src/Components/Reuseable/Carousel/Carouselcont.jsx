import React from 'react'
import Carousel from 'react-material-ui-carousel'
import Rippleicon from '../Icon/Rippleicon'
import './Carousel.css'
function Carouselcont(props) {
  const {slides, setCurrentslide, currentslide} = props
  return  <Carousel 
      interval={5000}
      animation="slide"
      swipe
      stopAutoPlayOnHover
      onChange={e=>setCurrentslide(e)}
      indicators
      cycleNavigation
      indicatorContainerProps={{style:{color:"#f1a81d"}}}
      >
       {slides}
  </Carousel>
}
export default Carouselcont