

import { StoryFn as Story } from '@storybook/react';

import StoryContainer from '../../storybook/Story';
import StoryRow from '../../storybook/StoryRow';

import Breadcrumbs from '.';
import { StoryDocsH1 } from '../../storybook';

import breadcrumbs from './mock';
import { BrowserRouter } from 'react-router-dom';

export default {
  title: 'components/withTest/Breadcrumbs',
  component: Breadcrumbs,

};

export const Demo = () => {
  return (
    <BrowserRouter>
      <StoryContainer>
        <StoryDocsH1>Breadcrumbs</StoryDocsH1>

        <StoryRow>
          <Breadcrumbs list={breadcrumbs} />
        </StoryRow>
        <StoryRow>
          <Breadcrumbs list={breadcrumbs.filter((_, index) => index !== 2)} />
        </StoryRow>
      </StoryContainer>
    </BrowserRouter>
  );
};


Demo.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Tl0AmqQJK4qaCl4pLRio7A/Ui-Home-for-Story-Book?node-id=3748%3A74866',
  },
  actions: { disabled: true },
  controls: { disabled: true }
};

export const Playground: Story = (args: any) => {
  return (
    <BrowserRouter>
      <StoryContainer>
        <StoryRow>
          <Breadcrumbs {...args} list={breadcrumbs} />
        </StoryRow>
      </StoryContainer>
    </BrowserRouter>
  );
};
