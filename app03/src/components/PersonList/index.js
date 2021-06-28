import React from 'react'

import { Container, Text } from './styles'

const PersonList = props => {
  return (
    <Container>
      {props.users.map(user => (
        <Text key={props.id}>
          {user.name} ({user.age} years old)
        </Text>
      ))}
    </Container>
  )
}

export default PersonList
