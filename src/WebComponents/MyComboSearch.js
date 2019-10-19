import React from 'react'

import {UXButtonScroll} from '/src/componentsImports/UXButtonScroll.js'
import {UXSearchList} from '/src/componentsImports/UXSearchList.js'


import '/node_modules/tether/dist/css/tether.css'
import '/src/components/panel/04PanelScroll01.css'
import '/src/components/list/03datalist01.css'


const MyComboSearch = (props) => {
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

   
    let id=props.id;

    var scroll;
    var datalist;
    let timer = setTimeout(() => {
        datalist=new UXSearchList({
            id:id,
            clearContainer:true,
            data:props,
            
           textTemplate: cadenadatalist,
            onButtonClick:function(options){
                console.log('estoy en onbuttonclick search01')
                
                datalist.renderTemplate(props)
                  
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
            onSearch:(datos,value,id)=>{
            
                var datoscombo=Enumerable.from(props.data)
                .where(
                    (data)=>{
                        return data.description.includes(value)==true
                     })
                 .select("$").toArray();
                 console.dir(datoscombo);
                 return datoscombo;
              
            },
            onClose:function(){
              if (scroll)
                scroll.destroy();
            }
        })
        clearTimeout(timer);
    }, 450); 
  

    return (
      <div id={props.id} >          
        <div id="datalist01" className="datalist" >
        <button id="btn-slide-close01" className="slide-button-panel button-close top-off" >
            <i className="fa fa-close fa-1x"></i>
        </button>
        <div className="panel-datalist" >
            
        </div>
        </div>
        <div className="group group-block">
            <div className="label-input">
            <span className="logo fa fa-tag fa-2x"></span>
            <input type="text" autoComplete="off" id="busquedatxt" placeholder={props.msgPlaceHolder} className="input medium" />
            <button  id="search" className="list-button"><span className="fa fa-search" ></span></button>
            </div>
        </div>
      </div>
    )
}
export default MyComboSearch;
