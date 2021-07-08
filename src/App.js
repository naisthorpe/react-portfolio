import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "./components/Header";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";
import Jumbotron from "./components/Jumbotron";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Jumbotron />
        
        <Switch >
          <Route exact path="/" component={About} />
          <Route exact path="/projects" component={Projects} />
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
