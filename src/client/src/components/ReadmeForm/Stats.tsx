import {
  Checkbox,
  FormControl,
  FormLabel,
  HStack,
  VStack,
} from '@chakra-ui/react';
import { ChangeEvent, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../redux';
import { StreaksCard } from './StreaksCard';
import { CheckboxPayload, checkbox } from '../../redux/form';
import { ContributionsCard } from './ContributionsCard';

export function Stats() {
  const dispatch = useAppDispatch();
  const { stats } = useSelector((store: RootState) => store.form);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const name = 'stats.show';
    const value = e.target.checked;

    const payload = { name, value } as CheckboxPayload;

    dispatch(checkbox(payload));
  }

  return (
    <FormControl>
      <FormLabel>Stats</FormLabel>
      <VStack alignItems={'flex-start'}>
        <HStack>
          <Checkbox
            colorScheme='orange'
            isChecked={stats.show}
            onChange={handleChange}
          >
            Show stats
          </Checkbox>
        </HStack>
        {stats.show && (
          <VStack alignItems={'flex-start'} pl={6}>
            <StreaksCard />
            <ContributionsCard />
          </VStack>
        )}
      </VStack>
    </FormControl>
  );
}
