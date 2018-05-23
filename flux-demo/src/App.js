import React, { Component } from 'react';
import './App.css';
import AddNewItem from './component/AddNewItem';
import ItemsList from './component/ItemsList';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className= "app-tittle">Flux Wallet</h1>
        <AddNewItem/>
        <ItemsList/>
      </div>
    );
  }
}

export default App;
