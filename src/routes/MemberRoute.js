import Layout from '@/components/hoc/Layout';
import JoinPage from '@/pages/member/JoinPage';

export default [
  {
    path: '/member',
    element: <Layout />,
    children: [
      {
        path: 'join',
        element: <JoinPage />
      }
    ]
  }
];
