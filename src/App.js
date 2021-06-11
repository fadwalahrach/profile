import logo from './logo.svg';
import './App.css';
import React from 'react';
import Card from './Component/Profile/Card';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Card/>
      </div>
    );
  }
}

export default App;
