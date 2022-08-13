import { Button } from '@chakra-ui/react';
import { Toast } from '../config/toast';
import { useSelector } from 'react-redux';
import { RootState } from '../redux';

export function CopyMarkdown() {
  const { markdown, loading } = useSelector(
    (store: RootState) => store.template
  );

  function handleCopy() {
    try {
      navigator.clipboard.writeText(markdown);
      Toast.success('Markdown copied to clipboard');
    } catch (error) {
      const err = error as Error;
      Toast.error(err.message);
    }
  }

  return (
    <Button isLoading={loading} loadingText={'Compiling'} onClick={handleCopy}>
      Copy Markdown
    </Button>
  );
}
