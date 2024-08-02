
import './StoryDocsDescription.scss';
import {PropsWithChildren} from "react";

export const StoryDocsDescription = ({ children }:PropsWithChildren) => {
  return (
    <p className='story-docs-description'>
      {children}
    </p>
  );
};
