import ReactDom from "react-dom";
import "./index.css";
import Welcome from "./components/basics/welcome";
ReactDom.render(
  <div id='app'>
    <Welcome />
  </div>,
  document.getElementById("root")
);
