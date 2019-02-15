import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

import Dashboard from './component/Dashboard/Dashboard'
import Form from './component/Form/Form'
import Header from './component/Header/Header'

class App extends Component {
  constructor() {
    super()
    this.state = {
      products: [],
      name: '',
      price: '',
      img: ''
    }
    this.addInventory = this.addInventory.bind(this)
  }

  componentDidMount() {
    axios.get('/api/inventory').then(res => {
      this.setState({
        inventory: res.data
      });
    });
  }

  addInventory(name, price, img) {
    axios.post('/api/inventory', {name, price, img}).then(res => {
      this.setState({
        products: res.data,
        name: '',
        price: '',
        img: ''
      })
    })
  }
  render() {
    return (
      <div className="App">
        <Dashboard products={this.state.products}/>
        <Form addInventory={this.addInventory}/>
        < Header />
      </div>
    );
  }
}

export default App;
