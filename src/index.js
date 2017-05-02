import React, { Component } from 'react';
import PropTypes from 'prop-types';
import WebFont from 'webfontloader';
import statuses from './statuses';

const noop = () => { };

class WebfontLoader extends Component {

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
  config: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired,
  onStatus: PropTypes.func.isRequired,
  onFontStatus: PropTypes.func.isRequired,
};

WebfontLoader.defaultProps = {
  onStatus: noop,
  onFontStatus: noop,
};

export default WebfontLoader;
