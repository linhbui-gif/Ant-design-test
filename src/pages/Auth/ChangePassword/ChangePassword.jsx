import React from 'react';
import { Form } from 'antd';
import { LockOutlined } from '@ant-design/icons';

import AuthForm from '@/containers/AuthForm';
import Input from '@/components/Input';
import { Link } from '@reach/router';
import { LayoutPaths, Paths } from '@/pages/routers';
import Button from '@/components/Button';

import './ChangePassword.scss';

const ChangePassword = () => {
  const [form] = Form.useForm();

  return (
    <div className="ChangePassword">
      <AuthForm>
        <div className="ChangePassword-title">Create new password</div>
        <div className="ChangePassword-description">Your new password must be at least 8 characters.</div>
        <Form layout="vertical" form={form} className="ChangePassword-form">
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

          <div className="ChangePassword-submit">
            <Button title="Reset Password" size="large" htmlType="submit" />
          </div>
        </Form>

        <div className="ChangePassword-description">
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

export default ChangePassword;
