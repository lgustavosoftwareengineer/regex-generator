import {CloseIcon} from '@chakra-ui/icons'
import {Box, IconButton, Text} from '@chakra-ui/react'
import React from 'react'

const HowToUseTexts = (props) => {
  return (
    <Box {...props}>
      <Text fontSize="2xl" pb="2">
        Como utilizar?
      </Text>
      <Text fontSize="1xl">
        <li>
          Adicione palavras logo abaixo para ir gerando novas expressões
          regulares.
        </li>
      </Text>
      <Text>
        <li>
          Se quiser deletar a palavra adicionado da lista só apertar no botão{' '}
          <IconButton icon={<CloseIcon />} bg="transparent" />.
        </li>
      </Text>
      <Text>
        <li>
          A expressão regular com a palavra adicionada irá aparecer logo a baixo
        </li>
      </Text>
      <Text>
        <li>
          Se quiser testar a expressão regular só clicar no botão <b>Testar</b>
        </li>
      </Text>
    </Box>
  )
}

export default HowToUseTexts
