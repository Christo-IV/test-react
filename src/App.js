import "./App.css";
import Header from "./components/Header";
import Overview from "./components/Overview";
import Landing from "./components/Landing";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Landing />
        <section className="page-section IT-paths flex f-center" id="itPaths">
          <div class="grouping flex f-center">
            <Overview />
            <Overview />
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
