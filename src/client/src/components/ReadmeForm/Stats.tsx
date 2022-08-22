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
import { ProfileViews } from './ProfileViews';

export function Stats(): JSX.Element {
  const dispatch = useAppDispatch();
  const { stats } = useSelector((store: RootState) => store.form);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const name = e.target.name;
    const value = e.target.checked;

    const payload = { name, value } as CheckboxPayload;

    dispatch(checkbox(payload));
  }

  return (
    <FormControl>
      <FormLabel>Other Stats</FormLabel>
      <VStack alignItems={'flex-start'}>
        <HStack>
          <Checkbox
            name='stats.show'
            colorScheme='orange'
            isChecked={stats.show}
            onChange={handleChange}
          >
            Show Github Stats
          </Checkbox>
        </HStack>
        {stats.show && (
          <VStack alignItems={'flex-start'} pl={6}>
            <StreaksCard />
            <ContributionsCard />
          </VStack>
        )}
        <ProfileViews />
      </VStack>
    </FormControl>
  );
}
