import React from 'react'

import '/src/components/list/03List-group-buttons.css'

const MyListGrpButtons = (props)=>{
    
    return (
        <div className="list-grp-buttons space-top-1x">
        {
           props.data.map(function(value,i){
              return (
                   <a className="list-grp-button box-shadow-3" href="#" key={i} >
                     <div className="list-grp-content-top" >
                      <span className="list-grp-content-text list-grp-context-text-center" >{value.descripcion}</span>
                     </div>  
                   </a>)
           })
        } 
        </div>
    )

}
export default MyListGrpButtons;