import "./App.css";
import Header from "./components/Header";
import Landing from "./components/Landing";
import ItPaths from "./components/ItPaths";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Landing />
        <ItPaths />
      </div>
    </div>
  );
}

export default App;
