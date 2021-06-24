import React, { useState } from 'react'

import { Container, Title, Input, Button } from './styles'

const Form = props => {
  const [age, setAge] = useState('')
  const [username, setUsername] = useState('')
  const [isValid, setIsValid] = useState(true)

  const handleSubmit = event => {
    event.preventDefault()
    console.log('antes')
    if (username.trim().length === 0) {
      setIsValid(false)
      return
    }
    console.log('depois')

    const data = {
      name: username,
      age: +age,
      id: Math.random().toString(),
    }

    props.takeData(data)
  }

  const handleUsernameChange = event => {
    setUsername(event.target.value)
    setIsValid(true)
  }

  const handleAgeChange = event => {
    setAge(event.target.value)
    setIsValid(true)
  }

  return (
    <Container onSubmit={handleSubmit}>
      <Title invalid={!isValid}>Username</Title>
      <Input
        invalid={!isValid}
        type='text'
        value={username}
        onChange={handleUsernameChange}
      />

      <Title invalid={!isValid}>Age (Years)</Title>
      <Input
        invalid={!isValid}
        type='number'
        min='1'
        step='1'
        value={age}
        onChange={handleAgeChange}
      />
      <Button type='submit'>Add User</Button>
    </Container>
  )
}

export default Form
