import "./App.css";
import Header from "./Header";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Header />
            <Projects />
          </Route>
          <Route path="/about" exact>
            <Header />
            <About />
          </Route>
          <Route path="/contact" exact>
            <Header />
            <Contact />
          </Route>
          <Route
            path="/"
            render={() => (
              <div className="error__Page">
                <p>ERROR 404 PAGE NOT FOUND</p>
              </div>
            )}
          ></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
