/* eslint-disable max-len */

import { StoryFn as Story } from '@storybook/react';
import {
  StoryDocs, StoryDocsH1, StoryDocsDescription
} from '../../storybook';
import StoryContainer from '../../storybook/Story';
import StoryItem from '../../storybook/StoryItem';
import StoryRow from '../../storybook/StoryRow';
import Badge, { IBadgeProps } from './Badge';

import Unread from '../Unread';

export default {
  title: 'components/withTest/Badge',
  component: Badge,
  argTypes: {
    variant: {
      options: [
        'light',
        'info',
        'warning',
        'success',
        'error',
        'grey',
        'dark',
        'light-inactive',
        'light-disable',
        'white',
        'white-inactive',
        'white-disable'
      ],
      control: { type: 'select' },
      defaultValue: 'info'
    },
    display: {
      options: [true, false],
      control: { type: 'boolean' },
      default: true
    },
    placeNear: {
      options: [true, false],
      control: { type: 'boolean' },
      default: false
    },
    size: {
      options: ['s', 'm'],
      control: { type: 'select' },
      defaultValue: 'm'
    }
  }
};


export const Demo: Story = (props: IBadgeProps) => {
  return (
    <StoryDocs>

      <StoryDocsH1>Badge</StoryDocsH1>
      <StoryDocsDescription>Компонент Бейджа</StoryDocsDescription>
      <StoryItem subtitle='Простой значок info M'>
        <Badge size='m'>
        </Badge>

      </StoryItem>
      <StoryItem subtitle='Простой значок info S'>
        <Badge size='s' >
        </Badge>
      </StoryItem>


      <StoryItem subtitle='Простой значок M '>
        <Badge badgeContent='5' >
        </Badge>
      </StoryItem>
      <StoryItem subtitle='Простой значок  S'>

        <Badge size='s' placeNear={true} badgeContent='5' >
          <p>  Заголовок</p>
        </Badge>
      </StoryItem>

      <StoryItem subtitle='Простой значок'>

        <Badge badgeContent='5' >
          <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' style={{ color: '#888' }}>
            <path
              d='M4.23189 8.76499C3.77232 8.40651 3.10156 8.73215 3.10138 9.315C3.10084 11.1344 3.09999 14.2613 3.09999 16.12C3.09999 17.78 4.43999 19.12 6.09999 19.12H18.1C19.76 19.12 21.1 17.78 21.1 16.12C21.1 13.8399 21.1511 11.5519 21.1248 9.2699C21.1182 8.69995 20.4669 8.38656 20.013 8.73127L15.4407 12.2033L18.0233 14.1464C18.3101 14.3623 18.3677 14.7698 18.1519 15.0566C17.936 15.3435 17.5285 15.4011 17.2417 15.1852L14.3646 13.0205L14.232 13.1213C12.9131 14.1228 11.0853 14.1109 9.77962 13.0924L9.66192 13.0006L9.66055 13.0016L6.75834 15.1852C6.47149 15.4011 6.06398 15.3435 5.84815 15.0566C5.63231 14.7698 5.68989 14.3623 5.97675 14.1464L8.6003 12.1725L4.23189 8.76499Z'
              fill='currentColor' />
            <path
              d='M3.82051 6.03702C3.59589 6.29911 3.67888 6.68491 3.95105 6.89721L10.5792 12.0674C11.4199 12.7231 12.5967 12.7307 13.4458 12.0859L20.2525 6.917C20.5286 6.70733 20.6159 6.32039 20.392 6.05565C19.8406 5.40349 19.0166 4.98999 18.1 4.98999H6.09999C5.18667 4.98999 4.37021 5.39563 3.82051 6.03702Z'
              fill='currentColor' />
          </svg>
        </Badge>
      </StoryItem>
      <StoryItem subtitle='Простой значок info S с иконкой unread'>
        <Badge variant={'transparent'} size='s' badgeContent={<Unread isBadgeOfMenu></Unread>} >
        </Badge>
      </StoryItem>
    </StoryDocs>
  );
};

export const Playground: Story = (args: IBadgeProps) => {
  return (
    <StoryContainer>
      <StoryRow>
        <Badge {...args}></Badge>
      </StoryRow>
    </StoryContainer>
  );
};

Demo.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Tl0AmqQJK4qaCl4pLRio7A/Design-System-for-Story-Book?node-id=4%3A10063',
  },
};
