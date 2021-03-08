import './App.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Home from "./ClientComponent/Home";
import Header from "./ClientComponent/Header";
import Hero from './ClientComponent/Hero';
import Services from './ClientComponent/Services';
import Footer from './ClientComponent/Footer';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/" exact component={Header} />
        <Route path="/" exact component={Hero} />
        <Route path="/" exact component={Services} />
        <Route path="/" exact component={Footer} />
      </Switch>
    </Router>
  );
}

export default App;
