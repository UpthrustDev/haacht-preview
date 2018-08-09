import React from 'react';
import DeviceClass from '../shared/DeviceClass';
import Video from '../shared/Video';
import _get from 'lodash/get';
import isMobile from 'ismobilejs';

const Header = ({ title, img, index, video }) => {
  return (
    <DeviceClass key={index}>
      <div className="c-header">
        <div className="c-header__content u-full u-display--flex u-align--center u-justify--center">
          <div className="c-header__meta">
            <h1 className="c-header__title">{title}</h1>
          </div>
        </div>
        <div
          key={index}
          className="c-header__image u-full u-cover u-cover--center lazy"
          data-src={img}
        />
        <Video
          className="intro-video lazy u-object-fit u-full"
          data-object-fit
          poster={_get(video, 'poster.file.url')}
          autoPlay
          loop
          id="video-background"
          muted
          playsInline
        >
          {/*<source data-src={isMobile.phone ? _get(introVideoWebm, 'mobileVideo.file.url') : _get(introVideoWebm, 'video.file.url')}type="video/webm" />*/}
          <source
            data-src={
              isMobile.phone
                ? _get(video, 'mobileVideoWebm.file.url')
                : _get(video, 'videoWebm.file.url')
            }
            type="video/webm"
          />
          <source
            data-src={
              isMobile.phone ? _get(video, 'mobileVideo.file.url') : _get(video, 'video.file.url')
            }
            type="video/mp4"
          />
        </Video>
      </div>
    </DeviceClass>
  );
};

export default Header;
