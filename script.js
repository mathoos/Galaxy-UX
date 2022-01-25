let click = document.getElementById("click");
let card = document.getElementById("card");

click.addEventListener("click", () =>{
    card.classList.add("dropdown");
    click.classList.add("rotate");
    card2.classList.remove("dropdown");
    card3.classList.remove("dropdown");
    click2.classList.remove("rotate");
    click3.classList.remove("rotate");
})

let click2 = document.getElementById("click2");
let card2 = document.getElementById("card2");

click2.addEventListener("click", () =>{
    card2.classList.add("dropdown");
    click2.classList.add("rotate");
    card.classList.remove("dropdown");
    card3.classList.remove("dropdown");
    click.classList.remove("rotate");
    click3.classList.remove("rotate");
})

let click3 = document.getElementById("click3");
let card3 = document.getElementById("card3");

click3.addEventListener("click", () =>{
    card3.classList.add("dropdown");
    click3.classList.add("rotate");
    card.classList.remove("dropdown");
    card2.classList.remove("dropdown");
    click.classList.remove("rotate");
    click2.classList.remove("rotate");
})





