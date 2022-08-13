import {
  Image,
  Link as ChakraLink,
  HStack,
  Flex,
  Box,
  Text,
} from '@chakra-ui/react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';
import { ThemeSelector } from '../../components';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';
import { GithubNameModal } from '../../components';
import logo from '../../assets/logo.svg';

export function SharedLayout(): JSX.Element {
  const { pathname } = useLocation();
  const { acceptedFields } = useSelector((store: RootState) => store.template);

  return (
    <Flex direction={'column'} alignItems={'flex-start'} h={'100vh'}>
      <Box w={'100%'}>
        <HStack
          m={'25px'}
          alignItems={'center'}
          justifyContent={'space-between'}
        >
          <Link to='/'>
            <Box boxSize={{ base: '34px', md: '44px' }}>
              <Image src={logo} />
            </Box>
          </Link>
          <ChakraLink
            px={{ base: '15px', md: '25px' }}
            py={{ base: '5px', md: '10px' }}
            fontSize={{ base: 'sm', md: 'md' }}
            display={'flex'}
            flexDir={'row'}
            alignItems={'center'}
            justifyContent={'center'}
            borderRadius={'md'}
            color={'white'}
            bgColor={'black'}
            isExternal
            href='https://github.com/varunKT001/tomper-readme-generator'
          >
            <AiFillStar />
            <Text ml={2}>Github</Text>
          </ChakraLink>
        </HStack>
      </Box>
      <Box
        w={'100%'}
        h={'100%'}
        mb={'25px'}
        overflowY={pathname === '/create' ? 'auto' : 'visible'}
        className='thin-scroll-bar'
      >
        <Outlet />
      </Box>
    </Flex>
  );
}
