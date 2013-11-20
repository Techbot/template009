    gf={};  
  
    
    gf.setFrame = function(divId,animation)
    {
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
       $("#"+divId).css("backgroundImage","url('" + animation.url + "')");
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
                        animation.currentFrame %= animation.numberofFrame;
                        gf.setFrame(divId,animation);
                    }
           },animation.rate);
       }
   }

    gf.addSprite = function(parentId,divId,options)
    {
        var options = $.extend({
            x: 0,
            y:0,
            width:64,
            height:64
        },options);
        $("#" + parentId).append("<div id='" + divId + "' style='position:absolute; left:" + options.x + "px; top: " +options.y + "px; width: " +options.width + "px ; height: " + options.height + "px'></div>");
    }
   
    gf.x = function(divId,position)
    {
        if (position) 
        {
            $("#" + divId).css("left",position);
        }else
        {
            return parseInt($("#" + divId).css("left"));
        
        }
    }
    
    gf.y = function(divId,position)
    {
        if (position) 
        {
            $("#" + divId).css("top",position);
        }else
        {
            return parseInt($("#" + divId).css("top"));
        
        }
    }
    
    gf.imagesToPreload = [];
    
    gf.addImage = function(url)
    {
        if ($.inArray(url,gf.imagesToPreload) < 0)
        {
        gf.imagesToPreload.push();
        }
    }
    
    gf.startPreloading = function(endCallback, progressCallback)
    {
        var images = [];
        var total = gf.imagesToPreload.length;
        
        for (var i = 0;i < total; i++)
        {
            var image = new Image();
            images.push(image);
            image.src = gf.imagesToPreload[i];
        }
        
        var preloadingPoller = setInterval(function()
        {
            var counter     = 0;
            var total       = gf.imagesToPreload.length;
            for (vari=0;i<total;i++)
            {
                if (images[i].complete)
                {
                    counter++;
                }
            }
            if (counter==total)
            {
                clearInterval(preloadingPoller);
                endCallback();
            }else{
               if (progressCallback)
                {
                    count++;
                    progressCallback((count / total) *100);
                }
            }
        },100);
    };
    
    gf.animation = function(options)
    {
        var defaultValues = {
        url:false,
        width : 64,
        numberOfFrames:1,
        currentFrame :0,
        rate:30
        };
        $.extend(this,defaultValues,options);
        if (this.url)
        {
            gf.addImage(this.url);
        }
    }
    
    
    
    
