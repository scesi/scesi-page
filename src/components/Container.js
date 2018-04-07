import React, { Component } from 'react';

class Container extends Component {
  render() {
    const {size, color, children, style} = this.props
    return (
      <div style={{...style, flex: size, backgroundColor: color}}>
        {children}
      </div>
    );
  }
}

export default Container;
