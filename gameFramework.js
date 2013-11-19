$(function(){
    
    $("#startButton").click(function() {
      
        $("#startButton").remove();
        $("#mygame").append("<div id='sprite1'>");
        $("#sprite1").css("backgroundImage","url(spritesheet1.png)");
        $("#sprite1").css("width","84");
        $("#sprite1").css("height","84");
        
    });
   
    gameFramework={};
    
      gf={};  
      
      
    gf.animation = function(options){
     var defaultValues= {
     url:false,
     width:64,
     numberOfFrames:1,
     currentFrame:0,
     rate:30
     };
     $.extend(this,defaultValues,options);
     }
    
    var firstAnim = new gameFramework.animation({
    url: "spritesheet1.png",
    numberofFrames:4,
    rate:60
    });
    
    
    
    
    divID = "sprite1";
    
    gf.setFrame = function(divId,animation){
    $("#" + divID).css("backgroundPosition", " " + animation.currentFrame * animation.width + "px 0px");
    }
    
   gf.animationHandles={};
   
   
   gf.setAnimation = function(divId,animation,loop)
   {
       if (gf.animationHandles[divId])
       {
       clearInterval(gf.animationHandles[divId]);
       }
       if (animation.url)
       {
       $("#"+divId).css(backgroundImage","url('"+animation.url+"')");
       }
       if(animation.numberOfFrame>1)
       {
           gf.animationHandles[divId] = setInterval(function()
           {
                animation.currentFrame++;
               if(!loop&&currentFrame > animation.numberofFrame)
               {
                   clearInterval(gf.animationHandles[divId]);
                   gf.animationHandles[divId]=false;
               }else{
                        animation.currentFrame % = animation.numberofFrame;
                        gf.setFrame(divId,animation);
                    }
           },animation.rate;
       }
   }
  
   
    gf.addSprite = function(parentId,divId,optiuons)
    {
        var options = $.extend({
            x: 0,
            y:0,
            width:64,
            height:64
        },options);
        $("#" + parentId.append("divid-'" + divId + "' style='position:absolute; left:" + options.y + "px;width:"options.width+"px ;height: " + options.height + "px'></div?");
    }
        
   

    
    
    
});
