import {
  Button,
  Checkbox,
  HStack,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  RadioGroup,
  Radio,
  VStack,
  Img,
} from '@chakra-ui/react';
import {
  checkbox,
  CheckboxPayload,
  theme,
  ThemePayload,
} from '../../redux/form';
import { HiOutlinePencilAlt } from 'react-icons/hi';
import { ChangeEvent } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../redux';

export function StreaksCard() {
  const dispatch = useAppDispatch();
  const { streaks } = useSelector((store: RootState) => store.extra);
  const { stats, githubUsername } = useSelector(
    (store: RootState) => store.form
  );

  const { isOpen, onOpen, onClose } = useDisclosure();

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const name = 'stats.options.streaks.show';
    const value = e.target.checked;

    const payload = { name, value } as CheckboxPayload;

    dispatch(checkbox(payload));
  }

  function handleTheme(value: string) {
    const name = 'stats.options.streaks.theme';

    const payload = { name, value } as ThemePayload;

    dispatch(theme(payload));
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
      <Button rightIcon={<HiOutlinePencilAlt />} size={'xs'} onClick={onOpen}>
        {stats.options.streaks.theme || 'Select Theme'}
      </Button>
      <Drawer size={'sm'} isOpen={isOpen} placement='left' onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Select Theme</DrawerHeader>
          <DrawerBody>
            <RadioGroup
              colorScheme='orange'
              value={stats.options.streaks.theme}
              onChange={handleTheme}
            >
              <VStack alignItems={'flex-start'}>
                {streaks.themes.map((theme) => {
                  return (
                    <VStack
                      p={2}
                      alignItems={'flex-start'}
                      borderWidth={1}
                      borderRadius={4}
                    >
                      <Radio value={theme}>{theme}</Radio>
                      <Img
                        src={`${streaks.base}?user=${githubUsername}&theme=${theme}`}
                      />
                    </VStack>
                  );
                })}
              </VStack>
            </RadioGroup>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </HStack>
  );
}
