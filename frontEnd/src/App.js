import {BrowserRouter as Router,Link,Route,Switch} from 'react-router-dom';
import React from 'react';
import axios from 'axios';
import Home from './components/home.jsx'
import Login from './components/login.jsx'

const handleLogin=(e,ee)=>{
const l=JSON.parse(axios.get(`http:localhost:5035/users`))
var result =l.filter((el)=>{return el.username===e&&el.password===ee})

return result
}
const handleImage=(id)=>{
  var x=axios.get(`http://localhost:5035/user/${id}`);
  return x
}
//i couldn't figure how how to pass props through react router
const App = () => (
  <Router> 
    <div>
      <Link to="/">Login</Link>{' '}
      <Link to={{pathname: '/home'}}>Home</Link>{' '}
      
      <Switch>
      <Route path="/" component={Login} />
        <Route path="/home" component={Home} />
      </Switch>
    </div>
  </Router>

);




export default App;
