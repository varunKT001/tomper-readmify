import { FormControl, FormLabel, VStack, Input } from '@chakra-ui/react';
import { change, ChangePayload } from '../../redux/form';
import { openGithubUsernameModal as onOpen } from '../../redux/extra';
import { ChangeEvent, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../redux';
import { DEFAULT_GITHUB_USERNAME } from '../../utils/contants';
import { FieldsOfWork } from './FieldsOfWork';
import { AboutMe } from './AboutMe';
import { Achievements } from './Achievements';

export function ReadmeForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const form = useSelector((store: RootState) => store.form);
  const { acceptedFields } = useSelector((store: RootState) => store.template);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    const payload = { name, value } as ChangePayload;
    dispatch(change(payload));
  }

  useEffect(() => {
    if (
      form.githubUsername === DEFAULT_GITHUB_USERNAME &&
      acceptedFields.includes('githubUsername')
    ) {
      dispatch(onOpen());
    }
  }, [acceptedFields]);

  return (
    <VStack spacing={6}>
      {acceptedFields.includes('fullName') && (
        <FormControl>
          <FormLabel>Full Name</FormLabel>
          <Input
            name={'fullName'}
            placeholder={'Enter your fullname'}
            value={form.fullName}
            onChange={handleChange}
          />
        </FormControl>
      )}
      {acceptedFields.includes('fieldsOfWork') && <FieldsOfWork />}
      {acceptedFields.includes('aboutMe') && <AboutMe />}
      {acceptedFields.includes('achievements') && <Achievements />}
    </VStack>
  );
}
