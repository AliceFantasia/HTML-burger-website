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
            <Route exact path="/HTML-burger-website" exact component={Home} />
            <Route path="/HTML-burger-website/login" exact component={Login} />
            <Route path="/HTML-burger-website/aboutus" exact component={Aboutus} />
            <Route path="/HTML-burger-website/userManagement" exact component={UserManagement} />
            <Route path="/HTML-burger-website/productManagement" exact component={ProductManagement} />
            <Route path="/HTML-burger-website/userResult" exact component={DisplayUsers} />
            <Route path="/HTML-burger-website/productResult" exact component={DisplayProduct} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
