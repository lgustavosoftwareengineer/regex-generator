import {CloseIcon} from '@chakra-ui/icons'
import {HStack, IconButton, Text} from '@chakra-ui/react'
import {useRegex} from 'core/hooks'
import React from 'react'

const WordItem = ({word, index, ...props}) => {
  const [, {remove}] = useRegex()

  const onClickDelete = () => remove(index)

  return (
    <HStack>
      <Text my={2} flex={1}>
        <li>{word}</li>
      </Text>
      <IconButton
        icon={<CloseIcon />}
        bg="transparent"
        onClick={onClickDelete}
      />
    </HStack>
  )
}

export default WordItem
