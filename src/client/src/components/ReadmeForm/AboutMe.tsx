import {
  Input,
  HStack,
  VStack,
  FormControl,
  FormLabel,
  Button,
} from '@chakra-ui/react';
import { ChangeEvent, MouseEvent } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../redux';
import { About, change, ChangePayload } from '../../redux/form';

export function AboutMe() {
  const dispatch = useAppDispatch();
  const { aboutMe } = useSelector((store: RootState) => store.form);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
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
                value={item.title}
                onChange={handleChange}
              />
              <Input
                name={`aboutMe.${index}.name`}
                value={item.name}
                onChange={handleChange}
              />
              <Input
                name={`aboutMe.${index}.link`}
                value={item.link}
                onChange={handleChange}
              />
            </HStack>
          );
        })}
      </VStack>
    </FormControl>
  );
}
