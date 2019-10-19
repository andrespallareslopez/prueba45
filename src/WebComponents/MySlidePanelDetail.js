import React from 'react'

const MySlidePanelDetail = (props) => {

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
export default MySlidePanelDetail;