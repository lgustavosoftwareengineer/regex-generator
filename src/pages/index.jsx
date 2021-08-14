import React from 'react'
import {Flex, Container, Input, Button, Text} from '@chakra-ui/react'

const HomePage = () => {
  return (
    <Container py="5">
      <Flex flexDirection="column" flex={1} justifyContent="space-between">
        <Text>Gerador de expressões regulares</Text>
        <Input />
        <Button>Gerar</Button>
      </Flex>
    </Container>
  )
}

HomePage.pageTitle = 'Página inicial'

export default HomePage
