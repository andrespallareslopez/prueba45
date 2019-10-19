import React from 'react'
import {components} from '/src/componentsImports/components01.js'
import {UXSlidePanels} from '/src/componentsImports/UXSlidePanels.js'
import MySlidePanelDetail from '/src/WebComponents/MySlidePanelDetail.js'
import '/src/components/slides/04slide-container.css'
import '/src/components/list/03List-group-buttons.css'

const MySlidePanel = (props) => {
   
    

    let timer=setTimeout( () => {
        console.dir(props)
        let slidepaneldetail = new UXSlidePanels({
            container:".slide-container .slide-items",
            data: props.datalist,
            textTemplate: MySlidePanelDetailRender
        })
        //const sizes=slidepaneldetail.getSizes(props.datalist);
        //console.dir(sizes)
       
      
        clearTimeout(timer)
        
    }, 750 )
    
    return (
      <div className="slide-container">
        <button className="slide-button left">
          <i className="fa fa-chevron-left fa-2x"></i>
        </button>
        <div className="slide-items">

        </div>
        <button className="slide-button right">
          <i className="fa fa-chevron-right fa-2x"></i>
        </button>
      </div>
    );
}
const MySlidePanelDetailRender = (props) => {

    return (
        <ul className="slide-container-items">
               {
                props.sizes.pages.map(function(page,i){     
                 return  (
                 <li className="slide-item" key={i} >
                       <div className="list-grp-buttons list-center">
                       {
                           page.slides.map(function(slide,j){                                 
                           //console.dir(slide);
                            return (
                                <a className="list-grp-button box-shadow-3" key={j}  data-codigo={slide.codigo} href="#"  >
                                    <div className="list-grp-content-top" >
                                    <span className="list-grp-content-text list-grp-context-text-center" >{slide.categoria}</span>
                                    </div>  
                                </a>
                            )  
                           })
                       }
                       </div>
                 </li>
                 )
                })
               } 
        </ul>
    )
}
export default MySlidePanel;