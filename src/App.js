import React from 'react';
import { Provider } from 'react-redux';
import Posts from './components/Posts';
import CreatePost from './components/CreatePost';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Post app</h1>
      </div>
      <Posts />
      <CreatePost />
    </Provider>
  );
}

export default App;
