import { FormControl, FormLabel, VStack, Input } from '@chakra-ui/react';
import { ChangeEvent, FormEvent, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../redux';
import {
  change,
  ChangePayload,
  openGithubUsernameModal as onOpen,
} from '../redux/form';
import { DEFAULT_GITHUB_USERNAME } from '../utils/contants';

export function ReadmeForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const { githubUsername } = useSelector((store: RootState) => store.form);
  const { acceptedFields } = useSelector((store: RootState) => store.template);

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    const payload = { name, value } as ChangePayload;
    dispatch(change(payload));
  }

  useEffect(() => {
    if (
      githubUsername === DEFAULT_GITHUB_USERNAME &&
      acceptedFields.includes('githubUsername')
    ) {
      dispatch(onOpen());
    }
  }, [acceptedFields]);

  return (
    <VStack>
      {acceptedFields.includes('fullName') && (
        <FormControl>
          <FormLabel>Full Name</FormLabel>
          <Input name={'fullName'} />
        </FormControl>
      )}
    </VStack>
  );
}
