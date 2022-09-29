import React from 'react';
import { Form } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import AuthForm from '@/containers/AuthForm';
import LogoPrimary from '@/assets/images/logo-primary.svg';
import Input from '@/components/Input';
import Checkbox from '@/components/Checkbox';
import { Link } from '@reach/router';
import { LayoutPaths, Paths } from '@/pages/routers';
import Button from '@/components/Button';
import Icon, { EIconName } from '@/components/Icon';

import './Login.scss';

const Login = () => {
  const [form] = Form.useForm();

  return (
    <div className="Login">
      <AuthForm>
        <div className="Login-logo">
          <img src={LogoPrimary} alt="" />
        </div>
        <div className="Login-description">
          Don't have an account, yet?
          <br />
          <span>
            <Link to={`${LayoutPaths.Auth}${Paths.Register}`}>Start your 14 day free trial</Link>
          </span>
        </div>
        <Form layout="vertical" form={form} className="Login-form">
          <Form.Item>
            <Input prefix={<UserOutlined />} placeholder="Username" size="large" />
          </Form.Item>
          <Form.Item>
            <Input type="password" prefix={<LockOutlined />} placeholder="Password" size="large" />
          </Form.Item>
          <div className="Login-remember flex justify-between items-center">
            <Form.Item>
              <Checkbox label="Remember me" />
            </Form.Item>
            <Link to={`${LayoutPaths.Auth}${Paths.ResetPassword}`}>Forgot your password?</Link>
          </div>
          <div className="Login-submit">
            <Button title="Sign In" size="large" htmlType="submit" />
          </div>
        </Form>

        <div className="Login-third-party flex items-center justify-center text-center">
          <span>or log in with Google</span>
        </div>
        <div className="Login-socials">
          <div className="Login-socials-btn flex items-center justify-center">
            <Icon name={EIconName.Google} />
            <span>Sign in with Google</span>
          </div>
        </div>

        <div className="Login-term">
          Registering to this website, you accept our <a href="#">terms of use</a> and{' '}
          <a href="#">privacy statements</a>.
        </div>
      </AuthForm>
    </div>
  );
};

export default Login;
