const form = document.getElementById("enterEmail")
const catNames = document.getElementsByClassName('cat-name');
const catImg = document.getElementsByClassName('cat-img');
const catGender = document.getElementsByClassName('gender');
const catAge = document.getElementsByClassName('age');
const catColor = document.getElementsByClassName('color');
const catFavFood = document.getElementsByClassName('favFood');
const catBreed = document.getElementsByClassName('cat-breed');
const body = document.getElementsByTagName("body")
const catsContainer = document.getElementById("cats-container")
const emailText = document.getElementById("email")
let emailArr = []

catsContainer.style.display = "none"

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const emailValue = e.target.email.value;
    emailArr = []
    emailArr.push(emailValue);
    console.log(emailArr)
    catsContainer.style.display = "grid"
    displayCatsData()
    gsap.from(".cat-box", {
        duration: 2,
        scale: 0.5, 
        opacity: 0, 
        delay: 0.5, 
        stagger: 0.2,
        ease: "elastic", 
        force3D: true
      });
})

async function getCatsData() {

    const response = await fetch('http://localhost:3000/saved');
    const savedData = await response.json();
    return savedData;
    // let email = savedData[0][0]["email"]
    // let savedCats = savedData[0][0]["cats"]
    // console.log(email)
    // console.log(savedCats)
    // for (saved in savedData) {
    //     if (saved[0][0]["email"] == emailArr[0]) {
    //         let savedCats = saved[0][0]["cats"];
    //         return savedCats;
    //     }

    // }
    
};

// getCatsData()
const clearScreen = () => {
    for(let i=0; i<9; i++) {
        catNames[i].innerHTML = ""
        catImg[i].src = ""
        catGender[i].innerHTML = ""
        catAge[i].innerHTML = ""
        catColor[i].innerHTML = ""
        catFavFood[i].innerHTML = ""
        catBreed[i].innerHTML = ""
    }
}

async function displayCatsData() {
    const savedData = await getCatsData();
    console.log(savedData)
    clearScreen();
    for(let j = 0; j<savedData.length; j++) {
        console.log(savedData[j][0]["email"])
        if (savedData[j][0]["email"] == emailArr[0]) {
            let savedCats = savedData[j][0]["cats"];
            console.log(savedCats)
                for (let i = 0; i < savedCats.length; i++) {
                    catNames[i].innerHTML = savedCats[i]['name'];
                    catImg[i].src = savedCats[i]['url'];
                    catGender[i].innerHTML = 'Gender: ' + savedCats[i]['gender'];
                    catAge[i].innerHTML = 'Age: ' + savedCats[i]['age'];
                    catColor[i].innerHTML = 'Color: ' + savedCats[i]['color'];
                    catFavFood[i].innerHTML = 'Favourite food: ' + savedCats[i]['favFood'];
                    catBreed[i].innerHTML = 'Breed: ' + savedCats[i]['breed'];
                    console.log(i);    
            }
        }

    }
}

    // } else {
    //     let child = catsContainer.lastElementChild;
    //     while (child) {
    //         catsContainer.removeChild(child);
    //         child = catsContainer.lastElementChild
    //     }
    //     emailText.innerText = "Sorry, you do not have pets assigned to this email. Please take the quiz to see your matches and create saved pets."

    // }
    //console.log("catName", catName)


    // for (let i = 0; i < savedCats.length; i++) {
    //     //console.log(cat["name"])
    //     //console.log("hi", catNames[i])
    //     //console.log("hey", cats[i])
    //     catNames[i].innerHTML = savedCats[i]['name'];
    //     //document.appendChild(catName)
    //     //console.log(catImg);
    //     catImg[i].src = savedCats[i]['url'];
    //     catGender[i].innerHTML = 'Gender: ' + savedCats[i]['gender'];
    //     catAge[i].innerHTML = 'Age: ' + savedCats[i]['age'];
    //     catColor[i].innerHTML = 'Color: ' + savedCats[i]['color'];
    //     catFavFood[i].innerHTML = 'Favourite food: ' + savedCats[i]['favFood'];
    //     // console.log(catBreed[i]);
    //     // console.log(cats[i]['breed'])
    //     catBreed[i].innerHTML = 'Breed: ' + savedCats[i]['breed'];        
    // }



// displayCatsData();

// // Animation
// gsap.from(".cat-box", {
//     duration: 2,
//     scale: 0.5, 
//     opacity: 0, 
//     delay: 0.5, 
//     stagger: 0.2,
//     ease: "elastic", 
//     force3D: true
//   });

 