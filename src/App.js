import "./App.css";
import Header from "./Header";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      {/* // <BrowserRouter basename={window.location.pathname || ""}> */}
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
    </BrowserRouter>
  );
}

export default App;
