import React, {useState} from 'react'
import Head from 'next/head'
import {
  Flex,
  Input,
  Button,
  Text,
  Box,
  useDisclosure,
  VStack,
} from '@chakra-ui/react'
import {useRegex} from 'core/hooks'
import {
  RegexValidatorForm,
  WordsList,
  Card,
  HowToUseTexts,
  Title,
} from 'core/components'

export default function HomePage() {
  const [{getRegex, words}, {add, clear}] = useRegex()
  const [wordValue, setWordValue] = useState('')
  const {isOpen, onToggle} = useDisclosure()

  const {value: regexValue, regex} = getRegex() ?? {}

  const handleChangeWord = (event) => setWordValue(event.target.value)

  const addNewWord = () => {
    add(wordValue)
    setWordValue('')
  }

  const onClickClear = () => {
    onToggle()
    clear()
  }

  return (
    <VStack spacing="6" px="10">
      <Head>
        <title>Gerador de expressões regulares</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        icon
      </Head>
      <Title mt="4" />
      <HowToUseTexts />

      <Card
        width={[
          '100%', // 0-30em
          '100%', // 30em-48em
          '100%', // 48em-62em
          '34vw', // 62em+
        ]}
        px="5">
        <Flex flexDirection="column">
          <Text as="samp" fontSize="2xl" my="4">
            {regexValue ?? 'Bora criar umas expressões?'}
          </Text>

          <WordsList items={words} />

          <Input
            value={wordValue}
            onChange={handleChangeWord}
            my="4"
            variant="flushed"
            placeholder="Digite algo aqui para gerar expressões"
          />
        </Flex>
        <Flex flexDirection="column">
          <Flex mt="4" flex={1}>
            <Button flex={1} onClick={addNewWord} colorScheme="green">
              Adicionar
            </Button>
            <Box w="2" />
            <Button flex={1} onClick={onClickClear} colorScheme="red">
              Limpar
            </Button>
          </Flex>

          <Box h="2" />

          <Button
            bg="primary"
            color="white"
            onClick={onToggle}
            disabled={!words.length}>
            Testar
          </Button>
        </Flex>

        <RegexValidatorForm isOpen={isOpen} regex={regex} />
      </Card>
    </VStack>
  )
}

HomePage.pageTitle = 'Página inicial'
