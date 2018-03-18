import React, { Component } from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout';
import Routes from './Components/Routes/Routes';

class App extends Component {
  render() {
    return (
      <Layout>
        <Routes />
      </Layout>
    );
  }
}

export default App;
