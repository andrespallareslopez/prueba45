import React from 'react'
import {UXScrollPopUp} from '/src/componentsImports/UXScrollPopUp.js'

import '/src/components/footer/03Menu-popup01.css'
import '/src/components/footer/04footermenu01.css'

const MyPanelScrollPopUp = (props) => {
    console.log(props.id)
    var timer = setTimeout( () => {
      var scrollpopup= new UXScrollPopUp({
        id: props.id  
      })
    },50)
    
    return (
    <div id={props.id} >
        <button id="btn-footer-menu01" className="nav-mobile center-v push-float-right ripple" >
          <i className="fa fa-ellipsis-h fa-2x" ></i>
        </button>
        <div id="footer01" className="footer-menu" >
            <div className="panel-scroll" >
                <div className="panel-scroll-content" >
                    <div className="panel-scroll-item" >
                        <ul id="menupopup01" className="menu-popup01" >
                            <li className="element item itm"><a className="element-link el ripple" href="#/template1">Link 1</a></li>
                            <li className="element item itm"><a className="element-link el ripple" href="#/template2">Link 2</a></li> 
                            <li className="element item itm"><a className="element-link el ripple" href="#/template3">Link 3</a></li> 
                            <li className="element item itm"><a className="element-link el ripple" href="#/template4">Link 4</a></li> 
                            <li className="element item itm"><a className="element-link el ripple" href="#/template5">Link 5</a></li>  
                            <li className="element item itm"><a className="element-link el ripple" href="#/template6">Link 6</a></li> 
                            <li className="element item itm"><a className="element-link el ripple" href="#/template7">Link 7</a></li> 
                            <li className="element item itm"><a className="element-link el ripple" href="#/template8">Link 8</a></li> 
                            <li className="element item itm"><a className="element-link el ripple" href="#/template9">Link 9</a></li> 
                            <li className="element item itm"><a className="element-link el ripple" href="#/template10">Link 10</a></li> 
                        </ul>
                    </div>
                </div>
            <button id="btn-slide-up" className="slide-button-panel top" ><i className="fa fa-chevron-up fa-2x"></i></button>
            <button id="btn-slide-down" className="slide-button-panel bottom" ><i className="fa fa-chevron-down fa-2x"></i></button>
            </div>
        </div>
    </div>
    )
}
export default MyPanelScrollPopUp;