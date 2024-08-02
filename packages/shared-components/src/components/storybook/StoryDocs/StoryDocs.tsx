import {PropsWithChildren} from "react";
import './StoryDocs.scss';


export const StoryDocs = ({ children }:PropsWithChildren) => {
  return (
    <div className='story-docs'>
      {children}
    </div>
  );
};
