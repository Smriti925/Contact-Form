import FormTwo from "./Components/FormTwo";
import SaveResponse from "./Components/SaveResponse";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TestSlider from "./Components/TestSlider";

function App() {
  return (
    <Router>
      <div className="">
        <Switch>
          <Route exact path="/">
            <FormTwo />
          </Route>
          <Route path="/page2">
            <SaveResponse />
          </Route>
          <Route path="/page3">
            <TestSlider />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
