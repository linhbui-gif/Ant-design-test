import React from 'react';
import { Form } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';

import AuthForm from '@/containers/AuthForm';
import LogoPrimary from '@/assets/images/logo-primary.svg';
import Input from '@/components/Input';
import Checkbox from '@/components/Checkbox';
import { Link } from '@reach/router';
import { LayoutPaths, Paths } from '@/pages/routers';
import Button from '@/components/Button';
import { ELoginAppAction, loginAppAction } from '@/redux/actions';
import { showNotification, validationRules } from '@/utils/functions';
import { ETypeNotification } from '@/common/enums';
import GoogleBtn from '@/components/GoogleBtn';
import env from '@/env';

import './LoginApp.scss';

const LoginApp = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const loginAppLoading = useSelector((state) => state.loadingReducer[ELoginAppAction.LOGIN_APP]);

  const handleSubmit = (values) => {
    const body = { ...values };
    dispatch(loginAppAction.request({ body }, handleLoginAppSuccess));
  };

  const handleLoginAppSuccess = (response) => {
    if (response.token) {
      window.open(env.rootAppUrl, '_self');
    } else {
      showNotification(ETypeNotification.ERROR, response.message);
    }
  };

  return (
    <div className="LoginApp">
      <AuthForm>
        <div className="LoginApp-logo">
          <img src={LogoPrimary} alt="" />
        </div>
        <div className="LoginApp-description">
          Don't have an account, yet?
          <br />
          <span>
            <Link to={`${LayoutPaths.Auth}${Paths.Register}`}>Start your 14 day free trial</Link>
          </span>
        </div>
        <Form layout="vertical" form={form} className="LoginApp-form" onFinish={handleSubmit}>
          <Form.Item name="username" rules={[validationRules.required()]}>
            <Input prefix={<UserOutlined />} placeholder="Username" size="large" />
          </Form.Item>
          <Form.Item name="password" rules={[validationRules.required()]}>
            <Input type="password" prefix={<LockOutlined />} placeholder="Password" size="large" />
          </Form.Item>
          <div className="LoginApp-remember flex justify-between items-center">
            <Form.Item>
              <Checkbox label="Remember me" />
            </Form.Item>
            <Link to={`${LayoutPaths.Auth}${Paths.ResetPassword}`}>Forgot your password?</Link>
          </div>
          <div className="LoginApp-submit">
            <Button title="Sign In" size="large" htmlType="submit" loading={loginAppLoading} />
          </div>
        </Form>

        <div className="LoginApp-third-party flex items-center justify-center text-center">
          <span>or log in with Google</span>
        </div>
        <div className="LoginApp-socials">
          <GoogleBtn />
        </div>

        <div className="LoginApp-term">
          Registering to this website, you accept our <a href="#">terms of use</a> and{' '}
          <a href="#">privacy statements</a>.
        </div>
      </AuthForm>
    </div>
  );
};

export default LoginApp;
