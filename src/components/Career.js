import React from "react";
import "./css/Career.css";
import erialapilt from "../img/ITALOGO.jpg";

function Career() {
    return (
      <div class="imagetextcontainer"> 
          <img class="careerpicture" src={erialapilt}/>
        <div class="why">
            <h1>MIKS VALIDA TARKVARAARENDUS?</h1>
        </div>
      </div>
    );
  }
  
  export default Career;