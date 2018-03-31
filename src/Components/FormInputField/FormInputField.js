import React from 'react';
import PropTypes from 'prop-types';
import {
  Input,
  Label,
  FormGroup
} from 'reactstrap';
import { noop } from '../../Utils';

const PrimaryButton = (props) => {
  const {
    onTextInputChanged, label, placeholder, inputType
  } = props;
  return (
    <FormGroup>
      <Label>{label}</Label>
      <Input type={inputType} placeholder={placeholder} onChange={onTextInputChanged} />
    </FormGroup>
  );
};

PrimaryButton.propTypes = {
  onTextInputChanged: PropTypes.func,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  inputType: PropTypes.string
};

PrimaryButton.defaultProps = {
  onTextInputChanged: noop,
  label: '',
  placeholder: '',
  inputType: 'text'
};

export default PrimaryButton;
