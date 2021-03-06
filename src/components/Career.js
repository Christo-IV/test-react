import React, { useEffect, useState } from "react";
import "./css/Career.css";
import erialapilt from "../img/ITALOGO.jpg";
import Header from "./Header";
import Footer from "./Footer";

function Career({ abbr }) {
  const [speciality, setSpeciality] = useState({});
  function getSpecialities() {
    fetch("../data/specialities.json", {
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        data.map((datum) => {
          console.log(datum);
          if (datum.abbreviation == abbr) {
            setSpeciality(datum);
          }
        });
      });
  }

  useEffect(() => {
    getSpecialities();
    console.log(speciality);
  });
  try {
    return (
      <div>
        <Header />
        <div class="part1">
          <img class="careerpicture" src={erialapilt} alt="" />
          <div class="why">
            <h1>{speciality.aside.heading}</h1>
            {speciality.aside.points.map((point, index) => {
              return <li key={index}>{point}</li>;
            })}
          </div>
        </div>

        <div class="part2">
          <div class="careername">
            <h1>{speciality.title}</h1>
          </div>
          <div class="careerintro">
            <p>{speciality.longDesc}</p>

            <h1> Vastuv├Átutingimused on: </h1>
            {speciality.criteria.map((criteriaPoint, index) => {
              return (
                <>
                  <li key={index}>{criteriaPoint.point}</li>
                  {criteriaPoint.note !== "" ? (
                    <a href={criteriaPoint.link} key={index}>
                      {criteriaPoint.link}
                    </a>
                  ) : (
                    <></>
                  )}
                  {criteriaPoint.note !== "" ? (
                    <li className="alert" key={index}>
                      {criteriaPoint.note}
                    </li>
                  ) : (
                    <></>
                  )}
                </>
              );
            })}

            {/* <li>individuaalvestlus v├Ái grupivestlus;</li>
            <li>
              test, mis koosneb matemaatika├╝lesannete lahendamisest paberil
              (lisaks vastustele hinnatakse ka ├Áiget lahendusk├Ąiku), eesti keel
              ja inglise keel;
            </li>
            <li>
              praktiline ├╝lesanne ÔÇô enne vastuv├Átu katseid tuleb l├Ąbida
              konkreetne Codecademy kursus:
            </li>
            <a
              target="_blank"
              href="https://www.codecademy.com/learn/learn-python-3"
            >
              https://www.codecademy.com/learn/learn-python-3
            </a>
            <li class="alert">
              NB! Kursus on tasuline, kuid seitsme p├Ąeva jooksul on v├Áimalik
              kursust tasuta l├Ąbida
            </li>
            <li>
              motivatsioonikiri ÔÇô palume motivatsioonikirja l├Áppu lisada
              Codecademy kasutajanimi.
            </li> */}
          </div>
          <div class="button" id="button-7">
            <div id="dub-arrow">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2942/2942924.png"
                alt=""
              />
            </div>
            <a href="#">ASTU SISSE!</a>
          </div>
        </div>
        <Footer />
      </div>
    );
  } catch (error) {
    console.log(error);
    return <></>;
  }
}

export default Career;
