
import { StoryFn as Story } from '@storybook/react';

import Tile from './Tile';
import StoryContainer from '../../storybook/Story';
import StoryRow from '../../storybook/StoryRow';
import StoryItem from '../../storybook/StoryItem';

export default {
  title: 'controls/withTest/Tile',
  component: Tile,
  argTypes: {
    children: { control: null },
    borderRadius: { type: 'string' },
    padding: { type: 'string' },
  },
};

export const Demo = () => {
  return (
    <StoryContainer name='Tile (Плитка)'>
      <StoryRow>
        <StoryItem description='Плитка оборачивает контент в стилизованный блок'>
          <div
            style={{
              backgroundColor: '#F1F2F4',
              padding: '20px',
              width: '600px',
            }}
          >
            <Tile>
              variant <strong>default</strong>
            </Tile>

            <Tile variant='clickable-default'>
              variant <strong>clickable-default</strong>
            </Tile>

            <Tile variant='clickable-hover'>
              variant <strong>clickable-hover</strong>
            </Tile>

            <Tile variant='non-clickable'>
              variant <strong>non-clickable</strong>
            </Tile>

            <Tile variant='border'>
              variant <strong>border</strong>
            </Tile>
          </div>
        </StoryItem>
      </StoryRow>
    </StoryContainer>
  );
};

export const Playground: Story = (args) => {
  return (
    <StoryContainer>
      <StoryRow>
        <Tile {...args}>Контент</Tile>
      </StoryRow>
    </StoryContainer>
  );
};

Demo.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Tl0AmqQJK4qaCl4pLRio7A/Design-System-for-Story-Book?node-id=4%3A15736',
  },
};
