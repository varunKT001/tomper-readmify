import { FormControl, FormLabel } from '@chakra-ui/react';
import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
  AutoCompleteTag,
} from '@choc-ui/chakra-autocomplete';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../redux';
import { ChangePayload } from '../../redux/form';
import { change } from '../../redux/form';

export function SkillSelect(): JSX.Element {
  const dispatch = useAppDispatch();
  const { skillBadges } = useSelector((store: RootState) => store.extra);
  const { skills } = useSelector((store: RootState) => store.form);

  function handleSelect(vals: string[]) {
    const name = 'skills';
    const value = skillBadges.filter((obj) => vals.includes(obj.skill));
    const payload = { name, value } as ChangePayload;
    dispatch(change(payload));
  }

  return (
    <FormControl>
      <FormLabel>Technical Skills</FormLabel>
      <AutoComplete
        openOnFocus
        multiple
        maxSuggestions={5}
        value={skills.map((s) => s.skill)}
        onChange={handleSelect}
      >
        <AutoCompleteInput placeholder='Enter your skills' autoComplete='off'>
          {({ tags }) =>
            tags.map((tag, tid) => (
              <AutoCompleteTag
                key={tid}
                label={tag.label}
                bgColor={'orange.500'}
                color={'white'}
                fontWeight={'600'}
                onRemove={tag.onRemove}
              />
            ))
          }
        </AutoCompleteInput>
        <AutoCompleteList>
          {skillBadges.map((skill, index) => (
            <AutoCompleteItem
              key={index}
              value={skill.skill}
              textTransform='capitalize'
            >
              {skill.skill}
            </AutoCompleteItem>
          ))}
        </AutoCompleteList>
      </AutoComplete>
    </FormControl>
  );
}
