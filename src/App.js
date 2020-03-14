import React from 'react';

import './App.css';
import { Content } from './Content';
import { AddEmployee }from './AddEmployee';
import { Route, Switch, BrowserRouter as Router}from 'react-router-dom';
import { Header}from './Header';
class App extends React.Component {
  render(){

 
  return (
    <div>
      <Router>
        <Header></Header>
          <Switch>
            <Route path='/list-emp' exact={true} component={Content}/>
            <Route path='/add-emp' exact={true} component={AddEmployee}/>
          </Switch>
        
      </Router>
    </div>
  );
}
}
export default App;
