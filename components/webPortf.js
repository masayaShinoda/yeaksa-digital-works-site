import ImageGallery from 'react-image-gallery'

export default function webPortf() {
    const images = [
      {
        original: '/images/portf/web-design-&-dev-showcase-01_result_1.webp',
        thumbnail: '/images/portf/thumb/web-design-&-dev-showcase-01_result_1_result.webp',
      },
      {
        original: '/images/portf/web-design-&-dev-showcase-02_result_1.webp',
        thumbnail: '/images/portf/thumb/web-design-&-dev-showcase-02_result_1_result.webp',
      },
      {
        original: '/images/portf/web-design-&-dev-showcase-03_result_1.webp',
        thumbnail: '/images/portf/thumb/web-design-&-dev-showcase-03_result_1_result.webp',
      },
      {
        original: '/images/portf/web-design-&-dev-showcase-04_result_1.webp',
        thumbnail: '/images/portf/thumb/web-design-&-dev-showcase-04_result_1_result.webp',
      },
    ];
    return (
      <ImageGallery 
        items={images} 
        showNav={false}
        showPlayButton={false}
        />  
    )
}