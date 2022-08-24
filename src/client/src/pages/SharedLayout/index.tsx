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
import { ReviewModal } from '../../components';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';
import { GITHUB_URL } from '../../utils/contants';
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
          <HStack>
            <ReviewModal />
            <ChakraLink
              px={{ base: '10px', md: '15px' }}
              py={{ base: '5px', md: '7px' }}
              fontSize={{ base: 'sm', md: 'md' }}
              display={'flex'}
              flexDir={'row'}
              alignItems={'center'}
              justifyContent={'center'}
              borderRadius={'md'}
              color={'white'}
              bgColor={'black'}
              isExternal
              href={GITHUB_URL}
            >
              <AiFillStar />
              <Text ml={2}>Github</Text>
            </ChakraLink>
          </HStack>
        </HStack>
      </Box>
      <Box
        w={'100%'}
        h={'100%'}
        mb={pathname === '/create' ? '25px' : '0'}
        overflowY={pathname === '/create' ? 'auto' : 'visible'}
      >
        <Outlet />
      </Box>
    </Flex>
  );
}
