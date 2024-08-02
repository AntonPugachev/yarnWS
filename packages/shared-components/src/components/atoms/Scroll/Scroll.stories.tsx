
import { StoryDocs, StoryDocsH1 } from '../../storybook';

export default { title: 'components/withTest/Scroll', };

export const Demo = () => {
  const frameStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    maxHeight: '250px',
    maxWidth: '250px',
    overflowY: 'scroll',
    padding: '20px',
    margin: '20px',
    boxShadow: '0px 4px 8px rgba(138, 150, 168, 0.4), 0px -2px 4px rgba(138, 150, 168, 0.08)',
  };
  const elementStyle: React.CSSProperties = {
    height: '40px',
    paddingBottom: '20px',
  };

  return (
    <StoryDocs>
      <StoryDocsH1> Scroll </StoryDocsH1>
      <h4> По умолчанию скролл на всю длину по вертикали, но точечно можно повесить отступы. <br/> В common.css описано как это сделать. </h4>
      <div style={frameStyle}>
        <div style={elementStyle}> Элемент1 </div>
        <div style={elementStyle}> Элемент2 </div>
        <div style={elementStyle}> Элемент3 </div>
        <div style={elementStyle}> Элемент4 </div>
        <div style={elementStyle}> Элемент5 </div>
        <div style={elementStyle}> Элемент6 </div>
        <div style={elementStyle}> Элемент7 </div>
        <div style={elementStyle}> Элемент8 </div>
        <div style={elementStyle}> Элемент9 </div>
        <div style={elementStyle}> Элемент10 </div>
        <div style={elementStyle}> Элемент11 </div>
        <div style={elementStyle}> Элемент12 </div>
      </div>

    </StoryDocs>

  );
};

Demo.parameters = {
  actions: { disabled: true },
  controls: { disabled: true },
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/7fbNk6TX0mPAqPjibtgNlw/Start-for-Story-Book?node-id=3553%3A68795',
  },
};
