import {Calendar} from "react-calendar"; 
import React, {useState} from 'react'; 
import styled from 'styled-components';
import 'react-calendar/dist/Calendar.css';
import "./css/Events.css";
 function CalendarReturn() {     
     let error;

    // trying to return calendar    
     try {return (             
     <div className="App">                
      <h1>Kalender</h1>    
      <CalendarContainer> 
          <div class="calendarcontainer">
       <Calendar  /> 
       <div class="eventlist">
       <h1 class="white">Üritused</h1>
       <div>
           <li class="school">Kutsevõistlus 08.03.2022 - 09.03.2022</li>
           <li class="school">Karjäärimess: "Võti Tulevikku" 17.03.2022</li>
           <li class="outside">TEDxTartu 02.04.2022</li>
           <li class="outside">Kaleidoskoop 05.05.2022</li>
           <li class="outside">sTARTUp Day 24.08.2022 - 26.08.2022</li>
           
       </div>
       </div>
       </div>
       </CalendarContainer>              
        </div>);    
         } catch (error) {        
              error = error;     }     
              // if returning calendar returned error returns no calendar     
              if (error === error) {<div></div>}} 
     export default CalendarReturn; 

     const CalendarContainer = styled.div`
  /* ~~~ container styles ~~~ */
  max-width: 100%;
  margin: auto;
  margin-top: 20px;
  background-color: var(--txt-color);
  padding: 10px;
  border-radius: 3px;
  @media (max-width:500px) {
      max-width: 100%;
  }


`;