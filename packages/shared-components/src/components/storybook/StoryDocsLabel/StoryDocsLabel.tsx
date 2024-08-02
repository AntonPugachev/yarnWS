import './StoryDocsLabel.scss';
import { PropsWithChildren } from 'react';

export const StoryDocsLabel = ({ children }: PropsWithChildren) => {
  return <div className='story-docs-label'>{children}</div>;
};
