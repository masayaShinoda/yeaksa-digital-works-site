import ImageGallery from 'react-image-gallery'

export default function gfxPortf() {
    const images = [
      {
        original: '/images/portf/graphic-design-showcase_1_result_result.webp',
        thumbnail: '/images/portf/thumb/graphic-design-showcase_1_result_result_result.webp',
      },
      {
        original: '/images/portf/graphic-design-showcase_2_result_result.webp',
        thumbnail: '/images/portf/thumb/graphic-design-showcase_2_result_result_result.webp',
      },
      {
        original: '/images/portf/graphic-design-showcase_3_result_result.webp',
        thumbnail: '/images/portf/thumb/graphic-design-showcase_3_result_result_result.webp',
      },
      {
        original: '/images/portf/graphic-design-showcase_4_result_result.webp',
        thumbnail: '/images/portf/thumb/graphic-design-showcase_4_result_result_result.webp',
      },
      {
        original: '/images/portf/graphic-design-showcase_5_result_result.webp',
        thumbnail: '/images/portf/thumb/graphic-design-showcase_5_result_result_result.webp',
      },
      {
        original: '/images/portf/graphic-design-showcase_6_result_result.webp',
        thumbnail: '/images/portf/thumb/graphic-design-showcase_6_result_result_result.webp',
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