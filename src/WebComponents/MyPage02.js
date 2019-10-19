import React from 'react'

const MyPage02 = (props) => {
   
    return (
        <div id={props.id} className="wrapper page child" >
        <div className="nav" >
            <nav  >
               <button type="button" id="btn-toggle-back-3" className="nav-mobile push-float-left"  >
                 <span className="fa fa-chevron-left" ></span>
                 <span className="texto-btn"  > Back</span>
               </button>
            </nav>
        </div>  
        <div className="main" >
           <main>
              <div className="box content"  >
                    
              </div>
           </main>
        </div>
        <div className="footer">
            <footer >
                <div className="push-center-inner push-center-3x">
                    <button id="btn-ok" className="nav-mobile nav-2x push-float-left ripple">
                  <span className="fa fa-check-circle fa-2x" ></span>
                  <span className="title" >Aceptar</span>
               </button>
    
                    <button id="btn-cancel" className="nav-mobile nav-2x push-float-right ripple">
                  <span className="fa fa-times-circle fa-2x" ></span>
                  <span className="title" >Cancelar</span>
               </button>
                </div>
            </footer>
        </div>
    </div>
   )
}
export default MyPage02;