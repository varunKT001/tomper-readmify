import {
  FormControl,
  FormLabel,
  Box,
  HStack,
  Input,
  Button,
  Tag,
  TagLabel,
  TagCloseButton,
  FormHelperText,
} from '@chakra-ui/react';
import { change, ChangePayload } from '../../redux/form';
import { MouseEvent, ChangeEvent, useState } from 'react';
import { Toast } from '../../config/toast';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../redux';

export function FieldsOfWork() {
  const dispatch = useAppDispatch();
  const form = useSelector((store: RootState) => store.form);

  const [field, setField] = useState<string>('');

  function handleField(e: ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    setField(value);
  }

  function addFieldsOfWork(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    const arr = form.fieldsOfWork.concat(field);

    if (!field) {
      Toast.error('Please enter a field of work');
      return;
    }

    if (arr.length > 3) {
      Toast.error('Number of fields of work cannot exceed 3');
      return;
    }

    const payload = { name: 'fieldsOfWork', value: arr } as ChangePayload;
    dispatch(change(payload));
  }

  function removeFieldOfWork(e: MouseEvent<HTMLElement>) {
    const index = parseInt(
      (e.currentTarget as HTMLElement).getAttribute('data-index') as string
    );

    const arr = form.fieldsOfWork.filter((_, idx: number) => index !== idx);

    const payload = { name: 'fieldsOfWork', value: arr } as ChangePayload;
    dispatch(change(payload));
  }

  return (
    <FormControl>
      <form>
        <FormLabel>Fields of Work</FormLabel>
        <Box>
          <HStack>
            <Input name={'fieldsOfWork'} onChange={handleField} />
            <Button type={'submit'} onClick={addFieldsOfWork}>
              Add
            </Button>
          </HStack>
          <FormHelperText>Maximum: 3</FormHelperText>
          <HStack flexWrap={'wrap'} mt={2}>
            {form.fieldsOfWork.map((field: string, index: number) => {
              return (
                <Tag key={index} variant='solid' colorScheme='orange'>
                  <TagLabel>{field}</TagLabel>
                  <TagCloseButton
                    data-index={index}
                    onClick={removeFieldOfWork}
                  />
                </Tag>
              );
            })}
          </HStack>
        </Box>
      </form>
    </FormControl>
  );
}
