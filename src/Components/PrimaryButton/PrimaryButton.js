import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { noop } from '../../Utils';

class PrimaryButton extends Component {

  render() {
    const { onClick = noop, label = '' } = this.props;
    return (
      <div>
        <Button bsStyle="primary" onClick={onClick}>{label}</Button>
      </div>
    );
  }
}

export default PrimaryButton;