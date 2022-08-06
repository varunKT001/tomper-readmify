import { Box, Flex, Image, Link as ChakraLink } from '@chakra-ui/react';
import { Outlet, Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';

export function SharedLayout() {
  return (
    <Box m={'25px'}>
      <Flex alignItems={'center'} justifyContent={'space-between'} mb={'25px'}>
        <Link to='/'>
          <Image src={logo} boxSize={{ base: '34px', md: '44px' }} />
        </Link>
        <ChakraLink
          px={{ base: '15px', md: '25px' }}
          py={{ base: '5px', md: '10px' }}
          fontSize={{ base: 'sm', md: 'md' }}
          borderRadius={'md'}
          color={'white'}
          bgColor={'black'}
          isExternal
          href='https://chakra-ui.com'
        >
          Github
        </ChakraLink>
      </Flex>
      <Outlet />
    </Box>
  );
}
