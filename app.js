let headingElementh = document.querySelector(".soat");


const timenow = setInterval(() => {
    const dateNow = new Date();
    headingElementh.textContent = dateNow.getHours();
})

let headingElementm = document.querySelector(".minut");

const timenoww = setInterval(() => {
    const dateNow = new Date();
    headingElementm.textContent = dateNow.getMinutes();
})

let headingElements = document.querySelector(".sikund");


const timenowww = setInterval(() => {
    const dateNow = new Date();
    headingElements.textContent = dateNow.getSeconds();
})