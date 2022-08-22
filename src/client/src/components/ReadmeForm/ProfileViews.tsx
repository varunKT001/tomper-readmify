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
  Stack,
  Text,
  Input,
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
import { stat } from 'fs';

export function ProfileViews(): JSX.Element {
  const dispatch = useAppDispatch();
  const { profileViews } = useSelector((store: RootState) => store.extra);
  const { stats, githubUsername } = useSelector(
    (store: RootState) => store.form
  );

  const { isOpen, onOpen, onClose } = useDisclosure();

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const name = 'stats.profileViews.show';
    const value = e.target.checked;

    const payload = { name, value } as CheckboxPayload;

    dispatch(checkbox(payload));
  }

  function handleTheme(value: string) {
    const name = 'stats.profileViews.theme';

    const payload = { name, value } as ThemePayload;

    dispatch(theme(payload));
  }

  function handleStyle(value: string) {
    const name = 'stats.profileViews.style';

    const payload = { name, value } as ThemePayload;

    dispatch(theme(payload));
  }

  function handleLabel(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    const payload = { name, value } as ThemePayload;

    dispatch(theme(payload));
  }

  return (
    <HStack>
      <Checkbox
        colorScheme='orange'
        isChecked={stats.profileViews.show}
        onChange={handleChange}
      >
        Show Profile Views
      </Checkbox>
      <Button rightIcon={<HiOutlinePencilAlt />} size={'xs'} onClick={onOpen}>
        {stats.profileViews.theme || 'Select Theme'}
      </Button>
      <Drawer size={'sm'} isOpen={isOpen} placement='left' onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Select Theme</DrawerHeader>
          <DrawerBody>
            <VStack alignItems={'flex-start'}>
              <Input
                name={'stats.profileViews.label'}
                value={stats.profileViews.label}
                placeholder='Enter label'
                onChange={handleLabel}
              />
              <Stack
                direction={{ base: 'column', md: 'row' }}
                justifyContent={'space-between'}
              >
                <RadioGroup
                  colorScheme='orange'
                  value={stats.profileViews.theme}
                  onChange={handleTheme}
                >
                  <VStack alignItems={'flex-start'}>
                    <Text fontWeight={'600'}>Theme</Text>
                    {profileViews.themes.map((theme, index) => {
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
                            src={`${profileViews.base}?username=${githubUsername}&color=${theme}&label=${stats.profileViews.label}`}
                          />
                        </VStack>
                      );
                    })}
                  </VStack>
                </RadioGroup>
                <RadioGroup
                  colorScheme='orange'
                  value={stats.profileViews.style}
                  onChange={handleStyle}
                >
                  <VStack alignItems={'flex-start'}>
                    <Text fontWeight={'600'}>Style</Text>
                    {profileViews.styles.map((style, index) => {
                      return (
                        <VStack
                          key={index}
                          p={2}
                          alignItems={'flex-start'}
                          borderWidth={1}
                          borderRadius={4}
                        >
                          <Radio value={style}>{style}</Radio>
                          <Img
                            src={`${profileViews.base}?username=${githubUsername}&color=${stats.profileViews.theme}&style=${style}&label=${stats.profileViews.label}`}
                          />
                        </VStack>
                      );
                    })}
                  </VStack>
                </RadioGroup>
              </Stack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </HStack>
  );
}
