import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup } from 'react-bootstrap';
import FormInputField from '../FormInputField';
import PrimaryButton from '../PrimaryButton';
import { noop } from '../../Utils';

class SignUpForm extends Component {
  onInputChanged = () => {

  };

  renderFormGroup = (controlId, label, placeholder, inputType) => (
    <FormInputField
      label={label}
      placeholder={placeholder}
      inputType={inputType}
    />
  );

  render() {
    return (
      <Form horizontal>
        {this.renderFormGroup('formHorizontalEmail', 'Email')}
        {this.renderFormGroup('formHorizontalEmail', 'Mật khẩu')}
        <FormGroup>
          <PrimaryButton
            label="Đăng kí"
            onClick={this.props.onSignUp}
          />
        </FormGroup>
      </Form>
    );
  }
}

SignUpForm.propTypes = {
  onSignUp: PropTypes.func
};

SignUpForm.defaultProps = {
  onSignUp: noop
};

export default SignUpForm;
