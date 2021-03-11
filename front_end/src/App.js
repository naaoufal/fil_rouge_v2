import './App.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import Home from "./ClientComponent/Home"
import Header from "./ClientComponent/Header"
import Hero from './ClientComponent/Hero'
import Services from './ClientComponent/Services'
import Footer from './ClientComponent/Footer'
import Login from './ClientComponent/Login'
import AdminLogin from './ClientComponent/AdminLogin'
import Register from './ClientComponent/Register'
import AdminDashboard from './ClientComponent/AdminDashboard'
import SideBar from './ClientComponent/SideBar';

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/" exact component={Header} />
      <Route path="/" exact component={Hero} />
      <Route path="/" exact component={Services} />
      <Route path="/" exact component={Footer} />
      <Route path="/" exact component={SideBar} />
      {/* URL ROUTE COMPONENT */}
      <Switch>
        <Route path="/UserLogin" exact component={Login} />
        <Route path="/AdminLogin" exact component={AdminLogin} />
        <Route path="/UserRegister" exact component={Register} />
        <Route path="/AdminDashboard" exact component={AdminDashboard} />
      </Switch>
    </Router>
  );
}

export default App;
