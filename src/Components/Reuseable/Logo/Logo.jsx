import React from 'react'
import { Link } from 'react-router-dom'
import './Logo.css'
function Logo(props) {

  return <Link className="logo" to=''>
    <img src='/static/h-logo.png' alt="" height={35} width={"280"}/>
  </Link>
}
export default Logo