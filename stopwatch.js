var hr=0;
var min=0;
var sec=0;
var count=0;

var timer=false;


function start(){
    timer=true;
    stopwatch();

}
function stop(){
    timer=false;

}
function reset(){
    timer=false;
    document.querySelector(".count").textContent="00";
    document.querySelector(".sec").textContent="00";
    document.querySelector(".min").textContent="00";
    document.querySelector(".hr").textContent="00";
    hr=0;
    min=0;
    sec=0;
    count=0;


}
function stopwatch(){
    if(timer==true){
        count++;
        if(count==99){
            sec++;
            count=0;
            
        }
        if(sec==59){
            
            sec=0;
            min++;
        }
        if(min==59){
            
            min=0;
            
            hr++;

        }
        var countString=count;
        var minString=min;
        var secString=sec;
        var hrString=hr;
        if(hr<10){
            hrString="0"+hrString;
        }
        if(min<10){
            minString="0"+minString;
        }
        if(sec<10){
            secString="0"+secString;
        }
        if(count<10){
            countString="0"+countString;
        }
        document.querySelector(".hr").textContent=hrString;
        document.querySelector(".min").textContent=minString;
        document.querySelector(".sec").textContent=secString;
        document.querySelector(".count").textContent=countString;
        
      
        
        
        setTimeout("stopwatch()",10);
    }

}