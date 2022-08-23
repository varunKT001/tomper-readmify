import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Box,
  FormControl,
  VStack,
  Textarea,
  Input,
  FormHelperText,
  Text,
} from '@chakra-ui/react';
import {
  openReviewModal as onOpen,
  closeReviewModal as onClose,
} from '../redux/extra';
import { AiFillGithub } from 'react-icons/ai';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import { useForm } from '@formspree/react';
import { ChangeEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../redux';
import { ReviewStars } from './ReviewStars';
import { FORM_ID } from '../config/feedback';
import { GITHUB_URL } from '../utils/contants';
import { Link } from '@chakra-ui/react';

export function ReviewModal() {
  const dispatch = useAppDispatch();
  const { isReviewModalOpen } = useSelector((store: RootState) => store.extra);

  const [state, handleSubmit] = useForm(FORM_ID);
  const [stars, setStars] = useState<number>(5);
  const [feedback, setFeedback] = useState<string>('');

  function handleChange(e: ChangeEvent<HTMLTextAreaElement>) {
    const { value } = e.target;
    setFeedback(value);
  }

  function satisfaction() {
    if (stars === 1) {
      return <Text fontSize={'48px'}>😤</Text>;
    } else if (stars === 2) {
      return <Text fontSize={'48px'}>😑</Text>;
    } else if (stars === 3) {
      return <Text fontSize={'48px'}>🙂</Text>;
    } else if (stars === 4) {
      return <Text fontSize={'48px'}>😄</Text>;
    } else if (stars === 5) {
      return <Text fontSize={'48px'}>😍</Text>;
    }
  }

  return (
    <Box>
      <Button onClick={() => dispatch(onOpen())}>Feedback</Button>
      <Modal
        size={'xs'}
        isOpen={isReviewModalOpen}
        onClose={() => dispatch(onClose())}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Review</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {state.succeeded ? (
              <VStack spacing={4}>
                <VStack>
                  <Box className='success-icon'>
                    <BsFillPatchCheckFill />
                  </Box>
                  <Text>Thank you for your feedback</Text>
                </VStack>
                <VStack>
                  <Text align={'center'}>
                    It would be great if you could star Tomper-Readmify on
                    Github if you found it useful 😄
                  </Text>
                  <Button
                    as={Link}
                    href={GITHUB_URL}
                    width={'100%'}
                    leftIcon={<AiFillGithub />}
                  >
                    varunKT001/tomper-readmify
                  </Button>
                </VStack>
              </VStack>
            ) : (
              <form onSubmit={handleSubmit}>
                <VStack spacing={4}>
                  {satisfaction()}
                  <ReviewStars
                    stars={stars}
                    handleClick={(index) => setStars(index)}
                  />
                  <FormControl>
                    <Textarea
                      name='comment'
                      value={feedback}
                      onChange={handleChange}
                      placeholder='Comments (if any)'
                    />
                    <FormHelperText>
                      Your feedback will remain anonymous
                    </FormHelperText>
                  </FormControl>
                  <FormControl>
                    <Input
                      hidden
                      name='rating'
                      value={stars}
                      onChange={() => {}}
                    />
                  </FormControl>
                  <Button
                    type='submit'
                    colorScheme='orange'
                    w={'100%'}
                    isLoading={state.submitting}
                    onClick={onClose}
                  >
                    Submit
                  </Button>
                </VStack>
              </form>
            )}
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
