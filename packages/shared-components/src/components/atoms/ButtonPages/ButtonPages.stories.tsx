
import { StoryFn as Story } from '@storybook/react';
import ButtonPages from './ButtonPages';
import StoryContainer from '../../storybook/Story';
import StoryItem from '../../storybook/StoryItem';

import StoryRow from '../../storybook/StoryRow';
import ControlGroup from '../ControlGroup';
/* eslint-disable max-len */
export default {
  title: 'controls/withTest/ButtonPages',
  component: ButtonPages,
};

const onChange = (p: number) => {
  //
};

export const Demo = () => {
  return (
    <StoryContainer name='Переключатель страниц' description='Переключатель страниц'>
      <StoryItem>
        <ButtonPages max={8} onChange={onChange}/>
      </StoryItem>
    </StoryContainer>
  );
};

export const Playground: Story = (args) => {
  return (
    <StoryContainer>
      <StoryRow>
        <ControlGroup>
          <ButtonPages max={8} onChange={onChange} {...args}/>
        </ControlGroup>
      </StoryRow>
    </StoryContainer>
  );
};

Demo.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Tl0AmqQJK4qaCl4pLRio7A/Design-System-for-Story-Book?node-id=18%3A23793'
  }
};
