import React from "react";
import "./css/Career.css";
import erialapilt from "../img/ITSLOGOS.jpg";
import Header from "./Header";
import Footer from "./Footer";

function Career2() {
  return (
    <div>
      <Header />
      <div class="part1">
        <img class="careerpicture" src={erialapilt} />
        <div class="why">
          <h1>MIKS VALIDA SÜSTEEMIDE SPETSIALIST</h1>
          <li>Parimad praktikad</li>
          <li>Hea meeskonnatöö</li>
          <li>Oma ala spetsialistid</li>
          <li>Välispraktika võimalus</li>
          <li>Kindel tulevik</li>
        </div>
      </div>

      <div class="part2">
        <div class="careername">
          <h1>IT-SÜSTEEMIDE SPETSIALIST</h1>
        </div>
        <div class="careerintro">
          <p>
            IT-süsteemide spetsialist on hinnatud ning laiahardega spetsialist
            kogu maailmas. IT-süsteemide spetsialisti õpilasena on Su nädal
            alati sisustatud ning igavlema ei pea. Tegeled IT-taritu
            arendamisega ja arvutisüsteemidega, kuid Sulle ei jää võõraks ka
            kood. Samuti julgustab VOCO IKT-osakond alati õpilasi tegelema oma
            projektidega ning saama kogemust väljapoolt kooli. Muidugi on
            selleks ka prakitikad, kuid miks mitte teha midagi lahedat koos
            tiimiga või iseseisvalt? Muidugi ei puudu erialased võistlused nii
            kooli siseselt kui ka üle Eesti. Miks mitte panna ennast vahel
            proovile?
          </p>
          <p>
            Õpilasena on Sul võimalus kaasarääkida oma õppekava raames ning anda
            õpetajatele tagasisidet. VOCO IT Akadeemia erialade õpetajad
            hindavad kõrgelt pealehakkamist ning aktiivust. Jah, Sa võid isegi
            tihti ebaõnnestuda aga alati aidatakse Sind püsti ning antakse uus
            hoog. Kedagi ei jäeta maha. Kui Sul on tahe ja soov olla tuleviku
            IT-süsteemide spetsialist, siis see eriala on just sulle!
          </p>

          <h1> Vastuvõtutingimused on: </h1>
          <li>individuaalvestlus või grupivestlus;</li>
          <li>
            kutsesobivustest, mis hindab edukaks erialaseks tööks vajalikke
            isikuomadusi ja võimekust: matemaatiline võimekus, funktsionaalne
            lugemisoskus, taju, tähelepanu, keskendumisvõime, mälu;
          </li>
          <li>
            praktiline ülesanne – enne vastuvõtu katseid tuleb läbida konkreetne
            Codecademy kursus::
          </li>
          <a
            target="_blank"
            href="https://www.codecademy.com/learn/learn-the-command-line"
          >
            https://www.codecademy.com/learn/learn-the-command-line
          </a>
          <li class="alert">
            {" "}
            NB! Kursus on tasuline, kuid seitsme päeva jooksul on võimalik
            kursust tasuta läbida;
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
}

export default Career2;
