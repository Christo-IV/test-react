import "./css/Landing.css";
import ITacademy from "../img/ITAKADEEMIALOGO.png";

function Landing() {
  return (
    <section className="page-section landing flex f-col f-center">
      <img
        className="it-academy-logo"
        src={ITacademy}
        alt="IT akadeemia logo"
      />
      <p className="introduction">
        IT Akadeemia programm on Eesti riigi, ülikoolide ja IKT sektori
        ettevõtete koostööprogramm. Eesmärk on õpetada välja uusi IT valdkonna
        spetsialiste, kes suudaksid olla edukad nii Eestis kui ka välismaal.
        Meie koolis, VOCOs, on kaks IT Akadeemia eriala, mille vahel saab
        valida. Anna stardipauk oma tulevikule!
      </p>
      <iframe
        className="video"
        src="https://www.youtube-nocookie.com/embed/2xI7NjC_0Dc"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </section>
  );
}

export default Landing;
