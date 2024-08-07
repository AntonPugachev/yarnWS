import  { useEffect, useState } from 'react';
import StoryItem from '../../storybook/StoryItem';
import Story from '../../storybook/Story';
import { ITreeOption } from '../../../types';
import Tree from './Tree';
import { list } from './list';
import OrgTree from './OrgTree';


export default {
  title: 'components/OrgTree',
  component: Tree,

};

export const DemoTree = () => {

  const [data, setData] = useState<ITreeOption[]>([]);

  const [activeItem, setActiveItem] = useState<ITreeOption | undefined>(undefined);

  const onChange = (o: ITreeOption) => {
    setActiveItem(o);
  };

  useEffect(() => {
    setTimeout(() => {
      setData(list);
    }, 500);
  }, []);


  return (
    <Story name='OrgTree' width={600}>
      <StoryItem description='Древовидная структура с бесконечной вложенностью'>
        <OrgTree list={data} onChange={onChange} activeOption={activeItem}/>
      </StoryItem>
    </Story>
  );
};

DemoTree.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Y86V3oIhkZQ4u27iBuhN0l/%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D1%8B-%D0%92%D0%A2%D0%91-%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D0%BE%D0%B9?node-id=18262%3A231300',
  },
};

export const Ckeckboxes = () => {

  const [data, setData] = useState<ITreeOption[]>([]);

  const onCheck = (o: ITreeOption) => {
    o.checked = !o.checked;
    setData(data.slice());
  };

  useEffect(() => {
    setTimeout(() => {
      setData(list);
    }, 500);
  }, []);


  return (
    <Story name='OrgTree' width={600}>
      <StoryItem description='Древовидная структура с бесконечной вложенностью'>
        <OrgTree list={data} onCheck={onCheck} />
      </StoryItem>
    </Story>
  );
};
