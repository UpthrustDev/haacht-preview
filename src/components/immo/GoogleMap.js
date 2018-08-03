import React from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
  OverlayView,
  Mark,
} from 'react-google-maps';
import _get from 'lodash/get';
import _filter from 'lodash/filter';
import { getPartOfUrl } from '../helpers/navigationUrl';

class GoogleMapComponent extends React.Component {
  state = {
    overlayActive: null,
    position:
      _get(this.props, 'location.pathname') &&
      (_get(this.props, 'location.pathname').indexOf('nl-BE') !== -1 ||
        _get(this.props, 'location.pathname').indexOf('nl-be') !== -1 ||
        _get(this.props, 'location.pathname').indexOf('fr-be') !== -1 ||
        _get(this.props, 'location.pathname').indexOf('fr-BE') !== -1)
        ? { lat: 51.02574, lng: 4.47762 }
        : { lat: 52.211157, lng: 5.969923 },
  };

  handleMarkerClick = (id, pos) => () => {
    this.setState({ overlayActive: id, position: pos });
  };

  handlePropertyClick = slug => () => {
    
  };

  handleCloseClick = () => () => {
    this.setState({ overlayActive: null, position: this.state.position });
  };

  render() {
    var { single, panden } = this.props;
    if (single) {
      return (
        <GoogleMap
          defaultZoom={15}
          defaultCenter={{
            lat: _get(panden, 'node.location.lat'),
            lng: _get(panden, 'node.location.lon'),
          }}
        >
          <Marker
            position={{
              lat: _get(panden, 'node.location.lat'),
              lng: _get(panden, 'node.location.lon'),
            }}
          />
          <OverlayView
            onClick={this.handlePropertyClick(panden.node.slug, {
              lat: _get(panden, 'node.location.lat'),
              lng: _get(panden, 'node.location.lon'),
            })}
            position={{
              lat: _get(panden, 'node.location.lat'),
              lng: _get(panden, 'node.location.lon'),
            }}
            getPixelPositionOffset={(width, height) => ({ x: width / 2, y: -100 })}
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
          >
            <div className="map-popover">
              <div className="map-popover__image u-block-ratio u-block-ratio--16-9">
                <img
                  className="u-full u-object-fit"
                  src={_get(panden.node, 'image.file.url')}
                  alt="Image Description"
                />
              </div>
              <div className="map-popover__content">
                <div className="map-popover__label">{panden.node.status.title}</div>
                <div className="map-popover__title">{panden.node.title}</div>
              </div>
            </div>
          </OverlayView>
        </GoogleMap>
      );
    }
    panden = _filter(panden, function(o) {
      return _get(o, 'node.title');
    });
    return (
      <GoogleMap
        options={{ disableDefaultUI: true }}
        key={this.state.overlayActive}
        defaultZoom={8}
        defaultCenter={this.state.position}
      >
        {panden.map((pand, index) => (
          <Marker
            key={index}
            onClick={this.handleMarkerClick(pand.node.id, {
              lat: _get(pand, 'node.location.lat'),
              lng: _get(pand, 'node.location.lon'),
            })}
            position={{
              lat: _get(pand, 'node.location.lat'),
              lng: _get(pand, 'node.location.lon'),
            }}
            defaultIcon={'/assets/img/ui/map-marker-gold.svg'}
          />
        ))}
        {panden.map((pand, index) => (
          <OverlayView
            key={index}
            position={{
              lat: _get(pand, 'node.location.lat'),
              lng: _get(pand, 'node.location.lon'),
            }}
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
            getPixelPositionOffset={(width, height) => ({ x: width / 2, y: -100 })}
          >
            <div
              style={
                this.state.overlayActive === pand.node.id
                  ? { display: 'block' }
                  : { display: 'none' }
              }
              className="map-popover"
            >
              <div className="close" onClick={this.handleCloseClick()} />
              <div
                className="map-popover__image u-block-ratio u-block-ratio--16-9"
                onClick={this.handlePropertyClick(pand.node.slug)}
              >
                <img
                  className="u-full u-object-fit"
                  src={_get(pand, 'node.image.file.url')}
                  alt="Image Description"
                />
              </div>
              <div
                className="map-popover__content"
                onClick={this.handlePropertyClick(pand.node.slug)}
              >
                <div className="map-popover__label">{pand.node.status.title}</div>
                <div className="map-popover__title">{pand.node.title}</div>
              </div>
            </div>
          </OverlayView>
        ))}
      </GoogleMap>
    );
  }
}
export default withScriptjs(withGoogleMap(GoogleMapComponent));
