import { Checkbox, HStack } from '@chakra-ui/react';
import { ChangeEvent } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../redux';
import { checkbox, CheckboxPayload } from '../../redux/form';

export function StreaksCard() {
  const dispatch = useAppDispatch();
  const { stats } = useSelector((store: RootState) => store.form);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const name = 'stats.options.streaks.show';
    const value = e.target.checked;

    const payload = { name, value } as CheckboxPayload;

    dispatch(checkbox(payload));
  }

  return (
    <HStack>
      <Checkbox
        colorScheme='orange'
        isChecked={stats.options.streaks.show}
        onChange={handleChange}
      >
        Show streaks
      </Checkbox>
    </HStack>
  );
}
