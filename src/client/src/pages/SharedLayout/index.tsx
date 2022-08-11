import { Image, Link as ChakraLink, HStack, Flex, Box } from '@chakra-ui/react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { ThemeSelector } from '../../components';

export function SharedLayout(): JSX.Element {
  const { pathname } = useLocation();

  return (
    <Flex direction={'column'} alignItems={'flex-start'} h={'100vh'}>
      <Box w={'100%'}>
        <HStack
          m={'25px'}
          alignItems={'center'}
          justifyContent={'space-between'}
        >
          <HStack spacing={4} alignItems={'center'} justifyContent={'center'}>
            <Link to='/'>
              <Image src={logo} boxSize={{ base: '34px', md: '44px' }} />
            </Link>
            {pathname === '/create' && <ThemeSelector />}
          </HStack>
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
        </HStack>
      </Box>
      <Box w={'100%'} h={'100%'} mb={'25px'}>
        <Outlet />
      </Box>
    </Flex>
  );
}
