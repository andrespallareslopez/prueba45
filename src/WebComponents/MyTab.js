import React from 'react'
import {Tab} from '/src/componentsImports/componentstabcontainer.js'
import MyPanelScrollContent from '/src/WebComponents/MyPanelScrollContent.js'
import MySlidePanel from '/src/WebComponents/MySlidePanel.js'
import MyForm from '/src/WebComponents/MyForm.js'
import {datos,mesas,categorias,articulos} from '/src/listInMemory.js'
import '/src/components/tabs/tabs01.css'

const MyTab = (props)=>{
    var timer=setTimeout( () => {
        var tabs=new Tab() 
        //var $listCategorias=$('#panelCategorias')[0]
        //console.dir($listCategorias)
        //$listCategorias.datalist=categorias
        //console.dir(categorias)
        
    }, 50 )

    return (
       <div> 
        <div className="tab-container" >
            <div className="tab-controls">
                  <a className="ripple" href="#" >Mesas</a>
                  <a className="ripple" href="#" >Categorias</a>
                  <a className="ripple" href="#" >Articulos</a>
                  <a className="ripple" href="#" >Comandas</a>
            </div>  
            <div className="tab-items" >
              
                    <ul className="tab-container-items">
                            <li className="tab-item" id="tabMesas" name-container="Mesas">
                              <MyPanelScrollContent id="panelMesas" data={mesas}></MyPanelScrollContent>
                            </li>
                            <li className="tab-item" id="tabCategorias" name-container="Categorias">
                               <MySlidePanel datalist={categorias} id="panelCategorias"></MySlidePanel>
                            </li>
                            <li className="tab-item" id="tabArticulos" name-container="Articulos">
                            <MyPanelScrollContent id="panelArticulos" data={articulos}></MyPanelScrollContent>
                            </li>
                            <li className="tab-item" id="tabComandas" name-container="Comandas">
                                 <MyForm id="form01"></MyForm>
                            </li>     
                          </ul>    
            
          </div>
       </div>
       </div>
    )
}

export default MyTab;
