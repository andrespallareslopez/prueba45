import React from 'react'
import MyPanelScrollPopUp from '/src/WebComponents/MyPanelScrollPopUp.js'
import MyButtonSearch from '/src/WebComponents/MyButtonSearch.js'
import MyPanelScrollSearch from '/src/WebComponents/MyPanelScrollSearch.js'

import {datos,mesas,categorias,articulos} from '/src/listInMemory.js'

const MyPageSearch = (props) => {
    
    return (
    <div id={props.id} className="wrapper page child" >
        <div className="nav" >
            <nav  >
            <button type="button" id="btn-toggle-back-3" className="nav-mobile push-float-left"   >
                <span className="fa fa-chevron-left" ></span>
                <span className="texto-btn"  > Back</span>
            </button>
            <MyButtonSearch id="buttonsearch02" ></MyButtonSearch>
            </nav>
        </div>  
        <div className="main" >
        <main>
            <div className="box content"  >
               <MyPanelScrollSearch id="panelsearch01" ></MyPanelScrollSearch>     
            </div>
        </main>
        </div>
        <div className="footer">
            <footer  >
            <MyPanelScrollPopUp id='popup02'></MyPanelScrollPopUp>
            </footer>
        </div>
    </div>
    )

}
export default MyPageSearch;