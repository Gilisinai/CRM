import React, { Component } from 'react';
import './App.css';
import { observer , inject } from 'mobx-react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import Clients from './components/Clients'
import Actions from './components/Actions'
import Analytics from './components/Analytics'

@inject("clientsData")
@observer
class App extends Component {
  constructor() {
    super()
    this.state = {
      clients: []

    }
  }

  

  async componentDidMount() {
    const response = await this.props.clientsData.getClientsData()
    this.setState({ clients: response.data })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="main-links">
          <Link to="/clients" className="link">Clients</Link>
           
           <Link to="/Actions" className="link">Actions</Link>
          
           <Link to="/Analytics" className="link">Analytics</Link>
          </div>
          <div className="main-routes">

          <Route path="/clients" > <Clients/> </Route>
            <Route path="/Actions" exact component={Actions}></Route>
            <Route path="/Analytics" exact component={Analytics}></Route>
           
           
           </div>
        </div>
      </Router>
    )

  }
}

export default App;
