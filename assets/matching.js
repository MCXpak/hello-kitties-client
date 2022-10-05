const likeBtn = document.getElementById("paw2");
const rejectBtn = document.getElementById("paw1")
const dispDiv = document.getElementById("displayDiv")
const nameText = document.getElementById("name");
// const img = document.getElementById("img");
const description = document.getElementById("descriptionDiv");
const imgInsert = document.getElementById("name-imgDiv")

let index = 0
    
const fetchData = async () => {
    const response = await fetch(`http://localhost:3000/cats`)
    const data = await response.json();
    return data;
}


const newDiv = (value, index, key) => {
    const div = document.createElement("div")
    div.setAttribute("id", `${key}${index}`)
    div.className = "description"
    div.textContent = `${key}: ${value}`
    description.appendChild(div)
}

const deleteDiv = (element) => {
    var child = element.lastElementChild; 
    while (child) {
        element.removeChild(child);
        child = element.lastElementChild;
    }
}

const insertImg = (url) => {
    // let imgDiv = document.createElement("img");
    // imgDiv.src = url
    // imgDiv.className = "image"
    // imgInsert.appendChild(imgDiv)
    imgInsert.style.backgroundImage = `url(${url})`
}

const removeImg = () => {
    const image = document.querySelectorAll(".image")
    image.forEach(img => {
        img.remove();
    })
}

const displayData = async (index) => {
    const data = await fetchData();

    let cardContent = data[index];
    if (data.length == index || index > data.length) {
        deleteDiv(dispDiv)
        const div1 = document.createElement("div");
        div1.className = "noMore";
        div1.textContent = "NO MORE CATS"
        dispDiv.appendChild(div1)
    } else {
        nameText.textContent = cardContent["name"]
        newDiv(cardContent["age"], index, "Age")
        newDiv(cardContent["color"], index, "Colour")
        newDiv(cardContent["favFood"], index, "Favourite Food")
        newDiv(cardContent["breed"], index, "Breed")
        insertImg(cardContent["url"])

    }
}

displayData(index);


function sleep(ms) {
    return new Promise(
        resolve => setTimeout(resolve, ms)
    );
}

const moveRight = () => {
    gsap.to(dispDiv, {rotation: 90, y: 2000, x: 2500, duration: 1.5})
}

const moveLeft = () => {
    gsap.to(dispDiv, {rotation: -90, y: 2000, x: -2500, duration: 1.5})
}

const farLeft = () => {
    gsap.to(dispDiv, {rotation:-90, x:-4000, duration: 1.5})
}

const returnPosition = () => {
    gsap.to(dispDiv, {rotation: 0, y: 0, x: 0, duration: 1.5})
}

likeBtn.addEventListener("click", async () => {
    data = fetchData();
    moveRight();
    await sleep(500)
    deleteDiv(description);
    removeImg()
    farLeft();
    await sleep(500)
    index ++
    displayData(index);

    returnPosition();
})

rejectBtn.addEventListener("click", async () => {
    moveLeft()
    deleteDiv(description);
    removeImg();
    await sleep(1000)
    index ++
    displayData(index);

    returnPosition();
})