import React, { lazy, Suspense } from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import { Navbar, Footer } from "./components/layouts";
import ScrollToTop from "./utils/ScrollToTopController";
import "./utils/App.scss";
import "./utils/aos";
import Loading from "./components/layouts/Loading";

const Home = lazy(() => import("./components/layouts/Home"));
const About = lazy(() => import("./components/layouts/About"));

function App() {
  return (
    <HashRouter>
      <ScrollToTop>
        <div className="App ">
          <Navbar />
          <Suspense fallback={<Loading />}>
            <Switch>
              <Route path="/about" component={About} />

              <Route path="/" component={Home} />
            </Switch>
          </Suspense>
          <Footer />
        </div>
      </ScrollToTop>
    </HashRouter>
  );
}

export default App;
