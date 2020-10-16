import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Blog from './components/Blog';
import Post from './components/Post'

import 'bulma/css/bulma.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact>
          <Blog />
        </Route>
        <Route path="/blog/:post_id?">
          <Post />
        </Route>
      </Router>
    </div>
  );
}

export default App;
