
    x=0;

    function move()
    {
        document.getElementById("bike").style.left=x;
        if(movingfwd)
        {
            x+=40;
        }
        else
        {
            if(x<=0)
           {
            stop();
           }
           else
           x-=40;
        }
    }
    function start()
    {
    movingfwd=true;
    z=setInterval("move()",110);
    }

    function stop()
    {
        clearInterval(z);
        clearInterval(y);
        clearInterval(r);
    }

    function restart()
    {
        x=0;
        start();
    }

    function dec()
    {
       y= setInterval("slow()",110);
    }

    function slow()
    {
        clearInterval(z);
        document.getElementById("bike").style.left=x;
        x+=10; 
    }


    function rev()
        {
          clearInterval(z);
          movingfwd=!movingfwd;
          r=setInterval(move,110);
        }
    
    function inc()
    {
        i=setInterval(fast,110);
    }

    function fast()
    {
        clearInterval(z);
        document.getElementById("bike").style.left=x;
        x+=60;  
    }
        
