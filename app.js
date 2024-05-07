


let sec = 0;
let min = 0;
let hour=0;
let h1El = document.querySelectorAll("h1");
let watch=setInterval(time,1000)
function time(){
    h1El[0].innerHTML=`${hour}:${min}:${sec++}`
    if(sec===60){
     sec=0
     min++;
        }
      else if(min===60){
        min=0
        hour++;
      }
else if(hour===13)
  hour=1
}
        
    



