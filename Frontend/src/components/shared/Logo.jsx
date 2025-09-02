import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <Link to="/" className="flex flex-col items-center space-x-2">
      <img src="/src/assets/expenseLogo.png" alt="Logo" className='h-12 w-12' />
      
    </Link>
  )
}

export default Logo
