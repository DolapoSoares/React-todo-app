import React , { useState } from 'react'
import { BsFillSunFill , BsMoon } from 'react-icons/bs'

function Header() {

  const [isLight, setLight] = useState(true)

  const setLightMode = () => {
      setLight(!isLight)
      return document.body.classList.toggle('dark-mode')
  }

  return (
    <div>
        <div>
        <h1>TODO</h1>
        
            {!isLight && <BsFillSunFill className="sun fillsun" onClick={setLightMode} />}
            {isLight && <BsMoon className="sun fill
            moon" onClick={setLightMode} />}
        </div>
    </div>
    
  )
}

export default Header
