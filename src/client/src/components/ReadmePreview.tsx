import { useCallback, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../redux';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import { Box } from '@chakra-ui/react';
import { ChangePayload, change } from '../redux/template';
import { debounce } from '../utils/utility';

marked.setOptions({
  gfm: true,
});

export function ReadmePreview(): JSX.Element {
  const dispatch = useAppDispatch();
  const view = useSelector((store: RootState) => store.form);
  const { templateString, markdown, loading } = useSelector(
    (store: RootState) => store.template
  );

  const [html, setHtml] = useState<string>('');
  const [md, setMd] = useState<string>('');
  const [renderError, setRenderError] = useState<string>('');
  const mdRef = useRef(md);

  function handleRender() {
    try {
      if (!loading) {
        const payload = { name: 'loading', value: true } as ChangePayload;
        dispatch(change(payload));
      }

      const _md = window.ejs.render(templateString, view);
      const _html = DOMPurify.sanitize(marked.parse(_md));

      setHtml(_html);
      setMd(_md);
    } catch (error) {
      const err = error as Error;
      const errMessage = err.message as string;
      setRenderError(errMessage);
    }
  }

  const updateMarkdown = useCallback(
    debounce(function () {
      const _md = mdRef.current;
      const payload = { name: 'markdown', value: _md } as ChangePayload;
      dispatch(change(payload));
    }, 1000),
    []
  );

  useEffect(() => {
    handleRender();
  }, [templateString, view]);

  useEffect(() => {
    mdRef.current = md;
    updateMarkdown();
  }, [md]);

  useEffect(() => {
    if (loading) {
      const payload = { name: 'loading', value: false } as ChangePayload;
      dispatch(change(payload));
    }
  }, [markdown]);

  return (
    <Box
      p={2}
      borderWidth={2}
      borderRadius={'md'}
      w={'100%'}
      minH={'100%'}
      className='markdown-body'
      dangerouslySetInnerHTML={{
        __html: renderError ? renderError : html,
      }}
    />
  );
}
