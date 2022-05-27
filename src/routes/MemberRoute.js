import Layout from '@/components/hoc/Layout';
import MemberPage from '@/pages/member/MemberPage';
import LoginPage from '@/pages/member/LoginPage';
import JoinPage from '@/pages/member/JoinPage';

export default [
  {
    path: '/member',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <MemberPage />
      },
      {
        path: 'login',
        element: <LoginPage />
      },
      {
        path: 'join',
        element: <JoinPage />
      }
    ]
  }
];
