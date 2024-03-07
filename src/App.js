import logo from "./logo.svg";
import "./App.css";
import SideBarMenu from "./Components/SideBarMenu/SideBarMenu";
import DisplayDetails from "./Components/DetailDisplayPannel/DisplayDetails";
import { Container } from "@mui/material";

function App() {
  return (
    <div className="App">
      <SideBarMenu />
      <DisplayDetails />
    </div>
  );
}

export default App;
