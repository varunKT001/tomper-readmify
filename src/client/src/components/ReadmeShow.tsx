import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux';
import ReactMarkdown from 'react-markdown';
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import { Box, Text, VStack } from '@chakra-ui/react';

export function ReadmeShow(): JSX.Element {
  const { templateString } = useSelector((store: RootState) => store.template);

  const [markdown, setMarkdown] = useState<string>('');

  useEffect(() => {
    const md = window.ejs.render(templateString, {
      fullName: 'Varun Kumar Tiwari',
    });
    setMarkdown(md);
  }, [templateString]);

  return (
    <VStack alignItems={'flex-start'} w={'100%'} h={'100%'}>
      <Text>Preview:</Text>
      <Box p={2} borderWidth={2} borderRadius={'md'} w={'100%'} h={'100%'}>
        <ReactMarkdown components={ChakraUIRenderer()}>
          {markdown}
        </ReactMarkdown>
      </Box>
    </VStack>
  );
}
