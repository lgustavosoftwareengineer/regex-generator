import {Box, Flex, Avatar, HStack, IconButton, Link} from '@chakra-ui/react'
import {GitHub} from '@material-ui/icons'

const Navbar = () => {
  return (
    <Box bg="primary" px={4}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <HStack spacing={8} alignItems={'center'}>
          <Avatar size={'sm'} src={require('images/logo.png')} />
        </HStack>
        <Flex alignItems={'center'}>
          <IconButton
            size={'md'}
            as={Link}
            icon={<GitHub />}
            bg="transparent"
            _hover={{bg: null}}
            href="https://github.com/tonicprism/regex-generator"
            target="_blank"></IconButton>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Navbar
