const likeBtn = document.getElementById("saveDiv");
const rejectBtn = document.getElementById("rejectDiv")
const dispDiv = document.getElementById("displayDiv")
const nameText = document.getElementById("name");
const img = document.getElementById("img");

let index = 0
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9]


function sleep(ms) {
    return new Promise(
        resolve => setTimeout(resolve, ms)
    );
}

const moveRight = () => {
    gsap.to(dispDiv, {rotation: 90, y: 1000, x: 2500, duration: 1.5})
}

const moveLeft = () => {
    gsap.to(dispDiv, {rotation: -90, y: 1000, x: -2500, duration: 1.5})
}

const returnPosition = () => {
    gsap.to(dispDiv, {rotation: 0, y: 0, x: 0, duration: 1.5})
}

likeBtn.addEventListener("click", async () => {
    moveRight();
    await sleep(1000)

    if (array.length == index || index > array.length) {
        nameText.textContent = "You have ran out of cats"
    } else {
        nameText.textContent = array[index]
        img.textContent = "I moved to the right"
    }

    returnPosition();
    index ++
})

rejectBtn.addEventListener("click", async () => {
    moveLeft()
    await sleep(1000)

    if (array.length == index || index>array.length) {
        nameText.textContent = "You have ran out of cats"
    } else {
        nameText.textContent = array[index]
        img.textContent = "I moved to the left"
    }

    returnPosition();
    index ++
})