import { useState, useEffect } from "react";
import Overview from "./Overview";
import "./css/ItPaths.css";

function ItPaths() {
  const [specialities, setSpecialities] = useState([]);

  function getSpecialities() {
    fetch("data/specialities.json", {
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setSpecialities(data);
      });
  }

  useEffect(() => {
    getSpecialities();
  }, []);

  return (
    <section className="page-section IT-paths flex f-center" id="itPaths">
      <div class="grouping flex f-row">
        {specialities.map((speciality, index) => {
          return <Overview speciality={speciality} key={index} />;
        })}
      </div>
    </section>
  );
}

export default ItPaths;
