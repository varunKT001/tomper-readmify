import {
  Input,
  HStack,
  VStack,
  FormControl,
  FormLabel,
  Button,
  IconButton,
  Icon,
} from '@chakra-ui/react';
import { AiOutlineDelete, AiOutlinePlus } from 'react-icons/ai';
import { ChangeEvent, MouseEvent } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../redux';
import { About, change, ChangePayload } from '../../redux/form';
import { EMOJIS } from '../../utils/contants';

export function AboutMe() {
  const dispatch = useAppDispatch();
  const { aboutMe } = useSelector((store: RootState) => store.form);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    const payload = { name, value } as ChangePayload;
    dispatch(change(payload));
  }

  function addRow(e: MouseEvent<HTMLButtonElement>) {
    const emoji = EMOJIS[Math.floor(Math.random() * EMOJIS.length)];
    const row = { emoji, title: '', name: '', link: '' };
    const name = 'aboutMe';
    const value = [...aboutMe, row];

    const payload = { name, value } as ChangePayload;

    dispatch(change(payload));
  }

  function deleteRow(e: MouseEvent<HTMLButtonElement>) {
    const index = parseInt(
      (e.currentTarget as HTMLElement).getAttribute('data-index') as string
    );

    const name = 'aboutMe';
    const value = aboutMe.filter((_, idx: number) => index !== idx);

    const payload = { name, value } as ChangePayload;

    dispatch(change(payload));
  }

  return (
    <FormControl>
      <FormLabel>About Me</FormLabel>
      <VStack alignItems={'flex-start'} spacing={2}>
        {aboutMe.map((item: About, index: number) => {
          return (
            <HStack key={index}>
              <Input
                name={`aboutMe.${index}.title`}
                placeholder={'Title'}
                value={item.title}
                onChange={handleChange}
              />
              <Input
                name={`aboutMe.${index}.name`}
                placeholder={'Name'}
                value={item.name}
                onChange={handleChange}
              />
              <Input
                name={`aboutMe.${index}.link`}
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
