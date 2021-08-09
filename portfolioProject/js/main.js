

let topContent = document.querySelector(".main-content p");
let topContentName = document.querySelector(".main-content h1");


function mySlide(){
    setTimeout(()=>{
        // topContentName.style.top='500px'
        topContentName.style.opacity='1'
       
    },800)
    
    setTimeout(()=>{
        topContent.style.opacity='1'
       
    },400)
}



window.addEventListener("scroll" , () => {
    let stickyHeader = document.querySelector("header");
    console.log(stickyHeader);
    stickyHeader.classList.toggle("sticky", window.scrollY >350);
});




let aboutImg=document.querySelector('.about-grid img');
let aboutContent=document.querySelector('.about-content');

// let header=document.querySelector('.slide h1')
// let desc=document.querySelector('.slide p')

// window.addEventListener("scroll" , () => {
//     setTimeout(()=>{
//         aboutImg.style.bottom ='200px'
//     },3000)

//     setTimeout(()=>{
//         aboutContent.style.top ='250px'
//     },3000)
    
// });

