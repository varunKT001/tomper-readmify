import { Button } from '@chakra-ui/react';
import { Toast } from '../config/toast';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../redux';
import { openReviewModal } from '../redux/extra';

export function CopyMarkdown() {
  const dispatch = useAppDispatch();
  const { markdown, loading } = useSelector(
    (store: RootState) => store.template
  );

  function handleCopy() {
    try {
      navigator.clipboard.writeText(markdown);

      Toast.success('Markdown copied to clipboard');

      setTimeout(() => {
        dispatch(openReviewModal());
      }, 2000);
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
