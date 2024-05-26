
setInterval(() => {
  let date = new Date();

  let gethour = date.getHours();
  let getmin = date.getMinutes();
  let getsec = date.getSeconds();
  
  let hour = document.querySelector(`.hour`)
  let min = document.querySelector(`.min`)
  let sec = document.querySelector(`.sec`)
  let ampm = document.querySelector(`.ampm`)
  

if(gethour < 12){
let finaltime = gethour - 12 ;
hour.innerHTML = finaltime ;
}
else{
  let finaltime = gethour;
  hour.innerHTML = finaltime;
 
}


 
  min.innerHTML = getmin;
  sec.innerHTML = getsec;

  
if( gethour > 12 ){
ampm.innerHTML = "PM"
}
else{
  ampm.innerHTML = "AM"
}
 
  
}, );
