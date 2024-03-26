import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import AppButton from '../../Reuseable/Button/Button'
import './YouAreLost.css'
function YouAreLost() {
  const [textshadow, setTextshadow] = useState({
    x: 450,
    y: 300
  })
  function deterMineShadow(e) {
    setTextshadow({
      x: e.clientX,
      y: e.clientY
    })
  }

  return <div className="youarelost" onMouseMove={e=>deterMineShadow(e)}>
    <p style={{textShadow: `rgb(0 0 0 / 33%) -${textshadow.x/30}px ${textshadow.y/30}px 10px`}}>{`Coming Soon..`}</p>
   
      <HashLink smooth  to='/' style={{marginTop:64}}>
        <AppButton text='Back Home' icon='fad fa-home'/>
      </HashLink>
  </div>
}
export default YouAreLost