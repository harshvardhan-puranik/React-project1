import React, { createContext, useEffect } from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
export const NavbarContext = createContext()
export const NavColorContext = createContext()
const NavContext = ({children}) => {
    const locate = useLocation().pathname
    useEffect(function(){
      if(locate == '/projects' || locate == '/agency'){
        setnavColor('black')
      }
      else{
        setnavColor('white')
      }
    },[locate])
    const [navOpen, setnavOpen] = useState(false)
    const [navColor, setnavColor] = useState('white')
  return (
    <div>
        <NavbarContext.Provider value={[navOpen, setnavOpen]}>
          <NavColorContext.Provider value={[navColor, setnavColor]}>
            {children}
          </NavColorContext.Provider>
        </NavbarContext.Provider>
    </div>
  )
}

export default NavContext