import {
  fetchContributionInfo,
  fetchProfileViews,
  fetchSkillBadges,
  fetchSocialIcons,
  fetchStreaksInfo,
  openGithubUsernameModal as onOpen,
} from '../../redux/extra';
import { VStack } from '@chakra-ui/react';
import { change, ChangePayload } from '../../redux/form';
import { ChangeEvent, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../redux';
import { DEFAULT_GITHUB_USERNAME } from '../../utils/contants';
import { FieldsOfWork } from './FieldsOfWork';
import { AboutMe } from './AboutMe';
import { Achievements } from './Achievements';
import { SkillSelect } from './SkillSelect';
import { Fullname } from './Fullname';
import { Stats } from './Stats';
import { SocialInfo } from './SocialInfo';

export function ReadmeForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const form = useSelector((store: RootState) => store.form);
  const { acceptedFields } = useSelector((store: RootState) => store.template);

  useEffect(() => {
    if (
      form.githubUsername === DEFAULT_GITHUB_USERNAME &&
      acceptedFields.includes('githubUsername')
    ) {
      dispatch(onOpen());
    }

    if (acceptedFields.includes('skills')) {
      dispatch(fetchSkillBadges('/skill-badges'));
    }

    if (acceptedFields.includes('stats')) {
      dispatch(fetchStreaksInfo('/streaks-info'));
      dispatch(fetchContributionInfo('/contribution-info'));
      dispatch(fetchProfileViews('/profile-views'));
    }

    if (acceptedFields.includes('socials')) {
      dispatch(fetchSocialIcons('/social-icons'));
    }
  }, [acceptedFields]);

  return (
    <VStack spacing={6}>
      {acceptedFields.includes('fullName') && <Fullname />}
      {acceptedFields.includes('fieldsOfWork') && <FieldsOfWork />}
      {acceptedFields.includes('aboutMe') && <AboutMe />}
      {acceptedFields.includes('achievements') && <Achievements />}
      {acceptedFields.includes('skills') && <SkillSelect />}
      {acceptedFields.includes('socials') && <SocialInfo />}
      {acceptedFields.includes('stats') && <Stats />}
    </VStack>
  );
}
