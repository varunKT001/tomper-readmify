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

export function ContributionsCard(): JSX.Element {
  const dispatch = useAppDispatch();
  const { contributions } = useSelector((store: RootState) => store.extra);
  const { stats, githubUsername } = useSelector(
    (store: RootState) => store.form
  );

  const { isOpen, onOpen, onClose } = useDisclosure();

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const name = 'stats.github.contributions.show';
    const value = e.target.checked;

    const payload = { name, value } as CheckboxPayload;

    dispatch(checkbox(payload));
  }

  function handleTheme(value: string) {
    const name = 'stats.github.contributions.theme';

    const payload = { name, value } as ThemePayload;

    dispatch(theme(payload));
  }

  return (
    <HStack>
      <Checkbox
        colorScheme='orange'
        isChecked={stats.github.contributions.show}
        onChange={handleChange}
      >
        Show contribution stats
      </Checkbox>
      <Button rightIcon={<HiOutlinePencilAlt />} size={'xs'} onClick={onOpen}>
        {stats.github.contributions.theme || 'Select Theme'}
      </Button>
      <Drawer size={'sm'} isOpen={isOpen} placement='left' onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Select Theme</DrawerHeader>
          <DrawerBody>
            <RadioGroup
              colorScheme='orange'
              value={stats.github.contributions.theme}
              onChange={handleTheme}
            >
              <VStack alignItems={'flex-start'}>
                {contributions.themes.map((theme, index) => {
                  return (
                    <VStack
                      key={index}
                      p={2}
                      alignItems={'flex-start'}
                      borderWidth={1}
                      borderRadius={4}
                    >
                      <Radio value={theme}>{theme}</Radio>
                      <Img
                        src={`${contributions.base}?username=${githubUsername}&theme=${theme}`}
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
