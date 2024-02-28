import AllColors from "./AllColors"
import ColorDetail from "./ColorDetail"
import NewColor from "./NewColor"
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"


function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <NavBar /> */}
        <Switch>
          <Route exact path="/colors"> <AllColors /> </Route>
          <Route exact path="/colors/new"><NewColor /></Route>
          <Route path="/colors/:color"> <ColorDetail /></Route>
          {/* <Route path="/colors/*"><Redirect to="/colors" /></Route> */}
          <Redirect to="/colors" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

