import { FormControl, FormLabel, Input } from '@chakra-ui/react';
import { change, ChangePayload } from '../../redux/form';
import { ChangeEvent } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../redux';

export function Fullname(): JSX.Element {
  const dispatch = useAppDispatch();
  const form = useSelector((store: RootState) => store.form);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    const payload = { name, value } as ChangePayload;
    dispatch(change(payload));
  }

  return (
    <FormControl>
      <FormLabel>Full Name</FormLabel>
      <Input
        name={'fullName'}
        placeholder={'Enter your fullname'}
        value={form.fullName}
        onChange={handleChange}
      />
    </FormControl>
  );
}
