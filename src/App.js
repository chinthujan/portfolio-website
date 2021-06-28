import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import Skills from "./Components/Skills";
import Work from "./Components/Work";
import Goals from "./Components/Goals";
import Contact from "./Components/Contact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function MainPage(props) {
 return (
 <div className="App">
 <Hero />
 <Skills />
 <Work />
 <Goals />
 <Contact />
 </div>
 );
}
export default function App() {
 return (
 <Router>
 <NavBar />
 <Switch>
 <Route exact path="/" component={MainPage} />
 </Switch>
 </Router>
 );
}
