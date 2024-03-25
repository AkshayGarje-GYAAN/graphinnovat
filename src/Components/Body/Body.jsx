import React, { useContext, useState } from 'react'
import { ContextApp } from '../../ContextAPI'
import Navbar from '../Navbar/Navbar'
import Icon from '../Reuseable/Icon/Icon'
import { links, style, works } from '../Appconstant'
import './Body.css'
import { Route, Switch } from 'react-router-dom'
import Home from './Home/Home'
import Contact from './Contact/Contact'
import NotificationSystem from 'react-notification-system';
import Footer from './Footer/Footer'
import YouAreLost from './404/YouAreLost'
import Services from './Services/Services'
import Works from './Works/Works'
import Projectpage from '../Reuseable/Projectpage/Projectpage'
import { AnimatePresence } from 'framer-motion'
import Aboutme from './Aboutme/Aboutme'
import { FaArrowUp } from "react-icons/fa";
import AboutUs from './AboutUs/AboutUs'

function Body(props) {
  const {scrolled, notifisystem} = useContext(ContextApp)
  const worksroutes = works?.map(project=>{ 
    return <Route path={project.link}>
      <Projectpage project={project}/>
    </Route>
  })

  return <div className="body">
      {scrolled?<FaArrowUp className="top scrol" onClick={()=>window.scrollTo(0, 0)}/>:<></>}
     
     <NotificationSystem ref={notifisystem} style={style}/>
     <Navbar links={links}/>
     
      <AnimatePresence>
        <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/services' exact>
          <Services/>
        </Route>
        <Route path='/contact' exact>
          <Contact/>
        </Route>
        {/* <Route path='/'>
            <Aboutme />
        </Route>
        <Route path='/'>
            <Services />
        </Route>
        <Route exact path='/'>
            <Works />
        </Route> */}
        {/* {worksroutes} */}
        {/* <Route path='/'>
            <Contact />
        </Route> */}
        
        <Route>
          <YouAreLost />
        </Route>
        </Switch>
      </AnimatePresence>
      <Footer />
  </div>
}
export default Body