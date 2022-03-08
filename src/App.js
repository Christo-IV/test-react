import "./App.css";
import Header from "./components/Header";
import Landing from "./components/Landing";
import ItPaths from "./components/ItPaths";
import Career from "./components/Career";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Landing />
        <ItPaths />
<Career/>
      </div>
    </div>
  );
}

export default App;
