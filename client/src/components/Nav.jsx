import { Box, Flex, HStack, IconButton, useColorModeValue } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Links = ['History'];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    to={'/paymenthistory'}
  >
    {children}
  </Link>
);

export default function Nav() {
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <IconButton size={'md'} aria-label={'Open Menu'} display={{ md: 'none' }} />
        <HStack spacing={8} alignItems={'center'}>
          <Box fontSize={40} fontWeight={800}>
            <Link to="/">Home</Link>
          </Box>
          <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </HStack>
        </HStack>
        <Flex alignItems={'center'}></Flex>
      </Flex>
    </Box>
  );
}
