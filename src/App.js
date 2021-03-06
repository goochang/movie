import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import './App.css';
import Navigation from "./components/Navigation";
import Detail from "./routes/Detail";
import About from "./routes/About";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/detail" component={Detail} />
      <Route path="/about" component={About} />
    </HashRouter>
     
  );
}
export default App;