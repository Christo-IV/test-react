import "./css/Overview.css";

function Overview() {
  return (
    <div className="overview flex f-col f-center">
      <div className="info flex f-col">
        <img
          className="stock-img"
          src="#"
          alt="IT person in their natural habitat"
        />
        <h2>&lt; Name of speciality here &gt;</h2>
        <p className="desc">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum
          cumque distinctio voluptates dignissimos voluptatibus ullam expedita
          incidunt illum excepturi voluptate ipsa, nostrum dolorem animi
          recusandae perspiciatis corporis? Nostrum, mollitia pariatur.
        </p>
      </div>
      <button className="apply-btn">Sisseastumine</button>
    </div>
  );
}

export default Overview;
