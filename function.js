const hamburger =document.getElementById("btn");
const close =document.getElementById("close")
const bar = document.querySelector(".nav-bar");
const connect = document.querySelectorAll(".drop");

hamburger.addEventListener("click",()=>{
    close.style.display = "block";
    hamburger.style.display = "none";
    bar.style.display= "block"
})

close.addEventListener("click",()=>{
    close.style.display = "none";
    hamburger.style.display = "block";
    bar.style.display= "none"
})


         connect.forEach(drop => {
        drop.addEventListener("click", () =>{
            drop.classList.toggle("active");
        });
         } )

 