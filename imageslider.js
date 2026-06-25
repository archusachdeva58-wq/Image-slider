let index=0;
function next(){
    index++;
    if(index>3){
      index=0;
    }
    document.querySelector(".images").style.transform=`translateX(${-index * 100}%)`;
}
function prev(){
    index--;
    if(index<0){
        index=3;
    }
   document.querySelector(".images").style.transform=`translateX(${-index * 100}%)`;    
}
function auto(){
   slider= setInterval(next,900);
}
function stop(){
    clearInterval(slider);
}