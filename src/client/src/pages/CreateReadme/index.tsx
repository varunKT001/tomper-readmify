import { SimpleGrid } from '@chakra-ui/react';
import { CreateReadmeForm, ReadmePreview } from '../../components';
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
    <SimpleGrid columns={2} spacing={2}>
      <CreateReadmeForm />
      <ReadmePreview />
    </SimpleGrid>
  );
}
