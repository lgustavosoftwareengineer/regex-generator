/* eslint-disable react-hooks/rules-of-hooks */
import {Flex} from '@chakra-ui/react'
import React from 'react'
import WordItem from './WordItem'

const renderItem = (word, index) => (
  <WordItem key={`${index}`} {...{word, index}} />
)

const WordsList = ({items}) => {
  return <Flex flexDirection="column">{items.map(renderItem)}</Flex>
}

export default WordsList
