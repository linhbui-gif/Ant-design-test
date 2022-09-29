import React, { useState } from 'react';
import { Col, Form, Row } from 'antd';
import { UpOutlined, DownOutlined } from '@ant-design/icons';

import Input from '@/components/Input';
import Select from '@/components/Select';
import Button from '@/components/Button';

import './UsersFilter.scss';

const UsersFilter = () => {
  const [form] = Form.useForm();
  const [visibleAdvancedFilter, setVisibleAdvancedFilter] = useState(false);

  return (
    <div className="UsersFilter">
      <Form form={form} className="UsersFilter-wrapper">
        <Row justify="space-between" gutter={[24, 24]}>
          <Col>
            <Row gutter={[24, 24]}>
              <Col>
                <Form.Item label="User name">
                  <Input placeholder="User name or User email" />
                </Form.Item>
              </Col>
              <Col>
                <Form.Item label="Created Date">
                  <Input placeholder="Last 7 days" />
                </Form.Item>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row gutter={[24, 24]}>
              {visibleAdvancedFilter && (
                <>
                  <Col>
                    <Form.Item label="User status">
                      <Select placeholder="User status" options={[]} />
                    </Form.Item>
                  </Col>
                  <Col>
                    <Form.Item label="Plan">
                      <Select placeholder="Plan" options={[]} />
                    </Form.Item>
                  </Col>
                </>
              )}

              <Col>
                <Button
                  title="Advance filter"
                  type="link"
                  icon={visibleAdvancedFilter ? <UpOutlined /> : <DownOutlined />}
                  reverse
                  onClick={() => setVisibleAdvancedFilter(!visibleAdvancedFilter)}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default UsersFilter;
