import React from 'react';
import { Form } from 'antd';

import AuthForm from '@/containers/AuthForm';
import { Link } from '@reach/router';
import { LayoutPaths, Paths } from '@/pages/routers';
import Button from '@/components/Button';

import './CheckYourEmail.scss';

const CheckYourEmail = () => {
  const [form] = Form.useForm();

  return (
    <div className="CheckYourEmail">
      <AuthForm>
        <div className="CheckYourEmail-title">Check your email</div>
        <div className="CheckYourEmail-description">We’ve sent a password recover instructions to your email.</div>
        <Form layout="vertical" form={form} className="CheckYourEmail-form">
          <div className="CheckYourEmail-submit">
            <Button title="Open email" size="large" htmlType="submit" />
          </div>
        </Form>
        <div className="CheckYourEmail-description">
          <Link to={`${LayoutPaths.Auth}${Paths.LoginApp}`}>
            <u>Skip, I'll confirm later</u>
          </Link>
        </div>

        <div className="CheckYourEmail-description">
          <i>
            Did not receive the email?
            {` `}
            <u className="cursor-pointer">Please resend</u>.
          </i>
        </div>
      </AuthForm>
    </div>
  );
};

export default CheckYourEmail;
