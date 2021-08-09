



// setInterval(()=>{
//     let date1 = new Date(1999, 8, 12, 12);
//     let date2 = new Date();
//     let currentYear = date2.getFullYear();
//     // var diffDays = Math.round(Math.abs((date1.getTime() - date2.getTime())/(oneDay)));
//     let age = Math.abs(currentYear - 1999);  
//     // let displayDate = date2 - date1;

//     let btn=document.querySelector('.btn');
//     btn.innerHTML= age;

// }

// setInterval(()=>{
//     let d=new Date()
//     let btn=document.querySelector('.btn')
//     btn.innerHTML=`${d.getHours()} : ${d.getMinutes()}: ${d.getSeconds()}: ${d.getMilliseconds()}`
// },1)



setInterval(()=>{
    let date1 = new Date(1999, 8, 12]);
    let date2 = new Date();
    let currentYear = date2.getFullYear();
    console.log(currentYear);
    let currentMonth = date2.getMonth();
    let age = Math.abs(currentYear - 1999);
    let month =  Math.abs(((age -1)*12) + currentMonth);
    let day = Math.abs(month*30);
    let btn=document.querySelector('.btn');
    btn.innerHTML=`${age + "Year"} ${month + "Month"}  ${day + "Days" } ${date2.getHours()} : ${date2.getMinutes()}: ${date2.getSeconds()}: ${date2.getMilliseconds()} `
},1)