import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "./components/Header";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";
import Jumbotron from "./components/Jumbotron";
import Contact from "./pages/Contact";
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
          <Route exact path="/contact" component={Contact} />
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
