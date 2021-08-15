import React from 'react'
import {Flex, Container, Input, Button, Text, Box} from '@chakra-ui/react'
import {useRegex} from 'core/hooks'
export default function HomePage() {
  const [regex, {add, clear}] = useRegex()
  const [value, setValue] = React.useState('')

  const handleChange = (event) => setValue(event.target.value)

  const addNewPhrase = () => {
    add(value)
    setValue('')
  }

  return (
    <Container py="5">
      <Flex flexDirection="column" flex={1} justifyContent="space-between">
        <Text fontSize="3xl">Gerador de expressões regulares</Text>
        <Text as="samp" fontSize="2xl" my="4">
          {regex() ?? 'Digite algo no input abaixo...'}
        </Text>
        <Input value={value} onChange={handleChange} my="4" />
        <Flex mt="4" flexDirection="column">
          <Button onClick={addNewPhrase} colorScheme="green">
            Gerar
          </Button>
          <Box h="2" />
          <Button onClick={() => clear()} colorScheme="red">
            Limpar
          </Button>
        </Flex>
      </Flex>
    </Container>
  )
}

HomePage.pageTitle = 'Página inicial'
