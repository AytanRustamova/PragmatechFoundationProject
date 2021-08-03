function clickImage1(){
    document.querySelector("#img1").src = "img/img2.jpg";
}


function clickImage2(){
    document.querySelector("#img1").src = "img/img3.jpg";
}

function clickImage3(){
    document.querySelector("#img1").src = "img/img4.jpg";
}

function clickImage4(){
    document.querySelector("#img1").src = "img/img5.jpg";
}





var i = 0;
var images = ["img/img1.jpg", "img/img2.jpg", "img/img3.jpg", "img/img4.jpg"];

function mySlide(param)
{
    if(param === 'next'){
        i++;
        if(i === images.length){ 
            i = images.length - 1;
        }; 
        console.log("salam next necesen");
       
    }else{
        i--;
        if(i < 0){ 
            i = 0;
        }
    }
    
    document.getElementById('slide').src = images[i];
}


