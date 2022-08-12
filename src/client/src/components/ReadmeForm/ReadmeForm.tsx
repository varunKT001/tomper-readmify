import {
  FormControl,
  FormLabel,
  Box,
  VStack,
  HStack,
  Input,
  Button,
  Tag,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  TagCloseButton,
  FormHelperText,
} from '@chakra-ui/react';
import {
  change,
  ChangePayload,
  openGithubUsernameModal as onOpen,
} from '../../redux/form';
import { MouseEvent, ChangeEvent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../redux';
import { DEFAULT_GITHUB_USERNAME } from '../../utils/contants';
import { FieldsOfWork } from './FieldsOfWork';

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
            value={form.fullName}
            onChange={handleChange}
          />
        </FormControl>
      )}
      {acceptedFields.includes('fieldsOfWork') && <FieldsOfWork />}
    </VStack>
  );
}
