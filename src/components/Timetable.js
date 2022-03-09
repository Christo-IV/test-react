import React from "react";
import "./css/Timetable.css";





function Timetable() {
    
    return (
        
      <div>
      <table>
          <tr>
          <th class="time">Aeg</th>
          <th>Esmaspäev</th>
          <th>Teisipäev</th>
          <th>Kolmapäev</th>
          <th>Neljapäev</th>
          <th>Reede</th>
          </tr>
          <tr>
              <td class="timebox">07:00-08:29</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
          </tr>
          <tr>
              <td class="timebox">08:30-10:00</td>
              <td>mõistab veebirakenduste turvalsuse olulisust ning põhilisi ründevektoreid	</td>
              <td>mõistab veebirakenduste turvalsuse olulisust ning põhilisi ründevektoreid; Kutsevõistlus	</td>
              <td>Matemaatika; Kutsevõistlus</td>
              <td>Matemaatika</td>
              <td>mõistab infotehnoloogia mõju ja rolli ettevõtte juhtimises ning infoühiskonnas</td>
          </tr>
          <tr>
              <td class="timebox">10:15-11:45</td>
              <td>mõistab veebirakenduste turvalsuse olulisust ning põhilisi ründevektoreid	</td>
              <td>mõistab veebirakenduste turvalsuse olulisust ning põhilisi ründevektoreid; Kutsevõistlus	</td>
              <td>kasutab serveripoolseid tehnoloogiaid veebirakenduste loomiseks; Kutsevõistlus	</td>
              <td>kasutab serveripoolseid tehnoloogiaid veebirakenduste loomiseks	</td>
              <td>Järgib ja kasutab agiilsete tarkvaraarendusmetoodikate põhimõtteid</td>
          </tr>

          <tr>
              <td class="timebox">11:55-14:00</td>
              <td>Järgib ja kasutab agiilsete tarkvaraarendusmetoodikate põhimõtteid</td>
              <td>Kutsevõistlus</td>
              <td>kasutab serveripoolseid tehnoloogiaid veebirakenduste loomiseks; Kutsevõistlus	</td>
              <td>kasutab serveripoolseid tehnoloogiaid veebirakenduste loomiseks	</td>
              <td>Järgib ja kasutab agiilsete tarkvaraarendusmetoodikate põhimõtteid</td>
          </tr>
          <tr>
              <td class="timebox">14:10-15:40</td>
              <td>Järgib ja kasutab agiilsete tarkvaraarendusmetoodikate põhimõtteid</td>
              <td>Kutsevõistlus</td>
              <td></td>
              <td>Ettevalmistus matemaatika riigieksamiks</td>
              <td></td>
          </tr>
          <tr>
              <td class="timebox">15:45-17:15</td>
              <td></td>
              <td></td>
              <td></td>
              <td>Ettevalmistus matemaatika riigieksamiks</td>
              <td></td>
          </tr>
          <tr>
              <td class="timebox">17:20-18:50</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
          </tr>
      </table>

      </div>
    );
  }
  
  export default Timetable;