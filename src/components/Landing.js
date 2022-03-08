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
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo
        facere ea cumque saepe consequatur placeat delectus, architecto
        perferendis atque non expedita voluptates necessitatibus quasi ullam
        nemo modi maiores sunt repudiandae.
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
