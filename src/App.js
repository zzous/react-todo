// import '@/assets/styles/App.scss';

// import TodoTemplate from '@/components/todo/TodoTemplate';
// import TodoHead from '@/components/todo/TodoHead';
// import TodoList from '@/components/todo/TodoList';
// import TodoCreate from '@/components/todo/TodoCreate';
// import { TodoProvider } from '@/constants/TodoContext';
// import { firestore } from '@/firebase';
// import { useEffect } from 'react';
// function App() {
//   useEffect(() => {
//     console.log(firestore);
//   });
//   return (
//     <TodoProvider>
//       <TodoTemplate>
//         <TodoHead />
//         <TodoList />
//         <TodoCreate />
//       </TodoTemplate>
//     </TodoProvider>
//   );
// }

// export default App;
import { useRoutes } from 'react-router-dom';
import routes from '@/routes';

function App() {
  const RWS = useRoutes(routes);

  return <>{ RWS }</>;
}

export default App;
