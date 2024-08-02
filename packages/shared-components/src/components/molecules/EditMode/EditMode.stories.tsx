import  { useEffect, useState } from 'react';
import { StoryFn as Story } from '@storybook/react';

import StoryContainer from '../../storybook/Story';
import StoryRow from '../../storybook/StoryRow';
import EditMode from './EditMode';
import { StoryDocsH1 } from '../../storybook';

export default {
  title: 'components/withTest/EditMode',
  component: EditMode,
};

export const Demo: Story = () => {
  const [value, setValue] = useState('default value');
  const [invalidValue, setInvalidValue] = useState('Очисти это поле');
  const [isInvalid, setIsInvalid] = useState(true);

  useEffect(() => {
    setIsInvalid(invalidValue === '');
  }, [invalidValue]);

  return (
    <StoryContainer>
      <StoryDocsH1>EditMode</StoryDocsH1>

      <StoryRow>
        <EditMode
          label='Простое поле'
          defaultValue={value}
          onChange={setValue}
        />
      </StoryRow>

      <StoryRow>
        <EditMode
          label='Простое поле (disabled)'
          defaultValue='disabled'
          disabled
        />
      </StoryRow>

      <StoryRow>
        <EditMode
          label='Поле с валидацией (invalid)'
          defaultValue={invalidValue}
          fromGroupProps={{
            label: 'label',
            errorMessage: isInvalid && 'Обязательное поле'
          }}
          invalid={isInvalid}
          onChange={setInvalidValue}
        />
      </StoryRow>
    </StoryContainer>
  );
};

export const Playground: Story = (args) => {
  const [value, setValue] = useState('default');

  return (
    <StoryContainer>
      <StoryRow>
        <EditMode defaultValue={value} {...args} onSave={setValue} />
      </StoryRow>
    </StoryContainer>
  );
};

Playground.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Tl0AmqQJK4qaCl4pLRio7A/Ui-Home-for-Story-Book?node-id=3747%3A69871',
  },
};
