import {Box, Text, Input} from '@chakra-ui/react'
import {Fade} from '@material-ui/core'
import React, {useState} from 'react'

const RegexValidatorForm = ({isOpen, regex}) => {
  const [inputValue, setInputValue] = useState('')

  const matchArray = regex?.exec(inputValue) ?? []
  const [matchValue] = matchArray

  const isMatchEqualsToInputValue = matchValue === inputValue

  const handleChangeTextInput = (event) => setInputValue(event.target.value)

  const getTitle = () => {
    if (!inputValue) {
      return `🤖 Bora testar a ER ${regex} ?`
    }

    return isMatchEqualsToInputValue
      ? '✅ Deu match! O valor digitado é válido.'
      : '❌ Ops! O valor digitado não é válido.'
  }
  const getColor = () => {
    if (!inputValue) {
      return 'primary'
    }
    return isMatchEqualsToInputValue ? 'green' : 'red'
  }

  const getIsValid = () => {
    if (!inputValue) {
      return false
    }

    return !isMatchEqualsToInputValue
  }

  return (
    <Fade in={isOpen}>
      <Box p="40px" mt="4" rounded="md" shadow="md">
        <Text fontSize="1.5rem" color={getColor()}>
          {getTitle()}
        </Text>
        <Input
          fontSize="1.5rem"
          color={getColor()}
          isInvalid={getIsValid()}
          value={inputValue}
          onChange={handleChangeTextInput}
          variant="flushed"
          my="4"
        />
      </Box>
    </Fade>
  )
}

export default RegexValidatorForm
