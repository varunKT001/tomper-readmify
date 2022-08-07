import { Stack, Box } from '@chakra-ui/react';
import { ReadmeForm, ReadmePreview } from '../../components';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchTemplateInfo, RootState } from '../../redux';
import { useAppDispatch } from '../../redux';

export function CreateReadme(): JSX.Element {
  const { templateName, templateString } = useSelector(
    (store: RootState) => store.template
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTemplateInfo(templateName));
  }, [templateName]);

  return (
    <Stack
      h={'100%'}
      mx={'25px'}
      spacing={{ base: 4, md: 10 }}
      direction={{ base: 'column', md: 'row' }}
    >
      <Box w={{ base: '100%', md: '40%' }} h={{ base: '', md: '100%' }}>
        <ReadmeForm />
      </Box>
      <Box w={{ base: '100%', md: '60%' }} h={{ base: '', md: '100%' }}>
        <ReadmePreview />
      </Box>
    </Stack>
  );
}
