import { HashRouter } from "react-router-dom";
import "./App.css";
import Root from "./Navigation/root";

function App() {
  return (
    <>
      <HashRouter>
        <Root />
      </HashRouter>
    </>
  );
}

export default App;
