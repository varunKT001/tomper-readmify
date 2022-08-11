import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../redux';
import { openGithubUsernameModal as onOpen } from '../redux/form';
import { DEFAULT_GITHUB_USERNAME } from '../utils/contants';

export function ReadmeForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const { githubUsername } = useSelector((store: RootState) => store.form);
  const { acceptedFields } = useSelector((store: RootState) => store.template);

  useEffect(() => {
    if (
      githubUsername === DEFAULT_GITHUB_USERNAME &&
      acceptedFields.includes('githubUsername')
    ) {
      dispatch(onOpen());
    }
  }, [acceptedFields]);

  return <div>CreateReadmeForm</div>;
}
