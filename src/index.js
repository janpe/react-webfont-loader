import React from 'react';
import WebFont from 'webfontloader';
import statuses from './statuses';

class WebfontLoader extends React.Component {

  componentWillMount() {
    const { config, callback } = this.props;
    WebFont.load({
      ...config,
      loading: () => callback(statuses.loading),
      active: () => callback(statuses.active),
      inactive: () => callback(statuses.inactive),
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
  callback: React.PropTypes.func.isRequired,
};

WebfontLoader.defaultProps = {
  callback: () => { },
};

export default WebfontLoader;
