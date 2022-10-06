const likeBtn = document.getElementById("saveBtn");
const rejectBtn = document.getElementById("rejectBtn")
const dispDiv = document.getElementById("displayDiv")
const nameText = document.getElementById("name");
const description = document.getElementById("descriptionDiv");
const imgInsert = document.getElementById("contentContainer")
const nameImg = document.getElementById("name-imgDiv")
const description1 = document.getElementById("description1")
const numMatches = document.getElementById("numMatches")
const form = document.getElementById("enterEmail")
const savedPets = document.getElementById("likeBtn")


let arrayCats = []
let emailCatsObj = {}
let likedCats = []
let savedCats = []

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const emailValue = e.target.email.value;

    emailCatsObj = {}
    emailCatsObj.email = emailValue
    // emailCatsObj.cats = likedCats
    console.log(emailCatsObj)

    alert("Email registered")


})

savedPets.addEventListener("click", () => {
    // e.preventDefault()
    emailCatsObj.cats = likedCats
    console.log(emailCatsObj)
    savedCats.push(emailCatsObj)
    // console.log(savedCats)
    sendData(savedCats)
})


let index = 0
let savedArr = []
const fetchData = async () => {
    const response = await fetch(`http://localhost:3000/tinder`)
    const data = await response.json();
    return data;
}

const breakEl = (element) => {
    const br = document.createElement("br")
    element.appendChild(br)
}

const newDiv = (value, index, key) => {
    const div = document.createElement("div")

    div.setAttribute("id", `${key}${index}`)
    div.className = "description"
    div.textContent = `${key}: ${value}`
    // description1.appendChild(br)
    // description1.appendChild(br)
    breakEl(description1)

    description1.appendChild(div)
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
    numMatches.textContent = `${data.length} matches!`

    let cardContent = data[index];
    if (data.length == index || index > data.length) {
        deleteDiv(dispDiv)
        const div1 = document.createElement("div");
        div1.className = "noMore";
        div1.textContent = "NO MORE CATS TO SEE"
        dispDiv.appendChild(div1)
    } else {
        nameText.textContent = cardContent["name"]

        newDiv(cardContent["age"], index, "Age")
        newDiv(cardContent["gender"], index, "Gender")
        newDiv(cardContent["color"], index, "Colour")
        newDiv(cardContent["favFood"], index, "Favourite Food")
        newDiv(cardContent["breed"], index, "Breed")
        insertImg(cardContent["url"])

    }
}

displayData(index);

const sendData = async (array) => {

    const options = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(array)
    }

    try {
        const response = await fetch("http://localhost:3000/saved", options)
        if(response.status == 200) {
            // alert("Pet Saved");
            // location.href = "index.html"
        }
    } catch (error) {
        console.log("error")
    }
}



function sleep(ms) {
    return new Promise(
        resolve => setTimeout(resolve, ms)
    );
}

const moveRight = () => {
    gsap.to(dispDiv, {rotation: 90, y: 2000, x: 2500, duration: 1})
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
    data = await fetchData();
    // console.log(emailArr)
    moveRight();
    await sleep(400)
    deleteDiv(description1);
    removeImg()
    farLeft();
    await sleep(400)
    let liked = data[index]
    // console.log(liked)
    likedCats.push(liked)

    // liked.email = emailArr[0]
    // savedArr.push(liked);
    // console.log(savedArr)
    // sendData(liked)
    index ++
    displayData(index)
    returnPosition();
})

rejectBtn.addEventListener("click", async () => {
    moveLeft()
    deleteDiv(description1);
    removeImg();
    await sleep(800)
    index ++
    displayData(index);
    returnPosition();
})



// const savedCats = [
//    {
//         email: "asdf@gmail.com",
//         cats: [
//             {
//                 name: "Fluffy",
//                 gender: "Female",
//                 id: 0,
//             },
//             {
//                 name: "Garfield",
//                 gender: "Male",
//                 id: 1,
//             }
//         ]
//     },
//     {
//         email: "asdf@gmail.com",
//         cats: [
//             {
//                 name: "Fluffy",
//                 gender: "Female",
//                 id: 0,
//             },
//             {
//                 name: "Garfield",
//                 gender: "Male",
//                 id: 1,
//             }
//         ]
//     },
// ];