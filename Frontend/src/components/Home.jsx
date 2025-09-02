import React from 'react'
import Navbar from './Navbar'
import CreateExpense from './createExpense'

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className='text-3xl font-bold'>
        <h1>Expense</h1>
        <CreateExpense />
      </div>
    </div>
  )
}

export default Home
