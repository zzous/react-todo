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
