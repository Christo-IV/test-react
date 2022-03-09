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
  }, []);
try{
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
          <p>
            Tarkvaaraarendaja on kõrgelt hinnatud spetsialist nii Eestis kui ka
            välismaal ja just VOCOs on Sul võimalik selline eriala omandada.
            Tarkvaraarenduse õpilasena on Su nädal alati tihedalt sisustatud,
            kas huvitavate ja informatiivsete tundide või erialaste
            projektidega. Tegeled aktiivselt koodi kirjutamisega, kui Sulle ei
            jää ka võõraks projektijuhtimine ega andmebaasid. Samuti julgustab
            VOCO IKT-osakond alati õpilasi tegelema oma projektidega ning saama
            kogemust väljapoolt kooli. Muidugi on selleks ka prakitikad, kuid
            miks mitte panna huvitavatest inimestest tiim kokku ja arendada üks
            maailma edasiviiv IT lahendus? Muidugi ei puudu erialased võistlused
            nii kooli siseselt kui ka üle Eesti. Miks mitte panna ennast vahel
            proovile?
          </p>
          <p>
            Õpilasena on Sul võimalus kaasarääkida oma õppekava raames ning anda
            õpetajatele tagasisidet. VOCO IT Akadeemia erialade õpetajad
            hindavad kõrgelt pealehakkamist ning aktiivust. Jah, Sa võid isegi
            tihti ebaõnnestuda aga alati aidatakse Sind püsti ning antakse uus
            hoog. Kedagi ei jäeta maha. Kui Sul on tahe ja soov olla tuleviku
            tarkvaaraarendaja, siis see eriala on just sulle!
          </p>

          <h1> Vastuvõtutingimused on: </h1>
          <li>individuaalvestlus või grupivestlus;</li>
          <li>
            test, mis koosneb matemaatikaülesannete lahendamisest paberil
            (lisaks vastustele hinnatakse ka õiget lahenduskäiku), eesti keel ja
            inglise keel;
          </li>
          <li>
            praktiline ülesanne – enne vastuvõtu katseid tuleb läbida konkreetne
            Codecademy kursus:
          </li>
          <a
            target="_blank"
            href="https://www.codecademy.com/learn/learn-python-3"
          >
            https://www.codecademy.com/learn/learn-python-3
          </a>
          <li class="alert">
            NB! Kursus on tasuline, kuid seitsme päeva jooksul on võimalik
            kursust tasuta läbida
          </li>
          <li>
            motivatsioonikiri – palume motivatsioonikirja lõppu lisada
            Codecademy kasutajanimi.
          </li>
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
} catch(error){
  console.log(error);
}
}

export default Career;
