import { Breadcrumb, Typography, Form, Input, Dropdown, Menu, Space, Button, Table, Pagination } from 'antd';
import { DownOutlined, PoweroffOutlined } from '@ant-design/icons';
import './User.scss';
import { useState } from 'react';
import SelectOption from '@/components/Select/Select';
import { ETypeStatus } from '@/utils/constants';
import Icon, { EIconName } from '@/components/Icon';
import ButtonComponent from '@/components/Button/Button';
import InputComponent from '@/components/Input/Input';

const { Title } = Typography;
const menu = (
  <Menu
    items={[
      {
        label: <a href="https://www.antgroup.com">1st menu item</a>,
        key: '0',
      },
    ]}
  />
);
const dataOptions = [
  {
    id: 1,
    name: ETypeStatus.ACTIVE,
  },
  {
    id: 2,
    name: ETypeStatus.INACTIVE,
  },
];
const columns = [
  {
    title: 'User Name',
    dataIndex: 'username',
    sorter: (a, b) => a.username - b.username,
    render: (value) => <a>User A</a>,
  },
  {
    title: 'Create Date',
    dataIndex: 'createdate',
    sorter: (a, b) => a.createdate - b.createdate,
  },
  {
    title: 'App',
    dataIndex: 'app',
    align: 'right',
    sorter: (a, b) => a.app - b.app,
    render: (value) => <a>3</a>,
  },
  {
    title: 'Keywords',
    dataIndex: 'keyword',
    align: 'right',
    sorter: (a, b) => a.keyword - b.keyword,
    render: (value) => <a>3</a>,
  },
  {
    title: 'Plan',
    dataIndex: 'plan',
    sorter: (a, b) => a.plan - b.plan,
  },
  {
    title: 'Promo Code',
    dataIndex: 'promo',
    sorter: (a, b) => a.promo - b.promo,
    render: (value) => value || '-',
  },
  {
    title: 'GA/Shopify',
    dataIndex: 'shopdify',
    sorter: (a, b) => a.shopdify - b.shopdify,
    render: (value) => value || '-',
  },
  {
    key: 'status',
    dataIndex: 'status',
    title: 'Account Status',
    render: (value, record) => <SelectOption arrayOption={dataOptions} />,
  },
  {
    key: 'action',
    dataIndex: 'action',
    title: 'Action',
    align: 'center',
    render: (value, record) => <Icon name={EIconName.Trash} />,
  },
];
const data = [];

for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    createdate: `Just now ${i}`,
    plan: 'Standard',
  });
}
const UserManagement = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);
  const onSelectChange = (newSelectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <div className="User-management">
      <div className="User-management-head">
        <Breadcrumb>
          <Breadcrumb.Item>
            <a href="">Home</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="">Account</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>User Management</Breadcrumb.Item>
        </Breadcrumb>
        <Title level={4}>User Management</Title>
      </div>
      <div className="User-management-search flex ">
        <div className="search-basic">
          <Form>
            <Form.Item label="User Name" name="username" rules={[{ required: false, message: 'Please Enter' }]}>
              <InputComponent placeholder="Please Enter..." />
            </Form.Item>
          </Form>
        </div>
        <div className="search-advance">
          <Dropdown overlay={menu} trigger={['click']}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                Advance
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </div>
      </div>
      <div className="User-management-body">
        <div className="User-management-body-list">
          <Title level={5}>User List</Title>
          <ButtonComponent iconName={EIconName.Calendar} title="Export" />
        </div>
        <div className="User-management-body-table">
          <Table
            scroll={{ x: 'scroll' }}
            loading={loading}
            rowSelection={rowSelection}
            pagination={false}
            columns={columns}
            dataSource={data}
          />
          <Pagination defaultCurrent={6} total={500} />
        </div>
      </div>
    </div>
  );
};
export default UserManagement;
