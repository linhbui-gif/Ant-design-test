import React from 'react';
import { Form } from 'antd';
import { MailOutlined } from '@ant-design/icons';

import AuthForm from '@/containers/AuthForm';
import Input from '@/components/Input';
import { Link } from '@reach/router';
import { LayoutPaths, Paths } from '@/pages/routers';
import Button from '@/components/Button';

import './ResetPassword.scss';

const ResetPassword = () => {
  const [form] = Form.useForm();

  return (
    <div className="ResetPassword">
      <AuthForm>
        <div className="ResetPassword-title">Reset Password</div>
        <div className="ResetPassword-description">
          Please enter the email associated with your account and we'll send. a email with instuctions to reset your
          password.
        </div>
        <Form layout="vertical" form={form} className="ResetPassword-form">
          <Form.Item>
            <Input prefix={<MailOutlined />} placeholder="Email " size="large" />
          </Form.Item>

          <div className="ResetPassword-submit">
            <Button title="Send Instructions" size="large" htmlType="submit" />
          </div>
        </Form>

        <div className="ResetPassword-description">
          <i>
            You remember your password?{' '}
            <span>
              <Link to={`${LayoutPaths.Auth}${Paths.Login}`}>Sign in</Link>
            </span>
          </i>
        </div>
      </AuthForm>
    </div>
  );
};

export default ResetPassword;
