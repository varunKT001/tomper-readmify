import { Box, Container, Heading, Stack, Text, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export function Home(): JSX.Element {
  return (
    <Container maxW={'4xl'}>
      <Stack
        as={Box}
        alignItems={'center'}
        spacing={{ base: 8, md: 14 }}
        py={{ base: 20, md: 36 }}
      >
        <Heading
          className='hero'
          textAlign={'center'}
          color={'gray.800'}
          fontWeight={800}
          fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}
        >
          Create your Profile README <br />
          <Text as={'span'} color={'orange.500'}>
            using the best Templates
          </Text>
        </Heading>
        <Text
          textAlign={'center'}
          fontSize={{ base: 'sm', md: 'xl' }}
          color={'gray.500'}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse labore,
          repellat excepturi rerum nesciunt commodi a soluta illo fuga ipsa.
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
      </Stack>
    </Container>
  );
}
