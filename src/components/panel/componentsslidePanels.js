

;(function(ns,$){
      "use strict";
     ns.slidePanels=(function(){
         return function(options){
            if (!options.nameid){
                options.nameid="";
            } 
            this.config={};
            (function(config){
                config.containerComponent=config.containerComponent||".slide-container";
                config.btnleft=config.btnleft||".slide-button.left";
                config.btnright=config.btnright||".slide-button.right";
                config.items=config.items||".slide-items";
                config.slides=config.slides||"ul";
                config.slide=config.slide||"li";
                config.slideContainer=config.slideContainer||".list-grp-buttons";
                config.ctrlnav=config.ctrlnav=".slide-controls";
                
            })(this.config);
            //console.log(this.config)
            this.height=(128);
            this.width=(129+2);
            this.ii=undefined;
            this.cntli=undefined;
            this.delta=undefined;
            this.altura=undefined;
            this.anchura=undefined;
            this.resto=undefined;
            this.index=undefined;
            this.maxwidth=undefined;
            this.alturali=undefined;
            this.anchurali=undefined;
            this.cntx=undefined;
            this.cnty=undefined;
            this.pagex=undefined;
            this.numslide=undefined;
            this.cntnum=undefined;
            this.anchuraparcial=undefined;
            this.alturaparcial=undefined;
            this.sizes={};
            this.data=undefined;
            this.slides=[];
            this.pages=[];
            
            
            this.init(options);
         }; 
     })();
     
     ns.slidePanels.prototype=new ns.container();
     //******************************************
     ns.slidePanels.prototype.initevent=function(){
                
        var self=this;
        //var result=self.options.data;
        console.log("estoy dentro de initvent de slidePanels");
        //console.dir(self.options);
        calcularslides.apply(self,[]);//en calcularslides el ul se oculta y al final de la 
                                      //funcion se vuelve a poner a visible
        
        self.ii=0; 
        /*
        $(self.config.container+" "+self.config.btnleft).css({visibility:"hidden"});
        
        if (sizes.numslide>1){
           $(self.config.container+" "+self.config.btnright).css({visibility:"visible"});
        }else{
            $(self.config.container+" "+self.config.btnright).css({visibility:"hidden"});
        }
        */
        showButtons.apply(self,[]);
       
        $(self.config.containerComponent+" "+self.config.btnright).click(function(event){
            console.log("boton dereccho");
            atras.call(self);
        });
        //*********************************************************
        $(self.config.containerComponent+" "+self.config.btnleft).click(function(event){
            console.log("boton izquierdo");
            avance.call(self);
        });
        //************************************************************
        /*
            var rtime;
            var timeout=false;
            var delta=300;
            var mytimer;
            function resizeEnd(){
              if (new Date()-rtime<delta){
                mytimer=setTimeout(resizeEnd,delta);
              } else {
                timeout=false;
              
                //calcularmedidas.apply(self,[self.options]);
                $(".wrapper.root .content .slide-container .slide-items").empty();
                //behaviors.destroyEventsSlidePanel({ });
                //calcularslides.apply(self,[]);
                var mytimer1;
                mytimer1=setTimeout(function() {
                     self.render(result,"resize");
                     clearTimeout(mytimer1);
                }, 300);
               
                  clearTimeout(mytimer);
              }
            };
            $(window).on("resize",function(evt){
                //console.log("estoy dentro de resize");
                rtime=new Date();
                if (timeout==false){
                    timeout=true;
                    mytimer=setTimeout(resizeEnd,delta);
                }
                
            });
            */
            debounceScroll.apply(self,[]);
        //************************************************************
         
        /*
        var mytimer=setTimeout(function() {
        
            $(self.config.container+" "+self.config.items+" "+self.config.slides).css({visibility:"visible"});
            clearTimeout(mytimer); 
        }, 320);
        */
        showSlides.apply(self,[]);
     };
     //******************************************************
     ns.slidePanels.prototype.render=function(result,state){
          //ponemos parametro result porque hay ahora mismo un var data, por eso como
          //parametro de esta funcion no ponemos data
          var self=this;
             self.datatemplate=undefined;
             self.dataResult=undefined;  //definimos esta nueva variable para esta clase
             //console.dir(result);
             if (result){
                 self.options.data=result;
             }        
             calcularmedidas.apply(self,[self.options]);

             self.dataResult={
                 elementos:self.data,
                 sizes:self.sizes
             };  //este tipo de optios.data,mas tarde se lo pasamos a options.datatemplate
                //para que el render de esta clase, que esta definido mas adelante, en esta misma clase,
                //lo procese y lo pase a datatemplate, 
                // este options.data es diferente de los demas porque el objeto 'sizes'
                //lo vamos a utilizar en handlebar en la plantilla slide03 o templateslidepanels.
        //console.dir(sizes);  
          
          
          
          if (self.dataResult){
              //console.log("estoy dentro de render de slidePanels")
               //this.options.datatemplate=this.options.fetchRemote;
          
               self.options.datatemplate=self.dataResult;
          
          }
          //console.dir(self.options.fncreate);
          
          util.rendertemplate.apply(self,[self.options.datatemplate,self.options.nametemplate,state]);
     };
     //*************************************************************
     ns.slidePanels.prototype.destroy=function(){
         $(self.config.containerComponent+" "+self.config.btnright).off("click");
         $(self.config.containerComponent+" "+self.config.btnleft).off("click");
         
     };
     //***********************************************
     ns.slidePanels.prototype.resize=function(){
         var self=this;
          calcularslides.apply(self,[]);
          showButtons.apply(self,[]);
          showSlides.apply(self,[]);
          /*
           var mytimer=setTimeout(function() {
        
            $(self.config.container+" "+self.config.items+" "+self.config.slides).css({visibility:"visible"});
            clearTimeout(mytimer); 
        }, 320);
        */
     };
     //*************************************************
     ns.slidePanels.prototype.reload=function(){
          var self=this;
          calcularslides.apply(self,[]);
           self.ii=0; 
            showButtons.apply(self,[]);
            /*
            $(self.config.container+" "+self.config.btnleft).css({visibility:"hidden"});
            
            if (sizes.numslide>1){
            $(self.config.container+" "+self.config.btnright).css({visibility:"visible"});
            }else{
                $(self.config.container+" "+self.config.btnright).css({visibility:"hidden"});
            }
            */
          showSlides.apply(self,[]);   
        /*
        var mytimer=setTimeout(function() {
        
            $(self.config.container+" "+self.config.items+" "+self.config.slides).css({visibility:"visible"});
            clearTimeout(mytimer); 
        }, 320);
        */

     };
     //*************************************************************
     var showButtons=function(){
         var self=this;
           $(self.config.containerComponent+" "+self.config.btnleft).css({visibility:"hidden"});
            
           if (self.sizes.numslide>1){
              $(self.config.containerComponent+" "+self.config.btnright).css({visibility:"visible"});
           }else{
                $(self.config.containerComponent+" "+self.config.btnright).css({visibility:"hidden"});
           }
     };
     //*************************************************************
     var showSlides=function(){
         var self=this;
         var mytimer=setTimeout(function() {
            $(self.config.containerComponent+" "+self.config.items+" "+self.config.slides).css({visibility:"visible"});
            clearTimeout(mytimer); 
         }, 320);

     };
     //**************************************************************
     var calcularmedidas=function(options){
         console.log("estoy dentro de calcular medidas");
         var self=this;
         var i,j,parteDecimal;
         self.sizes={};
         self.slides=[];
         self.pages=[];
         self.index=0;
         self.altura=$(self.config.containerComponent+" "+self.config.items).height();
         self.anchura=$(self.config.containerComponent+" "+self.config.items).width();
         self.cntx=Math.floor(self.anchura/self.width);
         self.cnty=Math.floor(self.altura/self.height);
         //console.log(cntx);
         self.cntnum=self.cntx*self.cnty;
         
         //*********************************
         if (options.data){
            self.data=options.data;
            self.numslide=Math.round(options.data.length/self.cntnum);
            //solo hay una pagina
             self.resto=options.data.length % self.cntnum;
             parteDecimal=(options.data.length/self.cntnum)-Math.floor((options.data.length/self.cntnum));
             console.log("cntnum:"+self.cntnum);
             console.log("data.length:"+options.data.length);
             console.log("data.length/cntnum:"+(options.data.length/self.cntnum));
             console.log("parteDecimal:"+parteDecimal);
             console.log("numslide:"+self.numslide);
             console.log("resto:"+self.resto);
             if (self.resto>0 && parteDecimal<0.5){
                  self.numslide=self.numslide+1;
             }
            /* 
            if (numslide==0){
               numslide=1;
            }else{
                  resto=options.data.length % cntnum;
                  if (resto>0){
                      numslide=numslide+1;
                  }
                //numslide+=1;
            }
            */
            //resto=options.data.length % cntnum;
            //console.log(resto);
            for( i=0;i<=self.numslide-1;++i){
                self.pages.push({slides:[]});
                
                for(j=1;j<=self.cntnum;++j){
                   if (self.index<=self.data.length-1){
                         self.pages[i].slides.push(self.data[self.index]);
                      self.index++;
                   }   
                }
            }
            //console.dir(slides); 
         }
         //******************************************
         self.sizes={
            anchura:self.anchura,
            altura:self.altura,
            width:self.width,
            height:self.height, 
            cntx:self.cntx,
            cnty:self.cnty,
            cntnum:self.cntnum,
            numslide:self.numslide,
            pages:self.pages
         };
         //console.dir(sizes);
     };
     //********************************************************************************
      var calcularslides=function(){
        var self=this;
          
        //ahora es cuando tenemos que calcular maxwidth, justo en este punto
         //console.dir( $(this.config.container+" "+this.config.items));
         self.maxwidth= $(self.config.containerComponent+" "+self.config.items).find("li").width();
         console.log(self.maxwidth);
       
        
         self.cntli=$(self.config.containerComponent+" "+self.config.items).find("li").length;
         self.alturali=$(self.config.containerComponent+" "+self.config.items).find("li").height();
         console.log("alturali:"+self.alturali);
         self.delta=100/self.cntli;
         self.ii=0;
         $(self.config.containerComponent+" "+self.config.items+" ul").css({visibility:"hidden"});
         $(self.config.containerComponent+" "+self.config.items).find("ul").css({width:(self.cntli*100)+"%"});
         $(self.config.containerComponent+" "+self.config.items).find("li").css({width:(100/self.cntli)+"%"});
         
         self.anchuraparcial=self.sizes.cntx*(self.width+2);
         self.alturaparcial=self.sizes.cnty*(self.height+2);
        
              if (self.maxwidth>0){
                   //if (anchuraparcial>maxwidth){
                   // anchuraparcial=maxwidth;
                  // }
              }else{
                   self.anchuraparcial=Math.max(self.anchuraparcial,self.maxwidth);
              }
             
         if (self.alturaparcial>self.alturali){
             self.alturaparcial=self.alturali;
         }
           console.log("anhuraparcial:"+self.anchuraparcial);
           console.log("alturaparcial:"+self.alturaparcial);
         $(self.config.containerComponent+" "+self.config.items+" "+"li"+" "+".list-grp-buttons").css({width:self.anchuraparcial+"px"});
         // $(this.config.container+" "+this.config.items+" "+"li"+" "+".list-grp-buttons").css({"margin-top":(-alturaparcial/2)+"px",top:"50%"});
         //$(this.config.container+" "+this.config.items+" "+"li"+" "+".list-grp-buttons").css({"top":(alturali/2)+"px"});
         // $(this.config.container+" "+this.config.items+" "+"li"+" "+".list-grp-buttons").css({"margin-top":(-alturaparcial/2)+"px"});
        $(self.config.containerComponent+" "+self.config.items+" "+"li"+" "+".list-grp-buttons").css({height:self.alturaparcial+"px"});
         
      };
      //*********************************************************************
      var avance=function(){
          var self=this;
          self.ii=self.ii-1;  
            if ((self.ii-1>=0)){
                $(self.config.containerComponent+" "+self.config.btnright).css({visibility:"visible"});
            }else{
                $(self.config.containerComponent+" "+self.config.btnleft).css({visibility:"hidden"});
                 $(self.config.containerComponent+" "+self.config.btnright).css({visibility:"visible"});
                self.ii=0;
            }
            $(self.config.containerComponent+" "+self.config.items+" ul").css({transform:"translateX("+self.ii*(-self.delta)+"%)"});
            //$(container+" "+items+" ul").find("li").eq(ii).css({height:altura});
            //currentSelector(ii);
      };
      var atras=function(){
          var self=this;
          self.ii=self.ii+1;
            if (self.ii<self.cntli-1){
                $(self.config.containerComponent+" "+self.config.btnleft).css({visibility:"visible"});
            }else{
                $(self.config.containerComponent+" "+self.config.btnright).css({visibility:"hidden"});
                 $(self.config.containerComponent+" "+self.config.btnleft).css({visibility:"visible"});
                self.ii=self.cntli-1;
            }
            $(self.config.containerComponent+" "+self.config.items+" ul").css({transform:"translateX("+self.ii*(-self.delta)+"%)"}); 
            //$(container+" "+items+" ul").find("li").eq(ii).css({height:altura});
            //currentSelector(ii);  
      };
      //**********************************************************************************
      var debounceScroll=function(){
          var self=this;
            var rtime;
            var timeout=false;
            var delta=300;
            var mytimer;
            function resizeEnd(){
              if (new Date()-rtime<delta){
                mytimer=setTimeout(resizeEnd,delta);
              } else {
                timeout=false;
              
                //calcularmedidas.apply(self,[self.options]);
                $(".wrapper.root .content .slide-container .slide-items").empty();
                //behaviors.destroyEventsSlidePanel({ });
                //calcularslides.apply(self,[]);
                var mytimer1;
                mytimer1=setTimeout(function() {
                     self.render(self.options.data,"resize");
                     clearTimeout(mytimer1);
                }, 100);
               
                  clearTimeout(mytimer);
              }
            }
            $(window).on("resize",function(evt){
                //console.log("estoy dentro de resize");
                rtime=new Date();
                if (timeout===false){
                    timeout=true;
                    mytimer=setTimeout(resizeEnd,delta);
                }
                
            });
      };

})(this.components=this.components||{},jQuery);