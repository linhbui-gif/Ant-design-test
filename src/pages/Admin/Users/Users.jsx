import React, { useState } from 'react';

import Breadcrumb from '@/components/Breadcrumb';
import UsersFilter from '@/pages/Admin/Users/UsersFilter';
import { Paths } from '@/pages/routers';
import UsersTable from '@/pages/Admin/Users/UsersTable';

import './Users.scss';

const Users = () => {
  const dataBreadcrumb = [
    { title: 'Home', link: Paths.Home },
    { title: 'Users', link: Paths.Users },
    { title: 'User Management', link: Paths.Users },
  ];

  return (
    <div className="Users">
      <Breadcrumb data={dataBreadcrumb} title="Users management" />

      <div className="Users-wrapper">
        <UsersFilter />
        <UsersTable />
      </div>
    </div>
  );
};
export default Users;
