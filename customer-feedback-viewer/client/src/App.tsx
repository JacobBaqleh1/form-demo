import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import FeedbackList from './components/FeedbackList';
import FeedbackDetail from './components/FeedbackDetail';
import FeedbackFilters from './components/FeedbackFilters';

const App = () => {
  return (
    <Router>
      <Layout>
        <FeedbackFilters />
        <Switch>
          <Route path="/" exact component={FeedbackList} />
          <Route path="/feedback/:id" component={FeedbackDetail} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;