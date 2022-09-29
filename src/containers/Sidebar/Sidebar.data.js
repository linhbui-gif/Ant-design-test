import { Paths } from '@/pages/routers';
import {
  DashboardOutlined,
  UserOutlined,
  CheckCircleOutlined,
  WarningOutlined,
  UnorderedListOutlined,
  HighlightOutlined,
} from '@ant-design/icons';

export const dataSidebar = [
  {
    key: 1,
    title: 'Dashboard',
    icon: <DashboardOutlined />,
    link: Paths.Home,
    disabled: true,
    children: [
      { link: Paths.Home, title: 'Dashboard 1' },
      { link: Paths.Home, title: 'Dashboard 2' },
    ],
  },
  {
    key: 2,
    title: 'User',
    icon: <UserOutlined />,
    link: Paths.Users,
    disabled: false,
    children: [
      { link: Paths.Users, title: 'Create User' },
      { link: Paths.Users, title: 'User Management' },
    ],
  },
  {
    key: 3,
    title: 'Keywords',
    icon: <UnorderedListOutlined />,
    link: Paths.Home,
    disabled: true,
    children: [
      { link: Paths.Home, title: 'Keywords 1' },
      { link: Paths.Home, title: 'Keywords 2' },
    ],
  },
  {
    key: 4,
    title: 'Apps',
    icon: <CheckCircleOutlined />,
    link: Paths.Home,
    disabled: true,
    children: [
      { link: Paths.Home, title: 'Apps 1' },
      { link: Paths.Home, title: 'Apps 2' },
    ],
  },
  {
    key: 5,
    title: 'Partners',
    icon: <WarningOutlined />,
    link: Paths.Home,
    disabled: true,
    children: [
      { link: Paths.Home, title: 'Partners 1' },
      { link: Paths.Home, title: 'Partners 2' },
    ],
  },
  {
    key: 6,
    title: 'Promo code',
    icon: <HighlightOutlined />,
    link: Paths.Home,
    disabled: true,
    children: [
      { link: Paths.Home, title: 'Promo code 1' },
      { link: Paths.Home, title: 'Promo code 2' },
    ],
  },
];
