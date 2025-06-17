let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

let currenTime = new Date();

hrs.innerHTML = currenTime.getHours;
min.innerHTML = currenTime.getMinutes;
sec.innerHTML = currenTime.getSeconds;

setInterval(()=>{
    let currenTime = new Date();


hrs.innerHTML = (currenTime.getHours()<10?"0":"")+currenTime.getHours();
min.innerHTML =  (currenTime.getMinutes()<10?"0":"")+currenTime.getMinutes();
sec.innerHTML =  (currenTime.getSeconds()<10?"0":"")+currenTime.getSeconds();
},1000)