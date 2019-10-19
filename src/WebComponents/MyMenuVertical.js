import React from 'react'

import {UXScrollV} from '/src/componentsImports/UXScrollV.js'
import {UXAccordeon} from '/src/componentsImports/UXAccordeon.js'
import {UXLoadPanel} from '/src/componentsImports/UXLoadPanel.js'

import MyPage01 from '/src/WebComponents/MyPage01.js'
import MyPage02 from '/src/WebComponents/MyPage02.js'
import MyPage03 from '/src/WebComponents/MyPage03.js'
import MyPageSearch from '/src/WebComponents/MyPageSearch.js'

import '/src/components/menu-vertical/03Menu-vertical01/03Menu-vertical01.css';
import '/src/components/list/03List-collections.css'

const MyMenuVertical = (props) => {
    //console.dir(props);
    var timer=setTimeout(()=>{
        var id=props.id
        new UXScrollV({
            id:id
        })
        
        new UXAccordeon({
        id:id,
        onClickMenu:function(e){
            console.log("estoy en click menu")
            e.preventDefault()
            var id=$(e.target).data("panel-id")
            var template;
            switch(id){
              case 'template01':
                 template=(props)=> (
                   <MyPage01 id={props.id}></MyPage01>
                 )
              break;
              case 'template02':
                 template=(props)=> (
                    <MyPage02 id={props.id}></MyPage02>
                 )
              break;
              case 'template03':
                  template=(props)=> (
                    <MyPage03 id={props.id}></MyPage03>
                 )
              break;
              case 'template04':
                 template=(props)=>(
                   <MyPageSearch id={props.id} ></MyPageSearch>
                 )
              break;
              case 'template05':
                 
              break;
              case 'template06':
                 
              break;
              case 'template07':
                 
              break;
              case 'template08':
                 
              break;
              case 'template09':
                 
              break;
              case 'template10':
                 
              break;
              case 'template11':
                 
              break;
              case 'template12':
                 
              break;
            }
            new UXLoadPanel({
              id:id,
              textTemplate: template
            })
        }
        })
        
        },50)
        const divstyle={
          height:'100%'
        }
    return (
  <div style={divstyle} id={props.id}>      
  <div className="menu-vertical01"  >
   <div className="container-menu-scroll" >
                <ul className="items " >
                    <li className="parent element pr"><a className="element-link gr ripple" href="#" >Link 1<span className="fa fa-chevron-right push-float-right" ></span></a>
                         <div className = "sub-menu sb" >
                           <a className ="element-link el ripple" href="#/plantilla1" data-panel-id="template01" >SubLink 1</a>
                           <a className ="element-link el ripple" href="#/plantilla2" data-panel-id="template02" >SubLink 2</a>
                           <a className ="element-link el ripple" href="#/plantilla3" data-panel-id="template03" >SubLink 3</a>
                           <a className ="element-link el ripple" href="#/plantilla4" data-panel-id="template04" >SubLink 4</a>
                           <a className ="element-link el ripple" href="#/plantilla5" data-panel-id="template05" >SubLink 5</a>
                         </div>
                    </li>
                    <li className="parent element pr" ><a className="element-link gr ripple" href="#">Link 2<span className="fa fa-chevron-right push-float-right" ></span></a>
                         <div className="sub-menu sb" >
                           <a className="element-link el ripple" href="#/plantilla6" data-panel-id="template06" >SubLink 1</a>
                           <a className="element-link el ripple" href="#/plantilla7" data-panel-id="template07" >SubLink 2</a>
                           <a className="element-link el ripple" href="#/plantilla8" data-panel-id="template08" >SubLink 3</a>
                           <a className="element-link el ripple" href="#/plantilla9" data-panel-id="template09" >SubLink 4</a>
                           <a className="element-link el ripple" href="#/plantilla10" data-panel-id="template10" >SubLink 5</a>
                         </div>
                    </li>
                    <li className="element item itm" ><a className="element-link el ripple" href="#/plantilla11">Link 3
                      
                    </a>
                    
                    </li>
                    <li className="parent element pr" ><a className="element-link gr ripple" href="#">Link 4<span className="fa fa-chevron-right push-float-right" ></span></a>
                       <div className="sub-menu sb" >
                           <a className="element-link el ripple" href="#" >SubLink 1</a>
                           <a className="element-link el ripple" href="#" >SubLink 2</a>
                           <a className="element-link el ripple" href="#" >SubLink 3</a>
                           <a className="element-link el ripple" href="#" >SubLink 4</a>
                           <a className="element-link el ripple" href="#" >SubLink 5</a>
                       </div>
                    </li>
                     <li className="parent element pr" ><a className="element-link gr ripple" href="#">Link 5<span className="fa fa-chevron-right push-float-right" ></span></a>
                       <div className="sub-menu sb" >
                           <a className="element-link el ripple" href="#" >SubLink 1</a>
                           <a className="element-link el ripple" href="#" >SubLink 2</a>
                           <a className="element-link el ripple" href="#" >SubLink 3</a>
                           <a className="element-link el ripple" href="#" >SubLink 4</a>
                           <a className="element-link el ripple" href="#" >SubLink 5</a>
                       </div>
                    </li>
                </ul>
              </div>
              <button id="btn-slide-up" className="slide-button top" ><i className="fa fa-chevron-up fa-2x"></i></button>
              <button id="btn-slide-down" className="slide-button bottom" ><i className="fa fa-chevron-down fa-2x"></i></button>
    </div>
    </div>  
    )
}
export default MyMenuVertical;