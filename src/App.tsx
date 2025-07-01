import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Root from "./Navigation/root";

function App() {
  return (
    <>
      <BrowserRouter>
        <Root />
      </BrowserRouter>
    </>
  );
}

export default App;
