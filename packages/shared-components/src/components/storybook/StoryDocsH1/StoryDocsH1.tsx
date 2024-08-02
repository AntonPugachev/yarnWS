import  {PropsWithChildren} from 'react';
import './StoryDocsH1.scss';

export const StoryDocsH1 = ({ children }:PropsWithChildren) => {
  return (
    <h1 className='story-docs-h1'>
      {children}
    </h1>
  );
};
