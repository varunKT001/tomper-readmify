import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux';
import ReactMarkdown from 'react-markdown';
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import { Box, Text, VStack } from '@chakra-ui/react';

const EMOJIS = ['😏', '🐸', '🔫', '🌵'];

export function ReadmePreview(): JSX.Element {
  const { templateString } = useSelector((store: RootState) => store.template);

  const [markdown, setMarkdown] = useState<string>('');
  const [renderError, setRenderError] = useState<any>('');

  useEffect(() => {
    try {
      const view = {
        fullName: 'Varun Kumar Tiwari',
        fields: [
          {
            emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
            name: 'frontend',
          },
          {
            emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
            name: 'backend',
          },
        ],
      };

      const md = window.ejs.render(templateString, view);
      setMarkdown(md);
    } catch (error) {
      const err = error as Error;
      const errMessage = err.message as string;
      setRenderError(errMessage);
    }
  }, [templateString]);

  return (
    <VStack alignItems={'flex-start'} w={'100%'} h={'100%'}>
      <Text>Preview:</Text>
      <Box p={2} borderWidth={2} borderRadius={'md'} w={'100%'} h={'100%'}>
        <ReactMarkdown components={ChakraUIRenderer()}>
          {markdown ? markdown : renderError}
        </ReactMarkdown>
      </Box>
    </VStack>
  );
}
