import React from 'react'

export const Navigation = () => {
  return (
    <div>
      <nav className='container'>
        <div className='logo'>
          <img src="/images/nikelogo.com.png" alt="logo" height={72} width={72}/>

        </div>
        <ul>
          <li href ="#">menu</li>
          <li href ="#">location</li>
          <li href ="#">About</li>
          <li href ="#">Contact</li>

        </ul>
        <button>
          login
        </button>
      </nav>
    </div>
  )
}
