import Layout from '@/components/hoc/Layout';
import TodoPage from '@/pages/todo/TodoPage';

export default [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <TodoPage />
      }
    ]
  }
];
