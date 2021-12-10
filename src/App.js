import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Navbar from "./components/nav";
import Home from "./components/home";
import Login from './components/login';
import Aboutus from "./components/aboutus";
import ProductManagement from "./components/productManagement";
import UserManagement from "./components/userManagement";
import DisplayProduct from "./components/productResult";
import DisplayUsers from "./components/userResult";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/aboutus" component={Aboutus} />
            <Route path="/userManagement" component={UserManagement} />
            <Route path="/productManagement" component={ProductManagement} />
            <Route path="/userResult" component={DisplayUsers} />
            <Route path="/productResult" component={DisplayProduct} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
