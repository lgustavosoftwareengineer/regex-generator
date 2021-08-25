import {Center, Flex} from '@chakra-ui/react'

const Card = ({children, ...props}) => {
  return (
    <Center py={6}>
      <Flex
        flexDirection="column"
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}
        p="10"
        {...props}>
        {children}
      </Flex>
    </Center>
  )
}
export default Card
