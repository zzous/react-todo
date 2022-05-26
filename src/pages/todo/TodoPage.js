import TodoTemplate from '@/components/todo/TodoTemplate';
import TodoHead from '@/components/todo/TodoHead';
import TodoList from '@/components/todo/TodoList';
import TodoCreate from '@/components/todo/TodoCreate';
import { TodoProvider } from '@/constants/TodoContext';
import { firestore } from '@/firebaseConfig';
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
