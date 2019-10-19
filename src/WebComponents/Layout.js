import React from 'react'
import MyNav from '/src/WebComponents/MyNav.js'
import MyMenuVertical from '/src/WebComponents/MyMenuVertical.js'
import MyTab from '/src/WebComponents/MyTab.js'

import '/src/components/layouts/03layout02/03layout02.css'
import '/src/components/layouts/03layout02/03transition02.css'
import '/src/components/effects/03rippleEffects01.css'


const Layout =()=>{
    return (
        <div>
        <header>
            <div className="logo">
               
            </div>
            <h1 className="title-application">My Application</h1>
        </header>
        <div className="main-body">
            <aside id="menuvertical" className="menu-area">
              <MyMenuVertical id="MenuVertical01" ></MyMenuVertical>
            </aside>
            <div id="root" className="wrapper page root">
        
                <div className="nav">
                    
                    <nav data-behavior="navButtons03layout02">
                     <MyNav></MyNav>
        
                    </nav>
                    
                </div>
        
                <div className="main">
                    <main>
                        <div className="content" data-template="scroll02" data-action="panelform01" >
                          <MyTab></MyTab>
                    
        
                        </div>
                    </main>
                </div>
                <div className="footer">
                    <footer>
                    
                    </footer>
                </div>
            </div>
            <div className="childLayout">

            </div>
          </div>
        </div> 
    
    )
}

export default Layout;