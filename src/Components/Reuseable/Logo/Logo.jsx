import React from 'react'
import { Link } from 'react-router-dom'
import './Logo.css'
import HLogo from "../../../assets/h-logo.png"

function Logo(props) {
  return <Link className="logo" to=''>
    <img src={HLogo} alt="" height={35} width={"280"}/>
  </Link>
}
export default Logo