import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
//Components and Pages
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Category from "./pages/Category";
import Recipe from "./pages/Recipe";

function App() {
  return (
      <>
      <Router>
          <Header/>
          <main className="container content">
                    <Switch>
                        <Route exact path="/"> <Home/> </Route>
                        <Route path="/category/:name" component={Category}/>
                        <Route path="/meal/:id" component={Recipe}/>
                        <Route component={NotFound}/>
                    </Switch>

          </main>
          <Footer/>
      </Router>
      </>

  )
}

export default App;
