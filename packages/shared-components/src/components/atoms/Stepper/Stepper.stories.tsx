import  { useState } from 'react';
import { StoryFn as Story } from '@storybook/react';

import { StoryDocsH1, StoryDocsH3 } from '../../storybook';
import StoryCol from '../../storybook/StoryCol';
import StoryContainer from '../../storybook/Story';
import StoryRow from '../../storybook/StoryRow';
import Stepper from './Stepper';
import { stepper } from './mock';
import { StepType } from './Step/Step';
import Button from '../Button';

export default {
  title: 'components/withTest/Stepper',
  component: Stepper,
  argTypes: { children: { control: null }, }
};

export const Demo = () => {
  const [value, setValue] = useState<number>(0);

  return <StoryContainer>
    <StoryDocsH1>Stepper</StoryDocsH1>


    <div style={{
      display: 'flex',
      alignItems: 'center',
      columnGap: '20px'
    }}>
      <Button buttonType='light' onClick={() => setValue(0)}>Clear Steps</Button>
      <Button onClick={() => setValue(stepper.length)}>Completed Steps</Button>
    </div>

    <StoryCol>
      <StoryDocsH3>Horizontal</StoryDocsH3>
      <Stepper value={value} onChange={setValue}>
        {stepper.map(step => (
          <Stepper.Step key={step.index} {...step}>
            {step.children}
          </Stepper.Step>
        ))}
      </Stepper>
    </StoryCol>

    <StoryCol>
      <StoryDocsH3>Vertical (readonly)</StoryDocsH3>
      <Stepper value={value} onChange={setValue} variant='vertical' readonly>
        {stepper.map((step) => ({
          ...step,
          status: 'inactive' as StepType
        })).map(({ children, ...step }) => (
          <Stepper.Step key={step.index} {...step}>
            {children}
          </Stepper.Step>
        ))}
      </Stepper>
    </StoryCol>
  </StoryContainer>;
};


export const Playground: Story = (args) => {
  const [value, setValue] = useState<number>(0);

  return (
    <StoryContainer>
      <StoryRow>
        <Stepper {...args} value={value} onChange={setValue}>
          {stepper.map(step => (
            <Stepper.Step key={step.index} {...step}>
              {step.children}
            </Stepper.Step>
          ))}
        </Stepper>
      </StoryRow>
    </StoryContainer>
  );
};

Demo.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Tl0AmqQJK4qaCl4pLRio7A/Ui-Home-for-Story-Book?node-id=3748%3A69872',
  },
};
