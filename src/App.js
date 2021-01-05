import "./App.css";
import LinkForm from "./components/LinkForm";
import Link from "./components/Links";
import NavBar from "./components/Navbar";

function App() {
  return (
    <div className="container-fluid">
      <NavBar></NavBar>
      <div className="container p4">
        <div className="row">
          <LinkForm></LinkForm>
        </div>
      </div>
    </div>
  );
}

export default App;
