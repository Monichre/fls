// components/contentful/FeatureBlock.js
export function FeatureBlock({
  title,
  description,
  iconImage,
  backgroundColor = 'transparent',
  textColor = '#000000',
  ctaText,
  ctaLink,
  displayOrder,
}) {
  return (
    <div
      className='feature-block'
      style={{
        backgroundColor,
        color: textColor,
        order: displayOrder,
      }}
    >
      {iconImage?.url && (
        <div className='feature-icon'>
          <img src={iconImage.url} alt={title || 'Feature image'} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
      {ctaText && ctaLink && (
        <a href={ctaLink} className='feature-cta'>
          {ctaText}
        </a>
      )}
    </div>
  )
}
