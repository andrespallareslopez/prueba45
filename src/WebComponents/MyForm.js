import React from 'react'
import {UXKeyForm} from '/src/componentsImports/UXKeyform.js'

import MyInput from '/src/WebComponents/MyInput.js' 
import MyCalendar from '/src/WebComponents/MyCalendar.js'
import MyCombo from '/src/WebComponents/MyCombo.js'
import MyComboSearch from '/src/WebComponents/MyComboSearch.js'

import '/src/components/forms/03form-fix-basic-01.css'

import {datos,mesas,categorias,articulos} from '/src/listInMemory.js'


const MyForm = (props) => {
  //console.log(props.id)
     let timer = setTimeout(() => {
        var keys= new UXKeyForm({
          id: props.id
        });
        
        clearTimeout(timer);
     },50);
    return (
        <form id={props.id } className="form-fix-basic-01 " >
          <MyInput id="text1" name="nombre" msgText="Nombre" msgPlaceHolder="Introduce nombre"></MyInput>
          <MyCalendar id="cal1" name="fecha" msgText="Introduce Fecha"></MyCalendar>
          <MyCombo id="combo2" name="mesa" data={mesas} msgText="Introduce mesas" nameField="descripcion" ></MyCombo>
          <MyCombo id="combo1" name="articulos"data={articulos} msgText="Introduce familia" nameField="descripcion" ></MyCombo>
          <MyComboSearch id="search01" name="categoria" data={datos} msgPlaceHolder="Introduce busqueda" nameField="description" ></MyComboSearch>
            
        </form>
    )
}
export default MyForm;

