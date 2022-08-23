import { Box, HStack } from '@chakra-ui/react';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';

interface Props {
  stars: number;
  handleClick: (index: number) => void;
}

export function ReviewStars(props: Props) {
  return (
    <HStack w={'100%'} justifyContent={'space-between'}>
      {Array.from({ length: 5 }).map((_, index) => {
        return (
          <Box
            className='star'
            key={index}
            onClick={() => props.handleClick(index + 1)}
          >
            {props.stars >= index + 1 ? <AiFillStar /> : <AiOutlineStar />}
          </Box>
        );
      })}
    </HStack>
  );
}
