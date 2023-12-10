import React from 'react';
import TodoList from './components/TodoList/TodoList';
import Layout from './components/Layout/Layout';
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <TodoList />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
