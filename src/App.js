import '@/assets/scss/App.scss';

import TodoTemplate from '@/components/TodoTemplate';
import TodoHead from '@/components/TodoHead';
import TodoList from '@/components/TodoList';
import TodoCreate from '@/components/TodoCreate';
import { TodoProvider } from '@/TodoContext';
import { firestore } from '@/firebase';
import { useEffect } from 'react';
function App() {
  useEffect(() => {
    console.log(firestore);
  });
  return (
    <TodoProvider>
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </TodoProvider>
  );
}

export default App;
