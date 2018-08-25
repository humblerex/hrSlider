/*
****** hrSlider ******
 v1.0.0
 Author: HumbleRex
 Author URL: https://github.com/humblerex
*/

jQuery.fn.hrSlider = function(options){
    options.width = options.width == undefined? "100%":options.width+"px";
    options.height = options.height == undefined? "450px":options.height+"px";
    options.duration = options.duration == undefined? 2:options.duration;
   var numImages = $(this).find("ul").find("li").length;
   var hrs = $(this);   
   var ul =  $(this).find("ul");
   var li = ul.find("li").css("float","left");  
   tSlides = li.length;
   hrs.css({"position":"relative","width":options.width,"height":options.height,"overflow":"hidden"});
   ul.css({"width":numImages*100+"%","height":"100%","position":"absolute","top":"0px","left":"0px"});
   li.css({"width":hrs.width(),"float":"left","height":"100%"});
   li.find("img").css({"width":"100%","height":"100%"});
   var p = $("<button id='prev'>");var n = $("<button id='next'>");
   hrs.append(n);
   hrs.prepend(p);
   $(this).find("#next").css({"position":"absolute","z-index":"1","top":"0","bottom":"0","right":"0","left":"auto","opacity":"0","cursor":"pointer","width":"5%","border":"none","outline":"none"}) 
    .mouseover(function(){ $(this).css({"background":"linear-gradient(to right,rgba(0,0,0,0) 0,rgba(0,0,0,.5) 100%)","opacity":"0.9"});
    }).mouseout(function(){ $(this).css({"opacity":"0"});
    });
   $(this).find("#prev").css({"position":"absolute","z-index":"1","top":"0","bottom":"0","left":"0","right":"auto","opacity":"0","cursor":"pointer","width":"5%","border":"none","outline":"none"})
   .mouseover(function(){ $(this).css({"background":"linear-gradient(to left,rgba(0,0,0,0) 0,rgba(0,0,0,.5) 100%)","opacity":"0.9"});
   }).mouseout(function(){ $(this).css({"opacity":"0"});
   });
   
   switch(options.mode){
       case "fade": fadeSlides(li,options.duration);
       break;
       case "slide": 
        new slider(this,options);
       break;
   }
   
};


var slider = function(ele,options){    
    this.ele = ele;
    this.ul = ele.find("ul");
    this.li = this.ul.find("li");
    this.tSlides = this.li.length;
    this.count = 0;
    this.options = options;

    this.slideSlides = function(){
     
        var self = this;
        var sl = setInterval(
           function(){self.count++;
            if(self.count >= self.tSlides){
                self.count=0;
            }
            self.ul.animate({left:self.count*(-100)+"%"},2000);  
        },self.options.duration*1000+2000);
    this.count = self.count;
    
    var btn = $(this.ele).find("button");
 
    btn.click(function(e){
     clearInterval(sl);
     self.count += e.target.id === "prev" ? -1:1;
    
     self.count = self.count>=self.tSlides?0:self.count<0?self.tSlides-1:self.count;
     self.ul.animate({left:self.count*(-100)+"%"},500);
     sl =  setInterval(function(){
       
        self.count++;
        if(self.count >= self.tSlides){
            self.count=0;
        }
        self.ul.animate({left:self.count*(-100)+"%"},2000);
        }   ,self.options.duration*1000+2000);
        });
    };

this.slideSlides();

};