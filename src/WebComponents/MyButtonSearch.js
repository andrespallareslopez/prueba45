import React from 'react'


import {UXSearchPanel} from '/src/componentsImports/UXSearchPanel.js'

import '/src/components/search/03search.css'

const MyButtonSearch = (props) => {
    
    let timer1 = setTimeout(() => { 
        $("#"+props.id+" "+"#btn-form-search").on("click",function(evt){
            evt.preventDefault();  
            $("#"+props.id+" .form-search").toggleClass("open-search"); 
         })
         $("#"+props.id+" "+"#btn-form-close").on("click",function(evt){
            evt.preventDefault();
            $("#"+props.id+" "+" .form-search").toggleClass("open-search");
        })

        clearTimeout(timer1);        
    }, 50); 
    
    return (
    <div id={props.id}>    
      <form className="form-search push-float-right">
        <button
          id="btn-form-search"
          className="nav-mobile nav-mobile-search btn-search ripple"
        >
          <span className="fa fa-search fa-2x"></span>
        </button>
        <input
          id="input-search"
          placeholder="Search..."
          className="input-search"
          type="text"
        />
        <span className="btn-spin-progress fa fa-circle-o-notch fa-spin fa-18x fa-fw"></span>
        <button
          id="btn-form-close"
          className="nav-mobile nav-mobile-search btn-search btn-search-close"
        >
          <span className="fa fa-times fa-2x"></span>
        </button>
      </form>
    </div>
    );
}
export default MyButtonSearch;