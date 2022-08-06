import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux';
import ReactMarkdown from 'react-markdown';
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';

export function ReadmePreview(): JSX.Element {
  const { templateString } = useSelector((store: RootState) => store.template);

  const [markdown, setMarkdown] = useState<string>('');

  useEffect(() => {
    const md = window.ejs.render(templateString, {
      fullName: 'Varun Kumar Tiwari',
    });
    setMarkdown(md);
  }, [templateString]);

  return (
    <ReactMarkdown components={ChakraUIRenderer()}>{markdown}</ReactMarkdown>
  );
}
