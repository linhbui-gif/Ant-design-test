import React from 'react';

import Switch from '@/components/Switch';
import { EIconColor } from '@/components/Icon';
import Table from '@/components/Table';
import Pagination from '@/components/Pagination';
import Button from '@/components/Button';

import './UsersTable.scss';

const UsersTable = () => {
  const columns = [
    {
      key: 'userName',
      dataIndex: 'userName',
      title: 'User Name',
      sorter: true,
    },
    {
      key: 'promoCode',
      dataIndex: 'promoCode',
      title: 'Promo Code',
      sorter: true,
    },
    {
      key: 'createdDate',
      dataIndex: 'createdDate',
      title: 'Created Date',
      sorter: true,
    },
    {
      key: 'apps',
      dataIndex: 'apps',
      title: 'Apps',
      sorter: true,
      render: (value) => <span style={{ color: EIconColor.DODGER_BLUE }}>{value}</span>,
    },
    {
      key: 'keywords',
      dataIndex: 'keywords',
      title: 'Keywords',
      sorter: true,
      render: (value) => <span style={{ color: EIconColor.DODGER_BLUE }}>{value}</span>,
    },
    {
      key: 'plan',
      dataIndex: 'plan',
      title: 'Plan',
      sorter: true,
    },
    {
      key: 'statusList',
      dataIndex: 'statusList',
      title: 'GA/Shopify',
      sorter: true,
      render: () => (
        <div className="UsersTable-status-list">
          <div className="UsersTable-status-list-item flex items-center cancel">
            <div className="UsersTable-status-list-item-circle" />
            <span className="UsersTable-status-list-item-label">Google is connected</span>
          </div>

          <div className="UsersTable-status-list-item flex items-center success">
            <div className="UsersTable-status-list-item-circle" />
            <span className="UsersTable-status-list-item-label">Shopify is connected</span>
          </div>
        </div>
      ),
    },
    {
      key: 'status',
      dataIndex: 'status',
      title: 'Status',
      render: () => <Switch />,
    },
  ];

  const dataSources = [
    {
      userName: 'John Brown',
      promoCode: 'DISCOUNT',
      createdDate: 'Just now',
      apps: '60',
      keywords: '70',
      plan: 'Standard',
      statusList: '',
      status: false,
    },
    {
      userName: 'John Brown',
      promoCode: 'DISCOUNT',
      createdDate: 'Just now',
      apps: '60',
      keywords: '70',
      plan: 'Standard',
      statusList: '',
      status: false,
    },
    {
      userName: 'John Brown',
      promoCode: 'DISCOUNT',
      createdDate: 'Just now',
      apps: '60',
      keywords: '70',
      plan: 'Standard',
      statusList: '',
      status: false,
    },
    {
      userName: 'John Brown',
      promoCode: 'DISCOUNT',
      createdDate: 'Just now',
      apps: '60',
      keywords: '70',
      plan: 'Standard',
      statusList: '',
      status: false,
    },
  ];

  return (
    <div className="UsersTable">
      <div className="UsersTable-table">
        <Table columns={columns} dataSources={dataSources} />
      </div>
      <div className="UsersTable-pagination flex justify-end">
        <Pagination
          page={1}
          pageSize={10}
          total={500}
          showTotal={(total) => <Button title={`${total} users`} type="defautl" />}
        />
      </div>
    </div>
  );
};

export default UsersTable;
