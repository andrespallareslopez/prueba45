import React from 'react'
import {UXPanelScroll} from '/src/componentsImports/UXPanelScroll.js'
import MyListGrpButtons from '/src/WebComponents/MyListGrpButtons.js'

import '/src/components/panel/04PanelScroll02.css'
import '/src/components/list/03List-group-buttons.css'

const  MyPanelScrollContent = (props) => {
   //console.dir(props)
   var timer = setTimeout(()=>{
     let id=props.id;
     
     const panel = new UXPanelScroll({
        id:id,
        item:".list-grp-buttons .list-grp-content-top"
     })
     clearTimeout(timer)
      
   },50)
   
    return (
        <div id={props.id}>
            <div  className="panel-scroll-01">
                <div className="panel-scroll-content fix-panel-scroll-content-tab" >
                    <div className="panel-scroll-item"  >
                      <MyListGrpButtons {...props} ></MyListGrpButtons>
                    </div>
                </div>
                <button id="btn-slide-up" className="slide-button-panel top"><i className="fa fa-chevron-up fa-2x"></i></button>
                <button id="btn-slide-down" className="slide-button-panel bottom"><i className="fa fa-chevron-down fa-2x"></i></button>
            </div>
        </div>  
    )
}

export default MyPanelScrollContent;
