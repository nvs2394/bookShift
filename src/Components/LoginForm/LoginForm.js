import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, Checkbox } from 'react-bootstrap';
import FormInputField from '../FormInputField';
import PrimaryButton from '../PrimaryButton';
import { noop } from '../../Utils';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
      isRemeberMe: false
    };
  }

  onInputChanged = key => (value) => {
    this.setState({ [key]: value });
  };

  onLogin = () => {
    const { onLogin } = this.props;
    const { userName, password, isRemeberMe } = this.state;
    const body = {
      userName,
      password,
      isRemeberMe
    };
    onLogin(body);
  };

  onRememberMe = (isRemeberMe) => {
    this.setState({ isRemeberMe });
  };

  renderFormGroup = (controlId, label, placeholder, inputType, onInputChanged) => (
    <FormInputField
      label={label}
      placeholder={placeholder}
      inputType={inputType}
      onTextInputChanged={onInputChanged}
    />
  );

  render() {
    return (
      <Form horizontal>
        {this.renderFormGroup('formHorizontalEmail', 'Email', '', 'text', this.onInputChanged('userName'))}
        {this.renderFormGroup('formHorizontalEmail', 'Mật khẩu', '', 'password', this.onInputChanged('password'))}
        <FormGroup>
          <Checkbox onChange={this.onRememberMe}>Nhớ đăng nhập lần sau</Checkbox>
        </FormGroup>
        <FormGroup>
          <PrimaryButton
            label="Đăng nhập"
            onClick={this.onLogin}
          />
        </FormGroup>
      </Form>
    );
  }
}

LoginForm.propTypes = {
  onLogin: PropTypes.func
};

LoginForm.defaultProps = {
  onLogin: noop
};

export default LoginForm;
