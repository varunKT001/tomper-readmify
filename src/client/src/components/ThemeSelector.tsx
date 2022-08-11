import { Select } from '@chakra-ui/react';
import { ChangeEvent, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../redux';
import { change, ChangePayload, fetchTemplateInfo } from '../redux/template';

export function ThemeSelector() {
  const { templateName } = useSelector((store: RootState) => store.template);
  const dispatch = useAppDispatch();

  function handleTemplateChange(e: ChangeEvent<HTMLSelectElement>) {
    const { name, value } = e.target;
    const payload = { name, value } as ChangePayload;
    dispatch(change(payload));
  }

  useEffect(() => {
    dispatch(fetchTemplateInfo(templateName));
  }, [templateName]);

  return (
    <Select
      name={'templateName'}
      size={'md'}
      value={templateName}
      onChange={handleTemplateChange}
    >
      <option value='simple'>Simple</option>
      <option value='classic'>Classic</option>
    </Select>
  );
}
