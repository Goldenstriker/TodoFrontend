import React from 'react';
import TodoList from './components/TodoList/TodoList';
import Layout from './components/Layout/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/home" Component={Home} />
          <Route path="/profile" Component={Profile} />
          <Route path="*" Component={NotFound} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
