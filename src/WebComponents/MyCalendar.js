import React from 'react'

import {UXDatePicker} from '/src/componentsImports/UXDatePicker.js'

import '/node_modules/pikaday/css/pikaday.css'
import '/node_modules/tether/dist/css/tether.css'

const MyCalendar = (props) => {
    let id=props.id
    let timer1 = setTimeout(() => { 
       new UXDatePicker({
         id:id
       })
       clearTimeout(timer1);        
    }, 450); 
    return (
      <div id={props.id} >
      <div className="group group-block">
        <div className="label-help">
          <span className="logo fa fa-question-circle fa-2x"></span>
          <span className="text">{props.msgText}</span>
        </div>
        <div className="label-input">
        <span className="logo fa fa-tag fa-2x"></span>
        <input id="fecha" autoComplete="off" data-inputmask="'alias':'date','placeholder':'_'"  className="input medium" type="text" placeholder="" />
        <button id="btn-fecha" className="list-button"><span className="fa fa-calendar"></span></button>
        </div>
      </div>
      </div>
    )    
}
export default MyCalendar;