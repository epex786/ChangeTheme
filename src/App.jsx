import React, { useEffect, useRef, useState } from 'react'

const App = () => {

  const [theme, settheme] = useState(localStorage.getItem("theme"))

 
  const changetheme =()=>{
    if(theme=='light'){
      localStorage.setItem('theme','dark')
      settheme('dark')
      logoref.current.innerHTML = '<button><i class="ri-moon-line"></i></button>'
      
    }
    else{
      localStorage.setItem('theme','light')
      settheme('light')
      logoref.current.innerHTML = '<button><i class="ri-moon-fill"></i></button>'
    }
  }

  const logoref = useRef(null)

  const themeref = useRef(null)

  useEffect(function(){
    themeref.current.setAttribute('id',theme)
  },[theme])

  return (

    <div  ref={themeref} className='h-screen w-full flex justify-center items-center'>
      <div className=' p-7 w-full fixed flex justify-between items-center top-0'>
        <h1 className='text-lg font-bold'>Sheriynsh</h1>
        <div className='flex gap-7 text-lg font-bold'>
          <h1>About</h1>
          <h1>Contact</h1>
          <h1>Services</h1>
          <h1>Login</h1>
          <button onClick={changetheme} ref={logoref} >
          <i class="ri-moon-line"></i>
          </button>
        </div>
      </div>
      <h1 className='text-2xl font-bold'>Arif</h1>
    </div>
  )
}

export default App