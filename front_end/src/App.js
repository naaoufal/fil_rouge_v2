import './App.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import Header from "./ClientComponent/Header"
import Login from './ClientComponent/Login'
import AdminLogin from './AdminComponent/AdminLogin'
import Register from './ClientComponent/Register'
import AdminDashboard from './AdminComponent/AdminDashboard'
import SideBar from './AdminComponent/SideBar';
import ModManagement from './AdminComponent/ModManagement';
import PostManagement from './AdminComponent/PostManagement';
import TagManagement from './AdminComponent/TagManagement';
import ContManagement from './AdminComponent/ContManagement';

function App() {
  return (
    <Router>
      <Route path="/" exact component={Header} />
      <Route path="/" exact component={SideBar} />
      {/* URL ROUTE COMPONENT */}
      <Switch>
        <Route path="/UserLogin" exact component={Login} />
        <Route path="/AdminLogin" exact component={AdminLogin} />
        <Route path="/UserRegister" exact component={Register} />
        <Route path="/AdminDashboard" exact component={AdminDashboard} />
        <Route path="/staff" exact component={ModManagement} />
        <Route path="/posts" exact component={PostManagement} />
        <Route path="/tags" exact component={TagManagement} />
        <Route path="/contacts" exact component={ContManagement} />
      </Switch>
    </Router>
  );
}

export default App;
