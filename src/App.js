import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "./components/Header";
import Project from "./components/Project";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div>
        <Header />
        
        <Switch >
          <Route exact path="/" component={Project} />
          {/* <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} /> */}
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
