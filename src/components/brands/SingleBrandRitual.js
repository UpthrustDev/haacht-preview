import React from 'react';
import ProgressBar from 'react-progressbar.js';
import _get from 'lodash/get';
import ReactPlayer from 'react-player';
import cx from 'classnames';

const progressBarOptions = {
  strokeWidth: 6,
  color: '#C2A572',
};

class SingleBrandRitual extends React.Component {
  state = {
    fullScreenVideo: true,
    videoTimePercentage: 0.0,
    videoDuration: 0,
    looping: true,
  };

  handleVideoTime = () => event => {
    this.setState({ videoDuration: event });
  };

  handleVideoDuration = () => event => {
    this.setState({ videoTimePercentage: event.playedSeconds / this.state.videoDuration });
  };

  handleVideoClick = () => {
    document.querySelector('html').classList.toggle('no-scroll');
    this.setState(prevState => ({ fullScreenVideo: !prevState.fullScreenVideo, looping: false }));
    const root = document.documentElement;
    const classNames = cx({
      'c-video-popup-active': this.state.fullScreenVideo,
    });
    this.state.fullScreenVideo ? this.video.play() : this.video.pause();
    root.className = classNames;
  };

  render() {
    const { currentBrand, singleBrandPageData } = this.props;
    const Circle = ProgressBar.Circle;

    return (
      <div>
        {currentBrand.node.videoRitual && (
          <div className="single-brand-ritual">
            <div className="l-container">
              <div className="l-row">
                <div className="l-col l-col--12">
                  <div className="block-heading block-heading--center">
                    <h2 className="block-heading__title">{singleBrandPageData.serveritualText}</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="single-brand-video" onClick={this.handleVideoClick}>
              <div className="u-block-ratio u-block-ratio--50 u-display--flex u-justify--center u-align--center">
                <div className="c-play-animation js-ritual-video-play">
                  <div className="c-play-animation__progress">
                    <div className="c-play-animation__shape">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="18"
                        viewBox="0 0 12 18"
                      >
                        <polygon
                          fill="#FFF"
                          points="39 36 30 24 48 24"
                          transform="matrix(0 1 1 0 -24 -30)"
                        />
                      </svg>
                    </div>
                    <Circle
                      progress={this.state.videoTimePercentage}
                      className="c-play-animation__circle"
                      options={progressBarOptions}
                    />
                  </div>
                  <div className="c-play-animation__text">
                    {currentBrand.node.ritualAnimationText}
                  </div>
                </div>
                <ReactPlayer
                  onProgress={this.handleVideoDuration()}
                  url={_get(currentBrand.node, 'videoRitual.fields.file.url')}
                  playsinline
                  loop
                  playing
                  volume={0}
                  data-object-fit
                  width={'100%'}
                  height={'100%'}
                  onEnded={this.handleVideoEnd}
                  progressFrequency={500}
                  onDuration={this.handleVideoTime()}
                  style={{ objectFit: 'cover' }}
                  className="js-ritual-video-loop u-full u-object-fit"
                />
              </div>
            </div>
            <div className="c-video-popup js-ritual-video-popup">
              <button
                className="c-video-popup__close c-button c-button--close js-ritual-video-close"
                onClick={this.handleVideoClick}
              >
                <div className="close-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                  >
                    <path
                      fill="#FFF"
                      fillRule="evenodd"
                      d="M21.3162353,20 L27,14.3162353 L25.6837647,13 L20,18.6837647 L14.3162353,13 L13,14.3162353 L18.6837647,20 L13,25.6837647 L14.3162353,27 L20,21.3162353 L25.6837647,27 L27,25.6837647 L21.3162353,20 Z"
                      transform="translate(-13 -13)"
                    />
                  </svg>
                </div>
                <div className="close-label close-label--trans">
                  {currentBrand.node.ritualVideoTextButton}
                </div>
              </button>
              <div className="c-video-popup__media">
                <video
                  ref={video => (this.video = video)}
                  className="js-ritual-video lazy u-full u-object-fit"
                  controls
                  playsInline
                  loop
                  poster="{{ site.url }}/assets/img/brands/ritual.jpg"
                >
                  <source
                    data-src={
                      currentBrand.node.videoRitual && currentBrand.node.videoRitual.fields.file.url
                    }
                    type="video/mp4"
                  />
                  <source
                    data-src={
                      currentBrand.node.videoRitual && currentBrand.node.videoRitual.fields.file.url
                    }
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default SingleBrandRitual;
