import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import { Box } from '@chakra-ui/react';

export function ReadmePreview(): JSX.Element {
  const { templateString } = useSelector((store: RootState) => store.template);

  const [markdown, setMarkdown] = useState<string>('');
  const [renderError, setRenderError] = useState<any>('');

  function handleRender() {
    try {
      const view = {
        fullName: 'Varun Kumar Tiwari',
        fields: ['Frontend Developer', 'Backend Developer'],
      };

      const md = DOMPurify.sanitize(
        marked.parse(window.ejs.render(templateString, view))
      );

      setMarkdown(md);
    } catch (error) {
      const err = error as Error;
      const errMessage = err.message as string;
      setRenderError(errMessage);
    }
  }

  useEffect(() => {
    handleRender();
  }, [templateString]);

  return (
    <Box
      p={2}
      borderWidth={2}
      borderRadius={'md'}
      w={'100%'}
      h={'100%'}
      className='markdown-body'
      dangerouslySetInnerHTML={{
        __html: renderError ? renderError : markdown,
      }}
    />
  );
}
