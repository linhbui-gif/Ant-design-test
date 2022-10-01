import React, { useState } from 'react';
import { Form } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';

import AuthForm from '@/containers/AuthForm';
import LogoPrimary from '@/assets/images/logo-primary.svg';
import Input from '@/components/Input';
import { Link, navigate } from '@reach/router';
import { LayoutPaths, Paths } from '@/pages/routers';
import Button from '@/components/Button';
import { ERegisterAppAction, registerAppAction } from '@/redux/actions';
import { showNotification, validationRules } from '@/utils/functions';
import { ETypeNotification } from '@/common/enums';
import GoogleBtn from '@/components/GoogleBtn';

import './Register.scss';

const Register = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const [, setFormValues] = useState({});

  const { password } = form.getFieldsValue();

  const registerLoading = useSelector((state) => state.loadingReducer[ERegisterAppAction.REGISTER_APP]);

  const handleSubmit = (values) => {
    const body = {
      fullname: values?.fullname,
      password: values?.password,
      username: values?.username,
    };

    dispatch(registerAppAction.request({ body }, handleRegisterAppSuccess));
  };

  const handleRegisterAppSuccess = (response) => {
    if (response.token) {
      navigate(`${LayoutPaths.Auth}${Paths.LoginApp}`);
      showNotification(ETypeNotification.SUCCESS, 'Register Successfully');
    }
  };

  return (
    <div className="Register">
      <AuthForm>
        <div className="Register-logo">
          <img src={LogoPrimary} alt="" />
        </div>
        <div className="Register-description">
          Start your <big>7-day</big> free trial, no credit card required Already signed up?{` `}
          <span>
            <Link to={`${LayoutPaths.Auth}${Paths.LoginApp}`}>Sign In</Link>
          </span>
        </div>
        <Form
          layout="vertical"
          form={form}
          className="Register-form"
          onFinish={handleSubmit}
          onValuesChange={(_, values) => setFormValues(values)}
        >
          <Form.Item name="username" rules={[validationRules.required()]}>
            <Input prefix={<UserOutlined />} placeholder="Username" size="large" />
          </Form.Item>
          <Form.Item name="fullname" rules={[validationRules.required()]}>
            <Input prefix={<UserOutlined />} placeholder="Full Name" size="large" />
          </Form.Item>
          <Form.Item name="email" rules={[validationRules.required(), validationRules.email()]}>
            <Input prefix={<MailOutlined />} placeholder="Email" size="large" />
          </Form.Item>
          <Form.Item name="password" rules={[validationRules.required()]}>
            <Input
              type="password"
              prefix={<LockOutlined />}
              placeholder="Password (8 characters at least)"
              size="large"
            />
          </Form.Item>
          <Form.Item
            name="confirmPassword"
            rules={[validationRules.required(), validationRules.confirmPassword(password)]}
          >
            <Input type="password" prefix={<LockOutlined />} placeholder="Confirm Password" size="large" />
          </Form.Item>

          <div className="Register-submit">
            <Button title="Get started" size="large" htmlType="submit" loading={registerLoading} />
          </div>
        </Form>

        <div className="Register-third-party flex items-center justify-center text-center">
          <span>or log in with Google</span>
        </div>
        <div className="Register-socials">
          <GoogleBtn />
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
