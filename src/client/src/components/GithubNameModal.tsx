import {
  Button,
  HStack,
  Input,
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
} from '@chakra-ui/react';
import { ChangeEvent, MouseEvent, useState } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../redux';
import {
  change,
  openGithubUsernameModal as onOpen,
  closeGithubUsernameModal as onClose,
  ChangePayload,
} from '../redux/form';

export function GithubNameModal(): JSX.Element {
  const dispatch = useAppDispatch();
  const { githubUsername, isGithubUsernameModalOpen } = useSelector(
    (store: RootState) => store.form
  );

  const [name, setName] = useState<string>(() => githubUsername);

  function handleNameChange(e: ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }

  function ChangeGithubUsername(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    const payload: ChangePayload = { name: 'githubUsername', value: name };

    dispatch(change(payload));
    dispatch(onClose());
  }

  return (
    <Box>
      <Button leftIcon={<AiFillGithub />} onClick={() => dispatch(onOpen())}>
        {`/${githubUsername}`}
      </Button>
      <Modal
        blockScrollOnMount={false}
        isOpen={isGithubUsernameModalOpen}
        onClose={() => dispatch(onClose())}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Github Username</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form>
              <HStack>
                <Input
                  value={name}
                  onChange={handleNameChange}
                  placeholder={'Your Github Username'}
                />
                <Button type={'submit'} onClick={ChangeGithubUsername}>
                  Save
                </Button>
              </HStack>
            </form>
          </ModalBody>
          <ModalFooter />
        </ModalContent>
      </Modal>
    </Box>
  );
}
