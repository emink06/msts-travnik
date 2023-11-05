const scrollContainer = document.querySelector(".galerija");
const leftBtn = document.getElementById("leftBtn");
const rightBtn = document.getElementById("rightBtn");

scrollContainer.addEventListener("wheel", (event) => {
    console.log(window.innerWidth);
    if(window.innerWidth > 650){
    event.preventDefault();
    scrollContainer.scrollLeft += event.deltaY * 4;
}});

function goLeft(){
    scrollContainer.scrollLeft += scrollContainer.clientWidth + 20;
};

function goRight(){
    scrollContainer.scrollLeft -= scrollContainer.clientWidth + 20;
};