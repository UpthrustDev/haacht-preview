import React from 'react';
import VisibilitySensor from 'react-visibility-sensor';

/**
 * A smart video wrapper, which automatically pauses the video if not visible for the user.
 */
class Video extends React.Component {
  initPlaying = false;
  wantToPause = false;

  handleChange = shouldPlayVideo => {
    //console.log('video', this.video);
    if (!shouldPlayVideo) {
      if (this.initPlaying) {
        // Play is initializing, we cannot pause now, but have to postpone pausing until play is done.
        this.wantToPause = true;
      } else {
        this.video.pause();
      }
    } else if (this.video && this.video != null && this.video != undefined) {
      this.initPlaying = true;
      var promise = this.video.play();
      if (promise) {
        //console.log('promise', promise);
        promise
          .then(() => {
            this.initPlaying = false;
            if (this.wantToPause) {
              this.video.pause();
              this.wantToPause = false;
            }
          })
          .catch(() => {
            this.initPlaying = false;
          });
      }
    }
  };

  shouldComponentUpdate() {
    return false;
  }

  render() {
    if (!this.props.headerImage) {
      return (
        <VisibilitySensor partialVisibility onChange={this.handleChange}>
          <video {...this.props} ref={_v => (this.video = _v)} />
        </VisibilitySensor>
      );
    } else {
      return <img src={this.props.headerImage} style={{ width: '100%', height: 'auto' }} />;
    }
  }
}

export default Video;
