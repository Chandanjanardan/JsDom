// const p=document.querySelector(".messages").innerHTML;
// console.log(p)

// How to get parent nodes

// const heading=document.querySelector(".heading");
// const parent =heading.parentNode;
// console.log(parent)

// childer node

// const parent =document.querySelector(".parent");
// console.log(parent.childNodes)

// next element sibling

// const heading=document.querySelector(".heading");
// const sibling=heading.nextElementSibling;
// console.log(sibling)

// previous element sibling
// const subheading=document.querySelector("h3");
// const previousSib=subheading.previousElementSibling.innerHTML;
// console.log(previousSib)

// manupulation 
// const heading=document.querySelector(".heading");
// heading.innerHTML="MERN is Awosome";
// heading.style.color="blue";
// heading.style.fontSize="100px";
// heading.classList.add("second")

// create elements

const heading=document.createElement("h1");
heading.innerHTML="JS is awesome again";
const parent=document.querySelector(".parent");
parent.appendChild(heading)
console.log(heading)
 