import React from 'react'
import {
  Flex,
  Container,
  Input,
  Button,
  Text,
  Box,
  useDisclosure,
} from '@chakra-ui/react'
import {useRegex} from 'core/hooks'
import {Fade} from '@material-ui/core'
export default function HomePage() {
  const [{getRegex, words}, {add, clear}] = useRegex()
  const [wordValue, setWordValue] = React.useState('')
  const [regexTesterValue, setRegexTesterValue] = React.useState('')
  const {isOpen, onToggle} = useDisclosure()

  const {value: regexValue, regex} = getRegex() ?? {}
  const hasTheRegexTesterValueChecker = regex?.test(regexTesterValue)

  const handleChangeWord = (event) => setWordValue(event.target.value)
  const handleChangeRegexValidator = (event) =>
    setRegexTesterValue(event.target.value)

  const addNewWord = () => {
    add(wordValue)
    setWordValue('')
  }

  const _clear = () => {
    onToggle()
    clear()
  }

  return (
    <Container py="5">
      <Flex flexDirection="column" flex={1} justifyContent="space-between">
        <Text fontSize="3xl">🤖 Gerador de expressões regulares</Text>
        <Text as="samp" fontSize="2xl" my="4">
          {regexValue ?? 'Digite algo no input abaixo...'}
        </Text>
        <Flex flexDirection="column">
          {words.map((word, index) => (
            <Text key={`${index}`} my={2}>
              <li>{word}</li>
            </Text>
          ))}
        </Flex>
        <Input
          value={wordValue}
          onChange={handleChangeWord}
          my="4"
          variant="flushed"
          placeholder="Bora tacar umas palavras aqui?"
        />
        <Flex mt="4" flex={1}>
          <Button flex={1} onClick={addNewWord} colorScheme="green">
            Adicionar
          </Button>
          <Box w="2" />
          <Button flex={1} onClick={() => _clear()} colorScheme="red">
            Limpar
          </Button>
        </Flex>
        <Box h="2" />
        <Button colorScheme="blue" onClick={onToggle} disabled={!words.length}>
          Testar
        </Button>
        <Fade in={isOpen}>
          <Box p="40px" mt="4" rounded="md" shadow="md">
            <Text
              fontSize="2xl"
              color={hasTheRegexTesterValueChecker ? 'green' : 'red'}>
              {hasTheRegexTesterValueChecker ? '✅ Deu match' : '❌ Ops'}
            </Text>
            <Input
              fontSize="2xl"
              color={hasTheRegexTesterValueChecker ? 'green' : 'red'}
              isInvalid={!hasTheRegexTesterValueChecker}
              value={regexTesterValue}
              onChange={handleChangeRegexValidator}
              variant="flushed"
              my="4"
            />
          </Box>
        </Fade>
      </Flex>
    </Container>
  )
}

HomePage.pageTitle = 'Página inicial'
