import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardBody,
  CardHeader
} from 'reactstrap';

import LoginForm from '../../Components/LoginForm';

const Login = () => (
  <Card className="card-login mx-auto mt-5">
    <CardHeader>Đăng nhập</CardHeader>
    <CardBody>
      <LoginForm />
      <div className="text-center">
        <Link className="d-block small mt-3" to="/signup">Đăng Ký tài khoản</Link>
        <Link className="d-block small" to="/forgot-password">Quên mật khẩu</Link>
      </div>
    </CardBody>
  </Card>
);

export default Login;
