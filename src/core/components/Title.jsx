import {Text} from '@chakra-ui/react'
import React from 'react'

const Title = (props) => {
  return (
    <Text fontSize="3xl" fontWeight="bold" color="primary" {...props}>
      Gerador de expressões regulares
    </Text>
  )
}

export default Title
