import React from 'react'

import {UXDataList} from '/src/componentsImports/UXDataList.js'
import {UXButtonScroll} from '/src/componentsImports/UXButtonScroll.js'

import '/node_modules/tether/dist/css/tether.css'
import '/src/components/panel/04PanelScroll01.css'
import '/src/components/list/03datalist01.css'

const MyCombo = (props) => {
    //console.dir(props.data)

    let cadenadatalist = (props)=>{
        return (
        <div className="panel-scroll" >
            <div className="panel-scroll-content" >
            <div className="panel-scroll-item" >
                <div className="datalist-container" >
                {
                    
                    props.data.map(function(value,i){
                      return (
                         <div className="element-link el ripple" key ={i} >{value[props.nameField]}</div>
                      )
                    })
                }
                </div>
            </div>

            </div>
            <button id="btn-slide-up" className="slide-button-panel small-button top" ><i className="fa fa-chevron-up fa-1x"></i></button>
            <button id="btn-slide-down" className="slide-button-panel small-button bottom" ><i className="fa fa-chevron-down fa-1x"></i></button>
        </div>
        )
    }
    
    let id=props.id
    let timer1 = setTimeout(()=>{
      var scroll;
      var datalist;
      //console.log(id);
      datalist=new UXDataList({
         id:id,
         clearContainer:true,
          data:props,
            
           textTemplate: cadenadatalist,
         onButtonClick:function(options){
             //if (id=="combo01") {
                //datalist.setData({articulos:articulos},id,cadenadataarticulos)
             //}    
             //else if(id=="combo02"){
               //datalist.setData({mesas:mesas},id,cadenadatamesas)
            // }
                 
             scroll=new UXButtonScroll({
                 id:id+'datalist',
                 onItemClick:function(value,target){
                     console.dir(target)
                     //console.log("estoy dentro de onItemClick")
                     datalist.$inputText.val(value);
                     datalist.toggle();
                     scroll.destroy();
                 }
             })
         },
         onClose:function(){
            scroll.destroy();
         }
     })
     clearTimeout(timer1)
    },50)

    return (
      <div id={props.id} >
        <div id="datalist01" className="datalist">
                <button
                id="btn-slide-close01"
                className="slide-button-panel button-close top-off"
                >
                <i className="fa fa-close fa-1x"></i>
                </button>
                <div className="panel-datalist"></div>
        </div>
        <div className="group group-block">
                <div className="label-help">
                <span className="logo fa fa-question-circle fa-2x"></span>
                <span className="text">{props.msgText}</span>
                </div>
                <div className="label-input">
                <span className="logo fa fa-tag fa-2x"></span>
                <input
                    id="combotxt"
                    type="text"
                    placeholder=""
                    className="input medium"
                />
                <button id="search" className="list-button">
                    <span className="fa fa-sort-desc"></span>
                </button>
                </div>
        </div>
      </div>
   )
}
export default MyCombo;