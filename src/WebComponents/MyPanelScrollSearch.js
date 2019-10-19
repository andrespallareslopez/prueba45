import React from 'react'
import {UXPanelScroll} from '/src/componentsImports/UXPanelScroll.js'

import '/src/components/panel/04PanelScroll02.css'

const MyPanelScrollSearch = (props) => {
    var timer = setTimeout(()=>{
        let id=props.id;
        /*
        const panel = new UXPanelScroll({
           id:id,
           item:".list-grp-buttons .list-grp-content-top"
        })
        */
        clearTimeout(timer) 
    },50)
    return (
      <div id={props.id} > 
      <div className="panel-scroll-01">
        <div className="panel-scroll-content">
          <div className="panel-scroll-item">
            
          </div>
        </div>
        <button id="btn-slide-up" className="slide-button-panel top">
          <i className="fa fa-chevron-up fa-2x"></i>
        </button>
        <button id="btn-slide-down" className="slide-button-panel bottom">
          <i className="fa fa-chevron-down fa-2x"></i>
        </button>
      </div>
      </div>
    );
}
export default MyPanelScrollSearch;
