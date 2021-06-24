import React, { useState } from 'react'

import Form from './components/Form'
import PersonList from './components/PersonList'

import './App.css'

function App() {
  const [data, setData] = useState([])

  const handleSaveData = data => {
    setData(prevData => {
      return [data, ...prevData]
    })

    console.log(data)
  }

  return (
    <div className='form'>
      <Form takeData={handleSaveData} />
      <PersonList text={data} />
    </div>
  )
}

export default App
