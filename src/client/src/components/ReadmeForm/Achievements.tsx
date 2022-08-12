import {
  Input,
  HStack,
  VStack,
  FormControl,
  FormLabel,
  Button,
  IconButton,
} from '@chakra-ui/react';
import { AiOutlineDelete, AiOutlinePlus } from 'react-icons/ai';
import { ChangeEvent, MouseEvent } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../redux';
import { Achievement, change, ChangePayload } from '../../redux/form';

export function Achievements(): JSX.Element {
  const dispatch = useAppDispatch();
  const { achievements } = useSelector((store: RootState) => store.form);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    const payload = { name, value } as ChangePayload;
    dispatch(change(payload));
  }

  function addRow(e: MouseEvent<HTMLButtonElement>) {
    const row = { title: '', link: '' };
    const name = 'achievements';
    const value = [...achievements, row];

    const payload = { name, value } as ChangePayload;

    dispatch(change(payload));
  }

  function deleteRow(e: MouseEvent<HTMLButtonElement>) {
    const index = parseInt(
      (e.currentTarget as HTMLElement).getAttribute('data-index') as string
    );

    const name = 'achievements';
    const value = achievements.filter((_, idx: number) => index !== idx);

    const payload = { name, value } as ChangePayload;

    dispatch(change(payload));
  }

  return (
    <FormControl>
      <FormLabel>Some Achievements</FormLabel>
      <VStack alignItems={'flex-start'} spacing={2}>
        {achievements.map((item: Achievement, index: number) => {
          return (
            <HStack key={index} w={'100%'}>
              <Input
                name={`achievements.${index}.title`}
                placeholder={'Title'}
                value={item.title}
                onChange={handleChange}
              />
              <Input
                name={`achievements.${index}.link`}
                placeholder={'link (if any)'}
                value={item.link}
                onChange={handleChange}
              />
              <IconButton
                aria-label='Delete row'
                data-index={index}
                icon={<AiOutlineDelete />}
                onClick={deleteRow}
              />
            </HStack>
          );
        })}
        <Button leftIcon={<AiOutlinePlus />} onClick={addRow}>
          Add Row
        </Button>
      </VStack>
    </FormControl>
  );
}
