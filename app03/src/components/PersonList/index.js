import React from 'react'

import { Container, Text } from './styles'

const PersonList = props => {
  return (
    <Container>
      <Text>{props.text.age}</Text>
      <Text>{props.text.name}</Text>
    </Container>
  )
}

export default PersonList
