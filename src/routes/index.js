import NoMatch from '@/components/hoc/Nomatch';
// import MainRoute from './main/MainRoute';

// * https://reactrouter.com/docs/en/v6
const routes = [
  // ...MainRoute,
  {
    path: '*',
    element: <NoMatch />
  }
];

export default routes;
