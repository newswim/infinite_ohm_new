import React from 'react';
import Gallery from 'react-photo-gallery';
import Measure from 'react-measure';
import Lightbox from 'react-images';

const photos = [
  { src: 'https://newswim.github.io/infinite_ohm_new/assets/studio/02_512.jpg', width: 4, height: 4 },
  { src: 'https://newswim.github.io/infinite_ohm_new/assets/studio/03_512.jpg', width: 2, height: 2 },
  { src: 'https://newswim.github.io/infinite_ohm_new/assets/studio/05_512.jpg', width: 2, height: 2 },
  { src: 'https://newswim.github.io/infinite_ohm_new/assets/studio/06_512.jpg', width: 3, height: 3 },
  { src: 'https://newswim.github.io/infinite_ohm_new/assets/studio/07_512.jpg', width: 3, height: 3 },
  { src: 'https://newswim.github.io/infinite_ohm_new/assets/studio/08_512.jpg', width: 3, height: 3 },
  { src: 'https://newswim.github.io/infinite_ohm_new/assets/studio/09_512.jpg', width: 3, height: 3 },
  { src: 'https://newswim.github.io/infinite_ohm_new/assets/studio/10_512.jpg', width: 3, height: 3 },
  { src: 'https://newswim.github.io/infinite_ohm_new/assets/studio/11_512.jpg', width: 3, height: 3 },
  { src: 'https://newswim.github.io/infinite_ohm_new/assets/studio/12_512.jpg', width: 3, height: 3 },
  { src: 'https://newswim.github.io/infinite_ohm_new/assets/studio/13_512.jpg', width: 3, height: 3 },
  { src: 'https://newswim.github.io/infinite_ohm_new/assets/studio/14_512.jpg', width: 3, height: 3 },
  { src: 'https://newswim.github.io/infinite_ohm_new/assets/studio/15_512.jpg', width: 3, height: 3 },
  { src: 'https://newswim.github.io/infinite_ohm_new/assets/studio/16_512.jpg', width: 3, height: 3 },
  { src: 'https://newswim.github.io/infinite_ohm_new/assets/studio/17_512.jpg', width: 3, height: 3 },
];

const lightboxPhotos = [
  { src: 'https://newswim.github.io/infinite_ohm_new/assets/studio/02_1024.jpg', srcSet: [
    'https://newswim.github.io/infinite_ohm_new/assets/studio/02_1024.jpg 1024w',
    'https://newswim.github.io/infinite_ohm_new/assets/studio/02_512.jpg 512w',
    'https://newswim.github.io/infinite_ohm_new/assets/studio/02_256.jpg 256w'
  ] },
  { src: 'https://newswim.github.io/infinite_ohm_new/assets/studio/03_1024.jpg', srcSet: [
    'https://newswim.github.io/infinite_ohm_new/assets/studio/03_1024.jpg 1024w',
    'https://newswim.github.io/infinite_ohm_new/assets/studio/03_512.jpg 512w',
    'https://newswim.github.io/infinite_ohm_new/assets/studio/03_256.jpg 256w'
  ] },
  { src: 'https://newswim.github.io/infinite_ohm_new/assets/studio/05_1024.jpg', srcSet: [
    'https://newswim.github.io/infinite_ohm_new/assets/studio/05_1024.jpg 1024w',
    'https://newswim.github.io/infinite_ohm_new/assets/studio/05_512.jpg 512w',
    'https://newswim.github.io/infinite_ohm_new/assets/studio/05_256.jpg 256w'
  ] },
  { src: 'https://newswim.github.io/infinite_ohm_new/assets/studio/06_1024.jpg', srcSet: [
    'https://newswim.github.io/infinite_ohm_new/assets/studio/06_1024.jpg 1024w',
    'https://newswim.github.io/infinite_ohm_new/assets/studio/06_512.jpg 512w',
    'https://newswim.github.io/infinite_ohm_new/assets/studio/06_256.jpg 256w'
  ] },
  { src: 'https://newswim.github.io/infinite_ohm_new/assets/studio/07_1024.jpg', srcSet: [
    'https://newswim.github.io/infinite_ohm_new/assets/studio/07_1024.jpg 1024w',
    'https://newswim.github.io/infinite_ohm_new/assets/studio/07_512.jpg 512w',
    'https://newswim.github.io/infinite_ohm_new/assets/studio/07_256.jpg 256w'
  ] },
  { src: 'https://newswim.github.io/infinite_ohm_new/assets/studio/08_1024.jpg', srcSet: [
    'https://newswim.github.io/infinite_ohm_new/assets/studio/08_1024.jpg 1024w',
    'https://newswim.github.io/infinite_ohm_new/assets/studio/08_512.jpg 512w',
    'https://newswim.github.io/infinite_ohm_new/assets/studio/08_256.jpg 256w'
  ] },
  { src: 'https://newswim.github.io/infinite_ohm_new/assets/studio/09_1024.jpg', srcSet: [
    'https://newswim.github.io/infinite_ohm_new/assets/studio/09_1024.jpg 1024w',
    'https://newswim.github.io/infinite_ohm_new/assets/studio/09_512.jpg 512w',
    'https://newswim.github.io/infinite_ohm_new/assets/studio/09_256.jpg 256w'
  ] },
  { src: 'https://newswim.github.io/infinite_ohm_new/assets/studio/10_1024.jpg', srcSet: [
    'https://newswim.github.io/infinite_ohm_new/assets/studio/10_1024.jpg 1024w',
    'https://newswim.github.io/infinite_ohm_new/assets/studio/10_512.jpg 512w',
    'https://newswim.github.io/infinite_ohm_new/assets/studio/10_256.jpg 256w'
  ] },
  { src: 'https://newswim.github.io/infinite_ohm_new/assets/studio/11_1024.jpg', srcSet: [
    'https://newswim.github.io/infinite_ohm_new/assets/studio/11_1024.jpg 1024w',
    'https://newswim.github.io/infinite_ohm_new/assets/studio/11_512.jpg 512w',
    'https://newswim.github.io/infinite_ohm_new/assets/studio/11_256.jpg 256w'
  ] },
  { src: 'https://newswim.github.io/infinite_ohm_new/assets/studio/12_1024.jpg', srcSet: [
    'https://newswim.github.io/infinite_ohm_new/assets/studio/12_1024.jpg 1024w',
    'https://newswim.github.io/infinite_ohm_new/assets/studio/12_512.jpg 512w',
    'https://newswim.github.io/infinite_ohm_new/assets/studio/12_256.jpg 256w'
  ] },
  { src: 'https://newswim.github.io/infinite_ohm_new/assets/studio/13_1024.jpg', srcSet: [
    'https://newswim.github.io/infinite_ohm_new/assets/studio/13_1024.jpg 1024w',
    'https://newswim.github.io/infinite_ohm_new/assets/studio/13_512.jpg 512w',
    'https://newswim.github.io/infinite_ohm_new/assets/studio/13_256.jpg 256w'
  ] },
  { src: 'https://newswim.github.io/infinite_ohm_new/assets/studio/14_1024.jpg', srcSet: [
    'https://newswim.github.io/infinite_ohm_new/assets/studio/14_1024.jpg 1024w',
    'https://newswim.github.io/infinite_ohm_new/assets/studio/14_512.jpg 512w',
    'https://newswim.github.io/infinite_ohm_new/assets/studio/14_256.jpg 256w'
  ] },
  { src: 'https://newswim.github.io/infinite_ohm_new/assets/studio/15_1024.jpg', srcSet: [
    'https://newswim.github.io/infinite_ohm_new/assets/studio/15_1024.jpg 1024w',
    'https://newswim.github.io/infinite_ohm_new/assets/studio/15_512.jpg 512w',
    'https://newswim.github.io/infinite_ohm_new/assets/studio/15_256.jpg 256w'
  ] },
  { src: 'https://newswim.github.io/infinite_ohm_new/assets/studio/16_1024.jpg', srcSet: [
    'https://newswim.github.io/infinite_ohm_new/assets/studio/16_1024.jpg 1024w',
    'https://newswim.github.io/infinite_ohm_new/assets/studio/16_512.jpg 512w',
    'https://newswim.github.io/infinite_ohm_new/assets/studio/16_256.jpg 256w'
  ] },
  { src: 'https://newswim.github.io/infinite_ohm_new/assets/studio/17_1024.jpg', srcSet: [
    'https://newswim.github.io/infinite_ohm_new/assets/studio/17_1024.jpg 1024w',
    'https://newswim.github.io/infinite_ohm_new/assets/studio/17_512.jpg 512w',
    'https://newswim.github.io/infinite_ohm_new/assets/studio/17_256.jpg 256w'
  ] },
]

export default class PhotoGallery extends React.Component {
  state = {
    currentImage: 0,
    lightboxIsOpen: false,
    width: -1,
  };

  openLightbox = (_, obj) => {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  }

  closeLightbox = () => {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious = () => {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }

  gotoNext = () => {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }

  render() {
    const width = this.state.width;
    return (
      <div>
        <Measure bounds onResize={(contentRect) => this.setState({ width: contentRect.bounds.width })}>
          {
          ({measureRef}) => {
            if (width < 1 ){
              return <div ref={measureRef}></div>;
            }
            let columns = 1;
            if (width >= 480){
              columns = 2;
            }
            if (width >= 1024){
              columns = 3;
            }
            if (width >= 1824){
              columns = 4;
            }
            return <div ref={measureRef}>
              <Gallery
                photos={photos}
                columns={columns}
                onClick={this.openLightbox}
              />
            </div>
          }
        }
        </Measure>
        <Lightbox images={lightboxPhotos}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
          backdropClosesModal={true}
        />
      </div>
    )
  }
}
