import "./App.css";
import Header from "./components/Header";
import Overview from "./components/Overview";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <section className="page-section landing">
          <img src="#" alt="IT akadeemia" />
          <p className="introduction">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo
            facere ea cumque saepe consequatur placeat delectus, architecto
            perferendis atque non expedita voluptates necessitatibus quasi ullam
            nemo modi maiores sunt repudiandae.
          </p>
          <img src="#" alt="IT robo bro" className="robo-bro" />
        </section>
        <section className="page-section IT-paths flex f-center">
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
