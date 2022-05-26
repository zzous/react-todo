import NoMatch from '@/components/hoc/Nomatch';
import TodoRoute from './TodoRoute';
// import MainRoute from './main/MainRoute';

// * https://reactrouter.com/docs/en/v6
const routes = [
  // ...MainRoute,
  ...TodoRoute,
  {
    path: '*',
    element: <NoMatch />
  }
];

export default routes;
