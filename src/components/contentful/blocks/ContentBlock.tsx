// components/contentful/ContentBlock.js
import dynamic from 'next/dynamic';

// Map content block types to sub-components
const contentBlockComponents = {
  text: dynamic(() => import('./TextBlock')),
  image: dynamic(() => import('./ImageBlock')),
  gallery: dynamic(() => import('./GalleryBlock')),
  featureList: dynamic(() => import('./FeatureListBlock')),
};

export  function ContentBlock({
  title,
  contentType,
  richTextContent,
  media,
  backgroundColor,
  layout = 'full',
  cta,
  ...rest
}) {
  const SubComponent = contentBlockComponents[contentType];
  
  if (!SubComponent) {
    return <div>Unknown content block type: {contentType}</div>;
  }
  
  return (
    <div 
      className={`content-block content-block-${contentType}`} 
      style={{ backgroundColor }}
    >
      {title && <h2 className="block-title">{title}</h2>}
      
      <div className={`block-layout layout-${layout}`}>
        <SubComponent
          richTextContent={richTextContent}
          media={media}
          cta={cta}
          {...rest}
        />
      </div>
    </div>
  );
}