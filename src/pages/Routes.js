import React from 'react';
import{ BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Index from '../components/index';

const Routes = ()=>{
  return(
    <Router>
      <Switch>
        <Route path ="/" component={Index} />
      </Switch>
    </Router>
  )
}

export default Routes;