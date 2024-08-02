import {PropsWithChildren} from "react";
import './StoryDocsH2.scss';

export const StoryDocsH2 = ({ children }:PropsWithChildren) => {
  return (
    <h2 className='story-docs-h2'>
      {children}
    </h2>
  );
};
