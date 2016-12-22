import React from 'react';
import WebFont from 'webfontloader';
import statuses from './statuses';

const noop = () => { };

class WebfontLoader extends React.Component {

  componentWillMount() {
    const { config, onStatus, onFontStatus } = this.props;
    WebFont.load({
      ...config,
      loading: () => onStatus(statuses.loading),
      active: () => onStatus(statuses.active),
      inactive: () => onStatus(statuses.inactive),
      fontloading: (font, variation) => onFontStatus(font, variation, statuses.loading),
      fontactive: (font, variation) => onFontStatus(font, variation, statuses.active),
      fontinactive: (font, variation) => onFontStatus(font, variation, statuses.inactive),
    });
  }

  render() {
    const { children } = this.props;
    return children;
  }

}

WebfontLoader.propTypes = {
  config: React.PropTypes.object.isRequired,
  children: React.PropTypes.element.isRequired,
  onStatus: React.PropTypes.func.isRequired,
  onFontStatus: React.PropTypes.func.isRequired,
};

WebfontLoader.defaultProps = {
  onStatus: noop,
  onFontStatus: noop,
};

export default WebfontLoader;
