import "./css/Overview.css";
import placeholderImg from "../img/ITALOGO.jpg";
import { Link } from "react-router-dom";

function Overview({ speciality }) {
  // function getImg() {
  //   fetch(`img/${speciality.img}`, {
  //     headers: {
  //       Accept:
  //         "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
  //     },
  //   }).then((response) => {
  //     return response;
  //   });
  // }

  return (
    <div className="overview flex f-col">
      <div className="info flex f-col shadow">
        <img
          className="stock-img shadow"
          src={placeholderImg}
          alt={speciality.alt}
        />
        <h2 className="speciality-name shadow">{speciality.title}</h2>
        <p className="desc shadow">{speciality.desc}</p>
      </div>
<<<<<<< HEAD
      <Link to="/career" className="apply-btn shadow">
        Loe lähemalt
=======
      <Link
        to={`/career/${speciality.abbreviation}`}
        className="apply-btn shadow"
      >
        Sisseastumine
>>>>>>> 6f5439bc0189e25ebdee29ac84f4b14046b789b4
      </Link>
    </div>
  );
}

export default Overview;
