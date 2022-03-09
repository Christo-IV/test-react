import "./css/Footer.css";
import voco from "../img/vocotiny.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-top flex f-row f-center">
        <img src={voco} alt="Tartu Rakendusliku Kolledži logo" />
        <div className="column flex f-col">
          <h3>Kontakt</h3>
          <p>info@voco.ee</p>
          <p>7 361 810</p>
        </div>
        <div className="column flex f-col">
          <h3>VOCO</h3>
          <p>Kopli 1</p>
          <p>Tartu 50115</p>
        </div>
        <div className="column flex f-col">
          <h3>Privaatsustingimused</h3>
          <a href="https://voco.ee/andmekaitse-info/">Andmekaitse</a>
          <a href="https://voco.ee/kupsised/">Küpsised</a>
        </div>
      </div>
      <div className="footer-bottom flex f-row f-center">
        <p>&copy; TARTU RAKENDUSLIK KOLLEDŽ 2022</p>
      </div>
    </div>
  );
}

export default Footer;
