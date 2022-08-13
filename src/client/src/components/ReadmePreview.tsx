import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../redux';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import { Box } from '@chakra-ui/react';
import { ChangePayload, change } from '../redux/template';
import { debounce } from '../utils/utility';

export function ReadmePreview(): JSX.Element {
  const dispatch = useAppDispatch();
  const { templateString } = useSelector((store: RootState) => store.template);

  const view = useSelector((store: RootState) => store.form);

  const [md, setMd] = useState<string>('');
  const [renderError, setRenderError] = useState<string>('');

  function handleRender() {
    try {
      const _md = DOMPurify.sanitize(
        marked.parse(window.ejs.render(templateString, view))
      );

      setMd(_md);
      updateMarkdown();
    } catch (error) {
      const err = error as Error;
      const errMessage = err.message as string;
      setRenderError(errMessage);
    }
  }

  const updateMarkdown = useCallback(
    debounce(function () {
      console.log('updated');
      const payload = { name: 'markdown', value: md } as ChangePayload;
      dispatch(change(payload));
    }, 1000),
    []
  );

  useEffect(() => {
    handleRender();
  }, [templateString, view]);

  return (
    <Box
      p={2}
      borderWidth={2}
      borderRadius={'md'}
      w={'100%'}
      minH={'100%'}
      className='markdown-body'
      dangerouslySetInnerHTML={{
        __html: renderError ? renderError : md,
      }}
    />
  );
}
