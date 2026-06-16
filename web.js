
const darkBtn = document.getElementById("darkBtn");

darkBtn.onclick = () => {

document.body.classList.toggle("dark");

}



// Contact Form

const form = document.querySelector("form");

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Message Sent Successfully!");

});



// Smooth Scroll

document.querySelectorAll("a").forEach(link=>{

link.addEventListener("click",(e)=>{

e.preventDefault();

const id = link.getAttribute("href");

document.querySelector(id).scrollIntoView({

behavior:"smooth"

})

})

})
