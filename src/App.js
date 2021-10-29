import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import './App.css';
import Navigation from "./components/Navigation";
import Detail from "./routes/Detail";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/detail" component={Detail} />
    </HashRouter>
     
  );
}
export default App;