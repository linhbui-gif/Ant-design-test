import React from 'react';
import { Form } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';

import AuthForm from '@/containers/AuthForm';
import LogoPrimary from '@/assets/images/logo-primary.svg';
import Input from '@/components/Input';
import { Link } from '@reach/router';
import { LayoutPaths, Paths } from '@/pages/routers';
import Button from '@/components/Button';
import Icon, { EIconName } from '@/components/Icon';

import './Register.scss';

const Register = () => {
  const [form] = Form.useForm();

  return (
    <div className="Register">
      <AuthForm>
        <div className="Register-logo">
          <img src={LogoPrimary} alt="" />
        </div>
        <div className="Register-description">
          Start your <big>7-day</big> free trial, no credit card required Already signed up?{` `}
          <span>
            <Link to={`${LayoutPaths.Auth}${Paths.Login}`}>Sign In</Link>
          </span>
        </div>
        <Form layout="vertical" form={form} className="Register-form">
          <Form.Item>
            <Input prefix={<UserOutlined />} placeholder="Username" size="large" />
          </Form.Item>
          <Form.Item>
            <Input prefix={<MailOutlined />} placeholder="Email " size="large" />
          </Form.Item>
          <Form.Item>
            <Input
              type="password"
              prefix={<LockOutlined />}
              placeholder="Password (8 characters at least)"
              size="large"
            />
          </Form.Item>
          <Form.Item>
            <Input type="password" prefix={<LockOutlined />} placeholder="Confirm Password" size="large" />
          </Form.Item>

          <div className="Register-submit">
            <Button title="Get started" size="large" htmlType="submit" />
          </div>
        </Form>

        <div className="Register-third-party flex items-center justify-center text-center">
          <span>or log in with Google</span>
        </div>
        <div className="Register-socials">
          <div className="Register-socials-btn flex items-center justify-center">
            <Icon name={EIconName.Google} />
            <span>Sign in with Google</span>
          </div>
        </div>

        <div className="Register-term">
          Registering to this website, you accept our <a href="#">terms of use</a> and{' '}
          <a href="#">privacy statements</a>.
        </div>
      </AuthForm>
    </div>
  );
};

export default Register;
