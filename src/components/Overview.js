import "./css/Overview.css";
import placeholderImg from "../img/ITALOGO.jpg";

function Overview() {
  return (
    <div className="overview flex f-col">
      <div className="info flex f-col shadow">
        <img
          className="stock-img shadow"
          src={placeholderImg}
          alt="IT person in their natural habitat"
        />
        <h2 className="speciality-name shadow">
          &lt; Name of speciality here &gt;
        </h2>
        <p className="desc shadow">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum
          cumque distinctio voluptates dignissimos voluptatibus ullam expedita
          incidunt illum excepturi voluptate ipsa, nostrum dolorem animi
          recusandae perspiciatis corporis? Nostrum, mollitia pariatur.
        </p>
      </div>
      <button className="apply-btn shadow">Sisseastumine</button>
    </div>
  );
}

export default Overview;
