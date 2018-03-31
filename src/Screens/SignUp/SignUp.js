import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardBody,
  CardHeader
} from 'reactstrap';

import SignUpForm from '../../Components/SignUpForm';

const SignUp = () => (
  <Card className="card-login mx-auto mt-5">
    <CardHeader>Đăng Ký</CardHeader>
    <CardBody>
      <SignUpForm />
      <div className="text-center">
        <Link className="d-block small mt-3" to="/login">Đã có tài khoản / Đăng nhập</Link>
      </div>
    </CardBody>
  </Card>
);

export default SignUp;
