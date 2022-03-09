import "./App.css";
import Header from "./components/Header";
import Landing from "./components/Landing";
import ItPaths from "./components/ItPaths";
import Footer from "./components/Footer";
import Timetable from "./components/Timetable";
import CalendarReturn from "./components/CalendarReturn";



function App() {


  return (
    <div className="App">
      <Header />
      <div className="container">
        <Landing />
        <ItPaths />
        <CalendarReturn />
        <Timetable />
        
      </div>
      <Footer />
      
    </div>
  );
}

export default App;
