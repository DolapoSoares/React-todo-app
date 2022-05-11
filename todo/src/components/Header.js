import React , { useState } from 'react'
import { BsSun , BsFillMoonFill } from 'react-icons/bs'

function Header() {

  const [isLight, setLight] = useState(true)

  const setLightMode = () => {
      setLight(!isLight)
      return document.body.classList.toggle('dark-mode')
  }

  return (
    <div>
        <div>
       
        
            {!isLight && <BsSun className="sun fillsun" onClick={setLightMode} />}
            {isLight && <BsFillMoonFill className="sun fill
            moon" onClick={setLightMode} />}
             <h1>TODO</h1>
        </div>
    </div>
    
  )
}

export default Header
