const slidercontainerEl = document.querySelector(".slider-container");
// console.log(slidercontainerEl)

const imagecontainerEl = document.querySelector(".image-container");
// console.log(imagecontainerEl)

const prevEl = document.querySelector(".prev");
// console.log(prevEl)


const nextEl = document.querySelector(".next");
// console.log(nextEl);

const imgEl = document.querySelectorAll("img")
// console.log(imgEl)


let currertimg = 1;

nextEl.addEventListener("click", () => {
    currertimg++
    updateimg();
    clearTimeout(timeout);

});
prevEl.addEventListener("click", () => {
    currertimg--
    updateimg();
    clearTimeout(timeout);

});

updateimg();
function updateimg() {
    if (currertimg > imgEl.length) {
        currertimg = 1
    }
    else if (currertimg < 1) {
        currertimg = imgEl.length;
    }
    imagecontainerEl.style.transform = `translateX( -${(currertimg - 1) * 500}px)`;

    timeout = setTimeout(() => {
        currertimg++;
        updateimg();
    }, 3000);

};