import { Stack, Box, HStack } from '@chakra-ui/react';
import {
  CopyMarkdown,
  GithubNameModal,
  ReadmeForm,
  ReadmePreview,
  ThemeSelector,
} from '../../components';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchTemplateInfo, RootState } from '../../redux';
import { useAppDispatch } from '../../redux';

export function CreateReadme(): JSX.Element {
  const dispatch = useAppDispatch();
  const { templateName, templateString, acceptedFields } = useSelector(
    (store: RootState) => store.template
  );

  useEffect(() => {
    dispatch(fetchTemplateInfo(templateName));
  }, [templateName]);

  return (
    <Stack
      minH={'100%'}
      mx={'25px'}
      spacing={{ base: 4, md: 10 }}
      direction={'column'}
    >
      <HStack mt={2} justifyContent={'space-between'}>
        <HStack>
          <ThemeSelector />
          {acceptedFields.includes('githubUsername') && <GithubNameModal />}
        </HStack>
        <CopyMarkdown />
      </HStack>
      <Stack
        minH={'100%'}
        flexGrow={1}
        spacing={{ base: 4, md: 10 }}
        direction={{ base: 'column', md: 'row' }}
      >
        <Box
          className='no-scroll-bar'
          w={{ base: '100%', md: '40%' }}
          minH={{ base: '', md: '100%' }}
        >
          <ReadmeForm />
        </Box>
        <Box
          className='no-scroll-bar'
          w={{ base: '100%', md: '60%' }}
          minH={{ base: '', md: '100%' }}
        >
          <ReadmePreview />
        </Box>
      </Stack>
    </Stack>
  );
}
