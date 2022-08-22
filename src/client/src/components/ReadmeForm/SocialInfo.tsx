import {
  Input,
  HStack,
  VStack,
  FormControl,
  FormLabel,
  Button,
  IconButton,
  Select,
} from '@chakra-ui/react';
import { AiOutlineDelete, AiOutlinePlus } from 'react-icons/ai';
import { ChangeEvent, MouseEvent } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../redux';
import { Social, change, ChangePayload } from '../../redux/form';

export function SocialInfo(): JSX.Element {
  const dispatch = useAppDispatch();
  const { socialIcons } = useSelector((store: RootState) => store.extra);
  const { socials } = useSelector((store: RootState) => store.form);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    const payload = { name, value } as ChangePayload;
    dispatch(change(payload));
  }

  function handleSelect(e: ChangeEvent<HTMLSelectElement>) {
    const { name, value } = e.target;
    const payload = { name, value } as ChangePayload;
    dispatch(change(payload));

    const index = e.target.dataset['index'];
    const _name = `socials.${index}.icon`;
    const _value = `${socialIcons.base}/${value}.svg`;
    const _payload = { name: _name, value: _value } as ChangePayload;
    dispatch(change(_payload));
  }

  function addRow(e: MouseEvent<HTMLButtonElement>) {
    const row = { name: '', url: '' };
    const name = 'socials';
    const value = [...socials, row];

    const payload = { name, value } as ChangePayload;

    dispatch(change(payload));
  }

  function deleteRow(e: MouseEvent<HTMLButtonElement>) {
    const index = parseInt(
      (e.currentTarget as HTMLElement).getAttribute('data-index') as string
    );

    const name = 'socials';
    const value = socials.filter((_, idx: number) => index !== idx);

    const payload = { name, value } as ChangePayload;

    dispatch(change(payload));
  }

  return (
    <FormControl>
      <FormLabel>Socials</FormLabel>
      <VStack alignItems={'flex-start'} spacing={2}>
        {socials.map((item: Social, index: number) => {
          return (
            <HStack key={index} w={'100%'}>
              <Select
                name={`socials.${index}.name`}
                data-index={index}
                value={item.name}
                onChange={handleSelect}
              >
                {Object.keys(socialIcons.icons).map((s, _index) => {
                  return (
                    <option key={_index} value={s}>
                      {s}
                    </option>
                  );
                })}
              </Select>
              <Input
                name={`socials.${index}.url`}
                placeholder={'Link'}
                value={item.url}
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
