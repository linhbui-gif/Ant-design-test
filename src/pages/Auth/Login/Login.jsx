import React, { useEffect } from 'react';
import { Form } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';

import LogoPrimary from '@/assets/images/logo-primary.svg';
import Input from '@/components/Input';
import Checkbox from '@/components/Checkbox';
import { navigate } from '@reach/router';
import { Paths } from '@/pages/routers';
import Button from '@/components/Button';
import Icon, { EIconName } from '@/components/Icon';
import { showNotification, validationRules } from '@/utils/functions';
import { useDispatch } from 'react-redux';
import { ELoginAction, loginAction } from '@/redux/actions';
import { EResponseCode, ETypeNotification } from '@/common/enums';
import Helpers from '@/services/auth-helpers';

import './Login.scss';

const Login = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const loginLoading = useSelector((state) => state.loadingReducer[ELoginAction.LOGIN]);

  const handleSubmit = (values) => {
    const body = { ...values };

    dispatch(loginAction.request({ body }, (response) => handleLoginSuccess(response, values)));
  };

  const handleLoginSuccess = (response, values) => {
    if (response.code === EResponseCode.OK) {
      navigate(Paths.Users);
      showNotification(ETypeNotification.SUCCESS, 'Login Successfully');
      Helpers.storeRememberUserName(values.remember ? values.username : '');
      Helpers.storeRememberPassword(values.remember ? values.password : '');
    } else {
      showNotification(ETypeNotification.ERROR, response.error);
    }
  };

  useEffect(() => {
    form.setFieldsValue({
      username: Helpers.getRememberUserName(),
      password: Helpers.getRememberPassword(),
    });
  }, []);

  return (
    <div className="Login">
      <div className="Login-header flex items-center justify-between">
        <div />
        <div className="Login-header-item">
          <div className="Login-header-language cursor-pointer flex items-center justify-center">
            <Icon name={EIconName.Global} />
          </div>
        </div>
      </div>
      <div className="Login-wrapper">
        <div className="Login-logo">
          <img src={LogoPrimary} alt="" />
        </div>
        <div className="Login-title flex justify-center">
          <span>Login</span>
        </div>

        <Form layout="vertical" form={form} className="Login-form" onFinish={handleSubmit}>
          <Form.Item name="username" rules={[validationRules.required()]}>
            <Input prefix={<UserOutlined />} placeholder="Username" size="large" />
          </Form.Item>
          <Form.Item name="password" rules={[validationRules.required()]}>
            <Input type="password" prefix={<LockOutlined />} placeholder="Password" size="large" />
          </Form.Item>
          <div className="Login-remember flex justify-between items-center">
            <Form.Item name="remember">
              <Checkbox label="Remember me" />
            </Form.Item>
          </div>
          <div className="Login-submit">
            <Button title="Sign In" size="large" htmlType="submit" loading={loginLoading} />
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
