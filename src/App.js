import React, { useState } from "react";
import AllColors from "./AllColors"
import ColorDetail from "./ColorDetail"
import NewColor from "./NewColor"
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"


function App() {
  const INITIAL_STATE = [
    {
      name: "red",
      val: "	#FF0000"
    },
    {
      name: "green",
      val: "#00FF00"
    },
    {
      name: "blue",
      val: "#0000FF"
    }
  ]

  const [colorList, setColorList] = useState(INITIAL_STATE);
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/colors"> <AllColors colorList={colorList} setColorList={setColorList} /> </Route>
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

