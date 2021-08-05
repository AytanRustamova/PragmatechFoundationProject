

let date=new Date()
let seconds = date.getSeconds();
seconds = 0;

setInterval(()=>{
    
  
    // console.log(seconds);
    seconds+=6
    let firstLine=document.querySelector('.firstLine');
    firstLine.style.transform = 'rotate(' + seconds + 'deg)'; 
},1000)

setInterval(()=>{
    
  
    // console.log(seconds);
    seconds+=6
    let firstLine=document.querySelector('.firstLine');
    firstLine.style.transform = 'rotate(' + seconds + 'deg)'; 
},1000)

setInterval(()=>{
    
  
    // console.log(seconds);
    seconds+=6
    let firstLine=document.querySelector('.firstLine');
    firstLine.style.transform = 'rotate(' + seconds + 'deg)'; 
},1000)


