import { useEffect } from 'react';
import {
  Box,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Image,
  Link as ChakraLink,
} from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';
import { reset as resetTemplate } from '../../redux/template';
import { reset as resetForm } from '../../redux/form';
import { useAppDispatch } from '../../redux';
import bannerHero from '../../assets/banner-hero.gif';
import heartIcon from '../../assets/heart.svg';
import { LINKEDIN_URL } from '../../utils/contants';

export function Home(): JSX.Element {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === '/') {
      dispatch(resetTemplate());
      dispatch(resetForm());
    }
  }, [pathname]);

  return (
    <Stack
      h={'100%'}
      alignItems={'center'}
      spacing={0}
      pt={{ base: 20, md: 20 }}
    >
      <Stack
        as={Box}
        w={'100%'}
        m={0}
        p={0}
        alignItems={'center'}
        spacing={{ base: 8, md: 24 }}
      >
        <Container
          maxW={'4xl'}
          display={'flex'}
          flexDir={'column'}
          alignItems={'center'}
        >
          <Heading
            className='hero'
            pb={6}
            textAlign={'center'}
            color={'gray.800'}
            fontWeight={800}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}
          >
            Create your Profile README <br />
            <Text as={'span'} color={'orange.400'}>
              using the best Templates
            </Text>
          </Heading>
          <Text
            mb={4}
            textAlign={'center'}
            fontSize={{ base: 'sm', md: 'xl' }}
            color={'gray.500'}
          >
            This simple editor allows you to quickly add and customize all the
            sections you need for your profile's readme
          </Text>
          <Button
            as={Link}
            to='/create'
            px={{ base: '20px', md: '40px' }}
            py={{ base: '15px', md: '30px' }}
            fontSize={{ base: 'sm', md: 'lg' }}
            colorScheme={'orange'}
          >
            Get Started
          </Button>
        </Container>
        <Box w={'100%'} height={'100%'} position={'relative'}>
          <Container maxW={'6xl'}>
            <Image src={bannerHero} boxShadow='2xl' rounded={4} />
          </Container>
          <Box
            w={'100%'}
            display={'flex'}
            flexDir={'column'}
            position={'absolute'}
            inset={0}
            zIndex={-1}
          >
            <Box w={'100%'} h={'100%'}></Box>
            <Box
              w={'100%'}
              h={'100%'}
              bg={'var(--chakra-colors-blackAlpha-800)'}
            ></Box>
          </Box>
        </Box>
      </Stack>
      <Stack
        as={Box}
        direction={'row'}
        w={'100%'}
        h={'100%'}
        py={{ base: 2, md: 24 }}
        alignItems={'center'}
        justifyContent={'center'}
        bg={'var(--chakra-colors-blackAlpha-800)'}
        color={'white'}
      >
        <Text>Made with</Text>
        <Image src={heartIcon} />
        <Text>by</Text>
        <ChakraLink href={LINKEDIN_URL}>Varun Kumar Tiwari</ChakraLink>
      </Stack>
    </Stack>
  );
}
