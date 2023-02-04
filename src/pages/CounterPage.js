import React from 'react'
import Counter from '../components/Counter'

const CounterPage = () => {
  return (
    <div className='container'>
        <div className='d-flex justify-content-center align-items-center h-100vh'>
            <Counter/>
        </div>
    </div>
  )
}

export default CounterPage