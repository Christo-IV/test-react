import "./App.css";
import Header from "./components/Header";
import Landing from "./components/Landing";
import ItPaths from "./components/ItPaths";
import Career from "./components/Career";
import Footer from "./components/Footer";
import Timetable from "./components/Timetable";


function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Landing />
        <ItPaths />
<Career/>
<Timetable/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
